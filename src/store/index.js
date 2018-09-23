import { createStore } from 'redux'
import reducer from './reducer'

// 使用redux chrom 插件
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;