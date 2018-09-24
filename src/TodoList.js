import React from 'react';
import { connect } from 'react-redux';
import { changeInputAction, clickAddItemAction, clickDeleteItemAction } from './store/actionCreator'

// 将 TodoList 抽取为了一个UI组件，也就是js对象
const TodoList = (props) => {
	// 利用解构赋值，相当于 const inputValue = props.inputValue
	const { inputValue, list, onChangeInput, addItem, deleteItem } = props
	return(
		<div>
			<div>
				<input value={ inputValue } onChange= { onChangeInput } />
				<button onClick={ addItem }> 提交 </button>
			</div>
			<ul>
				{
					list.map((item, index)=>{
						// 这里onClick需要传递参数，所以onClick是一个匿名函数
						// 匿名函数里面调用deleteItem，并将index传入
						return (<li 
								key={ index } 
								onClick= { () => deleteItem(index) }> { item } 
								</li>
								)
					})
				}
			</ul>
		</div>
	)
}

// 将State和Props做映射，也就是说取值直接通过Props取即可，上面做了解构复制，取值又精简了
const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}

// 将Dispatch和props做映射
const mapDispatchToProps = (dispatch) => {
	return{
		onChangeInput(e){
			const value = e.target.value;
			// 从actionCreator中获取changeInputAction
			const action = changeInputAction(value);
			// 派发action，调用reducer
			dispatch(action);
		},

		addItem(){
			const action = clickAddItemAction();
			dispatch(action);
		},

		deleteItem(index){
			const action=clickDeleteItemAction(index);
			dispatch(action);
		}
	}
}

// connect为react-redux的第二个核心API，第一个参数为State到Props的映射。
// 第二个参数为Dispatch到Props的映射
// 第三个参数TodoList组件
// 原来的写法是export default TodoList，而现在经过我们的抽取，TodoList是一个傻瓜组件（UI组件）
// 其实 connect(mapStateToProps, mapDispatchToProps)(TodoList) 就相当于将一个傻瓜组件和数据等进行组装，组装成一个聪明组件（容器组件）
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

