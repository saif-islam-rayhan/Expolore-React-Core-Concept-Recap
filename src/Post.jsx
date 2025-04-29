import "./Post.css"
export default function Post({post}){
    const {title,body, id,userId}=post;
    return (
        <div className="post">
            <h3>Title:{title}</h3>
            <p>User Id:{userId}</p>
            <p>Post Id:{id}</p>
            <p>{body}</p>
        </div>
    )
}