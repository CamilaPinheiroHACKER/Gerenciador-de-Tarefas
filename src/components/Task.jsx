import React from "react";
import { CgClose, CgFileDocument } from "react-icons/cg";
import { useHistory } from "react-router-dom";
import FormDialog from "./dialogForm";

import "./Tasks.css";

const Task = ({ task, props, handleTaskClick, handleTaskDeletion}) => {
	const history = useHistory();
	
	const handleTaskDetailsClick = () => {
		history.push(`/${task.tarefa}`);
	};
	const [open, setOpen] = React.useState(false);

	const handleEditTarefas = () => {
		setOpen(true);
	}

	return (
		// <> função editar
		// <FormDialog open={open} setOpen={setOpen} tarefa={props.tarefa} />
		<div
			className="task-container"
			style={task.estado ? { borderLeft: "6px solid #00e6b8" } : {}}
		>
			<div className="task-tarefa" onClick={() => handleTaskClick(task.id)}>
				{task.tarefa}
			</div>

			<div className="buttons-container">
			<button
					className="edit-task-button"
					onClick={() => handleEditTarefas(task.id)}
				>
					<CgFileDocument />
				</button>
				<button
					className="remove-task-button"
					onClick={() => handleTaskDeletion(task.id)}
				>
					<CgClose />
				</button>
			</div>
		</div>
		// </>
	);
};

export default Task;
