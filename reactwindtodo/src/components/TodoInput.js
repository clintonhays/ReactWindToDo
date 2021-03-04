import React from "react";

const TodoInput = () => {
	return (
		<div className="text-center">
			<label htmlFor="todoInput">Add Task:</label>
			<br />
			<input
				className="w-1/5 border-2 border-red-600"
				type="text"
				name="todoInput"
				id="todoInput"
				placeholder="What would you like...todo?"
			/>
		</div>
	);
};

export default TodoInput;
