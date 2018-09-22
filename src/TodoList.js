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

    this.onChangeHandler = this.onChangeHandler.bind(this) // 在构造中绑定this指向
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

  // 在jsx中写map之类的不太好，所以将其封装为一个函数，返回即可
  getTodoItem(){
    return this.state.list.map((value, index) =>{ 
        return  <TodoItem content={ value } key={ index } index={ index } deleteItem={ this.handleBtnDeleteClick } > </TodoItem>      
    })
  }

  onChangeHandler(e){
    // console.log(e.target.value)  
    // this.setState({              
    //    inputValue: e.target.value 
    // })

    // 新版本的react给State赋值的时候可以不是以对象的方式了，而是以函数的方式
    // 注意，这里在使用函数方式进行setState时，需要先将e.target.value 的值赋给一个变量，因为这里是异步的设置数据
    const value = e.target.value 
    this.setState(() => ({
         inputValue: value
     }))
  }

  handleBtnClick(){
    // this.setState({
    //  list: [...this.state.list, this.state.inputValue],
    //  inputValue: ''
    // })

    // 这里同样使用函数的方式进行setState，setState可以接受一个参数，这个参数是未修改前的setState的值
    // 那我们就可以将this.state替换为preState
    this.setState((preState)=>{
      return{
        list: [...preState.list, preState.inputValue],
        inputValue: ''
      }
    })
  }

  handleBtnDeleteClick(e){
    console.log(e)
    // const list = [...this.state.list]
    // list.splice(e, 1)
    // this.setState({
    //  list:list
    //})

    this.setState((preState)=> {
        const list = [...this.state.list]
        list.splice(e, 1)
        // 这里相当于return { list：list } 在ES6中简写为 return { list }
        return {
          list
        }
    })
  }
}

export default TodoList;