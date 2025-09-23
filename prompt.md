You are building a lightweight interactive HTML learning module for GitHub Pages that incorporates activities from the Learning Activities Library or creates new activities following the same modular design patterns.

## Design and Content Guidelines:

**Content Style:**
- **No emojis** should be used anywhere in the interface or content
- Use **Munson** as the fictional company for all scenarios and examples
- Maintain a **professional, clean aesthetic** similar to Microsoft Learn documentation
- **Simple, straightforward layout** with clear typography and minimal visual elements
- Each task should be **concise and focused** - avoid overly complex or lengthy activities

**Task Structure:**
- Each task must be on a **separate page** for clear navigation and focus
- Tasks should be **straightforward and easy to understand** with clear instructions
- Follow a **clean, minimal design** with plenty of white space
- Use consistent styling that matches the professional documentation aesthetic shown in reference materials

## Learning Activities Library Reference

The Learning Activities Library contains three proven activity types that can be integrated or used as templates:

### Available Library Activities:
1. **AI Configuration Evaluation** - Interactive model configuration assessment with dark theme panels and multi-dimensional rating systems
2. **Data Selection for Training** - Conversation data curation with quality indicators and expert comparison
3. **Evaluation Criteria Selection** - Azure AI Foundry metrics selection based on business scenarios

### Library Activity Features:
- Modular structure with `activity-spec.md`, `assets/`, and `content-templates/`
- Expert comparison systems for objective assessment
- Business scenario-based learning contexts
- Comprehensive educational support materials
- Mobile-responsive design with accessibility features

## Requirements:

**Multi-Task Exercise Structure:**
- Create a complete learning exercise consisting of **3-5 tasks**
- Each task is **one single learning activity** that builds toward the overall learning objective
- Each task should be **one standalone activity** - either a library activity or a new custom activity
- Tasks should progress from foundational concepts to advanced application
- Each task should provide **immediate feedback** to students that is **lightweight and to the point**

**Task Design Options:**
- **Use Library Activities**: Integrate existing activities (AI Configuration Evaluation, Data Selection for Training, Evaluation Criteria Selection) as individual tasks
- **Create New Activities**: Develop new activities following library design patterns for specific learning needs
- **Customize Existing**: Adapt library activities with modified scenarios, content, or complexity levels
- **Hybrid Approach**: Combine library activities with custom tasks for comprehensive coverage

**Task Progression Strategy:**
- **Task 1-2**: Foundation building (concept introduction, basic practice)
- **Task 3-4**: Application and analysis (scenario-based learning, decision-making)
- **Task 5**: Advanced application (complex scenarios, integration of concepts)

## 🛠️ Exercise Tasks

**Task 1 – Identify user needs**
Select the 3 most relevant user needs for a supermarket recipe chatbot from a list of 9 options. Immediate feedback will confirm whether you picked correctly.

**Task 2 – Match intents to good responses**
For each of 3 selected user needs (intents), review two candidate model responses. Select the response that best satisfies the intent. Feedback will confirm your choice.

**Task 3 – Select evaluation metrics (Azure AI Foundry)**
From 6 available built-in evaluation metrics, select the 3 most relevant for this use case. After submitting, immediate feedback will highlight the correct ones and display a sample evaluation dashboard.

**Task 4 – Create a smoke test set**
Enter 9 diverse test prompts (3 per user intent) to serve as a smoke test for the chatbot. The system will check coverage (total count and 3 per intent) and provide feedback.

**Task 5 – Manual ACRUE evaluation**
Using the 9 test prompts, rate the model's responses against the ACRUE dimensions (Accurate, Complete, Relevant, Useful, Exceptional) on a 1–5 scale. Your ratings will be compared against expert ratings (±1 tolerance), and feedback will highlight alignment or gaps.

**Feedback Requirements:**
- Each task must include **immediate, lightweight feedback** upon completion
- Feedback should be **concise and actionable** - avoid lengthy explanations
- Provide clear indication of correct/incorrect responses with brief explanations
- Include **next steps or hints** for improvement when appropriate

## Technical Standards:
- All **styling and formatting** must be in a separate `style.css` file
- All **content** should be authored by content developers using markdown syntax for easy editing and maintenance
- Content structured with clear markdown headers, bullet points, and formatting for non-technical content creators
- Use **vanilla JavaScript** (no frameworks) to keep it lightweight
- Clean, commented, organized code with clear separation between content and logic
- Content developers can edit markdown content without touching code

## Generate Files:

**Multi-Task Exercise Structure:**
1. `index.html` – main navigation page with task progression and overall exercise structure
2. `style.css` – unified styling for all tasks and navigation, extending library design patterns
3. `exercise-overview.md` – complete exercise description, learning objectives, and task sequence
4. `navigation-script.js` – JavaScript for task navigation, progress tracking, and exercise flow

**For Each Task (3-5 tasks total):**

**Library Activity Tasks:**
- `task-[n]/index.html` – integration page for library activity
- `task-[n]/content-customization.md` – task-specific content modifications
- `task-[n]/integration-script.js` – JavaScript to load and customize library activity for this task

**New Activity Tasks:**
- `task-[n]/index.html` – structure following library activity patterns
- `task-[n]/activity-spec.md` – complete activity specification
- `task-[n]/assets/sample-data.js` – interactive content data structure
- `task-[n]/task-script.js` – functionality following library interaction patterns with immediate feedback

The output should be runnable as-is on GitHub Pages, with content easily updatable by content developers familiar with markdown, following proven educational design patterns from the Learning Activities Library, and providing immediate lightweight feedback for each task that helps students learn progressively through the exercise.  