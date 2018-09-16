import React, { Component, Fragment } from 'react';
import './style.css'

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
                    return <li 
                              key={ index } 
                              onClick={ this.handleBtnDeleteClick.bind(this, index) }
                              // 不转义html标签，渲染出原始内容
                              dangerouslySetInnerHTML={{__html:value}}
                              >
                          </li>
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