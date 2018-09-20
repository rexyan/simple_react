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
  }

  render () {
    return (
        <Fragment> 
          {/* htmlFor */}
          <label htmlFor='inputArea'>请输入内容</label>
          <input 
            id='inputArea'
            // 添加class
            className='input'
            value={ this.state.inputValue }    
            onChange={ this.onChangeHandler.bind(this) } 
          /> 
          <button onClick={ this.handleBtnClick.bind(this) }>提交</button>
          <ul>
              {
                  this.state.list.map((value, index) =>{ 
                      // 子组件 content 属性为值，index属性为下标，用于删除元素使用，deleteItem为删除函数，传递函数的时候需要绑定this指向
                      return  <TodoItem content={ value } key={ index } index={ index } deleteItem={ this.handleBtnDeleteClick.bind(this) } > </TodoItem>      
                  })
              }
          </ul>
        </Fragment>
      )
  }

  onChangeHandler(e){
    console.log(e.target.value)  
    this.setState({              
      inputValue: e.target.value 
    })
  }

  handleBtnClick(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleBtnDeleteClick(e){
    console.log(e)
    const list = [...this.state.list]
    list.splice(e, 1)
    this.setState({
      list:list
    })
  }
}

export default TodoList;