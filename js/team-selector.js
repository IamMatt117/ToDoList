// Team dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const teamDropdown = document.getElementById('teamDropdown');
    const navbar = document.querySelector('.site-nav');
    const root = document.documentElement;
    
    // Brand color mapping
    const brandColors = {
        'intel': '#0071c5',
        'amd': '#ed1c24',
        'nvidia': '#76b900'
    };
    
    // Function to change background color
    function changeTeamColor(team) {
        const color = brandColors[team];
        if (color) {
            root.style.setProperty('--current-brand-color', color);
            // Save selection to localStorage
            localStorage.setItem('selectedTeam', team);
        }
    }
    
    // Function to update dropdown button text and active state
    function updateDropdownButton(button, value) {
        const teamNames = {
            'intel': 'Intel',
            'amd': 'AMD',
            'nvidia': 'NVIDIA'
        };
        
        button.textContent = teamNames[value];
        button.setAttribute('data-selected', value);
        
        // Update active state in dropdown menu
        const dropdownMenu = button.nextElementSibling;
        if (dropdownMenu) {
            const items = dropdownMenu.querySelectorAll('.team-dropdown-item');
            items.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('data-value') === value) {
                    item.classList.add('active');
                }
            });
        }
    }
    
    // Function to sync dropdown values
    function syncDropdowns(selectedValue) {
        if (teamDropdown) {
            updateDropdownButton(teamDropdown, selectedValue);
        }
        changeTeamColor(selectedValue);
    }
    
    // Load saved team selection or default to AMD
    const savedTeam = localStorage.getItem('selectedTeam') || 'amd';
    syncDropdowns(savedTeam);
    
    // Add event listeners for dropdown items
    function addDropdownItemListeners(dropdown) {
        const dropdownMenu = dropdown.nextElementSibling;
        if (dropdownMenu) {
            const items = dropdownMenu.querySelectorAll('.team-dropdown-item');
            items.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    const selectedValue = this.getAttribute('data-value');
                    syncDropdowns(selectedValue);
                });
            });
        }
    }
    
    if (teamDropdown) {
        addDropdownItemListeners(teamDropdown);
    }
});