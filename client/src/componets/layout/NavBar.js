import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div style={linkStyle} >
            <Link style={linkStyle} to="/index">Home</Link> |
            <Link style={linkStyle} to="/compose">Compose</Link> |
            <Link style={linkStyle} to="/settings">Settings</Link> |
            <Link style={linkStyle} to="/threads">Threads</Link> |
            <Link style={linkStyle} to="/inbox">Inbox</Link> 
        </div>
        
    )
}

const linkStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
  

export default NavBar