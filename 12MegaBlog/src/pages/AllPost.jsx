import React,{useState,useEffect} from "react";
import service from "../appwrite/config";
import {Container , Postcard } from "../components"
import { use } from "react";
function AllPost(){
    const [post , setPosts] = useState([])
    
    service.getPosts([]).then((posts) => {
        setPosts(posts.documents)
    })
    return(
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {post.map((post) =>{
                        <div key={post.id} className="p-2 w-1/4">
                            <Postcard post={post}/>    
                        </div>
                    })}
                </div>
            </Container>
        </div>
    ) 
}