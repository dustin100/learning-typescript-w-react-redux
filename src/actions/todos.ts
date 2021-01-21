import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

const url = 'https://jsonplaceholder.typicode.com/todos';

export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export interface FetchTodoAction {
	type: ActionTypes.fetchToDos;
	payload: Todo[];
}

export interface DeleteTodoAction {
	type: ActionTypes.deleteTodo;
	payload: number;
}

export const fetchToDos = () => async (dispatch: Dispatch) => {
	const res = await axios.get<Todo[]>(url);

	dispatch<FetchTodoAction>({
		type: ActionTypes.fetchToDos,
		payload: res.data,
	});
};

export const deleteToDo = (id: number): DeleteTodoAction => {
	return { type: ActionTypes.deleteTodo, payload: id };
};
