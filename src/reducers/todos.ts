import { Todo, Action, ActionTypes } from '../actions/index';

export const todoReducer = (state: Todo[] = [], action: Action) => {
	switch (action.type) {
		case ActionTypes.fetchToDos:
			return action.payload;
		case ActionTypes.deleteTodo:
			return state.filter((todo: Todo) => todo.id !== action.payload);
		default:
			return state;
	}
};
