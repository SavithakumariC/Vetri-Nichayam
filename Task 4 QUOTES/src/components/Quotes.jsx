import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Quotes() {

    const [quotes,setQuotes]= useState([])
    const fetchQuotes = async()=>{


            try{
            const response  = await axios.get("https://dummyjson.com/quotes/random/10")
            setQuotes(response.data)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
         fetchQuotes();
    },[])
    console.log(quotes)
  return (
    <div>
      {
        quotes.map((q,i)=>{
            return <div className='d-flex justify-content-between bg-primary-subtle px-5 flex-column'>
                <div className='p-1'>{q.quote}</div>
                <div className='align-self-end' >-{q.author}</div><hr/>
                </div>
        })
      }
      
    </div>
  )
}

export default Quotes
