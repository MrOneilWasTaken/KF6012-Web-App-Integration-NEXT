import type { NextPage } from 'next'
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event'
import { useEffect, useState } from 'react'
import Paper from '../src/Paper.js'

const Papers: NextPage = () => {

  const API_URL = 'http://localhost:3000/api/papers'

  const [papers, setPapers] = useState([])
  const [isLoading, setLoading] = useState(false)

  async function fetchPapers() {
    const res = await fetch(API_URL)

    if(!res.ok){
      const message = { Message: "An error has occured fetching Paper API Data: ", Status: res.status}
      return message
    }

    const data = await res.json()
    
    setPapers(data)
    console.log(data);
     
  }

  useEffect(() =>{
    setLoading(true)
    fetchPapers()
    setLoading(false)
  },[])

  if (isLoading) return <p>Loading...</p>
  
  return (
    <div>
      <h1>Papers</h1>
      <div className="paperContainer">
        {papers.map((p,id) =>(
          <Paper key={id} title={p.title} abstract = {p.abstract} doi = {p.doi} preview = {p.preview}/>
        ))}
      </div>
    </div>
  )
}

export default Papers
