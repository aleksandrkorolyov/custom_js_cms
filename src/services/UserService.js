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