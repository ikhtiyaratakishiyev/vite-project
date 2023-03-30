import React from 'react'
import './style.scss'

const Nav = ({setSearch}) => {
  
  return (
    <nav>
       <div className="container">
       <h1>logo</h1>
        <ul>
            <li>About</li>
            <li>Products</li>
            <li>Contacts</li>
        </ul>
        <div className="btn-c">
            <input onChange={(e)=>setSearch(e.target.value)} />
            <button >Search</button>
        </div>

       </div>
    </nav>
  )
}

export default Nav