import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import {Button , Input , Select , RTE} from "../index"
import service from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({post}){
    const {register , handleSubmit , watch , setValue , control , getValues} = useForm({
        defaultValues: {
            titles: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',

        },
    })

    const navigate = useNavigate()
    const userData = useSelector( state => state.user.userData)

    const submit = async(data) => {
        if(post){
            const file = data.image[0] ? service.uploadFile(data.image[0]) : null
            if(file){
                service.deleteFile(post.featuredImage)
            }
            const dbPost = await service.updatePost(post.$id ,{
                ...data,
                featuredImage: file? file.$id : undefined  
            })
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        }
        else{
            const file =  await  service.updateFile(data.image[0])

            if(file){
                const fileId  = fileId
                data.featuredImage = fileId 
                const dbPost = await service.createPost({
                    ...data,
                    userId: userData.$id,
                })
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }


    const slugTransform = useCallback((value) => {
        if(value && typeof value === 'string'){
            return value
            .trim() 
            .toLowerCase()
            .replace(/^[a-zA-Z\d\s]+/g, '-' )
            .replace(/\s/g, '-')
        }
        else{
            return ''
        }

        React.useEffect(() =>{ 
            const Subscription = watch((value ,{name}) => {
                if(name === 'title'){
                    setValue('slug', slugTransform(value.title,{shouldValidate:true} ))
                }
            })

            return () => {
                Subscription.unsubscribe()
            }
        }, [watch, slugTransform,setValue])
    })
    return(
        <div></div>
    )
}
export default PostForm