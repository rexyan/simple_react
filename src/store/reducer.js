const defaultState = {
	inputVlaue: 'test',
	list: [1,2,3]
}

// reducer 的返回为一个函数，函数的第一个参数是管理的数据，默认值为defaultState。第二个参数的action
export default (state = defaultState, action) => {
	return state;
}