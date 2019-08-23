import React from 'react';
import {Link} from "react-router-dom";
import './Style/Buttons.css'

function Buttons(props) {
  
    return (
        <div>
            <p>
            <Link to="/"><button type="button" className="btn btn-info" style={styles}>Home</button></Link>
            <Link to="/movies"><button type="button" className="btn btn-primary" style={styles}>List of Movies</button></Link>
            <Link to="/create"><button type="button" className="btn btn-success" style={styles}>Create New Movie</button></Link>
            </p>
        </div>
    );
}

const styles= {
    color: 'grey',
    textTransform: 'uppercase',
    borderRadius: '6px',
    boxShadow: '1px 1px 0px 1px'
}


 
export default Buttons;