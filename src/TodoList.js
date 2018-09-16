import React, { Component, Fragment } from 'react';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {  
      inputValue: 'hello',
      list:['111', '222']
    }
  }

  render () {
    return (
        <Fragment> 
          <input 
            value={ this.state.inputValue }    
            onChange={ this.onChangeHandler.bind(this) } 
          /> 
          <button onClick={ this.handleBtnClick.bind(this) }>提交</button>
        	<ul>
          		{ 
                // 使用map将数组进行循环，value为值，index为索引
                this.state.list.map((value, index) =>{ 
                    // 为每一个循环的值都加上一个key值,且为每一个循环项都加上一个handleBtnDeleteClick事件,并将index传入函数
                    return <li key={ index } onClick={ this.handleBtnDeleteClick.bind(this, index) }> { value } </li>
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
      // ...this.state.list为展开运算符，相当于将this.state.list的值全部放在此处。然后在加上一个this.state.inputValue的值
      // 所以list的值就等于this.state.list + this.state.inputValue
      list: [...this.state.list, this.state.inputValue],
      // 每次都将input中的值清空
      inputValue: ''
    })
  }

  handleBtnDeleteClick(e){
    // 获取传递过来的下标值
    console.log(e)
    // 将当前的this.state.list赋值给一个局部变量list。为什么要这么做呢？因为react不允许我们直接修改state中的值
    const list = [...this.state.list]
    // 将list的值从e的位置处开始删除一个
    list.splice(e, 1)
    // 将删除后的值赋予state中的list
    this.setState({
      list:list
    })
  }
}

export default TodoList;