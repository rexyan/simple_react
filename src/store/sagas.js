import { put, takeEvery } from 'redux-saga/effects'
import { initListDataAction } from './actionCreator'
import axios from 'axios'
import { GTE_INIT_LIST_DATA } from './actionTypes'

function* getInitListDataApi(){
	try{
		const url = 'http://www.mocky.io/v2/5ba88d043200005f00e2eafb'
		// 直到获取到数据后才继续往下执行
	    const res = yield axios.get(url)
		const action = initListDataAction(res.data)
		// 这里不执行dispatch，执行put将action提交给reducer
		yield put(action)
		
	}catch(e){
		console.log('接口请求失败')
	}
}


function* todoSagas() {
	// 除了reducer能接受action之外，saga也可以接收action，下面的代码表示的是，
	// 当接收到GTE_INIT_LIST_DATA的action的时候，就执行getInitListDataApi函数
	// getInitListDataApi 可以是一个函数，也可以是一个生成器
	yield takeEvery(GTE_INIT_LIST_DATA, getInitListDataApi)
}

export default todoSagas;

// 个人理解的sage流程：
/*
1. 编写action
2. dispatch触发后，saga进行拦截
3. 如果在saga的拦截范围内，则进行对应的函数，并且之后将新的action对象put到reducer中
4. 如果不在saga的拦截范围内，那么就直接放行给reducer
*/

// saga和thunk的对比
/*
saga比thunk复杂很多，thunk的原理是将action的返回格式从js对象拓展为js的函数，从而在函数中进行逻辑处理和异步请求等。
而saga是发送给reducer的action进行拦截处理
*/



