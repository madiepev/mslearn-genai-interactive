---
name: Learning Activity Request
about: Request a new interactive learning activity HTML page
title: '[Activity Request] '
labels: ['content-request', 'auto-generate']
assignees: ''
---

## Learning Activity Details

### Basic Information
**Task Title:** 
<!-- Example: "Task 1: Identify User Needs" -->

**Task Number:** 
<!-- Example: "1" (if part of a sequence) -->

**Task Description:** 
<!-- Brief description of what learners will do -->

### Navigation
**Previous Task URL:** 
<!-- Relative path to previous task, or leave empty if first task -->
<!-- Example: "../task-1-user-needs/index.html" -->

**Next Task URL:** 
<!-- Relative path to next task, or leave empty if last task -->
<!-- Example: "../task-3-metrics-selection/index.html" -->

**Back to Overview URL:** 
<!-- Relative path to overview page -->
<!-- Example: "../index.html" -->

### Scenario Context
**Business/Organization:** 
<!-- Example: "Munson's Pickles and Preserves Farm - a family farm specializing in artisanal pickles, preserves, and farm-fresh produce" -->

**Target Audience:** 
<!-- Example: "Busy families, health-conscious shoppers, and cooking enthusiasts" -->

**Primary Goal:** 
<!-- Example: "Help customers discover recipes, plan meals, and make informed food choices" -->

### Activity Configuration
**Activity Type:** 
<!-- Select one: multiple-choice-selection, matching, ranking, true-false -->

**Selection Limit:** 
<!-- For multiple-choice-selection: How many items should learners select? Example: "3" -->

**Instructions:** 
<!-- Example: "Select the 3 most relevant user needs for a farm business recipe chatbot from the 9 options below." -->

### Options/Choices
<!-- Provide each option in the following format. Add more as needed. -->

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

**Option 3:**
- **Title:** Nutritional Information
- **Description:** Get detailed nutrition facts, allergen information, and health benefits of ingredients
- **ID:** nutritional-info
- **Correct:** No

<!-- Add more options as needed -->

### Feedback Configuration
**Correct Answer Explanation:** 
<!-- Explain why the correct answers are correct -->
<!-- Example: "Recipe Search is the primary function customers expect from a recipe chatbot" -->

**Score Messages:** 
<!-- Customize messages for different score levels -->
- **Perfect Score (3/3):** Excellent! You identified all the core needs for a recipe chatbot.
- **Good Score (2/3):** Good work! You got most of the core needs.
- **Partial Score (1/3):** Keep learning! Think about what customers primarily need.
- **No Score (0/3):** Review needed. Focus on the core recipe lifecycle.

### Output Configuration
**Target Directory:** 
<!-- Where should the HTML file be created? Example: "recipe-chatbot-mockups/task-1-user-needs/" -->

**File Name:** 
<!-- What should the HTML file be named? Example: "index.html" -->

---

## Checklist
- [ ] All required fields are filled out
- [ ] At least 3 options are provided
- [ ] Correct answers are clearly marked
- [ ] Feedback explanations are provided
- [ ] Target directory is specified