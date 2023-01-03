const BACKEND_PATH = process.env.REACT_APP_BACKEND_PATH
const UserService = {
    createUser: function(creds) {

        return(
            fetch(BACKEND_PATH + '/user/add', {
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
    getUsersBatch: function(current_page, count, sort_field, sort_direct) {
        return (
            fetch(BACKEND_PATH + `/users_batch?current_page=${current_page}&count=${count}&sort_field=${sort_field}&sort_direct=${sort_direct}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }})
        )
    },
    getUser: function(id) {
        return(
        fetch(BACKEND_PATH + `/user/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }}
        ))

    },
    changeUser: function(id, creds) {
        return(
        fetch(BACKEND_PATH + `/user/${id}/edit`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(creds)
            })
    )},
    deleteUser: function(user) {
        return(
        fetch(BACKEND_PATH + `/user/${user}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    )}

}

export default UserService;