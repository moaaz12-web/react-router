import React from 'react'
import {useNavigate} from 'react-router-dom'
function Profile() {
  let navigate = useNavigate();
  return (
    <div>
      <p>pROFILE PAGE</p> 
      <button onClick={()=>{
        navigate("/MovieDetails")
      }}>GO TO ABOUT PAGE</button>
      
    </div>
  )
}

export default Profile