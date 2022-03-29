import { createContext } from "react";

const Actions = {
	ADDTODO: "addtodo",
	DELETETODO: "deletetodo",
	COMPELETEDTODOSFILTER: "completedtodos",
	ACTIVETODOSFILTER: "activetodos",
	TOGGLETODO: "toggletodo",
	DARKMODE: "darkmode",
	CLEARCOMPLETED: "ClearCompleted",
};
const StateContext = createContext();

export function TodoReducer(state, action) {
	switch (action.type) {
		case Actions.ADDTODO:
			return { ...state, todos: [...state.todos, action.payload] };
		case Actions.DELETETODO:
			return { ...state, todos: [...state.todos.filter((item) => item.id !== action.payload)] };
		case Actions.TOGGLETODO:
			const target = state.todos.find((item) => item.id === action.payload);
			return {
				...state,
				todos: [...state.todos.filter((item) => item !== target), { ...target, status: !target.status }],
			};
		case Actions.DARKMODE:
			return { ...state, darkMode: !state.darkMode };
		case Actions.COMPELETEDTODOSFILTER:
			return { ...state, completedTodos: [...state.todos.filter((item) => item.status === true)] };
		case Actions.ACTIVETODOSFILTER:
			return { ...state, activeTodos: [...state.todos.filter((item) => item.status === false)] };
		case Actions.CLEARCOMPLETED:
			return { ...state, todos: [...state.todos.filter((item) => item.status === false)] };
		default:
			return initialState;
	}
}

export const initialState = {
	todos: [
		{
			title: "Simple test Todo",
			id: 1,
			status: true,
		},
		{
			title: "Simple test Todo2",
			id: 2,
			status: false,
		},
		{
			title: "Simple test Todo3",
			id: 3,
			status: false,
		},
	],
	darkMode: false,
	activeTodos: [],
	completedTodos: [],
};

export default StateContext;
export const { ADDTODO, DELETETODO, TOGGLETODO, ACTIVETODOSFILTER, COMPELETEDTODOSFILTER, DARKMODE, CLEARCOMPLETED } =
	Actions;
