import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Axios_delete() {

    const [data , setdata] = useState([])
    const [view , setview] = useState({})

    useEffect(()=>{
        axios.get("http://localhost:3001/posts").then((res)=>{
            setdata(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[data])

    const delete_handler = async(id)=>{
      await  axios.delete(`http://localhost:3001/posts/${id}`).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    
  return (
    <>
        {
            data?.map((val_,ind_,arr_)=>{
                return(
                    <>
                    <h2>{val_.title}</h2>
                    <h2>{val_.author}</h2>
                    <button onClick={()=>{delete_handler(val_.id)}}>{val_.id}DELETE</button>
                    </>
                )
            })
        }
    </>
  )
}
