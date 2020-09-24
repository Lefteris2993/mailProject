import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Login extends Component {

    state = { 
        userName: '',
        password: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.tryLogin(this.state.userName, this.state.password);
    }

    render() {
        return (
            <div style={linkStyle}>
                <Link style={linkStyle} to="/">Login</Link> |
                <Link style={linkStyle} to="/register">Register</Link> 
                <h1>Login</h1>
                <form onSubmit={this.onSubmit} >
                    <input 
                        type="text" 
                        name="userName" 
                        style={{ padding: '5px', margin: '10px' }} 
                        placeholder="User Name" 
                        value={this.state.title}
                        onChange={this.onChange}
                        />
                        <br/>
                    <input 
                        type="password" 
                        name="password" 
                        style={{ padding: '5px', margin: '10px' }} 
                        placeholder="Password" 
                        value={this.state.title}
                        onChange={this.onChange}
                        />
                        <br/>
                    <input 
                        type="submit" 
                        value="Login" 
                        className="btn"
                        />
                </form>
            </div>
            
        );
    }
}

//PropTypes
Login.propTypes = {
    tryLogin: PropTypes.func.isRequired
}

const linkStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
  

export default Login;