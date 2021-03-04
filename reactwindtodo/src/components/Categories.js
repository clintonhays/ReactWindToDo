import React from "react";

const Categories = () => {
	return (
		<div className="text-center">
			<label htmlFor="categories">
				Urgency:
				<br />
				<select name="categories" id="categories">
					<option value="" hidden>
						Level of Urgency
					</option>
					<option value="urgent">Critical</option>
					<option value="high">High</option>
					<option value="medium">Medium</option>
					<option value="low">Low</option>
				</select>
			</label>
		</div>
	);
};

export default Categories;
