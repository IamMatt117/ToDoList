# GPU Quest

**Find Your Perfect Graphics Card with Interactive Planning Tools**

GPU Quest is a comprehensive web application designed to help users plan and track their journey toward acquiring their dream graphics card. Through interactive to-do lists, detailed requirements tracking, and brand-specific customization, users can organize their GPU upgrade process efficiently.

## 🎯 Features

### Core Functionality
- **Interactive To-Do Lists**: Create, manage, and track tasks related to GPU acquisition
- **GPU Requirements Tracking**: Automatically generated requirement checklists for specific GPU models
- **Brand Team Selector**: Dynamic theming and content based on Intel, AMD, or NVIDIA preferences
- **Persistent Storage**: Save progress and preferences using localStorage
- **Responsive Design**: Optimized for desktop and mobile devices

### GPU Support
- **Intel Arc Series**: Arc B570, Arc B580
- **AMD Radeon Series**: RX 9060 XT, RX 9070 XT, RX 7900 XT
- **NVIDIA RTX Series**: RTX 5070 TI, RTX 5080, RTX 5090

### Pages & Sections
- **Home**: Project overview and navigation hub
- **Benefits**: Explanation of why to use planning tools for GPU acquisition
- **To-Do List**: Interactive task management with GPU-specific requirements
- **Examples**: Showcase of supported GPU models with detailed specifications

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

### Installation
1. Clone or download the repository
2. Open `index.html` in your web browser
3. Start planning your GPU upgrade journey!

### Usage
1. **Select Your Team**: Choose Intel, AMD, or NVIDIA from the dropdown to customize the experience
2. **Explore Benefits**: Learn why organized planning helps with GPU acquisition
3. **Create To-Do Lists**: Navigate to the To-Do List page to start tracking your progress
4. **Set GPU Goals**: Select your target GPU to see specific requirements
5. **Track Progress**: Check off completed tasks and save your progress

## 📁 Project Structure

```
Website/
├── index.html              # Main landing page
├── README.md              # Project documentation
├── .gitignore            # Git ignore rules
├── css/                  # Stylesheets
│   ├── styles.css        # Main page styles
│   ├── benefits.css      # Benefits page styles
│   ├── examples.css      # Examples page styles
│   └── todo.css          # To-do list page styles
├── js/                   # JavaScript functionality
│   ├── team-selector.js  # Brand selection and theming
│   └── todo-list.js      # To-do list management
├── pages/                # Additional HTML pages
│   ├── benefits.html     # Benefits explanation page
│   ├── examples.html     # GPU examples showcase
│   └── toDoList.html     # Interactive to-do list
└── images/               # GPU images and assets
    ├── 5070 ti.png
    ├── 9070 xt.webp
    ├── RTX5080-3QTR-Back-Left-small.png
    └── [additional GPU images...]
```

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup with accessibility considerations
- **CSS3**: Custom styling with CSS variables for dynamic theming
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Bootstrap 5.3.8**: Responsive grid system and UI components

### Key Features Implementation
- **CSS Custom Properties**: Dynamic brand theming (Intel blue, AMD red, NVIDIA green)
- **LocalStorage API**: Persistent user preferences and progress tracking
- **Responsive Design**: Mobile-first approach with flexible layouts
- **Progressive Enhancement**: Core functionality works without JavaScript

### Dependencies
- **Bootstrap CSS & JS**: Loaded via CDN for responsive components
- **No build tools required**: Pure HTML/CSS/JS implementation
- **No server dependencies**: Runs entirely in the browser

## 🎨 Design & Theming

### Brand-Specific Theming
The application features dynamic theming that changes based on the selected GPU manufacturer:

- **Intel**: Blue color scheme (#0071c5)
- **AMD**: Red color scheme (#ed1c24) 
- **NVIDIA**: Green color scheme (#76b900)

### Responsive Design
- **Mobile-First**: Optimized for mobile devices with progressive enhancement
- **Flexible Layouts**: CSS Grid and Flexbox for adaptive layouts
- **Touch-Friendly**: Large touch targets and intuitive navigation
- **Cross-Browser**: Compatible with all modern browsers

## 📱 Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **ARIA Labels**: Screen reader support for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility for all features
- **Color Contrast**: High contrast ratios for better readability
- **Responsive Text**: Scalable fonts that work across devices

## 🔧 Development

### Local Development
1. Clone the repository to your local machine
2. Open the project folder in your preferred code editor
3. Launch `index.html` in a web browser or use a local development server
4. Make changes and refresh the browser to see updates

### File Organization
- **Shared Styles**: Common navigation and layout styles in `css/styles.css`
- **Page-Specific Styles**: Individual CSS files for each page's unique styling
- **Modular JavaScript**: Separate files for different functionality (team selection, to-do management)
- **Asset Management**: Organized image directory with GPU product photos

## 🤝 Contributing

This project welcomes contributions! Areas for potential enhancement:
- Additional GPU models and manufacturers
- Enhanced accessibility features
- Mobile app version
- Integration with GPU pricing APIs
- Advanced filtering and comparison tools

## 📄 License

This project is open source and available under standard web development practices.

## 🎮 About GPU Quest

GPU Quest was created to simplify the often overwhelming process of planning a graphics card upgrade. By providing structured to-do lists, requirement tracking, and brand-specific guidance, users can approach their GPU acquisition with confidence and organization.

Whether you're a gaming enthusiast, content creator, or professional developer, GPU Quest helps you navigate the technical requirements, budget considerations, and compatibility checks needed for a successful GPU upgrade.

---

**Ready to start your GPU quest?** Open `index.html` and begin planning your perfect graphics card upgrade today!