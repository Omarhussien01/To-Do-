
window.addEventListener('load', () => {
	const form = document.querySelector("#task-form");
	const input = document.querySelector("#task-input");
    const pr = document.querySelector("#task-pr");
	const list_el = document.querySelector("#tasks");
    let taskNameArray=[];

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;
        const priority = pr.value; 

        if(task === ''|| priority === ''){
            alert('Task Name and priority canot be empty');
            return;
        }else if(taskNameArray.includes(task) === true){
                alert('Please Enter A unique Task Name');
				return;
        } 
        else{
            taskNameArray.push(task);
        }

        

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

        const task_pr_el = document.createElement('input');
		task_pr_el.classList.add('number');
		task_pr_el.type = 'number';
		task_pr_el.value = priority;
		task_pr_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_pr_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';
        pr.value='';
		console.log(taskNameArray);
		task_edit_el.addEventListener('click', (e) => {

			taskNameArray.splice(taskNameArray.indexOf(task), 1);
			task_edit_el.style.display = 'none';
			const task_save_el = document.createElement('button');
			task_save_el.classList.add('save');
			task_save_el.innerText = 'Save';
			task_actions_el.appendChild(task_save_el);
			task_input_el.removeAttribute("readonly");
			task_pr_el.removeAttribute('readonly');
			task_input_el.focus();
			task_pr_el.focus();
			task_save_el.addEventListener('click', (e) => {
				if (task_input_el.value != '' && task_pr_el.value != '' && taskNameArray.includes(task_input_el.value) === false){
					task_save_el.style.display = 'none';
					task_edit_el.style.display = 'inline';
                    task_input_el.setAttribute("readonly", "readonly");
                task_pr_el.setAttribute("readonly", "readonly");
					taskNameArray.push(task_input_el.value);
					console.log(taskNameArray);
				} else {
                    alert('please enter a valid and not repeated task name and valid priority')
				}
			});

		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
			taskNameArray.splice(taskNameArray.indexOf(task), 1);
		});

	});
});
