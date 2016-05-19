import React, { Component } from 'react';
import { Menu, Breadcrumb, Icon, Modal ,Button,Card} from 'antd';
import styles from './index.css';
const SubMenu = Menu.SubMenu;
import ImageMap from '../image-map';
import Shelf from './shelf';
export default class JMStore extends Component {
    constructor(props) {
        super(props);
        this.state={
          hotArealToolVisible:false
        };
    }
    handleCancel(){
      this.setState({
        hotArealToolVisible:false
      });
    }
    handleOk(){
      this.setState({
        hotArealToolVisible:false
      });
    }
    showModal(){
      this.setState({
        hotArealToolVisible:true
      });
    }
    render() {
        return (
            <div className={ styles['ant-layout-topaside'] }>
              <div className={ styles["ant-layout-header"] }>
                <div className={ styles["ant-layout-wrapper"] }>
                  <div className={ styles["ant-layout-logo"] }>JMSTORE</div>
                  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={ ['2'] } style={ { lineHeight: '48px' } }>
                    <Menu.Item key="1">店铺管理</Menu.Item>
                  </Menu>
                </div>
              </div>
              <div className={ styles["ant-layout-subheader"] }>
                <div className={ styles["ant-layout-wrapper"] }>
                  <Menu mode="horizontal" defaultSelectedKeys={ ['1'] } style={ { marginLeft: 124 } }>
                    <Menu.Item key="1">二级导航</Menu.Item>
                    <Menu.Item key="2">二级导航</Menu.Item>
                    <Menu.Item key="3">二级导航</Menu.Item>
                  </Menu>
                </div>
              </div>
              <div className={ styles["ant-layout-wrapper"] }>
                <div className={ styles["ant-layout-breadcrumb"] }>
                  <Breadcrumb>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>运营管理</Breadcrumb.Item>
                    <Breadcrumb.Item>专场管理</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className={ styles["ant-layout-container"] }>
                  <aside className={ styles["ant-layout-sider"] }>
                    <Menu mode="inline" defaultSelectedKeys={ ['1'] } defaultOpenKeys={ ['sub1'] }>
                        <Menu.Item key="1">基本信息</Menu.Item>
                        <Menu.Item key="2">页面内容</Menu.Item>
                        <Menu.Item key="3">测试模块</Menu.Item>
                        <Menu.Item key="4">底部导航</Menu.Item>
                    </Menu>
                  </aside>
                  <div className={ styles["ant-layout-content"] }>
                    <div>
                      <div style={{display:'none'}}>
                        <Button type="primary" onClick={this.showModal.bind(this)}>热区工具</Button>
                        <Modal title="热区工具" 
                               visible={ this.state.hotArealToolVisible } 
                               onOk={ this.handleOk.bind(this) } 
                               onCancel={ this.handleCancel.bind(this) }
                               okText="保存"
                               cancelText="取消"
                               width={700}>
                               <ImageMap />
                        </Modal>
                      </div>
                    </div>
                    <Shelf />
                    <Card title="页面内容" extra={<a href="#">添加模块</a>} >
                      <p>卡片的内容</p>
                      <p>卡片的内容</p>
                      <p>卡片的内容</p>
                    </Card>
                  </div>
                </div>
                <div className={ styles["ant-layout-footer"] }>
                    PROWERED BY JUMEI FE 
                </div>
              </div>
            </div>
            );
    }
}