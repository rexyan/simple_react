import React, { Component, Fragment } from 'react';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {  // state 负责存储数据
      inputValue: 'hello',
      list:[]
    }
  }

  render () {
    return (
        <Fragment> 
          <input 
            value={ this.state.inputValue }    // value 为上面inputValud中定义的值
            onChange={ this.onChangeHandler.bind(this) }  // onChangeHandler 为js中的一个函数，且改变onChangeHandler的this指向
          /> 
          <button>提交</button>
        	<ul>
          		<li> test数据 </li>
        	</ul>
        </Fragment>
      )
  }

  onChangeHandler(e){
    console.log(e.target.value)  // 通过e.target.value 获取input输入框中的值
    this.setState({              // 如果要修改state的数据，需要使用setState方法
      inputValue: e.target.value 
    })
  }

}

export default TodoList;