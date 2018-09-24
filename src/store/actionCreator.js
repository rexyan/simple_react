import { changeInput, clickAddItem, clickDeleteItem } from './actionTypes'


export const changeInputAction = (value) => ({
	type: changeInput,
	value
});

export const clickAddItemAction = () => ({
	type: clickAddItem,
});

export const clickDeleteItemAction = (index) => ({
	type: clickDeleteItem,
	index
});
