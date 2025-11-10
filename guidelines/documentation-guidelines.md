# Student Lab Documentation Guidelines

## Overview

All lab documentation **MUST** be written in Markdown and deployed via **GitHub Pages**. This ensures students and instructors have easy access to interactive exercises and clear instructions across all learning modules.

## Repository Structure for Learning Labs

### Why GitHub Pages?

- **Student-friendly access**: Simple URLs for students to access labs
- **No setup required**: Works directly from GitHub repository
- **Interactive content**: Supports HTML exercises with immediate feedback
- **Version control**: All lab content is tracked and updateable
- **Mobile responsive**: Works on all devices for flexible learning
- **Free hosting**: No infrastructure costs for educational content

## Required Folder Structure

Every learning repository **MUST** follow this structure:

```
/
├── index.md                       # Main lab listing (GitHub Pages home)
├── Instructions/                  # Individual lab instruction files
│   ├── 01-setup-environment.md
│   ├── 02-build-chatbot.md
│   ├── 03-evaluate-responses.md
│   └── 04-deploy-solution.md
├── Files/                         # Supporting files for labs
│   ├── datasets/
│   ├── templates/
│   └── solutions/
├── Starter/                       # Starter code and assets
│   ├── notebooks/
│   ├── scripts/
│   └── configs/
├── labs/                          # Interactive HTML exercises
│   ├── lab-01-chatbot-basics/
│   │   ├── index.html            # Lab overview page
│   │   ├── task-1-setup/
│   │   │   └── index.html        # Individual task
│   │   ├── task-2-training/
│   │   │   └── index.html
│   │   └── task-3-evaluation/
│   │       └── index.html
│   └── lab-02-advanced-features/
│       ├── index.html
│       └── tasks...
├── _config.yml                    # Jekyll/GitHub Pages configuration
└── README.md                      # Repository overview for GitHub
```

## GitHub Pages Configuration

### Required `_config.yml`

Create `_config.yml` at repository root with this configuration:

```yaml
# GitHub Pages Configuration for Learning Labs
title: "[Course Name] - Hands-on Labs"
description: "Interactive exercises and labs for [Course/Module Name]"
baseurl: "/repo-name" # Replace with your repo name
url: "https://username.github.io" # Replace with your GitHub username/org

# Jekyll settings
markdown: kramdown
theme: minima

# Collections for lab organization
collections:
  instructions:
    output: true
    permalink: /:collection/:name/

# Plugins
plugins:
  - jekyll-feed
  - jekyll-sitemap

# Navigation for students
navigation:
  - title: "All Labs"
    url: "/"
  - title: "Setup Guide"
    url: "/Instructions/00-setup/"
  - title: "Troubleshooting"
    url: "/troubleshooting/"
```
```

## Azure AI Foundry Lab Standards (`/Instructions`)

### Lab Types Supported

**1. Azure AI Foundry Labs (`/Instructions`)**
- **Purpose**: Hands-on Azure resource management and configuration
- **Target**: Students learning cloud platform skills
- **Format**: Step-by-step markdown instructions  
- **Duration**: 30-60 minutes
- **Pattern**: Setup → Configure → Deploy → Test → Cleanup

**2. Interactive Exercise Labs (`/labs`)**
- **Purpose**: Conceptual learning with immediate feedback
- **Target**: Students learning evaluation, theory, and decision-making
- **Format**: HTML with interactive cards and forms
- **Duration**: 15-30 minutes
- **Pattern**: Context → Interaction → Feedback → Learning reinforcement

### Required Front Matter for Azure Labs

```yaml
---
lab:
  title: "Lab [##]: [Descriptive Title]"
  description: "Brief learning objective in 1-2 sentences"
  duration: "45 minutes"
  difficulty: "Beginner|Intermediate|Advanced" 
  order: 1
  type: "azure-hands-on"
---
```

### Azure Lab Template Structure

```markdown
# Lab [##]: [Title]

## Scenario
[Real-world business context that motivates the learning]

## Prerequisites
- Azure subscription with [specific permissions]
- [Required background knowledge]
- [Previous lab completions]

## Learning Objectives
After completing this lab, you will be able to:
- [Specific, measurable skill 1]
- [Specific, measurable skill 2]
- [Specific, measurable skill 3]

This exercise will take approximately **[X]** minutes.

## Exercise 1: [Setup/Create Resources]

### Task Overview
[What students will accomplish in this exercise]

### Steps
1. **[Action Step]**: [Clear instruction with expected outcome]
   ```bash
   az command --parameter value
   ```
   > **Expected Result**: [What should happen]

2. **[Next Step]**: [Continue pattern]
   > **💡 Tip**: [Helpful hint for students]
   > **⚠️ Important**: [Critical warnings]

### Verification
To verify this exercise completed successfully:
- [ ] [Checkpoint 1 - specific and testable]
- [ ] [Checkpoint 2 - specific and testable]

## Exercise 2: [Configuration/Implementation]
[Continue same pattern]

## Exercise 3: [Testing/Validation]
[Continue same pattern]

## Clean up
> **Important**: Clean up resources to avoid unnecessary charges.

[Specific cleanup steps with verification]

## Summary
In this lab, you:
- [Accomplished objective 1]
- [Accomplished objective 2] 
- [Accomplished objective 3]

## Next Steps
- Continue to [Lab X+1: Next Topic](./0X-next-lab.md)
- Explore [related Microsoft Learn module](https://learn.microsoft.com/...)
```

### Azure-Specific Guidelines

#### Resource Management
- **Always include cleanup**: Every lab must have cleanup instructions
- **Cost awareness**: Warn about resource costs and provide cleanup verification
- **Regional considerations**: Include guidance on quota limits and alternative regions
- **Prerequisites validation**: Include Azure subscription and permission checks

#### Code Quality
- **Tested commands**: All Azure CLI/PowerShell commands are verified to work
- **Error handling**: Include troubleshooting for common Azure deployment issues
- **Security practices**: Follow least-privilege access patterns
- **Latest versions**: Use current API versions and service features

#### Student Experience
- **Cloud Shell integration**: Prefer Cloud Shell for consistent environment
- **Step-by-step verification**: Students can validate progress at each major step
- **Alternative paths**: Provide options when primary approach may fail (quotas, etc.)

### Lab Creation Process

1. **Define Learning Objectives**: What specific skills will students gain?
2. **Choose Lab Type**: Azure hands-on vs interactive exercise vs hybrid
3. **Create Scenario**: Real business context that motivates learning
4. **Design Interaction**: Step-by-step tasks vs interactive cards/forms
5. **Write Content**: Follow type-specific templates above
6. **Test Everything**: Manual verification of all steps and interactions
7. **Review & Iterate**: Internal review before publishing
8. **Deploy**: GitHub Pages automatic deployment

## Documentation Standards for Learning Labs

### 1. Main Index Page (`index.md`)

The main index page **MUST** include:

```markdown
---
title: [Course Name] - Hands-on Labs
layout: default
---

# [Course Name] - Interactive Labs

Welcome to the hands-on exercises for [Course/Module Name]. These labs provide practical experience with [technology/concepts].

## Prerequisites

- Azure subscription with [required permissions]
- [Tool/software requirements]
- Basic knowledge of [relevant concepts]

## Lab Exercises

{% assign labs = site.pages | where_exp:"page", "page.url contains '/Instructions'" | sort: 'lab.order' %}
{% for activity in labs %}
### [{{ activity.lab.title }}]({{ site.github.url }}{{ activity.url }})

**Duration:** {{ activity.lab.duration }}  
**Difficulty:** {{ activity.lab.difficulty }}

{{ activity.lab.description }}

[Start Lab]({{ site.github.url }}{{ activity.url }}){: .btn .btn-primary}

---
{% endfor %}

## Interactive Exercises

Some labs include interactive HTML exercises for immediate feedback:

- [Lab 1: Chatbot Evaluation](./labs/lab-01-chatbot-basics/) - Learn evaluation fundamentals
- [Lab 2: Response Quality](./labs/lab-02-response-quality/) - Practice quality assessment

## Support

- Report issues: [GitHub Issues]({{ site.github.repository_url }}/issues)
- Ask questions: [Microsoft Learn Q&A](https://learn.microsoft.com/answers/)
```

### 2. Individual Lab Instructions

Each lab file in `Instructions/` **MUST** follow this format:

```markdown
---
lab:
  title: "Lab [Number]: [Descriptive Title]"
  description: "Brief description of what students will learn"
  duration: "45 minutes"
  difficulty: "Beginner/Intermediate/Advanced"
  order: 1
---

# Lab [Number]: [Title]

## Overview

[2-3 sentences describing the lab objective and what students will accomplish]

## Learning Objectives

After completing this lab, you will be able to:

- [Specific skill/knowledge 1]
- [Specific skill/knowledge 2]
- [Specific skill/knowledge 3]

## Prerequisites

- [Previous lab completions]
- [Required tools/access]
- [Background knowledge needed]

## Estimated Duration

**[X] minutes** (including optional exercises)

---

## Exercise 1: [Task Name]

### Task Overview

[What students will do in this exercise]

### Steps

1. **Step 1**: [Clear instruction with expected outcome]
   ```bash
   # Example command
   az command --parameter value
   ```
   
   > **Expected Result**: [What should happen]

2. **Step 2**: [Next instruction]
   
   > **💡 Tip**: [Helpful hint for students]
   
   > **⚠️ Note**: [Important warning or consideration]

### Verification

To verify this exercise completed successfully:

- [ ] [Checkpoint 1]
- [ ] [Checkpoint 2]
- [ ] [Checkpoint 3]

---

## Exercise 2: [Next Task]

[Continue same pattern]

---

## Cleanup

> **Important**: Clean up resources to avoid unnecessary charges.

1. [Cleanup step 1]
2. [Cleanup step 2]

---

## Summary

In this lab, you:

- [Accomplished task 1]
- [Accomplished task 2]
- [Accomplished task 3]

## Next Steps

- Continue to [Lab X: Next Topic](../0X-next-lab.md)
- Explore [related Microsoft Learn module](https://learn.microsoft.com/...)

## Additional Resources

- [Documentation link 1]
- [Documentation link 2]
- [Community resource]
```

### 3. Interactive HTML Labs

For interactive exercises in `/labs/`, each lab **MUST** include:

#### Lab Overview Page (`labs/lab-name/index.html`)

Use the template from `interactive-html-guidelines.md` with these student-specific additions:

- Clear learning objectives
- Estimated completion time
- Prerequisites check
- Link back to GitHub Pages main index
- Navigation to individual tasks

#### Individual Task Pages

Each task follows the interactive card pattern with:

- **Context section**: Real-world scenario
- **Task section**: Interactive interface (selection cards, forms)
- **Feedback section**: Immediate learning reinforcement
- **Progress section**: Clear next steps

### 4. Supporting Files Organization

#### `Files/` Directory

- **datasets/**: Sample data for exercises
- **templates/**: Starter templates (ARM, Bicep, Python, etc.)
- **solutions/**: Reference implementations (for instructors)

#### `Starter/` Directory

- **notebooks/**: Jupyter notebooks with partially completed code
- **scripts/**: Shell scripts and automation tools
- **configs/**: Configuration files and settings templates
  features:
    - navigation.instant
    - navigation.tracking
    - navigation.tabs
    - navigation.sections
    - navigation.expand
    - navigation.top
    - search.suggest
    - search.highlight
    - content.code.copy
    - content.code.annotate

plugins:
  - search
  - git-revision-date-localized:
      enable_creation_date: true
  - minify:
      minify_html: true

markdown_extensions:
  - admonition
  - pymdownx.details
  - pymdownx.superfences
  - pymdownx.tabbed:
      alternate_style: true
  - pymdownx.highlight:
      anchor_linenums: true
  - pymdownx.inlinehilite
  - pymdownx.snippets
  - tables
  - attr_list
  - md_in_html
  - toc:
      permalink: true

nav:
  - Home: index.md
  - Getting Started:
      - Installation: getting-started/installation.md
      - Quick Start: getting-started/quick-start.md
      - Configuration: getting-started/configuration.md
  - Architecture:
      - Overview: architecture/overview.md
      - System Design: architecture/system-design.md
      - Data Flow: architecture/data-flow.md
  - API Reference:
      - REST API: api/rest-api.md
      - WebSocket API: api/websocket-api.md
  - Guides:
      - Development: guides/development.md
      - Deployment: guides/deployment.md
      - Troubleshooting: guides/troubleshooting.md
  - Reference:
      - Configuration: reference/configuration.md
      - Environment Variables: reference/environment-variables.md
```

## Documentation Standards

### 1. Markdown Files

- **All documentation MUST be in Markdown** (`.md` files)
- Use clear, descriptive filenames in kebab-case: `getting-started.md`, `api-reference.md`
- Include frontmatter metadata when needed (title, description, tags)
- Use proper heading hierarchy (H1 → H2 → H3, no skipping levels)

### 2. Required Documentation Sections

Every project **MUST** include these core documents:

1. **`docs/index.md`**: Landing page with project overview, features, and quick links
2. **`docs/getting-started/installation.md`**: Setup and installation instructions
3. **`docs/getting-started/quick-start.md`**: 5-minute tutorial to get running
4. **`docs/architecture/overview.md`**: High-level architecture explanation
5. **`docs/guides/development.md`**: Developer workflow, commands, and best practices
6. **`docs/guides/deployment.md`**: Deployment procedures and CI/CD setup

### 3. Architecture Decision Records (ADRs/MADRs)

- Store in `/specs/adr/` directory
- Use sequential numbering: `0001-decision-title.md`, `0002-next-decision.md`
- Follow MADR format:
  - Status (Proposed, Accepted, Deprecated, Superseded)
  - Context and Problem Statement
  - Decision Drivers
  - Considered Options
  - Decision Outcome
  - Consequences (Positive and Negative)

**MADR Template:**

```markdown
# [Number]. [Title]

Date: YYYY-MM-DD

## Status

Accepted | Proposed | Deprecated | Superseded by [0005-new-decision.md]

## Context and Problem Statement

[Describe the context and problem statement, e.g., in free form using two to three sentences.]

## Decision Drivers

* [driver 1, e.g., a force, facing concern, ...]
* [driver 2, e.g., a force, facing concern, ...]

## Considered Options

* [option 1]
* [option 2]
* [option 3]

## Decision Outcome

Chosen option: "[option 1]", because [justification].

### Consequences

**Positive:**
* [e.g., improvement of quality attribute satisfaction, follow-up decisions required, ...]

**Negative:**
* [e.g., compromising quality attribute, follow-up decisions required, ...]
```

## Local Development

### Running MkDocs Locally

```bash
# Serve documentation locally with live reload
mkdocs serve

# Open browser at http://127.0.0.1:8000
```

### Building Documentation

```bash
# Build static site to /site directory
mkdocs build

# Build with strict mode (fail on warnings)
mkdocs build --strict
```

## CI/CD Integration

### GitHub Actions Workflow

Add this workflow to `.github/workflows/docs.yml`:

```yaml
name: Deploy Documentation

on:
  push:
    branches:
      - main
    paths:
      - 'docs/**'
      - 'mkdocs.yml'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      
      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.x'
      
      - name: Install dependencies
        run: |
          pip install mkdocs-material
          pip install mkdocs-git-revision-date-localized-plugin
          pip install mkdocs-minify-plugin
      
      - name: Build and deploy
        run: mkdocs gh-deploy --force
```

### Azure Static Web Apps (Alternative)

For Azure deployments, build during CI and deploy to Azure Static Web Apps:

```yaml
- name: Build MkDocs
  run: mkdocs build

- name: Deploy to Azure Static Web Apps
  uses: Azure/static-web-apps-deploy@v1
  with:
    app_location: "site"
    output_location: ""
```

## Documentation Best Practices

### 1. Keep Documentation Updated

- **Update in place**: Modify existing documentation files directly—never create separate summaries
- Documentation changes must be part of the same PR as code changes
- Use git hooks to remind developers to update docs when changing APIs or features

### 2. Writing Style

- Use clear, concise language
- Write in present tense ("The API returns..." not "The API will return...")
- Use second person ("You can configure..." not "One can configure...")
- Include code examples for all technical concepts
- Add diagrams using Mermaid for architecture and flow documentation

### 3. Code Examples

Use fenced code blocks with language syntax highlighting:

````markdown
```python
# Example Python code
def hello_world():
    return "Hello, World!"
```

```typescript
// Example TypeScript code
const greeting: string = "Hello, World!";
```
````

### 4. Admonitions

Use Material theme admonitions for important information:

```markdown
!!! note
    This is a note with additional information.

!!! warning
    This is a warning about potential issues.

!!! danger
    This is critical information about breaking changes.

!!! tip
    This is a helpful tip for users.
```

## Quality Checklist

Before merging any documentation changes, verify:

- ✅ `mkdocs serve` runs without errors or warnings
- ✅ `mkdocs build --strict` passes successfully
- ✅ All internal links resolve correctly
- ✅ Navigation structure is logical and complete
- ✅ Code examples are tested and accurate
- ✅ Spelling and grammar are correct
- ✅ Images and diagrams are optimized and display properly
- ✅ ADRs are numbered sequentially and follow MADR format

## Enforcement

- **PR requirement**: All PRs affecting functionality must include documentation updates
- **CI check**: MkDocs build must pass in CI pipeline before merge
- **Code review**: Reviewers must verify documentation completeness and accuracy
- **Automated checks**: Use pre-commit hooks to validate Markdown linting and MkDocs build

---

## Quick Start Summary

**For new lab repositories:**

1. Create repository structure: `/Instructions`, `/Files`, `/Starter`, `/labs`
2. Add `_config.yml` for Jekyll/GitHub Pages configuration
3. Create `index.md` as the main lab listing page
4. Write individual lab instructions in `/Instructions`
5. Set up GitHub Pages in repository settings
6. Configure automated deployment workflow
7. Test all links and interactive exercises
8. Verify mobile responsiveness and accessibility

## Quality Checklist

Before publishing any lab repository, verify:

### Content Quality
- [ ] All links work and point to correct resources
- [ ] Code examples are tested and functional
- [ ] Screenshots are current and accurate
- [ ] Instructions are clear and unambiguous
- [ ] Estimated times are realistic

### Technical Quality
- [ ] GitHub Pages builds without errors
- [ ] All HTML exercises function correctly
- [ ] Mobile responsiveness tested
- [ ] Cross-browser compatibility verified
- [ ] Accessibility guidelines followed

### Educational Quality
- [ ] Learning objectives are measurable
- [ ] Progressive difficulty throughout exercises
- [ ] Real-world scenarios and context provided
- [ ] Assessment opportunities included
- [ ] Troubleshooting guidance comprehensive

### Azure Lab Specific Quality
- [ ] All Azure commands tested in fresh environment
- [ ] Resource cleanup verified to remove all billable resources
- [ ] Screenshots current with latest Azure portal UI
- [ ] Prerequisites clearly stated and testable
- [ ] Estimated timing realistic based on testing
- [ ] Troubleshooting guidance covers common issues

### Interactive Lab Specific Quality
- [ ] All interactive elements respond correctly
- [ ] Feedback explanations are educationally sound
- [ ] Mobile responsiveness verified on multiple screen sizes
- [ ] Navigation between tasks works properly
- [ ] Reset functionality clears all state
- [ ] Learning objectives measurably achieved

### Repository Health
- [ ] README explains lab structure and access
- [ ] Contributing guidelines for content updates
- [ ] Issue templates for student problem reports
- [ ] License appropriate for educational use
- [ ] Automated deployment configured and tested

**Remember**: Educational content is code. Treat it with the same rigor as your implementation, with added focus on student learning outcomes.