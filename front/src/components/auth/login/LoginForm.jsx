import React, {Component} from 'react'
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import {Link} from 'react-router-dom'
import toastr from 'toastr'
import axios from 'axios'

const url = 'http://localhost:3000/'

class LoginForm extends Component {

    state = {
        auth:{}
    }

    onChange =(e)=>{
        const key = e.target.name
        const value = e.target.value
        const {auth} = this.state
        auth[key]=value
        console.log(auth)
        this.setState({auth})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
          const {auth} = this.state
          axios.post(url + 'login', auth)
            .then(res=>{
                console.log(res)
                toastr.success("Bienvenido a Gogas MAKEUP!")
                this.props.history.push('/profile')
            })
            .catch(e=>{
                console.log(e)
                toastr.error("Verifica que tu correo y/o contraseña sean correctos")
            })
        });
    }    

    render() {
        const { getFieldDecorator } = this.props.form;
        const {auth} = this.state
        return (
        <Card bordered={false} style={{backgroundColor:'rgb(232, 232, 232, 0.0)', borderRadius:'50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '40vw', height: '40vw'}}>
            <h1 style={{textAlign: 'center',color:"#ffffff"}}>Login</h1>
            
            <Form onSubmit={this.handleSubmit} style={{width:'300px'}}>
                <Form.Item>
                {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Pon tu correo para ingresar :)' }],
                })(
                    <Input onChange={this.onChange} prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Correo" name="email" setfieldsvalue={auth.email}/>
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Hey! Falta tu contraseña' }],
                })(
                    <Input onChange={this.onChange} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Contraseña" name="password" setfieldsvalue={auth.password} />
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox style={{color:'#ffffff'}}>Recordar mi cuenta</Checkbox>
                )}
                <Button type="primary" htmlType="submit" style={{width: "100%"}}>
                    Entrar
                </Button>
                <span>
                    <Link to='/signup' style={{float: "right"}}>¿Olvidaste tu contraseña?</Link>
                </span>
                <span>
                    <Link to="/signup">Regístrate</Link>
                </span>
                </Form.Item>
            </Form>
          </Card>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(LoginForm);
export default WrappedNormalLoginForm;