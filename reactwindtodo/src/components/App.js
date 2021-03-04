import { useState } from "react";
import "../style/App.css";
import Categories from "./Categories";
import TaskCount from "./TaskCount";
import TodoInput from "./TodoInput";

function App() {
	const [todos, setTodos] = useState([]);

	return (
		<>
			<div className="bg-green-200">
				<header className="text-center text-4xl">ReactWind To-Do App</header>
			</div>
			<div className="info border-2 border-red-600 flex justify-around">
				<TaskCount />
				<Categories />
			</div>
			<div className="todoInput">
				<TodoInput />
			</div>
		</>
	);
}

export default App;
