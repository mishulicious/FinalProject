import React, {Component} from 'react'
import { Form, Icon, Input, Button, Card } from 'antd';
import {Link} from 'react-router-dom'
import toastr from 'toastr'
import axios from 'axios'
// import {signupServ} from "../../../services/authService"

const url = 'http://localhost:3000/'

class SignupForm extends Component {
    state = {
        user:{}
    }

    onChange =(e)=>{
        const key = e.target.name
        const value = e.target.value
        const {user} = this.state
        user[key]=value
        console.log(user)
        this.setState({user})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            const {user} = this.state
            if(user.password !== user.password2) {
                return toastr.error('Las contraseñas no coinciden')
            }
            axios.post(url + 'signup', user)
            .then(user=>{
                console.log(user)
                toastr.success("Súper! Ya tienes una cuenta!")
                this.props.history.push('/login')
            })
            .catch(e=>{
                console.log(e)
                toastr.error("El usuario y/o correo ya están registrados")
            })
          }
        });
    }    

    render() {
        
        const {user} = this.state
        const { getFieldDecorator } = this.props.form;
        return (
        <Card bordered={false} style={{backgroundColor:'rgb(232, 232, 232, .0)', borderRadius:'50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '40vw', height: '40vw'}}>
            <h1 style={{textAlign: 'center',color:"#ffffff"}}>Registrarme</h1>
            
            <Form onSubmit={this.handleSubmit} style={{width:'300px'}}>
                <Form.Item>
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Crea tu nombre de usuario' }],
                })(
                    <Input onChange={this.onChange} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Usuario" name='username' setfieldsvalue={user.username}/>
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'No olvides poner tu correo' }],
                })(
                    <Input onChange={this.onChange} prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Correo" name='email' setfieldsvalue={user.email}/>
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Hey! Falta tu contraseña' }],
                })(
                    <Input onChange={this.onChange} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Contraseña" name='password' setfieldsvalue={user.password}/>
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('password2', {
                    rules: [{ required: true, message: 'Repite tu contraseña' }],
                })(
                    <Input onChange={this.onChange}  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirma tu contraseña"name='password2' setfieldsvalue={user.password2} />
                )}
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit" style={{width: "100%"}}>
                    Registrarme
                </Button>
                <span>
                    <Link to="/login">Ya tengo cuenta</Link>
                </span>
                </Form.Item>
            </Form>
          </Card>
        );
    }
}

const WrappedNormalSignupForm = Form.create()(SignupForm);
export default WrappedNormalSignupForm;

