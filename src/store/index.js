import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

// 载入sage组件和自定义的sagas文件
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'

// 创建sage中间件
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware),);
const store = createStore(
	reducer, 
	enhancer
);

// sagaMiddleware运行saga
sagaMiddleware.run(todoSagas)
export default store;



// import { createStore, applyMiddleware, compose } from 'redux'
// import reducer from './reducer'
// import thunk from 'redux-thunk';


// const sagaMiddleware = createSagaMiddleware()
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const enhancer = composeEnhancers(applyMiddleware(thunk),);
// const store = createStore(
// 	reducer, 
// 	enhancer
// );

// export default store;