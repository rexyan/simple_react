import React, { Component } from 'react' 

class TodoItem extends Component {
	constructor(props){
		super(props)
		this.deleteFunc = this.deleteFunc.bind(this) // 在构造中进行this绑定
	} 

	render() {
			const { content } = this.props; // 利用ES6中解构赋值的方法。等价于 const content = this.props.content;
			return (<li onClick={ this.deleteFunc } > { content } </li>)
		}
	
	deleteFunc(){
		const { index, deleteItem } = this.props; // 解构赋值
		deleteItem({ index })
	}
}

export default TodoItem;