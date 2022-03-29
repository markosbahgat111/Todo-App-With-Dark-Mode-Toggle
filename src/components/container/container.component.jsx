import { useState } from "react";
import { useContext } from "react";
import StateContext, { CLEARCOMPLETED } from "../../context/context";
import TODO from "../todo/todo.component";
import "./style.scss";
import sun from "../../assets/images/icon-sun.svg";
import moon from "../../assets/images/icon-moon.svg";
import { DARKMODE } from "../../context/context";
import NewTodo from "../newTodo/newTodo.Component";
const TODOCONTAINER = () => {
	const stateContext = useContext(StateContext);
	const [section, setSection] = useState("All");
	const { todos, activeTodos, completedTodos } = stateContext.state;
	return (
		<main
			className="w-screen min-h-screen shadow-xl flex flex-col m-auto justify-center items-center"
			id={stateContext.state.darkMode ? "dark" : undefined}>
			<div className="lg:w-[40vw] w-11/12 h-[80vh] overflow-auto md:overflow-clip rounded">
				<div className="w-full h-1/3 flex flex-col justify-around">
					<div className="flex flex-row justify-between px-5 pr-9 pt-1">
						<h1 className="text-5xl font-bold tracking-[.3em] text-white">TODO</h1>
						<img
							src={stateContext.state.darkMode ? sun : moon}
							alt="darkModeIcon"
							className="w-[30px] h-[30px] cursor-pointer"
							onClick={() => stateContext.dispatch({ type: DARKMODE })}
						/>
					</div>
					<NewTodo />
				</div>
				<div className="todos rounded pb-12 overflow-auto w-full">
					{(section === "All" ? todos : section === "Completed" ? completedTodos : activeTodos).map(
						(todo) => (
							<TODO todo={todo} key={todo.id} />
						)
					)}
					<div
						className="essentials shadow-xl w-full py-1 md:h-11 h-fit relative bg-white flex md:flex-row  md:justify-center justify-around lg:flex-nowrap flex-wrap items-center px-5 text-sm text-center"
						id={stateContext.state.darkMode ? "dark" : undefined}>
						<span className="sm:order-1 py-3 md:py-none inline-flex">
							{
								(section === "All" ? todos : section === "Completed" ? completedTodos : activeTodos)
									.length
							}{" "}
							Items Left
						</span>
						<div className="w-1/2 md:w-1/3 py-1 md:py-none  m-auto flex justify-between sm:order-2 order-3">
							<button
								className="cursor-pointer"
								id={section === "All" ? "active" : undefined}
								onClick={() => setSection("All")}>
								All
							</button>
							<button
								className="cursor-pointer"
								id={section === "Completed" ? "active" : undefined}
								onClick={() => setSection("Completed")}>
								Completed
							</button>
							<button
								className="cursor-pointer"
								id={section === "Active" ? "active" : undefined}
								onClick={() => setSection("Active")}>
								Active
							</button>
						</div>
						<button
							className="cursor-pointer sm:order-2 inline-flex"
							onClick={() => stateContext.dispatch({ type: CLEARCOMPLETED })}>
							Clear Completed
						</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default TODOCONTAINER;
