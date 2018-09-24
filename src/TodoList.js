import React, { Component } from 'react'
import store from './store'
import { getChangeAction, getBtnClickAction, getBtnDeleteAction, getInitListData } from './store/actionCreator'
import TodoListUI from './TodoListUI'


class TodoList extends Component{
	constructor(props){
		super(props);
		this.state = store.getState()
		this.handleChange = this.handleChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleBtnDelete = this.handleBtnDelete.bind(this)
		store.subscribe(this.handleStoreChange)
	}

	render(){
		return (
			<TodoListUI 
			inputVlaue = { this.state.inputVlaue }
			handleChange = { this.handleChange }
			handleBtnClick = { this.handleBtnClick }
			list = { this.state.list }
			handleBtnDelete = { this.handleBtnDelete }
			></TodoListUI>
		)
	}

	componentDidMount(){
		const action = getInitListData()
		store.dispatch(action)
	}

	handleChange(e){
		const value = e.target.value
		const action = getChangeAction(value)
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