# Content Templates for Data Selection Activity

## Training Objective Template

```markdown
# Training Goal: [Objective Title]

## Description
[Clear description of what behavior you want the AI to learn from the selected data]

## Target Behavior
Select conversations that demonstrate:
- [Specific behavior 1]
- [Specific behavior 2]
- [Specific behavior 3]

## Selection Criteria
Choose [X] conversations that best exhibit:
- [Quality criterion 1]
- [Quality criterion 2]
- [Quality criterion 3]

## Success Indicators
Your selected dataset should:
- [Success indicator 1]
- [Success indicator 2]
- [Success indicator 3]
```

## Instruction Template

```markdown
# Activity Instructions

## Overview
[Brief explanation of what learners will do]

## Step 1: Review Training Goal ([X] minutes)
**Your Task**: [Specific instruction]

### What to Look For:
- **Quality Indicators**: [Explanation of quality badges/indicators]
- **Conversation Types**: [Types of scenarios available]
- **Selection Limits**: [How many conversations to select]

## Step 2: Evaluate Conversations ([Y] minutes)
**Your Task**: [Specific instruction]

### Evaluation Approach:
1. **Read the conversation**: [What to focus on while reading]
2. **Check quality indicators**: [How to interpret quality levels]
3. **Consider training value**: [What makes good training data]
4. **Make selection**: [How to select/deselect conversations]

## Step 3: Review Dataset ([Z] minutes)
**Your Task**: [Specific instruction]

### Dataset Quality Check:
- [Quality consideration 1]
- [Quality consideration 2]
- [Quality consideration 3]
```

## Conversation Template

```markdown
# Conversation: [Title]

## Context
**Scenario Type**: [Customer Support/Technical Support/Sales/etc.]
**User Profile**: [Description of user and their situation]
**Interaction Goal**: [What the user is trying to accomplish]

## Conversation

### User Message
"[Complete user message]"

### AI Response
"[Complete AI response]"

## Quality Assessment
- **[Criterion 1]**: [Level] - [Brief justification]
- **[Criterion 2]**: [Level] - [Brief justification]
- **[Criterion 3]**: [Level] - [Brief justification]

## Training Value
**Why include this**: [Explanation of what this conversation teaches]
**Why exclude this**: [Explanation of any quality issues]

## Expert Recommendation
- [ ] **Include in training dataset**
- [ ] **Exclude from training dataset**

**Reasoning**: [Expert explanation for recommendation]
```

## Quality Rubric Template

```markdown
# Quality Assessment Rubric

## [Criterion Name] (e.g., Politeness)

### High Quality
**Description**: [Clear description of high quality]

**Characteristics**:
- [Specific characteristic 1]
- [Specific characteristic 2]
- [Specific characteristic 3]

**Examples**:
- "[Example phrase 1]"
- "[Example phrase 2]"
- "[Example phrase 3]"

### Medium Quality  
**Description**: [Clear description of medium quality]

**Characteristics**:
- [Specific characteristic 1]
- [Specific characteristic 2]
- [Specific characteristic 3]

**Examples**:
- "[Example phrase 1]"
- "[Example phrase 2]"

### Low Quality
**Description**: [Clear description of low quality]

**Characteristics**:
- [Specific characteristic 1]
- [Specific characteristic 2]
- [Specific characteristic 3]

**Examples**:
- "[Example phrase 1]"
- "[Example phrase 2]"
```

## Feedback Message Templates

### Excellent Selection (90-100%)
```markdown
# 🎉 Excellent Dataset Selection!

You demonstrated expert-level understanding of training data quality by:
- [Specific strength 1]
- [Specific strength 2]
- [Specific strength 3]

## Your Dataset Quality
Your selections scored [X]% alignment with expert recommendations.

## Key Insights
- [Important learning point 1]
- [Important learning point 2]
- [Important learning point 3]

## Next Steps
[Suggestions for next learning activities or deeper exploration]
```

### Good Selection (70-89%)
```markdown
# ✅ Good Dataset Selection!

You showed solid understanding with:
- [Specific strength 1]
- [Specific strength 2]

## Areas for Growth
Consider these selection factors:
- [Area for improvement 1]
- [Area for improvement 2]

## Your Dataset Quality
Your selections scored [X]% alignment with expert recommendations.

## Learning Points
- [Learning point 1]
- [Learning point 2]
```

### Needs Improvement (<70%)
```markdown
# 📚 Learning Opportunity

This selection helps identify areas to develop:

## Expert Focus Areas
Expert evaluators prioritized:
- [Key difference 1]
- [Key difference 2]
- [Key difference 3]

## Your Dataset Quality
Your selections scored [X]% alignment with expert recommendations.

## Reflection Questions
- [Question to promote thinking 1]
- [Question to promote thinking 2]
- [Question to promote thinking 3]

## Recommended Actions
- [Specific action 1]
- [Specific action 2]
```

## Domain-Specific Templates

### Customer Service Template
```markdown
# Customer Service Training Data Selection

## Target Behavior
Select conversations that demonstrate:
- **Professional courtesy**: Polite, respectful tone
- **Clear communication**: Easy to understand responses
- **Helpful assistance**: Actionable next steps
- **Empathy**: Acknowledgment of customer feelings

## Quality Indicators
- **High Politeness**: Uses courtesy phrases, shows empathy
- **High Clarity**: Specific instructions, clear timelines
- **High Helpfulness**: Addresses user needs, provides solutions

## Scenario Coverage
Include diverse customer service situations:
- Order inquiries and issues
- Refund and return requests
- Technical support problems
- Account access issues
- Service complaints
```

### Technical Support Template
```markdown
# Technical Support Training Data Selection

## Target Behavior
Select conversations that demonstrate:
- **Technical accuracy**: Correct information and solutions
- **Clear explanations**: Step-by-step instructions
- **Patience**: Supportive tone for frustrated users
- **Problem-solving**: Systematic troubleshooting approach

## Quality Indicators
- **High Accuracy**: Technically correct solutions
- **High Clarity**: Easy-to-follow instructions
- **High Support**: Patient, encouraging tone

## Scenario Coverage
Include various technical support situations:
- Software installation issues
- Hardware troubleshooting
- Account configuration problems
- Performance issues
- Error message explanations
```

### Educational Template
```markdown
# Educational AI Training Data Selection

## Target Behavior
Select conversations that demonstrate:
- **Encouraging tone**: Positive, supportive language
- **Clear explanations**: Simple, understandable teaching
- **Adaptive teaching**: Matching student comprehension level
- **Questioning technique**: Guiding questions to promote learning

## Quality Indicators
- **High Encouragement**: Positive, motivating language
- **High Clarity**: Age-appropriate explanations
- **High Engagement**: Interactive, question-based approach

## Scenario Coverage
Include diverse educational interactions:
- Concept explanations
- Problem-solving guidance
- Study strategies
- Assignment feedback
- Learning encouragement
```

## Content Customization Variables

```javascript
// Template for content developer customization
const contentTemplates = {
  activityTitle: "[Your Activity Title]",
  trainingObjective: "[What behavior should the AI learn?]",
  selectionTarget: "[How many conversations to select?]",
  
  qualityCriteria: [
    {
      name: "[criterion-name]",
      label: "[Display label]",
      description: "[What this measures]",
      levels: {
        high: "[Description of high quality]",
        medium: "[Description of medium quality]", 
        low: "[Description of low quality]"
      }
    }
  ],
  
  scenarioTypes: [
    {
      category: "[Category name]",
      description: "[What this category covers]",
      examples: ["[Example 1]", "[Example 2]"]
    }
  ],
  
  feedbackMessages: {
    excellent: "[Message for excellent performance]",
    good: "[Message for good performance]",
    needsImprovement: "[Message for improvement needed]"
  }
};
```

## Assessment Question Templates

### Multiple Choice Template
```markdown
## Question [#]: [Question about data selection principles]

**Context**: [Scenario or background information]

**Question**: [Specific question about which conversation to select]

**Options**:
a) [Conversation option A with brief description]
b) [Conversation option B with brief description]
c) [Conversation option C with brief description]
d) [Conversation option D with brief description]

**Correct Answer**: [Letter]
**Explanation**: [Why this selection is best for training data]
```

### Scenario-Based Selection Template
```markdown
## Question [#]: Training Dataset Composition

**Training Goal**: [Specific AI behavior to achieve]

**Available Conversations**: 
1. [Brief description of conversation 1 with quality indicators]
2. [Brief description of conversation 2 with quality indicators]
3. [Brief description of conversation 3 with quality indicators]
4. [Brief description of conversation 4 with quality indicators]

**Task**: Select 2 conversations that would create the best training dataset.

**Expert Selection**: [Letters of expert choices]
**Expert Reasoning**: [Explanation of why these selections create optimal training data]
```