import React, { useState, useEffect } from "react";
import UserService from "../../../services/UserService";
import User from "../../Users/User/User";
import './UserPagination.css'

const renderUsers = (users, token, isAdmin) => {
    return(
        <>
            {users.map((user, index) => <User key={index} value={user} token={token} isAdmin={isAdmin}/>)}
        </>
    )
}

const Pagination = (props) => {

    const [isAdmin,setIsAdmin] = useState();

    const {currentPage, maxPageLimit, minPageLimit, sortField} = props;
    const totalPages = props.response.totalPages;
    const users = props.response.user;
    const sortDirect = props.sortDirect;
    
    const token = props.jwt;

    const pages = [];
    for(let i=1 ; i<=totalPages; i++){
        pages.push(i);
    }

    const handlePrevClick = ()=>{
        props.onPrevClick();
    }

    const handleNextClick = ()=>{
        props.onNextClick();
    }

    const handlePageClick = (e)=>{
        props.onPageChange(Number(e.target.id));
    }

    const changeSortField = (field_name)=>{
        props.changeSortField(field_name);
    }

    const changeSortDirection = ()=>{
        props.changeSortDirection();
    }

    const handleSort = (event) => {
        changeSortField(event.target.id);
        changeSortDirection();
    }

    const pageNumbers = pages.map(page => {

        if(page <= maxPageLimit  && page > minPageLimit) {
            return(
        <li key={page} id={page} onClick={handlePageClick} 
            className={currentPage===page ? 'active' : null}>
            {page}
        </li>
            );
        }else{
            return null;
        }
    }
    );

        // page ellipses
        let pageIncrementEllipses = null;
        if(pages.length > maxPageLimit){
            pageIncrementEllipses = <li onClick={handleNextClick}>&hellip;</li>
        }
        let pageDecremenEllipses = null;
        if(minPageLimit >=1){
            pageDecremenEllipses = <li onClick={handlePrevClick}>&hellip;</li> 
        }

        UserService.getUserRole(token)
        .then(async response => { 
            const data = await response.json();
        setIsAdmin(data.isAdmin);
        })

    return(
        <div className="usersWrapper">
        <h2>Users</h2>
        <table className="btable-auto">
        <thead className="bg-slate-200">
            <tr>
                <th><a href="#" id="first_name" onClick={(e) => handleSort(e)}>First name</a>
                {sortField == 'first_name' && '(sorted)'}</th>
                <th><a href="#" id="last_name" onClick={(e) => handleSort(e)}>Last name</a>
                {sortField == 'last_name' && '(sorted)'}</th>
                <th><a href="#" id="email" onClick={(e) => handleSort(e)}>E-mail</a>
                {sortField == 'email' && '(sorted)'}</th>
                <th><a href="#" id="role" onClick={(e) => handleSort(e)}>Role</a>
                {sortField == 'role' && '(sorted)'}</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
            <tbody>
                {renderUsers(users, token, isAdmin)}
            </tbody>
        </table>

        <ul className="pageNumbers pt-4 bg-slate-200"> 
               <li>
                   <button onClick={handlePrevClick} disabled={currentPage === pages[0]}>Prev</button>
               </li>
               {pageDecremenEllipses}
                {pageNumbers}
               {pageIncrementEllipses}
                <li>
                   <button onClick={handleNextClick} disabled={currentPage === pages[pages.length-1]}>Next</button>
               </li>
        </ul>
    </div>
    )
}

export default Pagination