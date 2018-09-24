import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_DATA } from './actionTypes'
import axios from 'axios'

export const getChangeAction = (value) => ({
	type: CHANGE_INPUT_VALUE,
	value
});

export const getBtnClickAction = () => ({
	type: ADD_TODO_ITEM
});

export const getBtnDeleteAction = (index) => ({
	type: DELETE_TODO_ITEM,
	index
});

export const initListDataAction = (value) => ({
	type: INIT_LIST_DATA,
	value
})

export const getTodoListData = () => {
	// 当action返回值为一个函数的时候，这里可以接受一个dispatch
	return (dispatch) => {
		const url = 'http://www.mocky.io/v2/5ba88d043200005f00e2eafb'
		axios.get(url).then((res)=> {
			// 获取到数据之后，还是按照原来的方法触发action改变数据
			const action = initListDataAction(res.data)
			dispatch(action)
		}).catch(()=>{
			alert('HTTP 请求失败！')
		})
	}

}