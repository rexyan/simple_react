import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {  
      inputValue: '',
      list:[]
    }

    this.onChangeHandler = this.onChangeHandler.bind(this) 
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleBtnDeleteClick = this.handleBtnDeleteClick.bind(this)
  }

  render () {
    return (
        <Fragment> 
          <label htmlFor='inputArea'>请输入内容</label>
          <input 
            id='inputArea'
            className='input'
            value={ this.state.inputValue }    
            onChange={ this.onChangeHandler } 
          /> 
          <button onClick={ this.handleBtnClick }>提交</button>
          <ul>
              { this.getTodoItem() }  
          </ul>
        </Fragment>
      )
  }

  getTodoItem(){
    return this.state.list.map((value, index) =>{ 
        return  <TodoItem content={ value } key={ index } index={ index } deleteItem={ this.handleBtnDeleteClick } > </TodoItem>      
    })
  }

  onChangeHandler(e){
    const value = e.target.value 
    this.setState(() => ({
         inputValue: value
     }))
  }

  handleBtnClick(){
    this.setState((preState)=>{
      return{
        list: [...preState.list, preState.inputValue],
        inputValue: ''
      }
    })
  }

  handleBtnDeleteClick(e){
    console.log(e)
    this.setState((preState)=> {
        const list = [...this.state.list]
        list.splice(e, 1)
        return {
          list
        }
    })
  }

  // 组件即将被挂载的时候执行 
  componentWillMount(){
      console.log('componentWillMount')
  }

  // 组件被挂载之后执行 
  componentDidMount(){
      console.log('componentDidMount')
  }

  // 在组件更新之前执行，返回bool值
  shouldComponentUpdate(){
      console.log('shouldComponentUpdate')
      return true;
  }

  // shouldComponentUpdate 返回true就执行 componentWillUpdate
  componentWillUpdate(){
      console.log('componentWillUpdate')
  }

  // 组件更新完成之后会被执行
  componentDidUpdate(){
      console.log('componentDidUpdate')
  }
}

export default TodoList;