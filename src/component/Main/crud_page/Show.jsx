import { useEffect, useState } from "react";
import { axiosPostsCall } from "../../../utils/utils";
import { useParams } from "react-router";

export function Show(){
    let {id} = useParams();

    const uri = `http://localhost:3000/posts/${id}`;  
    const [post, setPost] = useState({})
   
    useEffect(() => {
        axiosPostsCall(uri,setPost); //perche con la arrow function non funziona?  
    }, []);

    console.log(post)
    
    return(
        post &&
        <div className="container">
            <div className="row text-center pt-5">
                <h1>{post.title}</h1>
                <div className="col pt-5">
                    <img src={post.image && id<=5 ? "http://localhost:3000/imgs/posts/"+post.image : post.image} alt="" />
                </div>
                <div className="col pt-5">
                    <p>{post.content}</p>
                </div>
            </div>     
        </div> 
    )
}