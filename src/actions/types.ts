import { FetchTodoAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
	fetchToDos,
	deleteTodo,
}

export type Action = FetchTodoAction | DeleteTodoAction;
