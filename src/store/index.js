import { createStore } from 'redux'
import reducer from './reducer'

// 创建store，并且将reducer传入
const store = createStore(reducer);

export default store;