import { useEffect, useReducer } from "react";
import StateContext, {
	TodoReducer,
	initialState,
	COMPELETEDTODOSFILTER,
	ACTIVETODOSFILTER,
} from "./context/context.js";
import TODOCONTAINER from "./components/container/container.component";

function App() {
	const [state, dispatch] = useReducer(TodoReducer, initialState);
	useEffect(() => {
		dispatch({ type: COMPELETEDTODOSFILTER });
		dispatch({ type: ACTIVETODOSFILTER });
	}, [state.todos]);
	return (
		<StateContext.Provider value={{ state, dispatch }}>
			<TODOCONTAINER />
		</StateContext.Provider>
	);
}

export default App;
