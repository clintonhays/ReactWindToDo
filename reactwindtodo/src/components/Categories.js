import { useState } from "react";

const Categories = () => {
	const [urgency, setUrgency] = useState("");

	return (
		<div className="text-center">
			<label htmlFor="categories">
				Urgency:
				<br />
				<select
					name="categories"
					id="categories"
					onChange={(e) => {
						const urgencyLevel = e.target.value;
						setUrgency(urgencyLevel);
					}}
				>
					<option value="" hidden>
						Level of Urgency
					</option>
					<option value="critical">Critical</option>
					<option value="high">High</option>
					<option value="medium">Medium</option>
					<option value="low">Low</option>
				</select>
			</label>
			{urgency}
		</div>
	);
};

export default Categories;
