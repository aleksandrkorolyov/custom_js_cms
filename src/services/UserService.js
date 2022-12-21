const UserService = {
    getAllUsers: function() {
        return(
        fetch('http://localhost:4001/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Referrer-Policy': 'no-referrer'
            },
            }
        )
    )
    },
    getUser: function() {

    },
    changeUser: function() {

    },
    deleteUser: function() {

    }

}

export default UserService;