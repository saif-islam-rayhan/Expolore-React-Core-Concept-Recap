import Post from "./Post";
import { useEffect, useState } from "react"

export default function Posts(){
    const [posts,setpost]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res =>res.json())
        .then(data=>setpost(data));
    },[])
    return(
        <div>
            <h3>Post:{posts.length}</h3>
            {
                posts.map(post=> <Post post={post}></Post>)
            } 
        </div>
    )
}