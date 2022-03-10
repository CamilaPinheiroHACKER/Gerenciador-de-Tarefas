import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import "./App.css";

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [listTarefas, setListTarefas] = useState();

	useEffect(() => {
		const fetchTasks = async () => {
			const { data } = await axios.get(
				"http://localhost:3001/getTask"
			).then((response) =>{
				setListTarefas(response.data);
			});

			setTasks(data);
			
		};

		fetchTasks();
	}, []);

	const handleTaskClick = (taskId) => {
		axios.post("http://localhost:3001/register")
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) return { ...task, estado: !task.estado };

			return task;
		});

		setTasks(newTasks);
	};

	const handleTaskAddition = (taskTarefa) => {
		const newTasks = [
			...tasks,
			{
				tarefa: taskTarefa,
				id: uuidv4(),
				estado: false,
			},
		];

		setTasks(newTasks);
	};

	const handleTaskDeletion = (taskId) => {
		const newTasks = tasks.filter((task) => task.id !== taskId);

		setTasks(newTasks);
	};

	return (
		<Router>
			<div className="container">
				<Header />
				<Route
					path="/"
					exact
					render={() => (
						<>
							<AddTask handleTaskAddition={handleTaskAddition} />
							<Tasks
								tasks={tasks}
								handleTaskClick={handleTaskClick}
								handleTaskDeletion={handleTaskDeletion}
							/>
						</>
					)}
				/>
			</div>
		</Router>
	);
};

export default App;