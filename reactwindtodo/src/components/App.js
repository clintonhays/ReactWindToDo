import { useState } from "react";
import { uuid } from "uuidv4";
import "../style/App.css";
import Categories from "./Categories";
import TaskCount from "./TaskCount";
import TodoInput from "./TodoInput";

function App() {
	const [todos, setTodos] = useState([]);

	const newTodo = (text, category) => {
		console.log(text);
		if (text === "") {
			// inputError()
			return;
		}
		if (category === "") {
			// categoryError()
			return;
		}
		setTodos((prevState) => {
			return [...prevState, { id: uuid(), text: text, category: category }];
		});
	};

	return (
		<>
			<div className="bg-green-200">
				<header className="text-center text-4xl">ReactWind To-Do App</header>
			</div>
			<div className="info border-2 border-red-600 flex justify-around">
				<TaskCount />
				<Categories newTodo={newTodo} />
			</div>
			<div className="todoInput">
				<TodoInput newTodo={newTodo} />
			</div>
		</>
	);
}

export default App;
