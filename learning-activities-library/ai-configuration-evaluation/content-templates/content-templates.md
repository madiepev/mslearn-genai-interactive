# Content Templates for AI Configuration Evaluation

## Learning Objectives Template

```markdown
# Learning Objectives

By completing this AI configuration evaluation activity, learners will be able to:

1. **[Primary Skill]**: [Specific measurable outcome]
2. **[Secondary Skill]**: [Specific measurable outcome]  
3. **[Application Skill]**: [Specific measurable outcome]
4. **[Critical Thinking]**: [Specific measurable outcome]

## Prerequisites
- [Prerequisite 1]
- [Prerequisite 2]
- [Prerequisite 3]

## Estimated Time
- [X] minutes for configuration analysis
- [Y] minutes for response evaluation  
- [Z] minutes for assessment and feedback
- **Total**: [X+Y+Z] minutes
```

## Instructions Template

```markdown
# Activity Instructions

## Overview
[Brief description of what learners will do in this activity]

## Step 1: Review Configuration ([X] minutes)
**Your Task**: [Specific instruction]

### What to Look For:
- **Model Parameters**: [What parameters matter and why]
- **System Prompt**: [How to evaluate the prompt]
- **Settings Impact**: [How settings affect responses]

## Step 2: Evaluate Response ([Y] minutes)  
**Your Task**: [Specific instruction]

### Evaluation Criteria:
- **[Criterion 1]**: [Definition and what to assess]
- **[Criterion 2]**: [Definition and what to assess]
- **[Criterion 3]**: [Definition and what to assess]
- **[Criterion 4]**: [Definition and what to assess]

### Rating Scale:
- **Excellent (3)**: [Clear description]
- **Good (2)**: [Clear description]
- **Poor (1)**: [Clear description]

## Step 3: Submit and Review ([Z] minutes)
**Your Task**: [Specific instruction]

### What You'll Receive:
- [Type of feedback 1]
- [Type of feedback 2]
- [Type of feedback 3]
```

## Scenario Description Template

```markdown
# Scenario: [Scenario Title]

## Context
[Background information about the situation]

## User Profile
- **Role**: [User's role/position]
- **Experience Level**: [Beginner/Intermediate/Advanced]
- **Goal**: [What the user is trying to achieve]
- **Urgency**: [How time-sensitive is their need]

## AI System Information
- **Purpose**: [What this AI system is designed to do]
- **Constraints**: [Any limitations or boundaries]
- **Expected Behavior**: [How the AI should typically respond]

## Conversation Setting
- **Platform**: [Where this interaction takes place]
- **Time of Day**: [If relevant to context]
- **Previous Context**: [Any prior conversation history]
```

## Configuration Display Template

```markdown
# Backend Configuration

## Model Parameters
- **Model Type**: [Model name/version]
- **Temperature**: [Value] - [Explanation of what this controls]
- **Max Tokens**: [Value] - [Explanation of what this limits]
- **Top-p**: [Value] - [Explanation of what this affects]
- **Frequency Penalty**: [Value] - [Explanation of what this prevents]
- **Presence Penalty**: [Value] - [Explanation of what this encourages]

## System Prompt
```
[Full system prompt text]
```

## Additional Settings
- **[Setting 1]**: [Value and explanation]
- **[Setting 2]**: [Value and explanation]
```

## Conversation Template

```markdown
# Conversation

## User Message
**Timestamp**: [Time]  
**Message**: "[User's complete message]"

## AI Response  
**Timestamp**: [Time]  
**Message**: "[AI's complete response]"

## Context Notes
- [Any relevant context about the interaction]
- [Factors that might influence evaluation]
```

## Feedback Message Templates

### Excellent Performance
```markdown
# 🎉 Excellent Evaluation!

You demonstrated strong evaluation skills by:
- [Specific strength 1]
- [Specific strength 2]  
- [Specific strength 3]

## Your Accuracy
Your ratings were [X]% aligned with expert evaluation.

## Key Insights
[Important learning points from this scenario]
```

### Good Performance
```markdown
# ✅ Good Evaluation!

You showed solid understanding with:
- [Specific strength 1]
- [Specific strength 2]

## Areas for Growth
Consider these evaluation aspects:
- [Area for improvement 1]
- [Area for improvement 2]

## Your Accuracy  
Your ratings were [X]% aligned with expert evaluation.
```

### Needs Improvement
```markdown
# 📚 Learning Opportunity

This evaluation helps identify areas to develop:

## Different Perspective
Expert evaluators focused on:
- [Key difference 1]
- [Key difference 2]
- [Key difference 3]

## Your Accuracy
Your ratings were [X]% aligned with expert evaluation.

## Reflection Questions
- [Question to promote thinking 1]
- [Question to promote thinking 2]
```

## Assessment Question Templates

### Multiple Choice Template
```markdown
## Question [#]: [Question Text]

**Context**: [Any additional context needed]

**Options**:
a) [Option A]
b) [Option B]  
c) [Option C]
d) [Option D]

**Correct Answer**: [Letter]
**Explanation**: [Why this is correct and others are wrong]
```

### Scenario-Based Question Template
```markdown
## Question [#]: Evaluation Scenario

**Situation**: [Brief scenario description]

**User Message**: "[User's message]"
**AI Response**: "[AI's response]"

**Question**: [Specific evaluation question]

**Options**:
a) [Option A - with rating justification]
b) [Option B - with rating justification]
c) [Option C - with rating justification]

**Correct Answer**: [Letter]
**Expert Reasoning**: [Detailed explanation of correct evaluation approach]
```

## Content Customization Variables

```javascript
// Variables that content developers can easily modify
const contentVariables = {
  activityTitle: "[Your Activity Title]",
  totalDuration: "[Total Minutes]",
  difficultyLevel: "[Beginner/Intermediate/Advanced]",
  
  primaryObjective: "[Main learning goal]",
  secondaryObjectives: [
    "[Supporting goal 1]",
    "[Supporting goal 2]"
  ],
  
  evaluationCriteria: [
    {
      name: "[criterion-name]",
      label: "[Display label for criterion]",
      description: "[What this criterion measures]"
    }
  ],
  
  scenarios: [
    {
      title: "[Scenario title]",
      context: "[Background information]",
      userMessage: "[User's message]", 
      aiResponse: "[AI's response]",
      focusArea: "[What to emphasize in evaluation]"
    }
  ]
};
```