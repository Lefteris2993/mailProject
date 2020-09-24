import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Register extends Component {

    state = { 
        userName: '',
        password: '',
        confirmPassword: ''
    }

    

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });


    onSubmit = (e) => {
        e.preventDefault();
        this.props.regReq(this.state.userName, this.state.password, this.state.confirmPassword);
        this.setState({ userName: '', password: '', confirmPassword: '' });
    }

    render() {
        return (
            <div style={linkStyle}>
                <Link style={linkStyle} to="/">Login</Link> |
                <Link style={linkStyle} to="/register">Register</Link> 
                <h1>Register</h1>
                <form onSubmit={this.onSubmit} >
                    <input 
                        type="text" 
                        name="userName" 
                        style={{ padding: '5px', margin: '10px' }} 
                        placeholder="User Name" 
                        value={this.state.userName}
                        onChange={this.onChange}
                        /> 
                    <br/>
                    <input 
                        type="password" 
                        name="password" 
                        style={{ padding: '5px' , margin: '10px'}} 
                        placeholder="Password" 
                        value={this.state.password}
                        onChange={this.onChange}
                        />
                    <br/>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        style={{ padding: '5px', margin: '10px' }} 
                        placeholder="Confirm Password" 
                        value={this.state.confirmPassword}
                        onChange={this.onChange}
                        />
                    <br/>
                    <input 
                        type="submit" 
                        value="Register" 
                        className="btn"
                        />
                </form>
            </div>
            
        );
    }
}

//PropTypes
Register.propTypes = {
    regReq: PropTypes.func.isRequired
}

const linkStyle = {
    float: 'center',
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
  

export default Register;