import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

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

	return state;
}