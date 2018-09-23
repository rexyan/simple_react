import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

// 将之前的action抽取在actionCreator.js文件中，返回一个对象
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