import React from 'react';
import {Modal, Input, Button, Form, Upload, Icon, Select} from 'antd';

export const ModalUpload = ({visible, handleOk, handleCancel, handleSubmit, handleFile, handleInfo, handleChange}) => {

  return(
    <Modal footer={null} title="Publica tu post" visible={visible} onCancel={handleCancel} okText="Publicar" cancelText="Cancelar">

      <Form onSubmit={handleSubmit}>
        <Form.Item>
          <Input
            onChange={handleInfo}
            placeholder="Title"
            name="title"
          />
        </Form.Item>
        <Form.Item>
          <Input
            onChange={handleInfo}
            placeholder="Description"
            name="desc"
          />
        </Form.Item>
        <Form.Item>
            <Select defaultValue="Escoge la categoría" style={{ width: 180 }} onChange={handleChange}>
                <Select.Option value="halloween">Halloween</Select.Option>
                <Select.Option value="party">Fiesta infantil</Select.Option>
                <Select.Option value="social">Festivales</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item>
          <div className="dropbox">
            <Upload.Dragger onChange={handleFile} >
              <p className="ant-upload-drag-icon"> <Icon style={{color:'#3C41E3'}} type="inbox" /> </p>
              <p className="ant-upload-text">Sube tu foto</p>
            </Upload.Dragger>
          </div>
        </Form.Item>
        <Form.Item >
          <Button style={{width:'100%'}} type="danger" htmlType="submit">Publicar</Button>
        </Form.Item>
      </Form>

    </Modal>
  )
};
