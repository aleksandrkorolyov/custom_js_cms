const BACKEND_PATH = process.env.REACT_APP_BACKEND_PATH

const PostService = {
    getPostCount: function() {
        return(
            fetch(BACKEND_PATH + '/get_post_count')
        )
    },

    getAllPosts: function() {
        return(
            fetch(BACKEND_PATH + '/get_posts')
        )
    }
}

export default PostService;