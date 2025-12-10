import React, { use, useEffect, useState,  } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
// const [data,setData] = useState([])
// useEffect(()=>{
//     fetch('https://api.github.com/users/rajcodes0').then(res => res.json())
//     .then(data =>{console.log(data)
//        setData(data)
//     })
// },[])

 const data = useLoaderData()


  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers:{data.followers}
    <img src={data.avatar_url} alt="Github pic" width={300} />
    
    
    </div>
  )
}

export default Github

export const githubLoader = async()=> {
 const response = await fetch('https://api.github.com/users/rajcodes0')
    return response.json()
}

