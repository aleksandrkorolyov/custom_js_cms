import React, { useEffect, useState } from "react";
import UserService from "../../services/UserService";
import Pagination from "../Pagination/UserPagination/UserPagination";

const Users = (token) => {
    //Unhardcode entities per page
    const pageNumberLimit = 10;
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [minPageLimit, setMinPageLimit] = useState(0);

    const [sortField, setSortField] = useState();
    const [sortDirect, setSortDirect] = useState(1);

    const [search, setSearch] = useState('');

    const jwt = token.token

    useEffect(() => {
        UserService.getUsersBatch(currentPage, pageNumberLimit, sortField, sortDirect)
           .then( async response => {
            const data = await response.json()
            setUsers(data);
            setLoading(false);
           })
    }, [currentPage, sortField, sortDirect]);

    useEffect(() => {
        if(search !== '') {

        const requestUsers = setTimeout(() => {

            setLoading(true);
            UserService.searchUser(search)
            .then( async response => {
                const data = await response.json()
                setUsers(data);
                setLoading(false);
            })
        }, 1000);

        return () => clearTimeout(requestUsers);
        
        } else {
            setLoading(true);
            UserService.getUsersBatch(currentPage, pageNumberLimit, sortField, sortDirect)
            .then( async response => {
                const data = await response.json()
                setUsers(data);
                setLoading(false);
            })
        }
    }, [search]);

    const changeSortDirection = () => {
        setSortDirect(Number(sortDirect) * -1)
    }

    const onPageChange = (pageNumber)=>{
        setCurrentPage(pageNumber);
      }
    
      const onPrevClick = ()=>{
          if((currentPage-1) % pageNumberLimit === 0){
              setMaxPageLimit(maxPageLimit - pageNumberLimit);
              setMinPageLimit(minPageLimit - pageNumberLimit);
          }
          setCurrentPage(prev=> prev-1);
       }
      
      const onNextClick = ()=>{
           if(currentPage+1 > maxPageLimit){
               setMaxPageLimit(maxPageLimit + pageNumberLimit);
               setMinPageLimit(minPageLimit + pageNumberLimit);
           }
           setCurrentPage(prev=>prev+1);
        }

    const paginationAttributes = {
        currentPage,
        maxPageLimit,
        minPageLimit,
        sortField,
        response: users,
        jwt,
    }

    return (
        <div className="pt-5">
             <div className="relative w-[560px]">
                <input type="text"
                className="border py-2 px-4 w-full h-[42px] mb-2"
                placeholder="Search by first name..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                />
            </div>
        {!loading ? <Pagination {...paginationAttributes}
                                sortDirect
                                onPrevClick={onPrevClick}
                                onNextClick={onNextClick}
                                onPageChange={onPageChange}
                                changeSortField={setSortField}
                                changeSortDirection={changeSortDirection}
        />
        : <div>Loading... </div>
        }
        
        </div>
    )
}

export default Users