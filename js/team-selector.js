// Team dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const teamDropdown = document.getElementById('teamDropdown');
    const floatingTeamDropdown = document.getElementById('floatingTeamDropdown');
    const floatingTeamSelector = document.getElementById('floatingTeamSelector');
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
    
    // Function to sync dropdown values
    function syncDropdowns(selectedValue) {
        teamDropdown.value = selectedValue;
        floatingTeamDropdown.value = selectedValue;
        changeTeamColor(selectedValue);
    }
    
    // Load saved team selection or default to AMD
    const savedTeam = localStorage.getItem('selectedTeam') || 'amd';
    syncDropdowns(savedTeam);
    
    // Add event listeners for both dropdowns
    teamDropdown.addEventListener('change', function() {
        syncDropdowns(this.value);
    });
    
    floatingTeamDropdown.addEventListener('change', function() {
        syncDropdowns(this.value);
    });
    
    // Floating team selector visibility on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const navbarHeight = navbar.offsetHeight;
        
        // Show floating selector when scrolled past navbar
        if (scrollTop > navbarHeight) {
            floatingTeamSelector.classList.add('show');
        } else {
            floatingTeamSelector.classList.remove('show');
        }
        
        lastScrollTop = scrollTop;
    });
});