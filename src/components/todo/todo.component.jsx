import { useContext, useState } from "react";
import StateContext from "../../context/context";
import { DELETETODO, TOGGLETODO, ACTIVETODOSFILTER, COMPELETEDTODOSFILTER } from "../../context/context.js";
import checkIcon from "../../assets/images/icon-check.svg";
import closeIcon from "../../assets/images/icon-cross.svg";
import "./style.scss";
const TODO = ({ todo }) => {
	const stateContext = useContext(StateContext);
	const handleCheck = () => stateContext.dispatch({ type: TOGGLETODO, payload: todo.id });
	const handleDelete = () => stateContext.dispatch({ type: DELETETODO, payload: todo.id });
	return (
		<div
			className="todo w-full py-1 border-b-2 h-16 relative bg-white flex flex-row flex-start gap-5 items-center px-5"
			id={stateContext.state.darkMode ? "dark" : undefined}>
			<div
				className="w-5 h-5 border flex flex-row justify-center items-center rounded-full cursor-pointer"
				id={todo.status ? "checked" : undefined}
				onClick={handleCheck}>
				<img src={checkIcon} alt="checkIcon" hidden={!todo.status && true} />
			</div>
			<span className="cursor-pointer" id={todo.status ? "checked" : undefined} onClick={handleCheck}>
				{todo.title}
			</span>
			<img
				src={closeIcon}
				alt="todoCloseIcon"
				className="absolute right-5 cursor-pointer"
				onClick={handleDelete}
			/>
		</div>
	);
};

export default TODO;
