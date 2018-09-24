import React from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';

// 不使用js对象的方式，而是定一个变量，内容为一个函数，函数返回jsx
const TodoListUI = (props) => {
	return (
			<div>
				<Input value={ props.inputVlaue } onChange = { props.handleChange } placeholder="在此输入文本..." style={{ width:'300px', marginRight:'10px' }}/>
				<Button type="primary" onClick={ props.handleBtnClick }>提交</Button>
				<List
				  style={{ width:'300px', marginTop:'10px' }}
			      bordered
			      dataSource={ props.list }
			      renderItem={(item, index) => (<List.Item onClick= { () => props.handleBtnDelete(index) }>{item}</List.Item>)}
    			/>
			</div>
		)
}

export default TodoListUI;