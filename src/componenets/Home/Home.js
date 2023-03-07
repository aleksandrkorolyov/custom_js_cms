import React, { useEffect, useState } from "react";
import PostService from "../../services/PostService";
import AppLayout from "../App/AppLayout";
import DataHandler from "../App/dataHandler";
import { useInterval } from "../App/useInterval";
import Post from "../Post/Post";


const Home = () => {

     const { handle } = DataHandler();

     const [posts, setPosts] = useState([]);
     const [postCount, setPostCount] = useState(0);


     useEffect(() => {
        PostService.getAllPosts()
        .then(async response => {
            const receivedPosts = await handle(response);
           setPosts(receivedPosts);
        })
     }, [])

    useInterval(() => {
    PostService.getPostCount()
    .then(async response => {
        const updatedPostCount = await handle(response)
        if(updatedPostCount > postCount) {
            setPostCount(updatedPostCount);
            PostService.getAllPosts()
            .then(async response => {
                const updatedPosts = await handle(response);
                setPosts(updatedPosts);
            })
        }
    })
        
      }, 3000)

    return (
        <AppLayout>
            <div className="flex items-center justify-center pt-8 w-96 flex-wrap mx-auto">
                {
                    posts.length ? 
                posts.map((post, index) => <Post key={post?._id} value={post} />)
                : 'Nothing here'
                } 
            </div>
        </AppLayout>
    )
}

export default Home