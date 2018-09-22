import React, { Component } from 'react' 
import PropTypes from 'prop-types'

class TodoItem extends Component {
	constructor(props){
		super(props)
		this.deleteFunc = this.deleteFunc.bind(this) 
	} 

	render() {
			const { content, default_props } = this.props; 
			return (<li onClick={ this.deleteFunc } > { default_props } - { content } </li>)
		}
	
	deleteFunc(){
		const { index, deleteItem } = this.props; 
		deleteItem({ index })
	}

	// 当一个组件从父组件接受了参数，只要父组件的render函数被重新执行了，子组件的 componentWillReceiveProps 就会执行
	// 注意：父组件的render函数第一次执行此函数是不会被执行的，只有父组件的render函数不是第一次执行，且子组件从父组件接受到了参数，componentWillReceiveProps才会被执行
	componentWillReceiveProps(){
	    console.log('componentWillReceiveProps')
	}

	// 当子组件被移除的时候会执行
  	componentWillUnmount(){
      	console.log('componentWillUnmount')
  	}
}


TodoItem.propTypes = {
	content: PropTypes.string.isRequired, 
	deleteItem: PropTypes.func,
	index: PropTypes.number,
	default_props: PropTypes.string.isRequired, 
}

TodoItem.defaultProps = {
	default_props: 'xxxx', 
}



export default TodoItem;