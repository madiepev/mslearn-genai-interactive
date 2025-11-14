# New Lab Creation Guidelines

This document provides comprehensive guidelines for creating new interactive labs in the mslearn-genai-interactive repository.

## Overview

When creating a new lab, you'll need to create several components that work together to provide a cohesive learning experience. This guide covers the complete process from initial planning to final validation.

## Lab Components

Each new lab consists of:

1. **Lab Directory**: `/Labs/lab-name/` containing all interactive content
2. **README.md**: Comprehensive lab documentation and task guide
3. **Task Files**: Individual HTML files for each interactive exercise (`task-1.html`, `task-2.html`, etc.)
4. **Overview Page**: Jekyll page in `/Instructions/` for auto-discovery and navigation

## Step-by-Step Creation Process

### 1. Planning Phase

Before creating any files:

- [ ] Define clear learning objectives
- [ ] Identify the target audience and prerequisite knowledge
- [ ] Plan the number of tasks and their progression
- [ ] Choose a realistic scenario that connects to real-world applications
- [ ] Estimate completion time for each task

### 2. Create Lab Directory Structure

Create the main lab directory:
```
/Labs/your-lab-name/
├── README.md
├── task-1.html
├── task-2.html
├── task-3.html
└── ... (additional tasks)
```

**Naming Convention**: Use lowercase with hyphens (e.g., `ai-safety-evaluation`, `prompt-engineering-basics`)

### 3. Create Lab README.md

#### Required Structure

```markdown
# [Lab Name] 
Brief description of what learners will accomplish through the lab exercises.

## Scenario

**[Scenario Context]**  
Brief description of the business/technical scenario learners will work within.

**Your role:** [Role Description] - Define the learner's perspective and responsibilities.

## Tasks

### Task [N]: [Task Title]
Brief summary of what the task accomplishes

> **Your task:** [Detailed task description explaining what the learner needs to do, why it matters, and how it connects to the scenario. This should be comprehensive enough to set clear expectations.]

**Method:** [Brief description of the interaction method/format]  
**Success criteria:** [Clear description of what constitutes successful completion]  

## Exercise information

**Format:** [Description of exercise format]  
**Duration:** [Estimated time to complete]  
**Flow:** [Any specific guidance about task order or navigation]
```

#### Content Guidelines

**Title and Description Standards**:
- Use sentence case formatting
- Be descriptive and specific
- Focus on hands-on learning outcomes
- One clear sentence explaining what learners will accomplish

**Scenario Requirements**:
- Provide realistic, relatable business or technical context
- Clearly define the learner's role and responsibilities
- Ensure relevance to real-world AI/ML applications
- Include enough detail to make the scenario feel authentic

**Task Documentation Standards**:

- **Task Titles**: Use action-oriented, descriptive titles that clearly indicate the learning objective
- **Task Summaries**: Provide a brief, high-level description of what the task accomplishes
- **Task Descriptions**: 
  - Use the blockquote format (`> **Your task:**`) for detailed descriptions
  - Explain the "what," "why," and "how" of the task
  - Connect the task to the overall scenario and learning objectives
  - Be specific about what learners will evaluate, analyze, or create

- **Method Documentation**:
  - Describe the interaction format (multiple choice, drag-and-drop, comparison, etc.)
  - Include the number of options, scenarios, or items when relevant
  - Specify any tools or frameworks being used

- **Success Criteria**:
  - Define clear, measurable outcomes for successful completion
  - Include specific metrics or benchmarks when applicable
  - Mention any tolerance ranges for subjective evaluations

**Exercise Information Standards**:
- **Format**: Describe whether exercises are interactive, hands-on, simulation-based, etc.
- **Duration**: Provide realistic time estimates in ranges (e.g., "25-30 minutes")
- **Flow**: Include any dependencies between tasks or recommended completion order

### 4. Create Task HTML Files

Each task should be a standalone HTML file with:

#### Required Elements
- **HTML5 DOCTYPE**: `<!DOCTYPE html>`
- **Responsive Design**: Include viewport meta tag for mobile compatibility
- **Navigation Bar**: Standard navigation with previous/next/overview links
- **Task Content**: Interactive elements with immediate feedback
- **Embedded Styling**: All CSS included in the file
- **Embedded JavaScript**: All functionality included in the file

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

#### Navigation Structure
- **Between Tasks**: Use relative paths (`task-2.html`, `task-3.html`)
- **Back to Lab Overview**: Link to the instruction page (`../../Instructions/lab-name-index.html`)
- **Previous/Next Navigation**: Include navigation between consecutive tasks
- **Overview Link**: Always provide a way back to the lab overview

### 5. Create Instruction Overview Page

Create a Jekyll page in `/Instructions/lab-name-index.md`:

```markdown
---
lab:
  title: "Your Lab Title"
  type: "Interactive Lab"
layout: instruction
---

# Your Lab Title

[Brief description and overview of the lab]

## Learning Objectives

- Objective 1
- Objective 2
- Objective 3

## Tasks

1. [Task 1: Title](../Labs/lab-name/task-1.html)
2. [Task 2: Title](../Labs/lab-name/task-2.html)
3. [Task 3: Title](../Labs/lab-name/task-3.html)

## Prerequisites

[Any required knowledge or setup]

## Estimated Duration

[Time estimate for completing all tasks]
```

## Content Quality Standards

### Tone and Voice
- Use active voice and direct language
- Address the learner directly using "you" and "your"
- Maintain professional but approachable tone
- Focus on practical application and real-world relevance

### Clarity and Accessibility
- Use clear, jargon-free language
- Define technical terms when first introduced
- Break complex concepts into digestible steps
- Ensure content is accessible to the target audience level

### Consistency Standards
- Follow the established formatting patterns exactly
- Use consistent terminology throughout all tasks
- Maintain alignment between README descriptions and actual task content
- Ensure task numbering matches HTML file names

## Validation and Testing

### Pre-Publication Checklist

**README.md Validation**:
- [ ] Title follows sentence case formatting
- [ ] Description clearly states learning outcome
- [ ] Scenario provides realistic business/technical context
- [ ] Role definition is clear and specific
- [ ] All tasks include title, summary, detailed description, method, and success criteria
- [ ] Task descriptions use proper blockquote formatting
- [ ] Exercise information includes format, duration, and flow guidance
- [ ] Content is free of typos and grammatical errors
- [ ] Technical terminology is accurate and properly explained
- [ ] Task numbering aligns with HTML file structure
- [ ] Success criteria are measurable and realistic

**HTML Task Files Validation**:
- [ ] All files use HTML5 DOCTYPE
- [ ] Responsive design with proper viewport meta tag
- [ ] Navigation links work correctly in flat file structure
- [ ] Interactive elements provide immediate feedback
- [ ] Content is accessible and responsive across devices
- [ ] Consistent sentence case formatting throughout
- [ ] Standardized navigation with "Previous", "Next", "Overview" buttons
- [ ] Task information appears in highlighted boxes
- [ ] Reset functionality works properly
- [ ] No JavaScript errors in console
- [ ] All relative paths are correct

**Jekyll Integration**:
- [ ] Instruction page has proper YAML front matter with `instruction` layout
- [ ] Lab appears correctly in main index auto-discovery
- [ ] All inter-page navigation works
- [ ] Jekyll builds successfully without errors

### Testing Requirements

**Cross-Device Testing**:
- Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- Test on mobile devices (iOS Safari, Android Chrome)
- Verify responsive design and touch interactions
- Check that all content is readable and accessible

**Functionality Testing**:
- Verify all interactive elements work as expected
- Test navigation between tasks and back to overview
- Confirm immediate feedback mechanisms
- Test reset functionality
- Validate progress tracking (if implemented)

**Content Review**:
- Proofread all text for grammar and spelling
- Verify technical accuracy of all content
- Ensure learning objectives are met by task completion
- Check that scenarios are realistic and engaging

## Best Practices

### Content Development
- Start with clear learning objectives and work backward
- Use realistic scenarios that learners can relate to
- Provide immediate, constructive feedback
- Include variety in task types to maintain engagement
- Test early and often with target audience

### Technical Implementation
- Keep files self-contained for easy deployment
- Use semantic HTML for better accessibility
- Implement progressive enhancement for JavaScript features
- Optimize for fast loading on various connection speeds
- Follow web accessibility guidelines (WCAG)

### Maintenance Considerations
- Write clean, commented code for future maintainers
- Use consistent naming conventions throughout
- Document any custom functionality or dependencies
- Plan for easy content updates and modifications
- Consider internationalization if applicable

## Common Pitfalls to Avoid

- **Broken Navigation**: Always test all navigation links after creation
- **Inconsistent Styling**: Follow the established design system exactly
- **Missing Mobile Support**: Ensure responsive design from the start
- **Unclear Instructions**: Be specific and actionable in task descriptions
- **Missing Validation**: Always include the validation checklist review
- **Poor Accessibility**: Test with keyboard navigation and screen readers
- **Overly Complex Tasks**: Keep individual tasks focused and achievable
- **Missing Context**: Always provide sufficient scenario background

## Getting Help

- Review existing labs in `/Labs/` for examples and patterns
- Refer to the main documentation guidelines for Jekyll and navigation requirements
- Test thoroughly before submitting for review
- Consider getting feedback from target audience members during development

## Version Control and Collaboration

- Create feature branches for new lab development
- Use descriptive commit messages
- Include screenshots or demo videos in pull requests
- Request review from subject matter experts
- Test the complete integration before merging to main branch