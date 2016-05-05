
import React, {Component} from 'react';
var headerCss=require("./header.css");

//定义导航菜单数据
const navItems = [
    {
        _id: 'nav_1',
        text: '页面装修2'
    }, {
        _id: 'nav_2',
        text: '模版管理'
    }, {
        _id: 'nav_3',
        text: "系列管理"
    }
];
//定义装修店铺操作
const navActions = [
    {
        _id: 'action_1',
        text: '刷新'
    }, {
        _id: 'action_2',
        text: '预览草稿'
    }, {
        _id: 'action_3',
        text: '预览主站'
    }, {
        _id: 'action_4',
        text: '取消送审'
    }
];
class ListItem extends Component {
    render() {
        return (
            <li>
                <a hre="#">{this.props.item.text}</a>
            </li>
        )
    }
}
class List extends Component {
    render() {
        return (
            <ul className={this.props.className}>
                {this.props.items.map((item) => {
                    return <ListItem key={item._id} item={item}/>
                })
}
            </ul>
        )
    }
}

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: props.menus,
            menuVisible: false, //菜单当前是否可见
        }
    }
    /**
     * @description 点击下拉选项
     **/
    _dropdownClick(){
        window.prompt('哈哈')
    }
    render() {
        return (
            <div className="dropdown">
                <a href="javascript:;"
                   className="dropdown-toggle"
                   data-toggle="dropdown"
                   role="button"
                   onClick={this._dropdownClick.bind(this)}>{this.props.name}
                    <span className="caret"></span>
                </a>
                <List  items={this.props.menus} className="dropdown-menu" ref=""/>
            </div>
        )
    }
}
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems,
            navActions,
            menus: [
                {
                    _id: 'menu_1',
                    text: '下拉1'
                }, {
                    _id: 'menu_2',
                    text: '下拉2'
                }, {
                    _id: 'menu_3',
                    text: '下拉3'
                }
            ]
        };
    }
    render() {
        return (
            <nav className={headerCss.header+" navbar navbar-default"}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">旗舰店装修</a>
                    </div>
                    <div className="nav-main">
                        <DropDown name="装修" menus={this.state.menus}/>
                        <List items={this.state.navItems} className="nav navbar-nav navbar-left"/>
                        <List items={this.state.navActions} className="nav navbar-nav navbar-right"/>
                    </div>
                </div>
            </nav>
        );
    }
}
