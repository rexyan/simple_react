import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
		render(){
		return (
			<div>
				<Input value={ this.props.inputVlaue } onChange = { this.props.handleChange } placeholder="在此输入文本..." style={{ width:'300px', marginRight:'10px' }}/>
				<Button type="primary" onClick={ this.props.handleBtnClick }>提交</Button>
				<List
				  style={{ width:'300px', marginTop:'10px' }}
			      bordered
			      dataSource={ this.props.list }
			      renderItem={(item, index) => (<List.Item onClick= { (index) => this.props.handleBtnDelete(index) }>{item}</List.Item>)}
    			/>
			</div>
		)
	}
}

export default TodoListUI;