import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";
import {
	FaEdit,
	FaEye,
	FaTrashAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../Search";

const JobView = () => {
  const [jobs, setJobs] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		loadJobs();
	}, []);

	const loadJobs = async () => {
		const result = await axios.get(
			"http://localhost:8082/jobs",
			{
				validateStatus: () => {
					return true;
				},
			}
		);
		if (result.status === 302) {
			setJobs(result.data);
		}
	};

	const handleDelete = async (id) => {
		await axios.delete(
			`http://localhost:8082/students/delete/${id}`
		);
		loadJobs();
	};
  return (
    <section>
			<Search
				search={search}
				setSearch={setSearch}
			/>
			<table className="table table-bordered table-hover shadow">
				<thead>
					<tr className="text-center">
						<th>ID</th>
						<th>Title</th>
						<th>Type</th>
						<th>Category</th>
						<th>Priority</th>
						<th colSpan="3">Actions</th>
					</tr>
				</thead>

				<tbody className="text-center">
					{jobs
						.filter((job) =>
							job.title
								.toLowerCase()
								.includes(search)
						)
						.map((job, index) => (
							<tr key={job.id}>
								<th scope="row" key={index}>
									{index + 1}
								</th>
								<td>{job.title}</td>
								<td>{job.type}</td>
								<td>{job.category}</td>
								<td>{job.priority}</td>
								<td className="mx-2">
									<Link
										to={`/job-profile/${job.id}`}
										className="btn btn-info">
										<FaEye />
									</Link>
								</td>
								<td className="mx-2">
									<Link
										to={`/edit-job/${job.id}`}
										className="btn btn-warning">
										<FaEdit />
									</Link>
								</td>
								<td className="mx-2">
									<button
										className="btn btn-danger"
										onClick={() =>
											handleDelete(job.id)
										}>
										<FaTrashAlt />
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</section>
  )
}

export default JobView;