import React, { useState } from "react";
import checkIcon from "../../assets/images/icon-check.svg";
import closeIcon from "../../assets/images/icon-cross.svg";
import { useContext } from "react";
import StateContext, { ADDTODO } from "../../context/context";
import "./style.scss";

const NewTodo = () => {
	const dateNow = new Date();
	const stateContext = useContext(StateContext);
	const [checked, setChecked] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const todo = {
		title: inputValue,
		status: checked,
		id: dateNow,
	};
	const handleAddTodo = () => {
		stateContext.dispatch({ type: ADDTODO, payload: todo });
		setInputValue("");
		setChecked(false);
	};
	return (
		<div
			className="w-full rounded h-14 relative bg-white flex flex-row flex-start gap-5 items-center px-5"
			id={stateContext.state.darkMode ? "dark" : undefined}>
			<div
				className="w-7 h-5 border flex flex-row justify-center items-center rounded-full cursor-pointer"
				id={checked ? "checked" : undefined}
				onClick={() => setChecked((checked) => !checked)}>
				<img src={checkIcon} alt="checkIcon" hidden={!checked && true} />
			</div>
			<input
				placeholder="Create A New Todo...."
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				className=" w-full h-full border-none outline-none md:pr-15"
			/>
			<img
				src={closeIcon}
				hidden={!inputValue && true}
				alt="closeIcon"
				className="cursor-pointer w-[15px]"
				onClick={() => {
					setInputValue("");
					setChecked(false);
				}}
			/>
			<img
				src={checkIcon}
				hidden={!inputValue && true}
				alt="checkIcon"
				className="invert w-[30px]  cursor-pointer"
				onClick={handleAddTodo}
			/>
		</div>
	);
};

export default NewTodo;
