# Project Plan: Interactive Scenario Lab

## Project Overview

### Purpose

The Interactive Scenario Lab is a new Microsoft Learn lab format designed to deliver short, engaging, and product-connected learning experiences without requiring resource provisioning or code execution.
This lab type focuses on applied decision-making, conceptual understanding, and real-world reasoning within a structured, task-based scenario. Learners progress through a guided narrative—making choices, evaluating outcomes, and reflecting on results—to simulate how professionals think and act when using Microsoft products.
Each lab concludes with a product tie-in, connecting conceptual insight to a relevant Microsoft technology or capability (e.g., Azure AI Foundry, Microsoft Copilot Studio, or Azure Resource Manager). This ensures learners not only understand why decisions matter, but also where they can apply them in Microsoft’s ecosystem.
### Goals

- Deliver a meaningful learning experience in 30 minutes or less.
- Reinforce task-based skill development through interactive, no-deployment exercises.
- Provide exposure to Microsoft products and responsible solution design principles.
- Support scalability across topics (AI, data, security, infrastructure, etc.).

## Approach

Interactive Scenario Labs combine instructional design, HTML interactivity, and scenario-driven pedagogy into a single, cohesive learning flow.
Each lab follows the standard Microsoft Learn structure of multiple tasks, where each task builds conceptually toward a defined outcome.
Typical lab flow:

1. Scenario Setup: Learners are introduced to a realistic business or technical scenario.
2. Decision Tasks: Learners make contextual choices (e.g., selecting user needs, identifying metrics, designing configurations).
3. Evaluation Tasks: Learners compare or assess outcomes using structured frameworks or guidance.
4. Reflection and Product Tie-In: Learners connect their reasoning to Microsoft platform features or tools.

All content is developed as standalone HTML assets, versioned in GitHub repositories, and hosted through GitHub Pages. This approach provides:

- Simplified maintenance and updates via GitHub workflows.
- No dependency on Azure provisioning or sandbox environments.
- Consistent access and performance across browsers and devices (including mobile-friendly).
Feedback is immediate and instructive, helping learners understand why certain decisions are optimal and reinforcing key product or design principles.

## Target Style

Each lab is authored as a single HTML experience composed of modular, vertically stacked sections, with visual hierarchy that supports readability and flow.

Standard structure per task:

1. Task Header — clearly labeled (e.g., Task 1: Define user needs) with numbered progression.
2. Instruction Block — concise scenario or context paragraph that sets the stage.
3. Interactive Component — selection, input, or choice block (buttons, dropdowns, or cards).
4. Feedback Section — dynamically reveals tailored feedback or next-step guidance.
5. Reflection / Transition — a short summary or prompt leading into the next task.
Formatting conventions:

- Visual Cards or Panels: Use colored or shaded boxes to segment choices and examples.
- Icons or symbols (e.g., ✅ 💡 ⚙️) to draw attention to actions, hints, or product tie-ins.
- Callout boxes for hints, definitions, or "Did you know?" moments — styled consistently with Learn's info/warning/note visual language.
- Clean typographic hierarchy:
  - H2 for main sections (Task 1, Task 2, etc.)
  - H3 for sub-actions or step descriptions
  - Paragraphs limited to 2–4 lines for easy scanning
- Ample whitespace and padding to reduce cognitive load and keep a calm visual rhythm.
- Responsive layout: Optimized for desktop and mobile, ensuring interactivity works across form factors.
- Progressive disclosure: Feedback and next-step instructions appear only after the learner completes the interaction — keeping focus and suspense high.
Color and design system:

- Follows Microsoft Learn palette conventions (neutral background, blue accents for links, soft grays for task blocks).
- Avoids excessive color; instead, uses subtle contrast to indicate state (selected, active, correct/incorrect).

## Content and Tone Style

- Voice: Friendly, encouraging, and clear — guiding learners in second person ("You will…").
- Length: Each task contains no more than 2–3 paragraphs of context and one interactive activity.
- Flow: Starts with why (context), moves to how (task), and ends with what you learned (reflection).
- Feedback: Written in a supportive tone — not evaluative, but explanatory ("Good choice — this option ensures scalability while controlling costs.").
- Imagery: Screenshots or icons are used sparingly, only when they reinforce comprehension or show a Microsoft product interface.

## Overview of Short Educational Task Types

Multiple-choice questions (choosing the "best" answer) are a common format, but relying only on simple multiple-choice can fail to measure higher-order skills like problem-solving and critical thinking.

Educational research suggests using a variety of short, structured tasks to engage learners in conceptual understanding, decision-making, troubleshooting, and evaluation.

All the task types below are closed-ended (no free-text input required), so they can be delivered anonymously via static HTML (e.g. GitHub Pages).

The table provides an overview of different task types, each with a brief description and a concrete example:

| Task Type | Description (Educational Purpose) | Concrete Example (Product/Code Context) |
|-----------|-----------------------------------|------------------------------------------|
| Multiple Choice (Single Answer) | Presents a question and several options; learner selects one correct answer. Useful for checking factual knowledge or basic understanding. | Example: "Which command undoes the last Git commit?" Options: A) git init B) git status C) git revert D) git push. (Correct: C) – tests conceptual understanding of Git) |
| Multiple Select (Multiple Answers) | Presents a question with a list of options; learner must select all correct answers. Good for assessing broad conceptual knowledge or multiple-step solutions. | Example: "Which of the following steps can help resolve a network timeout error? (Choose all that apply.)" Options: □ Check firewall settings; □ Restart the router; □ Update the software; □ Verify DNS configuration. (Multiple correct choices – tests troubleshooting decisions) |
| True/False (Binary Choice) | Presents a declarative statement; learner decides if it is true or false. Quick check for understanding or common misconceptions. | Example: "True or False: Clearing the application cache will fix a 404 error." (Answer: False – tests conceptual understanding of web errors) |
| Fill-in-the-Blank (Cloze) | Requires learners to complete a missing word or phrase in a statement. Since free text isn't used, blanks can be filled from a dropdown menu or pre-defined options. This tests recall of specific terms or syntax. | Example: "In SQL, the query SELECT * FROM users ___ age > 30; should include which keyword in the blank?" Dropdown options: WHERE, IF, HAVING. (Correct: WHERE – tests knowledge of SQL syntax) |
| Matching (Pairing) | Provides two lists (e.g. terms and definitions, problems and solutions); learner must pair each item on the first list with its correct match on the second. Assesses recognition of relationships and concept mapping. | Example: "Match each error code with its meaning:" List 1: 400, 404, 500; List 2: Not Found, Bad Request, Internal Server Error. (Learner pairs 400 → Bad Request, 404 → Not Found, 500 → Internal Server Error – tests understanding of error codes) |
| Ordering (Sequencing) | Provides a set of steps or items to be arranged in the correct sequence. Useful for assessing understanding of processes or workflows. | Example: "Arrange the steps to push code to a repository in order." Given steps: Commit changes, Push to remote, Stage files. The correct order is: Stage files → Commit changes → Push to remote. (Learner orders these steps – tests knowledge of the code deployment workflow) |
| Classification (Grouping) | Requires sorting or categorizing items into given groups. Learners assign each item to a category (often implemented with drag-and-drop or drop-down selections). This checks conceptual organization and understanding of categories. | Example: "Classify each of the following tasks as Front-end or Back-end:" Items: Design UI layout, Write database schema, Implement API endpoint, Style CSS. (Learner groups tasks by category – tests understanding of product role responsibilities) |
| Hotspot (Image Selection) | Presents an image (e.g. a software UI or diagram); learner must click the correct area on the image. This visual interaction assesses applied knowledge of interfaces or spatial recognition without textual input. | Example: "On the application interface below, click the icon to open Settings." (Image of a toolbar is shown). The learner clicks the gear-shaped icon on the image. (Checks ability to identify the correct UI element for a task – tests practical UI knowledge) |
| Interactive Simulation (Configuration Adjustment) | Learners manipulate multiple variables or settings (e.g., toggles, sliders, or dropdowns) to reach a correct system state or solve a scenario. Reinforces procedural knowledge, cause-and-effect reasoning, and applied troubleshooting. | Example: "Adjust the following configurations to secure an Azure storage account." Options:<br>- Enable encryption (required)<br>- Set public access (off)<br>- Configure network access (private).<br>Learner must toggle all settings correctly to proceed. The simulation reveals immediate feedback showing whether the configuration is valid. |
True/False (Binary Choice)	Presents a declarative statement; learner decides if it is true or false. Quick check for understanding or common misconceptions.	Example: “True or False: Clearing the application cache will fix a 404 error.” (Answer: False – tests conceptual understanding of web errors)
Fill-in-the-Blank (Cloze)	Requires learners to complete a missing word or phrase in a statement. Since free text isn’t used, blanks can be filled from a dropdown menu or pre-defined options. This tests recall of specific terms or syntax.	Example: “In SQL, the query SELECT * FROM users ___ age > 30; should include which keyword in the blank?” Dropdown options: WHERE, IF, HAVING. (Correct: WHERE – tests knowledge of SQL syntax)
Matching (Pairing)	Provides two lists (e.g. terms and definitions, problems and solutions); learner must pair each item on the first list with its correct match on the second. Assesses recognition of relationships and concept mapping.	Example: “Match each error code with its meaning:” List 1: 400, 404, 500; List 2: Not Found, Bad Request, Internal Server Error. (Learner pairs 400 → Bad Request, 404 → Not Found, 500 → Internal Server Error – tests understanding of error codes)
Ordering (Sequencing)	Provides a set of steps or items to be arranged in the correct sequence. Useful for assessing understanding of processes or workflows.	Example: “Arrange the steps to push code to a repository in order.” Given steps: Commit changes, Push to remote, Stage files. The correct order is: Stage files → Commit changes → Push to remote. (Learner orders these steps – tests knowledge of the code deployment workflow)
Classification (Grouping)	Requires sorting or categorizing items into given groups. Learners assign each item to a category (often implemented with drag-and-drop or drop-down selections). This checks conceptual organization and understanding of categories.	Example: “Classify each of the following tasks as Front-end or Back-end:” Items: Design UI layout, Write database schema, Implement API endpoint, Style CSS. (Learner groups tasks by category – tests understanding of product role responsibilities)
Hotspot (Image Selection)	Presents an image (e.g. a software UI or diagram); learner must click the correct area on the image. This visual interaction assesses applied knowledge of interfaces or spatial recognition without textual input.	Example: “On the application interface below, click the icon to open Settings.” (Image of a toolbar is shown). The learner clicks the gear-shaped icon on the image. (Checks ability to identify the correct UI element for a task – tests practical UI knowledge)
| Interactive Simulation (Configuration Adjustment) | Learners manipulate multiple variables or settings (e.g., toggles, sliders, or dropdowns) to reach a correct system state or solve a scenario. Reinforces procedural knowledge, cause-and-effect reasoning, and applied troubleshooting. | Example: "Adjust the following configurations to secure an Azure storage account." Options: Enable encryption (required); Set public access (off); Configure network access (private). Learner must toggle all settings correctly to proceed. The simulation reveals immediate feedback showing whether the configuration is valid. |

## Sources

- [Quizzes | Assessments | Help eLC](https://help.elc.edu/quizzes-assessments)
- [Innovative Question Types: Enhancing Assessments with Technology for Deeper Learning and Accessibility](https://www.example.com)

