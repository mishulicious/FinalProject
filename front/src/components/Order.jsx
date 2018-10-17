import React, {Component} from 'react'
import {Layout, Steps, DatePicker, TimePicker, Button, message, Select} from 'antd';
import moment from 'moment';


const format = 'HH:mm';
const Step = Steps.Step;
const steps = [{
    status:"finish",
    title:"Evento",
    icon:'file' ,
    content: 'tipo de eveto',
  }, {
    title: 'Agendar',
    content: 'fecha',
  },{
    title: 'Lugar',
    content: 'mapa',
  }, {
    title: 'Pago',
    content: 'Paypal',
  }];



class Order extends Component{
    state = {
        current: 0

      }
    
      next() {
        const current = this.state.current + 1;
        this.setState({ current });
      }
    
      prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }

    
    render(){
        const { current } = this.state;
       
        return(
            <Layout>

                
                    <Layout style={{padding: '24px', backgroundImage: 'url("https://res.cloudinary.com/mishulicious/image/upload/v1539733232/gogasmakeup/maxresdefault.jpg")',backgroundSize: 'cover',display: 'flex', alignItems: 'center', justifyContent:'center', width: '100vw', height: '120vh'}}>
                    <h2 style={{textAlign:'center', lineHeigt:'3rem', paddingBottom: '5%'}}>
                    AGENDA TU EVENTO
                    </h2>
                    
                    <div style={{backgroundColor:'none'}}>

                        <Steps current={current}>
                        {steps.map(item => <Step key={item.title} title={item.title} />)}
                        </Steps>
                        <div className="steps-content">

                        {current===0?
                        <form>
                            <br />
                            <br />
                                <Select defaultValue="Tipo de Evento" style={{ width: 180 }} >
                                    <Select.Option value="halloween">Halloween</Select.Option>
                                    <Select.Option value="party">Fiesta infantil</Select.Option>
                                    <Select.Option value="social">Festival</Select.Option>
                                </Select>
                                <br />
                            <br />
                                <Select defaultValue="Personas" style={{ width: 180 }} >
                                    <Select.Option value="1">Halloween</Select.Option>
                                    <Select.Option value="+10">Fiesta infantil</Select.Option>
                                    <Select.Option value="+20">Festival</Select.Option>
                                </Select>
            
                        </form>

                        :current===1?

                        <div>
                            <br />
                            <br />
                            <DatePicker showToday={false} placeholder="Fecha"/>
                            <br />
                            <br />
                            <TimePicker defaultOpenValue={moment('15:30', format)} format={format} placeholder="Hora"/>
                       
                        </div>

                        :current===2?

                        <div>
                            <img src="https://res.cloudinary.com/mishulicious/image/upload/v1539752302/gogasmakeup/mapa.png" alt="mapa"/>
         
                        </div>

                        :<div>
                            <br />
                            <br />
                            <img width='50%'src="https://res.cloudinary.com/mishulicious/image/upload/v1539754011/gogasmakeup/boton-paypal.png" alt="mapa"/>
         
                        </div>
                        

                        


                        }
                        
                        </div>

                        <div className="steps-action">
                        {
                            current < steps.length - 1
                            && <Button type="primary" onClick={() => this.next()}>Siguiente</Button>
                        }
                        {
                            current === steps.length - 1
                            && <Button type="primary" onClick={() => message.success('Has reservado tu evento con éxito!')}>Listo!</Button>
                        }
                        {
                            current > 0
                            && (
                            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                            Atrás
                            </Button>
                            )
                        }
                        </div>
                    </div>
                        


                    </Layout>
            
            </Layout>

            



            
        )
    }
}

export default Order

// {/* <Steps>
// <Step status="finish" title="Evento" icon={<Icon type="file" />} />
// <Step status="finish" title="Agendar" icon={<Icon type="schedule" />} />
// <Step status="finish" title="Lugar" icon={<Icon type="compass" />} />
// <Step status="process" title="Pago" icon={<Icon type="loading" />} />
// <Step status="wait" title="Listo!" icon={<Icon type="smile-o" />} />
// </Steps> */}

