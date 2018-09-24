import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_DATA } from './actionTypes'

const defaultState = {
	inputVlaue: '',
	list: []
}

export default (state = defaultState, action) => {
	if (action.type === CHANGE_INPUT_VALUE){
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputVlaue = action.value
		return newState;
	}

	if (action.type === ADD_TODO_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputVlaue)
		newState.inputVlaue = '';
		return newState;
	}

	if (action.type === DELETE_TODO_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index, 1);
		return newState;
	}

	if (action.type === INIT_LIST_DATA){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = action.value
		return newState;
	}

	return state;
}