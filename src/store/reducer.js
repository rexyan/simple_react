const defaultState = {
	inputVlaue: '',
	list: []
}

export default (state = defaultState, action) => {
	// 匹配action type
	if (action.type === 'change_input_value'){
		// 将state数据进行一次深拷贝(因为reducer可以接收state，但是绝不能修改state)
		const newState = JSON.parse(JSON.stringify(state));
		// 改变其中inputVlaue的值为 action中的value
		newState.inputVlaue = action.value
		return newState;
	}

	if (action.type === 'add_todo_item'){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputVlaue)
		newState.inputVlaue = '';
		return newState;
	}

	if (action.type === 'delete_todo_item'){
		const newState = JSON.parse(JSON.stringify(state));
		// 删除一项
		newState.list.splice(action.index, 1);
		return newState;
	}

	return state;
}