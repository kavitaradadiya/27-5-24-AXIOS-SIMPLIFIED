import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
    const [data , setdata] = useState([])
    const [view , setview] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/posts").then((res)=>{
            setdata(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[data])

    const input_handler = (e) => {
        setview({...view, [e.target.name]: e.target.value})
    }

    const submit_handler = async () =>{
        await axios.post("http://localhost:3001/posts",view)
    }
  return (
    <>
        <h1>AXIOS GET API</h1>
      {
        data?.map((val_, ind_, arr_) => {
          return (
            <>
              <h2>{val_.title}</h2>
              <h2>{val_.author}</h2>
            </>
          )
        })
      }
      <h1>AXIOS POST API</h1>
      <input name='title' value={view.title} placeholder='Title'onChange={input_handler}></input><br></br>
      <input name='author' value={view.author} placeholder='Author'onChange={input_handler}></input><br></br>
      <button onClick={submit_handler}>ADD DATA</button>
    </>
  )
}
