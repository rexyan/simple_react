import React, { Component } from 'react' 

class TodoItem extends Component {
	constructor(props){
		super(props)
		this.deleteFunc = this.deleteFunc.bind(this)
	} 

	render() {
			return (<li onClick={ this.deleteFunc } > { this.props.content } </li>)
	}

	// 子组件中定义一个点击事件，作用是删除元素
	deleteFunc(){
		// 接收传递来的下标
		const itemIndex = this.props.index
		// 调用传递过来的删除函数，并把下标传进去
		this.props.deleteItem(itemIndex)
	}
}

export default TodoItem;