import React, { useState, useEffect } from "react";
import UserService from "../../../services/UserService";
import User from "../../Users/User/User";
import './UserPagination.css'

const renderUsers = (users) => {
    return(
        <>
            {users.map((user, index) => <User key={index} value={user}/>)}
        </>
    )
}

const Pagination = (props) => {

    const {currentPage, maxPageLimit, minPageLimit} = props;
    const totalPages = props.response.totalPages;
    const users = props.response.user;
    

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

    return(
        <div className="usersWrapper">
        <h2>Users</h2>
        <table className="btable-auto">
        <thead className="bg-slate-200">
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>E-mail</th>
                <th>Role</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
            <tbody>
                {renderUsers(users)}
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