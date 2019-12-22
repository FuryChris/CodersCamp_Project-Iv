
function createTask(newTask) {
    const url = 'http://localhost:3000/api/tasks';
    const taskData = {
        task_done: newTask.done,
        task_name: newTask.name,
        task_end_date: newTask.endDate,
        task_description: newTask.description
    }
    fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData)
        })
        .then(res => res.json())
        .then(res => console.log('Task is created', res))
        .catch(err => console.log(err.message));
}

export { createTask }