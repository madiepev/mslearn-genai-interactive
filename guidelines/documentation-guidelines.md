# Documentation Guidelines

This document outlines the structure and guidelines for the mslearn-genai-interactive repository.

## Repository Structure

This repository contains interactive hands-on exercises designed to support Microsoft Learn training in Generative AI evaluation and best practices.

### Root Level Files

```
├── _config.yml             # Jekyll site configuration
├── index.md                # Main landing page with auto-generated lab links
├── LICENSE                 # Repository license
└── README.md              # Repository overview and setup instructions
```

### Directory Structure

```
├── guidelines/             # Documentation and guidelines
│   ├── documentation-guidelines.md  # This file - repo structure and docs standards
│   └── general-guidelines.md       # General contribution guidelines
│
├── _layouts/               # Jekyll layout templates
│   └── instruction.html           # Layout for instruction pages
│
├── Instructions/           # Lab instruction pages (Jekyll auto-discovery)
│   ├── _template.md               # Template for new instruction pages
│   └── recipe-chatbot-index.md    # Recipe chatbot lab overview page
│
└── Labs/                  # Interactive lab content and exercises
    └── recipe-chatbot-mockups/     # Recipe chatbot evaluation exercises
        ├── README.md               # Lab-specific documentation and task guide
        ├── task-1.html             # Task 1: Identify User Needs
        ├── task-2.html             # Task 2: Evaluate Response Quality
        ├── task-3.html             # Task 3: Select Evaluation Metrics
        ├── task-4.html             # Task 4: Create Smoke Test Set
        └── task-5.html             # Task 5: Manual ACRUE Evaluation
```

## Jekyll Site Structure

This repository uses Jekyll with the MicrosoftLearning/Jekyll-Theme for consistent styling and functionality.

### Auto-Discovery Pattern

The main `index.md` uses Jekyll liquid templating to automatically discover and list labs:

```liquid
{% assign labs = site.pages | where_exp:"page", "page.url contains '/Instructions'" %}
{% for activity in labs %}
| [{{ activity.lab.title }}{% if activity.lab.type %} - {{ activity.lab.type }}{% endif %}]({{ site.github.url }}{{ activity.url }}) |
{% endfor %}
```

### Required Front Matter for Labs

Lab pages in the `/Instructions` folder must include proper front matter to be auto-discovered:

```yaml
---
lab:
  title: "Your Lab Title"
  type: "Lab Type (e.g., Interactive Lab)"
layout: instruction
---
```

Note: The layout should use `instruction` which corresponds to the template in `_layouts/instruction.html`.

## Navigation Structure

### Primary Navigation Flow

1. **Main Index** (`index.md`)
   - Auto-generates list of all labs from `/Instructions` folder
   - Users click on lab titles to access individual exercises

2. **Lab Overview Pages** (`/Instructions/*.md`)
   - Provide lab context and learning objectives using YAML front matter
   - Link to individual tasks in `/Labs` folder
   - Use the `instruction` layout template for consistent styling

3. **Interactive Tasks** (`/Labs/*/task-*.html`)
   - Standalone HTML files with embedded CSS/JavaScript
   - Navigation between tasks using relative paths
   - "Back to Overview" links to parent lab page

### Navigation Conventions

- **Between Tasks**: Use relative paths (`task-X.html`)
- **Back to Lab Overview**: Link to the instruction page (`../../Instructions/lab-name.html`)
- **Inter-task Navigation**: Include previous/next/overview links in navigation bars
- **Flat Structure**: All task files are in the same directory for simplified navigation

## Content Guidelines

### Interactive Lab Standards

#### Structure Requirements

1. **HTML5 DOCTYPE**: All lab pages must use `<!DOCTYPE html>`
2. **Responsive Design**: Include viewport meta tag for mobile compatibility
3. **Consistent Styling**: Use the established design system with sentence case formatting
4. **Navigation Bar**: Standard navigation with previous/next/overview links
5. **Standalone Files**: Each task is a complete HTML file with embedded CSS and JavaScript
6. **Flat File Structure**: All task files are in the same directory for simplified navigation

#### Styling Standards

- **Text Formatting**: All content uses sentence case (not title case)
- **Navigation**: Consistent "Previous", "Next", and "Overview" button text
- **Interactive Elements**: Standardized button styling and hover states
- **Task Information**: Yellow-highlighted boxes for key task instructions
- **Typography**: Clean, readable fonts with proper hierarchy
- **Responsive Design**: Mobile-friendly layouts

#### JavaScript Standards

- **Vanilla JavaScript**: No external dependencies
- **Immediate Feedback**: Provide instant validation and feedback
- **Progress Tracking**: Track user progress through exercises
- **Reset Functionality**: Allow users to restart exercises
- **Accessibility**: Ensure keyboard navigation and screen reader compatibility

### Content Organization

#### Learning Objectives

Each lab should clearly state:
- What users will learn
- Prerequisites (if any)
- Estimated time to complete
- Learning outcomes

#### Task Structure

Each task should include:
- Clear instructions
- Context/scenario
- Interactive elements
- Immediate feedback
- Progress indicators
- Navigation to next steps

### File Naming Conventions

### Directories
- Use lowercase with hyphens: `recipe-chatbot-mockups`
- Be descriptive and specific
- Group related content logically

### Files
- Task files: `task-1.html`, `task-2.html`, etc. (flat structure in lab directory)
- Instruction files: `lab-name-index.md` in `/Instructions` folder
- Use descriptive but concise names
- Maintain consistent numbering for tasks

### URLs
- Lab overview pages: `/Instructions/lab-name-index.html`
- Task pages: `/Labs/lab-name/task-X.html`
- Use Jekyll permalinks for clean URLs

## Content Maintenance

### Adding New Labs

1. Create lab content in `/Labs/lab-name/` directory using flat structure (task-1.html, task-2.html, etc.)
2. Create overview page in `/Instructions/lab-name-index.md` with proper YAML front matter
3. Follow the new lab creation guidelines in `guidelines/new-lab-creation-guidelines.md`
4. Ensure navigation links are correctly configured for flat file structure
5. Test all interactive functionality across devices
6. Update this documentation if new patterns are introduced

### Updating Existing Labs

1. Maintain existing URL structure to avoid broken links
2. Test all navigation paths after changes (especially relative links in flat structure)
3. Ensure responsive design across devices
4. Validate HTML and check for JavaScript errors
5. Verify sentence case formatting is maintained throughout
6. Update README.md documentation to reflect any structural changes

### Quality Checklist

- [ ] Front matter includes required lab metadata using `instruction` layout
- [ ] All navigation links work correctly in flat file structure
- [ ] Interactive elements provide immediate feedback
- [ ] Content is accessible and responsive
- [ ] Consistent sentence case formatting throughout
- [ ] Standardized navigation with "Previous", "Next", "Overview" buttons
- [ ] Task information appears in highlighted boxes
- [ ] Reset functionality works
- [ ] No JavaScript errors in console
- [ ] Clear learning objectives stated in README
- [ ] Task descriptions follow the structured format (header, tagline, detailed task box)
- [ ] README.md includes comprehensive task guidance