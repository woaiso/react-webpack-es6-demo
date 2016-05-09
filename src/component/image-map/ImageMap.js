import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';

class ImageMap extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    	const image={
    		url:'http://p0.jmstatic.com/jmstore/image/000/002/2948_std/572b031b609ac_1920_668.jpg?1462436637772',
    		width:1920,
    		height:668
    	};
    	const backgroundImage="url("+image.url+")";
        return (<div styleName="edit-content">
        			<div styleName="background-image" style={{backgroundImage}}></div>
                </div>);
    }
}
export default CSSModules(ImageMap, styles);