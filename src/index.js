import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store';

// Provider为react-redux的第一个核心API
const App = (
	// 这里的意思是将store注入到Provider所包含的组件中
	// 也就是说在Provider所包含的组件中，都可以获取到store
	<Provider store={ store }>
		<TodoList>
		</TodoList>
	</Provider>
)

ReactDOM.render(App, document.getElementById('root'));

