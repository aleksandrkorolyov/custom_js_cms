import React, { useEffect, useState } from "react";
import UserService from "../../services/UserService";
import Pagination from "../Pagination/UserPagination/UserPagination";

const Users = () => {

    //Unhardcode entities per page
    const pageNumberLimit = 3;
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [minPageLimit, setMinPageLimit] = useState(0);

    useEffect(() => {
        UserService.getUsersBatch(currentPage, pageNumberLimit)
           .then( async response => {
            const data = await response.json()
            setUsers(data);
            setLoading(false);
           })
    }, [currentPage]);

    const onPageChange= (pageNumber)=>{
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
        response: users,
    }

    return (
        <>
        {!loading ? <Pagination {...paginationAttributes}
                                onPrevClick={onPrevClick}
                                onNextClick={onNextClick}
                                onPageChange={onPageChange}
        />
        : <div>Loading... </div>
        }
        
        </>
    )
}

export default Users