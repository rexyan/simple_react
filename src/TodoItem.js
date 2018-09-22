import React, { Component } from 'react' 
import PropTypes from 'prop-types'

class TodoItem extends Component {
	constructor(props){
		super(props)
		this.deleteFunc = this.deleteFunc.bind(this) 
	} 

	render() {
			const { content } = this.props; 
			return (<li onClick={ this.deleteFunc } > { content } </li>)
		}
	
	deleteFunc(){
		const { index, deleteItem } = this.props; 
		deleteItem({ index })
	}

	// shouldComponentUpdate 可以接收两个参数，分别是新的Props值和State值
	shouldComponentUpdate(nextProps, nextState){
		// 这里进行一个判断，当content的内容和以前的一样，那么就返回false，子组件不渲染，反之就渲染子组件
		if (nextProps.content !== this.props.content){
			return true
		}else{
			return false
		}
	}
}

export default TodoItem;