import { useEffect, useState } from "react";
import { axiosPostsCall } from "../../../utils/utils";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router";
import { DeleteButton } from "../../delete_button/DeleteButton";

export function Show(){
    let {id} = useParams();
    const uri = `http://localhost:3000/posts/${id}`;  
    const [post, setPost] = useState({})
    let next = parseInt(id)+1;
    let previous = parseInt(id)-1;
    const navigator = useNavigate();

    useEffect(() => {
        axiosPostsCall(uri,setPost); //perche con la arrow function non funziona?  
    }, [id]);//facciamo la chiamata al cambiamento dell'id (perche con post si rompe?)
    console.log(post)
    return(
        post &&
        <div className="container">
            <div className="row text-center pt-5">
                <div className="col">
                     <Link to={`/posts/${previous}`}>precedente</Link> {/*come fermare */}
                </div>
                <div className="col">
                    <Link to={`/posts/${next}`}>successivo</Link>
                </div>
                <h1>{post.title}</h1>
                <div className="col pt-5">
                    <img src={post.image && id<=5 ? "http://localhost:3000/imgs/posts/"+post.image : post.image} alt="" />
                </div>
                <div className="col pt-5">
                    <p>{post.content}</p>
                </div>
            </div>
            <div className="row">
                <div className="col text-star mt-5">
                    <DeleteButton id={id} callback={() => navigator("/posts")}/>
                </div>
                <div className="col text-end mt-5">
                    <button type="button" className="btn btn-success" onClick={() => navigator("/posts")}>torna indietro</button>
                </div>
            </div>    
        </div> 
    )
}