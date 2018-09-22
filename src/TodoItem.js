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
}

// 为父组件传递来的值进行校验
TodoItem.propTypes = {
	// 字符串类型，且必传
	content: PropTypes.string.isRequired, 
	// 函数类型
	deleteItem: PropTypes.func,
	// 数字类型
	index: PropTypes.number,
	default_props: PropTypes.string.isRequired, 

	// 更多类型https://reactjs.org/docs/typechecking-with-proptypes.html#___gatsby
}

// 设置默认值
TodoItem.defaultProps = {
	default_props: 'xxxx', 
}



export default TodoItem;