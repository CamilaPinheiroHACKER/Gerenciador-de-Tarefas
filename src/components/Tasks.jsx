import React from "react";

import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion, listTarefas, setListTarefas }) => {
	return (
		<>
			{tasks.map((task) => (
				<Task
					key={task.id}
					listTarefas={listTarefas}
					setListTarefas={setListTarefas}
					task={task}
					handleTaskClick={handleTaskClick}
					handleTaskDeletion={handleTaskDeletion}
				/>
			))}
		</>
	);
};

export default Tasks;