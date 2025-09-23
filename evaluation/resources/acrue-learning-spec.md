# ACRUE Learning Experience — Specification

Purpose: Teach practitioners how to apply the ACRUE measurement approach (Accurate, Complete, Relevant, Useful, Exceptional) to evaluate Copilot or similar AI response quality in-context.

**Design Constraint: All learning objectives, activities, and assessments must use close-ended tasks that can be objectively evaluated. Open-ended creative tasks (e.g., "write clear statements") are replaced with selection, classification, or structured comparison tasks (e.g., "select the clearest statements from provided options").**

## Target audience
- UX researchers, product managers, and data analysts working on AI assistants (Copilot-like experiences).
- Product designers and engineers responsible for feedback collection and telemetry instrumentation.
- Research operations and QA engineers who will implement or validate ACRUE in product or studies.
- Basic prerequisites: familiarity with UX research concepts, Likert scales, and basic statistics (mean, distribution, simple hypothesis testing).

## Learning objectives (measurable)
By the end of this learning experience learners will be able to:
1. Explain the ACRUE framework and why in-context user perception matters (Knowledge).
2. Distinguish between Scale ACRUE and Frequency ACRUE and select the appropriate approach for a given context (Comprehension & Decision-making).
3. **Select and rank clear, user-facing ACRUE statements from provided options** that avoid technical labels and are appropriate for in-context collection (Application).
4. **Choose optimal survey flow components from a menu of options** to create a brief ACRUE feedback UI that fits within a product interaction and minimizes friction (Design skill).
5. **Follow structured analysis steps** to run a small ACRUE pilot, analyze provided results using guided templates, and **select appropriate recommendations from categorized options** (Analysis & Synthesis).
6. **Apply provided rubrics** to interpret ACRUE scores and **match scores to pre-defined recommendation categories** (Evaluation).

## Learning format and time estimate
**Microsoft Learn Module Structure (8 units, 45-60 minutes total):**
- **Unit 1 - Introduction** (5 minutes): Module overview, learning objectives, and prerequisites
- **Unit 2 - Understanding ACRUE Framework** (8 minutes): Core concepts and why in-context user perception matters
- **Unit 3 - ACRUE Implementation Types** (8 minutes): Scale vs. Frequency ACRUE with selection exercises
- **Unit 4 - Exercise - Design ACRUE Statements** (12 minutes): Hands-on activity selecting and customizing statements for meeting summarization use case
- **Unit 5 - ACRUE Analysis and Interpretation** (8 minutes): Guided templates for data analysis and recommendation selection
- **Unit 6 - Exercise - Apply ACRUE to Email Drafting** (10 minutes): Practice exercise using structured worksheets for different use case
- **Unit 7 - Knowledge Check** (3 minutes): Assessment with multiple-choice questions and scenario-based selections
- **Unit 8 - Summary** (3 minutes): Key takeaways and next steps

**Target Duration**: 45-60 minutes (typical Microsoft Learn module length)
**Interactive Elements**: HTML-based exercises hosted on GitHub Pages, embedded knowledge checks, step-by-step interactive forms

## Module breakdown
**Microsoft Learn Module Structure:**

1. **Introduction** (Unit 1 - 5 minutes)
   - Module overview and learning objectives
   - ACRUE framework introduction and why it matters
   - Prerequisites check and use case preview

2. **Understanding ACRUE Framework** (Unit 2 - 8 minutes)
   - Core ACRUE concepts with interactive examples
   - In-context user perception principles
   - Common pitfalls and misconceptions (knowledge check embedded)

3. **ACRUE Implementation Types** (Unit 3 - 8 minutes)
   - Scale ACRUE vs. Frequency ACRUE comparison
   - **Selection activity**: Choose appropriate approach for given scenarios
   - Context-specific considerations

4. **Exercise - Design ACRUE Statements** (Unit 4 - 12 minutes)
   - **Hands-on activity**: Meeting summarization use case
   - **HTML-based interface** hosted on GitHub Pages with interactive selection forms
   - **Select and customize statements** from provided statement bank using dropdown menus and checkboxes
   - **Choose feedback flow components** from component menu with drag-and-drop interface
   - **Real-time validation** using provided checklists with immediate HTML feedback

5. **ACRUE Analysis and Interpretation** (Unit 5 - 8 minutes)
   - **Interactive HTML worksheets** hosted on GitHub Pages
   - Mock data interpretation using **step-by-step web forms** with guided calculations
   - **Select appropriate recommendations** from categorized options using interactive HTML elements

6. **Exercise - Apply ACRUE to Email Drafting** (Unit 6 - 10 minutes)
   - **Practice exercise**: Email drafting use case (different from Unit 4)
   - **HTML-based structured analysis interface** with provided dataset in interactive tables
   - **Complete analysis worksheets** through web forms with auto-calculation features
   - **Select findings and recommendations** from dropdown menus with justification text areas

7. **Knowledge Check** (Unit 7 - 3 minutes)
   - Multiple-choice questions on framework concepts
   - Scenario-based selection exercises
   - Passing score: 80%

8. **Summary** (Unit 8 - 3 minutes)
   - Key concepts recap
   - Real-world application guidance
   - Additional resources and next steps

## Separate Summative Assessment
**Lab Environment Assessment (30-45 minutes) - Administered separately from the module**

**Environment**: Dedicated lab VM with local HTML assessment interface
- **Format**: Standalone HTML assessment files running locally on lab machines
- **Timing**: Administered after module completion as a separate assessment session
- **Use Case**: Email drafting with corporate tone constraints (different from module exercises)
- **Local Setup**: Pre-configured lab environment with assessment HTML files and mock datasets

## Assessments
**Microsoft Learn Module Assessment Structure:**

A. **Embedded Knowledge Checks** (throughout module)
- Unit 2: 3-question comprehension check on ACRUE concepts
- Unit 3: Scenario-based selection exercises for Scale vs. Frequency ACRUE
- Unit 4: **Structured validation** of selected ACRUE statements using provided checklists
- Unit 5: **Guided verification** of analysis worksheet completion

B. **Module Assessment** (Unit 7 - Required for completion)
- **Format**: 8-10 multiple-choice and scenario-based questions
- **Content**: Framework understanding, appropriate selection of approaches, and interpretation of results
- **Passing Score**: 80% (typical Microsoft Learn standard)
- **Question Types**:
  - Concept identification (What does "Accurate" measure in ACRUE?)
  - Scenario selection (Which ACRUE type for this use case?)
  - Analysis interpretation (Given these results, select the best recommendation)
  - Best practice application (Which statement is most appropriate for in-context collection?)

C. **Separate Summative Assessment** (Lab Environment - 30-45 minutes)
- **Environment**: Dedicated lab VM with local HTML assessment interface
- **Technical Setup**: 
  - Local HTML files with embedded JavaScript validation
  - Pre-loaded mock datasets (20-40 email drafting responses)
  - Offline assessment environment (no internet dependency)
  - Auto-save functionality for assessment progress
- **Assessment Tasks**:
  - **Select and rank 5 Scale ACRUE statements** from curated options using HTML dropdown interfaces
  - **Complete analysis worksheets** through local web forms with provided dataset
  - **Generate findings and recommendations** using structured HTML selection menus
- **Deliverables**: 
  - Completed HTML forms with selections and justifications
  - Analysis results exported as local files
  - Assessment completion tracked via local storage
- **Validation**: Client-side JavaScript validation with immediate feedback
- **Duration**: 30-45 minute timed session managed through HTML timer interface
- **End-of-Test Validation Script**:
  - **Automated validation script** runs at test completion to verify all tasks
  - **Checks completion status** of all required selections and form fields
  - **Validates answer appropriateness** against predefined criteria and scoring rubrics
  - **Generates completion report** with pass/fail status and detailed feedback
  - **Exports final assessment data** in structured format for instructor review
  - **Script requirements**: All 5 ACRUE statements selected, analysis worksheets completed with calculations, findings and recommendations selected with justifications provided

D. **Practical Application Validation** (Units 4 & 6)
- **Unit 4 Exercise Validation**: **HTML form validation** for statement selection appropriateness and flow component choices hosted on GitHub Pages
- **Unit 6 Exercise Validation**: **Web-based worksheet completion verification** and recommendation selection accuracy with JavaScript validation
- **Feedback**: **Immediate HTML/JavaScript feedback** with explanations for incorrect choices displayed in browser

## Completion Requirements

**Microsoft Learn Module Completion:**
- Complete all 8 units in sequence
- Pass embedded knowledge checks (80% minimum)
- Successfully complete both practical exercises (Units 4 & 6)
- Pass final module assessment (Unit 7) with 80% or higher
- Upon completion: Earn module completion badge and XP points

**Separate Lab Assessment Completion:**
- Successfully complete lab environment summative assessment (80% minimum)
- **Pass end-of-test validation script** with all required tasks completed correctly
- Submit completed HTML assessment forms within time limit
- Demonstrate transfer of ACRUE skills to new use case (email drafting)
- Assessment administered independently from module completion
- **Validation script must confirm**: All selections made, analysis calculations accurate, justifications provided, and overall score ≥80%
