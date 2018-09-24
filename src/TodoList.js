import React, { Component } from 'react'
import store from './store'
import { getChangeAction, getBtnClickAction, getBtnDeleteAction, initListDataAction } from './store/actionCreator'
import TodoListUI from './TodoListUI'
import axios from 'axios'

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
		// Mock data
		const url = 'http://www.mocky.io/v2/5ba88d043200005f00e2eafb'
		axios.get(url).then((res)=> {
			const action = initListDataAction(res.data)
			store.dispatch(action)
		}).catch(()=>{
			alert('HTTP 请求失败！')
		})
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