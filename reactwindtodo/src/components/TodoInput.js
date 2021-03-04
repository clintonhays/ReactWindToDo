import { useRef } from "react";

const TodoInput = (props) => {
	const todoInput = useRef("");

	const newTodo = (e) => {
		props.newTodo(todoInput.current.value);
		todoInput.current.value = "";
		todoInput.current.focus();
		e.preventDefault();
	};

	return (
		<div className="text-center">
			<form onSubmit={newTodo}>
				<label htmlFor="todoInput">Add Task:</label>
				<br />
				<input
					className="w-1/5 border-2 border-red-600"
					type="text"
					name="todoInput"
					id="todoInput"
					placeholder="What would you like...todo?"
					ref={todoInput}
				/>
				<button>Add Task</button>
			</form>
		</div>
	);
};

export default TodoInput;
