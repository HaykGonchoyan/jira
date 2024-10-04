import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth"

import { auth } from "../../services/firebase";

import { Form, Button, Input } from "antd"
import "./index.css"
class Register extends React.Component{
    constructor () {
        super()
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''

        }
    }


    handleChangeOutput = e => {
        const { name, value } = e.target
        this.setState({
            [name]:value
        })
    }
    handleRegister = async e =>{
        e.preventDefault()
        this.setState({
            loading: true
        })
        const { email, password } = this.state
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        }catch{
            
        }finally{
            this.setState({
                loading: false
            })
        }
    }

    render(){
        const { loading } = this.state
        return(
            <div className="auth_container">

                    <Form layout="vertical">
                        <Form.Item label="First name">
                            
                            <Input type="text" name="firstname" placeholder="First name" onChange={this.handleChangeOutput}/>
                        </Form.Item>

                        <Form.Item label="Last name">
                            
                            <Input type="text" name="lastname" placeholder="Last name" onChange={this.handleChangeOutput} />
                        </Form.Item>

                        <Form.Item label="Email">
                            
                            <Input type="email" name="email" placeholder="Email" onChange={this.handleChangeOutput} />
                        </Form.Item>

                        <Form.Item label="Password">
                            
                            <Input.Password type="password" name="password" placeholder="Password" onChange={this.handleChangeOutput} />
                        </Form.Item>
                       
                        <Button onClick={this.handleRegister} loading={loading}>Register</Button>
                    </Form>
                
            </div>
        )
    }
}

export default Register