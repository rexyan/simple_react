import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import store from './store'

class TodoList extends Component{
	constructor(props){
		super(props);
		this.state = store.getState()
	}

	render(){
		return (
			<div>
				<Input value={ this.state.inputVlaue } placeholder="在此输入文本..." style={{ width:'300px', marginRight:'10px' }}/>
				<Button type="primary">提交</Button>
				<List
				  style={{ width:'300px', marginTop
				  :'10px' }}
			      bordered
			      dataSource={ this.state.list }
			      renderItem={item => (<List.Item>{item}</List.Item>)}
    			/>
			</div>
		)
	}
}

export default TodoList;