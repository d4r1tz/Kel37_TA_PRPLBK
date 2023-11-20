import React from "react"

export default function ProfileComponent(props) {
    return (
        <div style={{backgroundColor:"#f2e341", color:"white", padding:"20px"}}>
            <img src={props.photo} alt="Profile" style={{ width: '80px', height: '100px' }} />
            <h2>{props.name}</h2>
            <h2>{props.nim}</h2>
        </div>
    )
}