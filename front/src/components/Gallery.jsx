import React, {Component} from 'react'
import {Button, Row, Col, Card} from 'antd';
import {ModalUpload} from './Modal'

import Tilt from 'react-tilt';

const url = 'http://localhost:3000/gallery/'

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
const { Meta } = Card;


class Gallery extends Component{

    state = {
        post: {},
        visible: false,
    }

    componentWillMount() {
        this.todas()
    }

    handleSubmit = e => {
        e.preventDefault()
        const {post} = this.state
        let formData = new FormData();

        for(let key in post){
            formData.append(key, post[key]);
        }

        fetch(url + 'create_new', {
            method:'POST',
            body: formData
        })
        .then(r => r.json())
        .then(post => console.log(post))
        .catch(error => console.log(error));
        this.setState({visible:false})
    }

    handleCancel = () => {
        this.setState({visible:false})
    };
    
    handleEdit = () => {
        this.setState({visible:true})
    };

    handleInfo = e => {
        const {post} = this.state;
        const field = e.target.name;
        post[field] = e.target.value;
        this.setState({post});
    };

    handleFile = info => {
        const {post} = this.state;
        post.photoURL = info.file.originFileObj;
        this.setState({post});
    };

    handleChange = (value) => {
        const {post} = this.state
        post.category = value
        this.setState({post})
    }

    todas = () => {
        fetch(url + 'all')
        .then(r => r.json())
        .then(photos => this.setState({photos}))
        .catch(err => console.log(err))
    }

    halloween = () => {
        fetch(url + 'category/halloween')
        .then(r => r.json())
        .then(photos => this.setState({photos}))
        .catch(err => console.log(err))
    }

    party = () => {
        fetch(url + 'category/party')
        .then(r => r.json())
        .then(photos => this.setState({photos}))
        .catch(err => console.log(err))
    }

    social = () => {
        fetch(url + 'category/social')
        .then(r => r.json())
        .then(photos => this.setState({photos}))
        .catch(err => console.log(err))
    }

    render(){


        const {visible, photos} = this.state;
        console.log(photos)
        if(photos === undefined) return <p>Loading ... </p>
        return(
            
            <section>
          

                <div className='container'>
                <br/>
                <br/>

                    <h2 style={{textAlign:'center', lineHeigt:'3rem'}}>
                    GALERIA
                    </h2>
                    <br/>

                <br/>

                    <div>

                        <Row type="flex" justify="space-around" align="middle">
                            <Col xs={{span:24}}  lg={{span:4}}><DemoBox value={50}>
                                <Button type="danger" onClick={this.todas}>
                                    Todas
                                </Button>
                            </DemoBox></Col>

                            <Col xs={{span:24}}  lg={{span:4}}><DemoBox value={50}>
                                <Button type="danger" onClick={this.halloween}>
                                    Halloween
                                </Button>
                            </DemoBox></Col>

                            <Col xs={{span:24}}  lg={{span:4}}><DemoBox value={50}>
                                <Button type="danger" onClick={this.party}>
                                    Fiesta Infantil
                                </Button>
                            </DemoBox></Col>

                            <Col xs={{span:24}} lg={{span:4}}><DemoBox value={50}>
                                <Button type="danger" onClick={this.social}>
                                    Festivales
                                </Button>
                            </DemoBox></Col>

                            <Col xs={{span:24}} lg={{span:4}}><DemoBox value={50}> 
                                <Button type="dashed" onClick={() => this.setState({visible:true})}>
                                    Crea nuevo post
                                </Button>
                            </DemoBox></Col>
                        
                        </Row>
                        <br/>
                        <br/>
                        <div>                        
                            <Row type="flex" justify="space-around" align="middle" gutter={40}>
                                {photos.map((photo, i) => {
                                    return  <Col xs={{span:24}} sm={{span:12}} md={{span:8}} lg={{span:6}}key={i}><DemoBox value={80}>
                                                <Tilt className="Tilt" options={{ max : 30, scale: 1.05, speed: 500 }}>
                                                <Card
                                                    hoverable
                                                    style={{ width: 240 }}
                                                    cover={<img src={photo.photoURL} alt={photo.url} width="80%"/>}
                                                    >
                                                    <Meta 
                                                    title={photo.title}
                                                    description={photo.desc}
                                                    />
                                                    </Card>
                                                    </Tilt>
                                                </DemoBox></Col>
                                })}
                             
                            </Row>

                        </div>

                        <ModalUpload
                            handleFile={this.handleFile}
                            handleSubmit={this.handleSubmit}
                            handleCancel={this.handleCancel}
                            handleInfo={this.handleInfo}
                            visible={visible}
                            handleChange={this.handleChange}
                        />

                    </div>            

                </div>    
            </section>





            
        )
    }
}

export default Gallery