import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Index extends Component {


    myfunction = () => {
        return(
            this.props.status.connected ? 
            <h1>wellcome</h1> : <Link to="/">Please press here to Log in</Link>
        )
        
    }

    render() {
        console.log(this.props.location)
        return (
            <h1>{this.myfunction()} </h1>      
        );
    }
}

//PropTypes

const linkStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
  

export default Index;

