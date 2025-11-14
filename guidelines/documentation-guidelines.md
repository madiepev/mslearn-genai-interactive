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
├── Instructions/           # Lab instruction pages (Jekyll auto-discovery)
│   └── recipe-chatbot-index.html   # Recipe chatbot lab overview page
│
└── Labs/                  # Interactive lab content and exercises
    └── recipe-chatbot-mockups/     # Recipe chatbot evaluation exercises
        ├── index.html              # Redirect to main lab page
        ├── README.md               # Lab-specific documentation
        ├── task-1-user-needs/      # Task 1: Identify User Needs
        │   └── index.html
        ├── task-2-intent-matching/ # Task 2: Evaluate Response Quality
        │   └── index.html
        ├── task-3-metrics-selection/ # Task 3: Select Evaluation Metrics
        │   └── index.html
        ├── task-4-test-creation/   # Task 4: Create Smoke Test Set
        │   └── index.html
        └── task-5-acrue-evaluation/ # Task 5: Manual ACRUE Evaluation
            └── index.html
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
permalink: /Instructions/your-lab-file.html
layout: default
---
```

## Navigation Structure

### Primary Navigation Flow

1. **Main Index** (`index.md`)
   - Auto-generates list of all labs from `/Instructions` folder
   - Users click on lab titles to access individual exercises

2. **Lab Overview Pages** (`/Instructions/*.html`)
   - Provide lab context and learning objectives
   - Link to individual tasks in `/Labs` folder
   - Maintain consistent styling and structure

3. **Interactive Tasks** (`/Labs/*/task-*/index.html`)
   - Self-contained HTML files with embedded CSS/JavaScript
   - Navigation between tasks using relative paths
   - "Back to Overview" links to parent lab page

### Navigation Conventions

- **Between Tasks**: Use relative paths (`../task-X/index.html`)
- **Back to Lab Overview**: Use absolute paths from lab root (`../../../Instructions/lab-name.html`)
- **Inter-task Navigation**: Include previous/next task links in navigation bars
- **Completion Links**: Final task should link back to lab overview

## Content Guidelines

### Interactive Lab Standards

#### Structure Requirements

1. **HTML5 DOCTYPE**: All lab pages must use `<!DOCTYPE html>`
2. **Responsive Design**: Include viewport meta tag for mobile compatibility
3. **Consistent Styling**: Use the established design system (blue theme #0969da)
4. **Navigation Bar**: Standard navigation with back/next links
5. **Progress Indicators**: Show task X of Y in navigation

#### Styling Standards

- **Primary Color**: `#0969da` (Microsoft blue)
- **Font Stack**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif`
- **Border Radius**: `6px` for consistency
- **Spacing**: Use multiples of 15px/20px for consistent spacing
- **Hover States**: Provide visual feedback for interactive elements

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

## File Naming Conventions

### Directories
- Use lowercase with hyphens: `recipe-chatbot-mockups`
- Be descriptive and specific
- Group related content logically

### Files
- HTML files: `index.html` in task directories
- Use descriptive task names: `task-1-user-needs`
- Maintain consistent numbering

### URLs
- Lab overview pages: `/Instructions/lab-name.html`
- Task pages: `/Labs/lab-name/task-X-description/index.html`
- Use Jekyll permalinks for clean URLs

## Content Maintenance

### Adding New Labs

1. Create lab content in `/Labs/lab-name/` directory
2. Create overview page in `/Instructions/lab-name.html` with proper front matter
3. Ensure navigation links are correctly configured
4. Test all interactive functionality
5. Update this documentation if new patterns are introduced

### Updating Existing Labs

1. Maintain existing URL structure to avoid broken links
2. Test all navigation paths after changes
3. Ensure responsive design across devices
4. Validate HTML and check for JavaScript errors

### Quality Checklist

- [ ] Front matter includes required lab metadata
- [ ] All navigation links work correctly
- [ ] Interactive elements provide immediate feedback
- [ ] Content is accessible and responsive
- [ ] Consistent styling with design system
- [ ] Progress indicators function properly
- [ ] Reset functionality works
- [ ] No JavaScript errors in console
- [ ] Clear learning objectives stated
- [ ] Completion flow returns to overview