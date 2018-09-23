import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import store from './store'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes'

class TodoList extends Component{
	constructor(props){
		super(props);
		this.state = store.getState()

		// 绑定thid指向
		this.handleChange = this.handleChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)

		// 订阅store，如果store有变化，就触发handleStoreChange函数
		store.subscribe(this.handleStoreChange)
	}

	render(){
		return (
			<div>
				<Input value={ this.state.inputVlaue } onChange = { this.handleChange } placeholder="在此输入文本..." style={{ width:'300px', marginRight:'10px' }}/>
				<Button type="primary" onClick={ this.handleBtnClick }>提交</Button>
				<List
				  style={{ width:'300px', marginTop:'10px' }}
			      bordered
			      dataSource={ this.state.list }
			      renderItem={(item, index) => (<List.Item onClick={ this.handleBtnDelete.bind(this, index) }>{item}</List.Item>)}
    			/>
			</div>
		)
	}

	handleChange(e){
		// 定义一个action，给定一个action的类型，以及数据
		const action = {
			type: 'change_input_value',
			value: e.target.value
		}
		// 调用dispatch，将action传递给store
		store.dispatch(action)
	}

	handleBtnClick(){
		const action = {
			type:'add_todo_item'
		}
		store.dispatch(action)
	}

	
	handleBtnDelete(index){
		const action = {
			type:'delete_todo_item',
			index // 相当于index：index
		}
		store.dispatch(action)
	}

	handleStoreChange(){
		// 将store中的数据进行同步
		this.setState(store.getState());
	}
}

export default TodoList;