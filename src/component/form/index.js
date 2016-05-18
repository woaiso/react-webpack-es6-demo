/*jshint esversion:6*/

import React,{
	Component
} from 'react';


export default class Form extends Component{
	constructor(props){
		super(props);
		this.state={
			value:'this is demo text'
		};
		this.handChange=this.handChange.bind(this);
	}
	componentWillMount(){ //在挂载前被调用
		console.log('component will mount');
	}
	componentDidMount(){ //在挂载后被调用
		console.log('component did mount');
	}
	componentWillReceiveProps(){ //在组件收到新的Props时被调用
		console.log('component will receive props');
	}
	shouldComponentUpdate(nextProps,nextState){ //在组件任何改变决定是否要更新到DOM的时候被调用
		console.log('should component update');
		return true;
	}
	componentWillUpdate(nextProps,nextState){ //当更新发生前被立即调用,不能在此函数内调用 setState
		console.log('component will update'); 
	}
	componentDidUpdate(prevProps,prevState){ //当更新发生后被立即调用
		console.log('component did update'); 
	}
	componentDidUnMount(){ //组件被卸载后立即调用，可在此函数销毁释放资源

	}
	handChange(event){
		this.setState({value:event.target.value});
	}
	render(){
		console.log('reander element');
		return <div>
			<input type="text" value={this.state.value} onChange={this.handChange} />
			<select multiple={true} defaultValue={["A","C"]}>
				<option value="A">option A</option >
				<option value="B">option B</option>
				<option value="C">option C</option>
				<option value="D">option D</option>
			</select>
			<textarea value={this.state.value} onChange={this.handChange}></textarea>
		</div>
	}
}