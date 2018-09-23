import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import store from './store'
import { getChangeAction, getBtnClickAction, getBtnDeleteAction } from './store/actionCreator'

class TodoList extends Component{
	constructor(props){
		super(props);
		this.state = store.getState()

		this.handleChange = this.handleChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)

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
		const value = e.target.value
		const action = getChangeAction(value)  // 从actionCreator中获取返回的action对象
		store.dispatch(action)
	}

	handleBtnClick(){
		const action = getBtnClickAction()
		store.dispatch(action)
	}

	handleBtnDelete(index){
		const action = getBtnDeleteAction(index)
		store.dispatch(action)
	}

	handleStoreChange(){
		this.setState(store.getState());
	}
}

export default TodoList;