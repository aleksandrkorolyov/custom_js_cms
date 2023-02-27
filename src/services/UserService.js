const BACKEND_PATH = process.env.REACT_APP_BACKEND_PATH

const axios = require('axios');

const UserService = {
    createUser: function(creds) {

        return(
            fetch(BACKEND_PATH + '/user/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': creds.jwt
                },
                body: JSON.stringify(creds)
        })
        )
    },

    loginUser:  function(creds) {
        return(
              fetch(BACKEND_PATH + '/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(creds)
            })
        )
    },

    getAllUsers: function() {
        return(
        fetch(BACKEND_PATH + '/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Referrer-Policy': 'no-referrer'
            },
            }
        )
    )
    },
    searchUser: function(search_name) {
        return(
            fetch(BACKEND_PATH + `/user_search?search_name=` + search_name, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Referrer-Policy': 'no-referrer'
                },
              })
        )
    },
    getUsersBatch: async function(token, current_page, count, sort_field, sort_direct) {
        return (
            fetch(BACKEND_PATH + `/users_batch?current_page=${current_page}&count=${count}&sort_field=${sort_field}&sort_direct=${sort_direct}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token

                }})
        )
    },
    getUser: function(token, id) {
        return(
        fetch(BACKEND_PATH + `/user/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }}
        ))
    },
    getUserbyEmail: function(email) {
        return(
            fetch(BACKEND_PATH + `/search_user_by_mail?email=` + email, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }}
            )
        )
    },
    getUserRole: function(token) {
        return(
            fetch(BACKEND_PATH + `/get_user_role?token=${token}` ,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        )
    },
    changeUser: function(id, creds, jwt) {
        return(
        fetch(BACKEND_PATH + `/user/${id}/edit`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': jwt
                },
                body: JSON.stringify(creds)
            })
    )},
    deleteUser: function(user,token) {
        return(
        fetch(BACKEND_PATH + `/user/${user}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        })
    )}

}

export default UserService;