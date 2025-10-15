# Task Generation System

This repository includes an automated system for generating new Task 1 pages based on a reusable template.

## How It Works

### 1. Template File
- **Location**: `docs/template-task.html`
- **Purpose**: A reusable HTML template with placeholders for customization
- **Placeholders**: All content that varies between tasks is replaced with `{{placeholder}}` syntax

### 2. Issue Template
- **Location**: `.github/ISSUE_TEMPLATE/create-new-task.yml`
- **Purpose**: Provides a user-friendly form for collecting all required information
- **Features**: 
  - Structured form with validation
  - Separate fields for each of the 9 options
  - Configuration for correct answers and feedback

### 3. GitHub Action
- **Location**: `.github/workflows/generate-task.yml`
- **Purpose**: Automatically processes issue submissions and generates new HTML files
- **Triggers**: When an issue is created with the `task-generation` label

## Usage Instructions

### Creating a New Task

1. **Create a New Issue**
   - Go to the Issues tab in GitHub
   - Click "New Issue"
   - Select "🎯 Create New Task 1 Page"

2. **Fill Out the Form**
   - **Task Title**: The specific name for your task
   - **Instructions**: What users should do in the task
   - **Scenario Context**: Company name, customer base, and solution goal
   - **9 Options**: Title and description for each option
   - **Correct Answers**: Which options are correct (comma-separated numbers)
   - **File Name**: What to name the generated HTML file

3. **Submit the Issue**
   - The GitHub Action will automatically trigger
   - A new HTML file will be generated in the `generated-tasks/` folder
   - The issue will be updated with a link to the generated file
   - The issue will be automatically closed

### Generated Output

The system will create:
- A new HTML file with all placeholders replaced
- Updated JavaScript configuration with correct answers
- A commit to the repository with the new file
- A comment on the issue with details and links

## Template Placeholders

The template includes the following placeholders:

### Content Placeholders
- `{{task_title}}` - The specific task title
- `{{instructions}}` - Task instructions for users
- `{{company_name}}` - Company/business name and description
- `{{customer_base}}` - Target audience description
- `{{solution_goal}}` - Primary goal or outcome
- `{{next_task_title}}` - Title for next task in navigation

### Option Placeholders (9 total)
- `{{option1_title}}` through `{{option9_title}}` - Option titles
- `{{option1_desc}}` through `{{option9_desc}}` - Option descriptions

## Customization

### JavaScript Configuration
The generated files include JavaScript that needs to be configured for each task:

1. **Correct Answers**: The system automatically updates the `correctAnswers` Set based on your input
2. **Feedback Explanations**: You can provide custom explanations in the issue form
3. **Scoring Logic**: The template includes adaptive feedback based on user performance

### File Structure
Generated files are placed in:
```
generated-tasks/
├── your-task-name.html
├── another-task.html
└── ...
```

## Example Usage

Here's an example of how the system works:

1. **Input** (from issue form):
   - Task Title: "Identify User Needs"
   - Company: "TechFlow Solutions - software consulting firm"
   - Option 1: "Process Automation" / "Automate repetitive tasks..."

2. **Processing**: GitHub Action replaces placeholders in template

3. **Output**: New HTML file with:
   ```html
   <h1>Task 1: Identify User Needs</h1>
   <p><strong>Company/Business:</strong> TechFlow Solutions - software consulting firm</p>
   <div class="need-title">Process Automation</div>
   ```

## Benefits

- **Consistency**: All tasks follow the same structure and styling
- **Efficiency**: No manual HTML editing required
- **Validation**: Form ensures all required fields are provided
- **Automation**: Entire process from request to file generation is automated
- **Documentation**: Each generated task is tracked via GitHub issues

## Troubleshooting

If the GitHub Action fails:
1. Check the issue contains all required fields
2. Ensure the issue has the `task-generation` label
3. Verify the template file hasn't been corrupted
4. Check the Action logs for specific error messages

For questions or issues, please create a GitHub issue with the `help` label.