import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Axios_update() {

    const [data, setdata] = useState([])
    const [view, setview] = useState({})

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((res) => {
            setdata(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [data])


    const input_handler = (e) =>{
        setview({...view, [e.target.name]: e.target.value})
    }

    const submit_handler = async() =>{
        await axios.post("http://localhost:3001/posts",view)
    }

    const view_handler = (val) =>{
        setview(val)
    }

    const update_handler = () =>{
        axios.put(`http://localhost:3001/posts/${view.id}`,view).then((res)=>{
            console.log("data update",res)
        }).catch((err)=>{
            console.log("ERROR",err)
        })
    }
  return (
    <>

        
    <h1>AXIOS GET API</h1>
            {
                data?.map((val_, ind_, arr_) => {
                    return (
                        <>
                            <h1>{val_.title}</h1>
                            <h1>{val_.author}</h1>
                            <button onClick={()=>{view_handler(val_,ind_)}}>VIEW DATA</button>
                        </>
                    )
                })
            }
        <h1>AXIOS_UPDATE</h1>
        <input name='title' value={view.title} placeholder='Title' onChange={input_handler}></input>
        <input name='author' value={view.author} placeholder='Author' onChange={input_handler}></input>
        <button onClick={submit_handler}>Add data</button>
        <button onClick={update_handler}>update data</button>
    </>
  )
}
