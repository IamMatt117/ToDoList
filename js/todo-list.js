function showOptions(brand) {
    const req = document.getElementById('requirements');
    // hide requirements container when switching brands
    if (req) req.style.display = 'none';

    const options = {
        intel: ['Arc 580', 'Arc 570'],
        amd: ['Radeon RX 9060 XT', 'Radeon RX 9070 XT', 'Radeon RX 7900 XT'],
        nvidia: ['RTX 5070 TI', 'RTX 5080', 'RTX 5090']
    };
    const container = document.getElementById('gpu-options');
    container.innerHTML = '';
    if (options[brand]) {
        options[brand].forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.style.marginRight = '8px';
            btn.style.cursor = 'pointer';

            // Apply brand-specific styles and hover handlers
            if (brand === 'intel') {
                btn.style.background = 'var(--intel-primary)';
                btn.style.color = 'white';
                btn.onmouseover = () => btn.style.background = 'var(--intel-secondary)';
                btn.onmouseout = () => btn.style.background = 'var(--intel-primary)';
                btn.onclick = () => renderRequirements(opt);
            } else if (brand === 'amd') {
                btn.style.background = 'var(--amd-primary)';
                btn.style.color = 'white';
                btn.onmouseover = () => btn.style.background = 'var(--amd-secondary)';
                btn.onmouseout = () => btn.style.background = 'var(--amd-primary)';
                btn.onclick = () => renderRequirements(opt);
            } else if (brand === 'nvidia') {
                btn.style.background = 'var(--nvidia-primary)';
                btn.style.color = 'white';
                btn.onmouseover = () => btn.style.background = 'var(--nvidia-secondary)';
                btn.onmouseout = () => btn.style.background = 'var(--nvidia-primary)';
                btn.onclick = () => renderRequirements(opt);
            }

            container.appendChild(btn);
        });
        container.style.display = 'flex';
        } 
        // Show requirements container when GPU option is selected
        else {
            container.style.display = 'none';
            container.style.background = '';
            const req = document.getElementById('requirements');
            if (req) req.style.display = 'none'; // hide when no GPU options are shown
        }

    }

// Map option -> checklist items
const requirementsMap = {
    'Arc 580': ['11th Gen intel or Ryzen 5000 series or newer', 'PCIe 4', 'Ensure PSU wattage >= 600W'],
    'Arc 570': ['11th Gen intel or Ryzen 5000 series or newer', 'PCIe 4', 'Ensure PSU wattage >= 600W'],
    'Radeon RX 9060 XT': ['PSU >= 550W', '16GBs of RAM', 'PCIe 5 slot'],
    'Radeon RX 9070 XT': ['PSU >= 750W', '16GBs of RAM', 'PCIe 5 slot'],
    'Radeon RX 7900 XT': ['PCIe x 16 slot', 'PSU >= 750W', '8GBs of Memory'],
    'RTX 5070 TI': ['PSU >= 750W', 'PCIe 5 slot', 'PCIe gen 5 Power cable'],
    'RTX 5080': ['PSU >= 850W', 'PCIe 5.1 slot', 'PCIe gen 5 Power cable'],
    'RTX 5090': ['PSU >= 1000W', 'PCIe 5.1 slot', 'PCIe gen 5 Power cable'],
};

function renderRequirements(optionName){
    const container = document.getElementById('requirements') || 
    (function(){
        // Create a new container if it doesn't exist
        const el = document.createElement('div'); el.id = 'requirements';
        const parent = document.querySelector('.content');
        // Insert before the task input wrapper
        parent.insertBefore(el, parent.querySelector('.task-input-wrapper'));
        return el;
    })();
    container.innerHTML = '';
    // Create a title and list of requirements
    const title = document.createElement('h3');
    title.textContent = optionName + ' requirements';
    container.appendChild(title);
    const list = document.createElement('ul');
    // resolve requirements by exact match or by substring match (e.g. 'Arc 580' -> 'Arc')
    let items = requirementsMap[optionName];
    if (!items) {
        // try substring match
        const key = Object.keys(requirementsMap).find(k => optionName.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(optionName.toLowerCase()));
        if (key) items = requirementsMap[key];
    }
    if (!items) items = ['No requirements defined.'];
    
    items.forEach((text, idx) => {
        const li = document.createElement('li');
        const cb = document.createElement('div');
        cb.id = `req-${optionName}-${idx}`;
        const label = document.createElement('label');
        label.htmlFor = cb.id;
        label.textContent = text;
        li.appendChild(cb);
        li.appendChild(label);
        list.appendChild(li);
    });
    container.appendChild(list);
    // Make the requirements container visible
    container.style.display = 'block';
}

// Brand color management for GPU buttons
document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const brandButtons = document.querySelectorAll('.gpu-buttons button');
    
    // Set up a map to easily look up brand colors
    const brandColorMap = {
        'intel': { primary: 'var(--intel-primary)', secondary: 'var(--intel-secondary)' },
        'amd': { primary: 'var(--amd-primary)', secondary: 'var(--amd-secondary)' },
        'nvidia': { primary: 'var(--nvidia-primary)', secondary: 'var(--nvidia-secondary)' },
    };

    /**
     * Updates the main CSS variables to the colors of the selected brand.
     * @param {string} brand - The brand identifier ('intel', 'amd', 'nvidia').
     */
    function setActiveBrandColors(brand) {
        const colors = brandColorMap[brand];
        if (colors) {
            root.style.setProperty('--primary-color', colors.primary);
            root.style.setProperty('--secondary-color', colors.secondary);
        }
    }

    // Attach event listeners to all brand buttons
    brandButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const selectedBrand = event.currentTarget.getAttribute('data-brand');
            setActiveBrandColors(selectedBrand);
        });
    });
});

// Save current todo list
function saveTodoList() {
    const listName = document.getElementById('listName').value.trim();
    const taskList = document.getElementById('taskList');
    
    if (!listName) {
        alert('Please enter a list name');
        return;
    }
    
    if (taskList.children.length === 0) {
        alert('No tasks to save');
        return;
    }
    
    // Get all tasks
    const tasks = [];
    taskList.querySelectorAll('li').forEach(li => {
        const taskText = li.querySelector('.task-text').textContent;
        const isCompleted = li.classList.contains('completed');
        tasks.push({ text: taskText, completed: isCompleted });
    });
    
    // Create saved list object
    const savedList = {
        name: listName,
        tasks: tasks,
        date: new Date().toLocaleString(),
        timestamp: Date.now()
    };
    
    // Get existing saved lists
    let savedLists = JSON.parse(localStorage.getItem('savedTodoLists') || '[]');
    
    // Check if name already exists
    const existingIndex = savedLists.findIndex(list => list.name === listName);
    if (existingIndex !== -1) {
        if (!confirm(`A list named "${listName}" already exists. Overwrite it?`)) {
            return;
        }
        savedLists[existingIndex] = savedList;
    } else {
        savedLists.push(savedList);
    }
    
    // Save to localStorage
    localStorage.setItem('savedTodoLists', JSON.stringify(savedLists));
    
    // Clear input
    document.getElementById('listName').value = '';
    
    // Refresh displayed lists
    displaySavedLists();
    
    alert(`List "${listName}" saved successfully!`);
}

// Display all saved lists
function displaySavedLists() {
    const container = document.getElementById('saved-lists-container');
    const savedLists = JSON.parse(localStorage.getItem('savedTodoLists') || '[]');
    
    if (savedLists.length === 0) {
        container.innerHTML = '<div class="no-saved-lists">No saved lists yet</div>';
        return;
    }
    
    // Sort by most recent first
    savedLists.sort((a, b) => b.timestamp - a.timestamp);
    
    container.innerHTML = savedLists.map(list => `
        <div class="saved-list-item" onclick="loadSavedList('${list.name}')">
            <div class="saved-list-content">
                <div class="saved-list-header">
                    <span class="saved-list-name">${list.name}</span>
                    <span class="saved-list-date">${list.date}</span>
                </div>
                <div class="saved-list-tasks">
                    ${list.tasks.length}
                    ${list.tasks.filter(task => task.completed).length > 0 ? 
                        ` (${list.tasks.filter(task => task.completed).length} completed)` : ''}
                </div>
            </div>
            <button class="delete-saved-list" onclick="event.stopPropagation(); deleteSavedList('${list.name}')">
                Delete
            </button>
        </div>
    `).join('');
}

// Load a saved list
function loadSavedList(listName) {
    const savedLists = JSON.parse(localStorage.getItem('savedTodoLists') || '[]');
    const list = savedLists.find(l => l.name === listName);
    
    if (!list) {
        alert('List not found');
        return;
    }
    
    if (!confirm(`Load list "${listName}"? This will replace your current tasks.`)) {
        return;
    }
    
    // Clear current tasks
    document.getElementById('taskList').innerHTML = '';
    
    // Add saved tasks
    list.tasks.forEach(task => {
        addTask(task.text, task.completed);
    });
    
    alert(`List "${listName}" loaded successfully!`);
}

// Delete a saved list
function deleteSavedList(listName) {
    if (!confirm(`Are you sure you want to delete "${listName}"?`)) {
        return;
    }
    
    let savedLists = JSON.parse(localStorage.getItem('savedTodoLists') || '[]');
    savedLists = savedLists.filter(list => list.name !== listName);
    
    localStorage.setItem('savedTodoLists', JSON.stringify(savedLists));
    displaySavedLists();
    
    alert(`List "${listName}" deleted successfully!`);
}

// Toggle task completion
function toggleComplete(element) {
    const li = element.closest('li');
    if (!li) return;
    li.classList.toggle('completed');
}

// Delete the task's <li>
function deleteTask(btn) {
    const li = btn.closest('li');
    if (!li) return;
    li.remove();
}

// Modified addTask function to accept pre-filled data
function addTask(taskText = null, isCompleted = false) {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    const task = taskText || taskInput.value.trim();
    if (!task) return;

    const li = document.createElement('li');
    if (isCompleted) {
        li.classList.add('completed');
    }
    
    li.innerHTML = `
        <span class="task-text" onclick="toggleComplete(this)">${task}</span>
        <div class="task-actions">
            <button class="complete-btn" onclick="toggleComplete(this)">✓</button>
            <button class="delete-btn" onclick="deleteTask(this)">✕</button>
        </div>
    `;
    
    taskList.appendChild(li);

    if (!taskText) {
        taskInput.value = '';
    }
}

// Create new list function - clears all current tasks
function createNewList() {
    const taskList = document.getElementById('taskList');
    
    // Check if there are any tasks to clear
    if (taskList.children.length === 0) {
        // No tasks to clear, just show a message
        alert('Ready to create a new list! Start adding tasks.');
        return;
    }
    
    // Confirm before clearing tasks
    if (confirm('This will clear all current tasks and create a new list. Are you sure?')) {
        // Clear all tasks
        taskList.innerHTML = '';
        
        // Clear the task input field
        const taskInput = document.getElementById('taskInput');
        if (taskInput) {
            taskInput.value = '';
        }
        
        // Clear the list name input field
        const listNameInput = document.getElementById('listName');
        if (listNameInput) {
            listNameInput.value = '';
        }
        
        // Hide requirements section if visible
        const requirements = document.getElementById('requirements');
        if (requirements) {
            requirements.style.display = 'none';
        }
        
        // Hide GPU options if visible
        const gpuOptions = document.getElementById('gpu-options');
        if (gpuOptions) {
            gpuOptions.style.display = 'none';
        }
        
        alert('New list created! You can now start adding tasks.');
    }
}

// Ensures the list name is unique by appending " (2)", " (3)", etc. if needed
function getUniqueListName(baseName, savedLists) {
    let name = baseName;
    let counter = 2;
    const names = new Set(savedLists.map(l => l.name));
    while (names.has(name)) {
        name = `${baseName} (${counter})`;
        counter++;
    }
    return name;
}

// Initialize todo list functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    displaySavedLists();
    
    // Add enter key listener for task input
    const taskInput = document.getElementById('taskInput');
    if (taskInput) {
        taskInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') addTask();
        });
    }
});