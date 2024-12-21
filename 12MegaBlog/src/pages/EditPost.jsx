import React,{useState,useEffect} from "react";
import {Container,Postcard} from "../components"
import { useNavigate ,useParams } from "react-router-dom";
import service from "../appwrite/config";

function EditPost(){
    const [post,setPosts] = useEffect(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            service.getPost(slud).then((post) =>{
                if(post){
                    setPosts(post)
                }
            })
        }
        else{
            navigate('/')
        }
        return post ? (
            <div className="py-4">
                <Container>
                    <PostForm post={post}/>
                </Container>
            </div>
        ):null
    }, [slug , navigate])
}

export default EditPost