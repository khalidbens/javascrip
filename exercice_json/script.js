
/*
    1. Créer une todo list. à chaque appui sur le bouton ajouter,
    créer un nouvel élément dans la liste.
    cet élément doit contenir la valeur de l'input et une croix.
    On en profitera pour vider l'input.
    2. le clique sur un élément de la liste lui ajoutera une classe qui aura pour 
    effet de barrer l'élément.
    3. le clique sur la croix supprimera l'élément concerné.
    4. sauvegarder la liste en localstorage.
    5. afficher la liste sauvegardé au chargement de la page.
    6. éditer la liste lorsque l'on coche ou supprime un élément.
    Bonus : Utiliser le drag and drop pour déplacer nos éléments dans la liste. il faudra penser à sauvegarder les éléments déplacé.
 */

// exercice JSON

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('ajouter');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', addTask);

    loadTasks();

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = createTaskElement(taskText);
            taskList.appendChild(taskItem);
            taskInput.value = '';
            saveTasks();
        }
    }

    function createTaskElement(taskText, completed = false) {
        const taskItem = document.createElement('li');
        taskItem.innerText = taskText;

        if (completed) {
            taskItem.classList.add('completed');
        }

        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
            saveTasks();
        });

        const deleteButton = document.createElement('span');
        deleteButton.innerText = '\u2717';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', (event) => {
            event.stopPropagation();
            deleteTask(taskItem);
        });

        taskItem.appendChild(deleteButton);
        taskItem.draggable = true;
        taskItem.addEventListener('dragstart', handleDragStart);
        taskItem.addEventListener('dragover', handleDragOver);
        taskItem.addEventListener('drop', handleDrop);

        return taskItem;
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
        saveTasks();
    }

    function saveTasks() {
        const tasks = [];
        taskList.childNodes.forEach((taskItem) => {
            tasks.push({
                task: taskItem.innerText,
                completed: taskItem.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach((task) => {
            const taskItem = createTaskElement(task.task, task.completed);
            taskList.appendChild(taskItem);
        });
    }

    // Fonctions pour gérer le glisser-déposer
    let draggedItem = null;

    function handleDragStart(event) {
        draggedItem = event.target;
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDrop(event) {
        event.preventDefault();
        const target = event.target;

        // Vérifier que l'élément cible n'est pas l'élément en cours de glissement ( NE PAS OUBLI2 CETTE FONCTION)
        if (target !== draggedItem && target.nodeName === 'LI') {
            // Réorganiser les éléments dans la liste
            const list = target.parentNode;
            const targetIndex = Array.from(list.children).indexOf(target);
            const draggedIndex = Array.from(list.children).indexOf(draggedItem);

            list.insertBefore(draggedItem, targetIndex > draggedIndex ? target.nextSibling : target);

            // Sauvegarder les éléments réorganisés (TOUJOURS LE FAIRE )
            saveTasks();
        }
    }
});













