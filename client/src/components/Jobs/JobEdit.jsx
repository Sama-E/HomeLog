import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";

import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";

const JobEdit = () => {

  let navigate = useNavigate();

	const { id } = useParams();

	const [job, setJob] = useState({
		title: "",
		type: "",
		category: "",
		priority: "",
    description:"",
	});
	const {
		title,
		type,
		category,
		priority,
    description,
	} = job;

	useEffect(() => {
		loadJob();
	}, []);

  const loadJob = async () => {
		const result = await axios.get(
			`http://localhost:8082/jobs/job/${id}`
		);
		setJob(result.data);
	};

	const handleInputChange = (e) => {
		setJob({
			...job,
			[e.target.name]: e.target.value,
		});
	};
	const updateJob = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://localhost:8082/jobs/update/${id}`,
			job
		);
		navigate("/view-jobs");
	};

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5"> Edit Job</h2>
			<form onSubmit={(e) => updateJob(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="title">
						Title
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="title"
						id="title"
						required
						value={title}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="type">
						Type
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="type"
						id="type"
						required
						value={type}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="category">
						Category
					</label>
					<input
						className="form-control col-sm-6"
						type="category"
						name="category"
						id="category"
						required
						value={category}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="priority">
						Priority
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="priority"
						id="priority"
						required
						value={priority}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

        <div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="description">
						Description
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="description"
						id="description"
						required
						value={description}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="row mb-5">
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-outline-success btn-lg">
							Save
						</button>
					</div>

					<div className="col-sm-2">
						<Link
							to={"/view-jobs"}
							type="submit"
							className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
  )
}

export default JobEdit