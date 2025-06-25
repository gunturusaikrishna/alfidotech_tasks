import { useState, useEffect } from 'react'

import './App.css'

function App() {
  
const [users,setUsers] = useState([])
const [loading,setLoading] = useState(true)

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setUsers(data)
      setLoading(false)
    })
    .catch(error => {
      console.error('Error fetching data:', error)
      setLoading(false)
    })
})
if(loading) <h1>loading...</h1>
  return (
    <>
      <ul style={{display:'flex', flexWrap:'wrap', justifyContent:'center', listStyleType:'none', padding:0}}>
        {users.map(user=>(
          <li style={{border:'1px solid black', width:'300px', height:'230px', margin:'10px'}}key={user.id}>
            <h2>User: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
