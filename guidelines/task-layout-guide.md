# Task Layout System

This document explains how to use the new task layout system that provides consistent top and bottom sections while allowing flexible interactive content.

## Overview

The task layout system consists of:
- **Shared Layout**: `_layouts/task.html` - provides consistent navigation, header, and footer
- **Custom Content**: Individual task markdown files with YAML front matter for configuration
- **Flexible Styling**: Task-specific CSS and JavaScript injected via front matter

## Layout Structure

```
┌─────────────────────────────────────┐
│ Navigation Bar (consistent)         │  ← Shared
├─────────────────────────────────────┤
│ Header & Description (configurable) │  ← Shared but configurable
├─────────────────────────────────────┤
│ Task Info Panel (optional)          │  ← Configurable
├─────────────────────────────────────┤
│ Interactive Content Area            │  ← Custom per task
├─────────────────────────────────────┤
│ Footer/Reset Section (consistent)   │  ← Shared
└─────────────────────────────────────┘
```

## Creating a New Task

### 1. Basic Task File Structure

Create a new markdown file (e.g., `task-X-name/index.md`) with this structure:

```yaml
---
layout: task
title: "Task X: Your Task Title"
description: "Brief description of what the user should do"
task_progress: "Task X of Y"
next_link: "../task-Y/index.html"
next_text: "Next: Task Y →"
# ... additional configuration
---

<!-- Your interactive content goes here -->
<div class="your-interactive-elements">
    <!-- Custom HTML for your specific interaction type -->
</div>
```

### 2. Configuration Options

#### Required Front Matter
```yaml
layout: task                    # Always use 'task'
title: "Your Task Title"       # Main heading
description: "Task description" # Subtitle/instructions
```

#### Navigation Configuration
```yaml
task_progress: "Task 1 of 5"           # Progress indicator
back_link: "../previous-task/"         # Previous task link (optional)
next_link: "../next-task/"             # Next task link (optional)  
next_text: "Next: Task Name →"         # Custom next button text (optional)
```

#### Task Info Panel (Optional)
```yaml
task_info:
  title: "Scenario Context"            # Panel title
  content: |                           # Markdown content (optional)
    Your **markdown** content here
  scenario:                            # Structured scenario info (optional)
    label: "Farm Business:"
    description: "Munson's Pickles..."
  customer_base: "Target audience"     # Additional fields (optional)
  goal:
    label: "Chatbot Goal:"
    description: "Goal description"
```

#### Custom Styling
```yaml
custom_styles: |
  .your-class {
      color: blue;
      border: 1px solid #ccc;
  }
  .another-class {
      background: #f0f0f0;
  }
```

#### Custom JavaScript
```yaml
custom_javascript: |
  function yourFunction() {
      console.log('Custom functionality');
  }
  
  // Initialize your interactive elements
  document.addEventListener('DOMContentLoaded', function() {
      // Setup code here
  });
```

## Interaction Types Examples

### 1. Selection Grid (like Task 1)
Perfect for multiple choice selections with cards:

```yaml
custom_styles: |
  .selection-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 15px;
  }
  .selection-card {
      border: 2px solid #d0d7de;
      border-radius: 6px;
      padding: 18px;
      cursor: pointer;
      transition: all 0.2s;
  }
  .selection-card.selected {
      border-color: #0969da;
      background: #dbeafe;
  }
```

### 2. Comparison Interface (like Task 2)
Good for A/B testing or response evaluation:

```yaml
custom_styles: |
  .comparison-section {
      border: 1px solid #d0d7de;
      border-radius: 6px;
      margin: 20px 0;
  }
  .comparison-options {
      display: flex;
      gap: 10px;
  }
  .option {
      flex: 1;
      padding: 20px;
      border: 2px solid #e5e7eb;
      cursor: pointer;
  }
  .option.selected {
      border-color: #0969da;
      background: #dbeafe;
  }
```

### 3. Interactive Dashboard (like Task 3)
For data visualization and metric selection:

```yaml
custom_styles: |
  .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
  }
  .metric-card {
      border: 2px solid #d0d7de;
      border-radius: 8px;
      padding: 20px;
      cursor: pointer;
  }
  .dashboard-preview {
      background: #fff;
      border: 2px solid #0969da;
      border-radius: 8px;
      padding: 20px;
      display: none;
  }
  .dashboard-preview.show {
      display: block;
  }
```

## Shared CSS Classes

The task layout provides these common classes:

### Buttons
- `.submit-btn` - Primary action button
- `.reset-btn` - Reset/reload button  
- `.next-task` - Navigation to next task

### Feedback Sections
- `.feedback` - Main feedback container (hidden by default)
- `.feedback.show` - Visible feedback
- `.score-section` - Score display area
- `.correct-section` - Correct answer feedback
- `.incorrect-section` - Incorrect answer feedback
- `.missed-section` - Missed answer feedback
- `.overall-feedback` - Summary feedback

### Layout
- `.interactive-content` - Main content area
- `.navigation` - Top navigation bar
- `.header` - Title and description area
- `.task-info` - Contextual information panel
- `.reset-section` - Footer area

## Best Practices

### 1. Consistent Feedback Pattern
Always provide feedback with this structure:
```javascript
function generateFeedback() {
    let feedbackHTML = '<h3>Your Results</h3>';
    feedbackHTML += '<div class="score-section">Score: X/Y</div>';
    // Add correct/incorrect sections
    feedbackHTML += '<div class="overall-feedback">Summary message</div>';
    feedbackHTML += '<a href="next-task" class="next-task">Continue</a>';
    document.getElementById('feedback').innerHTML = feedbackHTML;
}
```

### 2. Disable Submit Until Ready
```javascript
function updateSubmitButton() {
    const isReady = /* your validation logic */;
    document.getElementById('submitBtn').disabled = !isReady;
}
```

### 3. Show/Hide Pattern
```javascript
function showResults() {
    document.getElementById('feedback').classList.add('show');
    document.querySelector('.submit-section').style.display = 'none';
}
```

## Converting Existing Tasks

To convert an existing HTML task file:

1. Extract the YAML configuration from existing styles/structure
2. Move custom CSS to `custom_styles` in front matter
3. Move custom JavaScript to `custom_javascript` in front matter
4. Remove navigation, header, footer HTML (now handled by layout)
5. Keep only the core interactive content in the markdown body
6. Update any hardcoded links to use front matter configuration

## File Organization

```
Labs/recipe-chatbot-mockups/
├── task-1-user-needs/
│   ├── index.md          ← New layout-based version
│   └── index.html        ← Original (can be removed)
├── task-2-intent-matching/
│   ├── index.md          ← New layout-based version
│   └── index.html        ← Original (can be removed)
└── _layouts/
    └── task.html         ← Shared layout
```

This system provides maximum flexibility while ensuring consistency across all tasks.