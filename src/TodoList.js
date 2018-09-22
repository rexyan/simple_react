import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './style.css';

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

  // 页面加载完成后发起ajax请求
  componentDidMount(){
    axios.get('http://www.baidu.com').then(()=>{
      alert('执行成功')
    }).catch(()=>{
      alert('执行失败')
    })
  }

}

export default TodoList;