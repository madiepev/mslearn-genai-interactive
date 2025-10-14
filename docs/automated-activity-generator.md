# Automated Learning Activity Generator

This system allows content developers to automatically generate interactive HTML learning activities by submitting GitHub issues with structured content.

## How It Works

1. **Content Developer** submits a GitHub issue using the "Learning Activity Request" template
2. **GitHub Actions** automatically processes the issue and generates an HTML file
3. **Generated HTML** is committed to the repository with interactive functionality
4. **Issue is closed** with a success message and file location

## Getting Started

### Step 1: Create a New Issue

1. Go to the repository's Issues tab
2. Click "New Issue"
3. Select "Learning Activity Request" template
4. Fill out all required fields (see template guide below)

### Step 2: Fill Out the Template

#### Required Fields:

**Basic Information:**
- **Task Title**: The main heading for your activity (e.g., "Task 1: Identify User Needs")
- **Task Number**: Sequential number if part of a series
- **Task Description**: Brief description of what learners will do

**Navigation:**
- **Previous/Next Task URLs**: Relative paths to connect activities in sequence
- **Back to Overview URL**: Path to main index/overview page

**Scenario Context:**
- **Business/Organization**: The scenario setting
- **Target Audience**: Who the learners represent
- **Primary Goal**: What the scenario aims to achieve

**Activity Configuration:**
- **Activity Type**: Currently supports "multiple-choice-selection"
- **Selection Limit**: How many items learners should select (e.g., "3")
- **Instructions**: Clear directions for learners

**Options/Choices:**
For each option, provide:
- **Title**: Short, descriptive name
- **Description**: Detailed explanation
- **ID**: Unique identifier (lowercase, hyphens for spaces)
- **Correct**: "Yes" or "No" - whether this is a correct answer

**Feedback Configuration:**
- **Score Messages**: Custom messages for different performance levels
- **Correct Answer Explanation**: Why certain answers are correct

**Output Configuration:**
- **Target Directory**: Where to create the HTML file
- **File Name**: What to name the HTML file (usually "index.html")

### Step 3: Submit and Wait

1. Submit the issue
2. GitHub Actions will automatically process it (usually takes 1-2 minutes)
3. You'll receive a comment with the generated file location
4. The issue will be automatically closed

## Example Usage

Here's a minimal example for creating a recipe chatbot activity:

```markdown
**Task Title:** Task 1: Identify User Needs
**Task Number:** 1
**Task Description:** Select the most relevant user needs for a recipe chatbot
**Instructions:** Select the 3 most relevant user needs for a farm business recipe chatbot from the 9 options below.
**Selection Limit:** 3
**Target Directory:** recipe-chatbot-mockups/task-1-user-needs/
**File Name:** index.html

**Option 1:**
- **Title:** Recipe Search & Discovery
- **Description:** Find recipes based on ingredients, dietary preferences, or cooking time constraints
- **ID:** recipe-search
- **Correct:** Yes

**Option 2:**
- **Title:** Price Comparison
- **Description:** Compare prices of similar products across different brands and sizes
- **ID:** price-comparison
- **Correct:** No
```

## Generated Features

The generated HTML includes:

### Interactive Elements
- **Clickable cards** for each option
- **Selection counter** tracking chosen items
- **Submit button** that enables when correct number selected
- **Reset functionality** to start over

### Feedback System
- **Score display** showing correct/total
- **Correct selections** highlighted in green
- **Incorrect selections** shown in red
- **Missed answers** displayed in yellow
- **Personalized messages** based on performance

### Navigation
- **Previous/Next task links** for sequential activities
- **Back to overview** for easy navigation
- **Responsive design** works on all devices

### Styling
- **Modern, clean design** matching existing activities
- **GitHub-style colors** and typography
- **Hover effects** and visual feedback
- **Mobile-responsive** layout

## File Structure

Generated files follow this structure:
```
repository/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   └── learning-activity-request.md
│   └── workflows/
│       └── generate-learning-activity.yml
└── [target-directory]/
    └── [filename].html
```

## Customization

### Styling
The generated HTML includes embedded CSS that can be customized by:
1. Modifying the workflow's CSS template
2. Adding external stylesheets
3. Overriding styles in the generated files

### Functionality
JavaScript functionality can be extended by:
1. Modifying the workflow's JavaScript template
2. Adding custom functions for specific activity types
3. Implementing additional interactive features

### Templates
To add new activity types:
1. Modify the issue template with new options
2. Update the workflow to handle new activity types
3. Create new HTML templates for different interaction patterns

## Troubleshooting

### Common Issues:

**Issue not processing:**
- Ensure issue has both `content-request` and `auto-generate` labels
- Check that all required fields are filled
- Verify GitHub Actions are enabled for the repository

**Generated file not appearing:**
- Check the commit history for the automated commit
- Verify the target directory path is correct
- Ensure repository permissions allow Actions to commit

**Incorrect styling/functionality:**
- Review the generated HTML for syntax errors
- Check browser console for JavaScript errors
- Verify all option IDs are unique and valid

### Getting Help:

1. Check the Actions tab for workflow run details
2. Review the generated file for any obvious issues
3. Create a new issue with the `bug` label for technical problems

## Advanced Usage

### Multiple Activity Types
Future enhancements could support:
- **Matching exercises** - connect related items
- **Ranking activities** - order items by priority
- **True/False questions** - binary choice activities
- **Drag and drop** - visual arrangement tasks

### Integration
Generated activities can be integrated with:
- **Learning Management Systems** (LMS)
- **Assessment platforms**
- **Analytics tools** for tracking learner progress
- **Accessibility tools** for inclusive design

### Bulk Generation
For creating multiple related activities:
1. Use consistent naming conventions
2. Set up proper navigation chains
3. Consider creating a master overview page
4. Implement progress tracking across activities

## Best Practices

### Content Design:
- **Clear, concise option titles** (under 50 characters)
- **Descriptive explanations** without being overwhelming
- **Logical scenario contexts** that learners can relate to
- **Appropriate difficulty level** for target audience

### Technical:
- **Unique option IDs** across all activities
- **Consistent directory structure** for easy navigation
- **Meaningful file names** for organization
- **Valid HTML structure** for accessibility

### User Experience:
- **Clear instructions** before activities begin
- **Helpful feedback messages** for different performance levels
- **Smooth navigation** between related activities
- **Mobile-friendly design** for various devices