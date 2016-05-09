import React, { Component } from 'react';
import { Menu, Breadcrumb, Icon, Modal ,Button} from 'antd';
import styles from './index.css';
const SubMenu = Menu.SubMenu;
import ImageMap from '../image-map';

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
                  <div className={ styles["ant-layout-logo"] }></div>
                  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={ ['2'] } style={ { lineHeight: '64px' } }>
                    <Menu.Item key="1">导航一</Menu.Item>
                    <Menu.Item key="2">导航二</Menu.Item>
                    <Menu.Item key="3">导航三</Menu.Item>
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
                    <Breadcrumb.Item>应用列表</Breadcrumb.Item>
                    <Breadcrumb.Item>某应用</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className={ styles["ant-layout-container"] }>
                  <aside className={ styles["ant-layout-sider"] }>
                    <Menu mode="inline" defaultSelectedKeys={ ['1'] } defaultOpenKeys={ ['sub1'] }>
                      <SubMenu key="sub1" title={ <span><Icon type="user" />导航一</span> }>
                        <Menu.Item key="1">选项1</Menu.Item>
                        <Menu.Item key="2">选项2</Menu.Item>
                        <Menu.Item key="3">选项3</Menu.Item>
                        <Menu.Item key="4">选项4</Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub2" title={ <span><Icon type="laptop" />导航二</span> }>
                        <Menu.Item key="5">选项5</Menu.Item>
                        <Menu.Item key="6">选项6</Menu.Item>
                        <Menu.Item key="7">选项7</Menu.Item>
                        <Menu.Item key="8">选项8</Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub3" title={ <span><Icon type="notification" />导航三</span> }>
                        <Menu.Item key="9">选项9</Menu.Item>
                        <Menu.Item key="10">选项10</Menu.Item>
                        <Menu.Item key="11">选项11</Menu.Item>
                        <Menu.Item key="12">选项12</Menu.Item>
                      </SubMenu>
                    </Menu>
                  </aside>
                  <div className={ styles["ant-layout-content"] }>
                    <div style={ { height: 240 } }>
                      <div style={ { clear: 'both' } }>
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
                  </div>
                </div>
                <div className={ styles["ant-layout-footer"] }>
                    footer text
                </div>
              </div>
            </div>
            );
    }
}