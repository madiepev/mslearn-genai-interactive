# Integration Guide: Evaluation Criteria Selection Activity

## Overview

This guide provides step-by-step instructions for integrating the Evaluation Criteria Selection activity into your learning environment. The activity teaches students to select appropriate Azure AI Foundry evaluation metrics based on business scenarios.

## Technical Requirements

### Minimum System Requirements
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- JavaScript enabled
- Local web server capability (for CORS compliance)
- Responsive design support (mobile-friendly)

### Dependencies
- HTML5 with semantic markup
- CSS3 with Grid/Flexbox support
- Vanilla JavaScript (ES6+)
- No external frameworks required

### File Structure
```
evaluation-criteria-selection/
├── activity-spec.md                    # Activity specifications
├── assets/
│   ├── sample-data.js                  # Azure metrics and scenarios data
│   ├── azure-metrics-library.md       # Detailed metrics documentation
│   ├── styles.css                     # Activity-specific styling
│   └── activity-logic.js              # Core interaction logic
├── integration-guide.md               # This file
└── content-templates/
    ├── instructor-guide.md            # Teaching instructions
    ├── student-worksheet.md           # Learning worksheet
    └── assessment-rubric.md           # Evaluation criteria
```

## Integration Steps

### Step 1: Environment Setup

1. **Download Activity Files**
   ```bash
   # Clone or download the learning activities library
   git clone [repository-url]
   cd learning-activities-library/evaluation-criteria-selection
   ```

2. **Web Server Setup**
   ```bash
   # Using Python (simple HTTP server)
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server -p 8000
   
   # Using PHP (if available)
   php -S localhost:8000
   ```

3. **Verify Installation**
   - Navigate to `http://localhost:8000`
   - Confirm all files load without CORS errors
   - Test basic functionality on desktop and mobile devices

### Step 2: Content Customization

#### Modify Business Scenarios
Edit `assets/sample-data.js` to customize scenarios:

```javascript
// Add new scenario
const customScenario = {
  id: "your-custom-scenario",
  title: "Your Business Context",
  context: "Detailed scenario description",
  industry: "Your Industry",
  objectives: [
    "Primary business objective",
    "Secondary objective"
  ],
  expertSelection: {
    recommended: ["metric1", "metric2", "metric3"],
    reasoning: "Why these metrics align with objectives"
  }
};

// Add to businessScenarios array
businessScenarios.push(customScenario);
```

#### Customize Azure Metrics
Modify metric definitions in `assets/sample-data.js`:

```javascript
// Update metric details
const customMetric = {
  id: "custom-metric",
  name: "Custom Metric Name",
  azureFoundryId: "azure_foundry_id",
  category: "Business-Specific",
  description: "Brief description for UI",
  detailedDescription: "Full explanation of metric purpose",
  businessImpact: "How this metric affects business outcomes",
  bestFor: ["Use case 1", "Use case 2"]
};
```

### Step 3: UI Integration

#### HTML Structure Integration
Add to your existing HTML page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Evaluation Criteria Selection</title>
    <link rel="stylesheet" href="assets/styles.css">
</head>
<body>
    <div id="criteria-selection-container">
        <!-- Activity content will be dynamically generated -->
    </div>
    
    <!-- Load data first, then logic -->
    <script src="assets/sample-data.js"></script>
    <script src="assets/activity-logic.js"></script>
</body>
</html>
```

#### CSS Integration
Link the activity stylesheet or integrate styles:

```html
<!-- Option 1: Direct link -->
<link rel="stylesheet" href="evaluation-criteria-selection/assets/styles.css">

<!-- Option 2: Import into existing CSS -->
@import url('./evaluation-criteria-selection/assets/styles.css');
```

### Step 4: Learning Management System Integration

#### Canvas LTI Integration
```javascript
// LTI-compatible initialization
window.addEventListener('DOMContentLoaded', function() {
    if (window.parent !== window) {
        // Running in LTI iframe
        initializeCriteriaSelectionActivity({
            ltiMode: true,
            gradePassbackUrl: getLTIGradePassbackUrl(),
            studentId: getLTIStudentId()
        });
    } else {
        // Standalone mode
        initializeCriteriaSelectionActivity();
    }
});
```

#### Moodle Integration
```php
// Moodle plugin integration example
<?php
// In your Moodle activity plugin
function display_criteria_selection_activity() {
    global $PAGE, $USER;
    
    $PAGE->requires->js('/path/to/evaluation-criteria-selection/assets/sample-data.js');
    $PAGE->requires->js('/path/to/evaluation-criteria-selection/assets/activity-logic.js');
    $PAGE->requires->css('/path/to/evaluation-criteria-selection/assets/styles.css');
    
    echo '<div id="criteria-selection-container"></div>';
}
?>
```

### Step 5: Assessment Integration

#### Grade Passback Configuration
```javascript
// Configure automatic grading
const assessmentConfig = {
    enableGrading: true,
    maxScore: 100,
    passingScore: 70,
    gradePassback: {
        endpoint: '/api/grades',
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + getAuthToken(),
            'Content-Type': 'application/json'
        }
    }
};

// Initialize with assessment
initializeCriteriaSelectionActivity(assessmentConfig);
```

#### Manual Assessment Setup
```javascript
// For instructor review mode
const manualAssessmentConfig = {
    enableGrading: false,
    saveResponses: true,
    instructorReview: true,
    exportFormat: 'json', // or 'csv'
    submissionEndpoint: '/api/submissions'
};
```

## Activity Flow Configuration

### Standard Learning Flow
1. **Scenario Introduction** (2 minutes)
2. **Criteria Selection** (8 minutes)
3. **Expert Comparison** (5 minutes)
4. **Reflection & Notes** (5 minutes)

### Customizable Parameters
```javascript
const activityConfig = {
    timeLimit: 20, // minutes
    maxMetricSelections: 3,
    enableHints: true,
    showExpertReasoningImmediately: false,
    allowReselection: true,
    scenarioSelectionMode: 'random', // or 'choice' or 'assigned'
    difficultyLevel: 'intermediate' // 'beginner', 'intermediate', 'advanced'
};
```

## Advanced Customization

### Custom Scoring Algorithm
```javascript
// Override default scoring
function customScoringAlgorithm(userSelection, expertSelection, scenario) {
    const exactMatches = userSelection.filter(id => expertSelection.includes(id));
    const categoryDiversity = calculateCategoryDiversity(userSelection);
    const businessAlignment = calculateBusinessAlignment(userSelection, scenario);
    
    return {
        exactMatchScore: (exactMatches.length / expertSelection.length) * 40,
        diversityScore: categoryDiversity * 30,
        alignmentScore: businessAlignment * 30,
        totalScore: Math.round(exactMatchScore + diversityScore + alignmentScore)
    };
}
```

### Analytics Integration
```javascript
// Track learning analytics
function trackLearningEvent(eventType, data) {
    // xAPI/Tin Can API integration
    const statement = {
        actor: { name: getCurrentUser() },
        verb: { id: `http://example.com/verbs/${eventType}` },
        object: { id: 'criteria-selection-activity' },
        result: data
    };
    
    sendToLRS(statement);
}
```

### Multi-language Support
```javascript
// Internationalization setup
const i18nConfig = {
    defaultLanguage: 'en',
    supportedLanguages: ['en', 'es', 'fr', 'de'],
    translationEndpoint: '/api/translations',
    fallbackToDefault: true
};

// Load translations
async function loadTranslations(language) {
    const response = await fetch(`/translations/${language}.json`);
    return await response.json();
}
```

## Accessibility Compliance

### WCAG 2.1 AA Requirements
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Reader Support**: ARIA labels and semantic HTML
- **Color Contrast**: Minimum 4.5:1 ratio for text
- **Focus Indicators**: Visible focus states for all controls

### Implementation Checklist
- [ ] Alt text for all images and icons
- [ ] Heading hierarchy (h1, h2, h3)
- [ ] Form labels and descriptions
- [ ] Skip navigation links
- [ ] Color-blind friendly color palette
- [ ] Scalable text (up to 200% zoom)

## Quality Assurance Testing

### Browser Compatibility Testing
```bash
# Automated browser testing
npm install --save-dev puppeteer jest
npm run test:browsers
```

### Performance Testing
- Page load time < 3 seconds
- Interaction responsiveness < 100ms
- Memory usage monitoring
- Mobile performance optimization

### User Acceptance Testing
1. **Instructor Testing**
   - Content accuracy verification
   - Learning objective alignment
   - Assessment validity review

2. **Student Testing**
   - Usability testing with target audience
   - Learning effectiveness measurement
   - Technical difficulty assessment

## Deployment Considerations

### Production Deployment
```yaml
# Docker deployment example
version: '3.8'
services:
  criteria-selection:
    build: .
    ports:
      - "80:80"
    environment:
      - NODE_ENV=production
      - AZURE_API_KEY=${AZURE_API_KEY}
    volumes:
      - ./logs:/app/logs
```

### Content Delivery Network (CDN)
```javascript
// CDN integration for static assets
const CDN_BASE_URL = 'https://cdn.example.com/learning-activities';
const assetUrls = {
    css: `${CDN_BASE_URL}/evaluation-criteria-selection/styles.css`,
    js: `${CDN_BASE_URL}/evaluation-criteria-selection/activity-logic.js`,
    data: `${CDN_BASE_URL}/evaluation-criteria-selection/sample-data.js`
};
```

### Security Considerations
- Content Security Policy (CSP) configuration
- Input validation and sanitization
- Session management for multi-user environments
- Data privacy compliance (GDPR, COPPA)

## Troubleshooting

### Common Issues

#### CORS Errors
**Problem**: Cross-origin resource sharing errors when loading files
**Solution**: Serve files through web server, not file:// protocol

#### Mobile Responsiveness
**Problem**: Poor mobile user experience
**Solution**: Test on actual devices, adjust CSS breakpoints

#### Performance Issues
**Problem**: Slow loading or interaction delays
**Solution**: Optimize images, minify JavaScript, implement lazy loading

### Debug Mode
```javascript
// Enable debug logging
const debugConfig = {
    enableDebug: true,
    logLevel: 'verbose',
    showPerformanceMetrics: true,
    highlightInteractionAreas: true
};

initializeCriteriaSelectionActivity(debugConfig);
```

### Support Resources
- Activity documentation: [Link to full documentation]
- Technical support: [Contact information]
- Community forum: [Link to discussion forum]
- Issue tracker: [Link to bug reporting system]

## Maintenance and Updates

### Regular Maintenance Tasks
- Review Azure AI Foundry metrics for updates
- Validate business scenarios for relevance
- Monitor user feedback and analytics
- Update browser compatibility testing

### Version Control Strategy
```bash
# Semantic versioning for activity updates
git tag -a v1.0.0 -m "Initial release"
git tag -a v1.1.0 -m "Added new business scenarios"
git tag -a v2.0.0 -m "Major UI redesign"
```

### Content Update Process
1. Review learning objectives alignment
2. Validate expert selections with domain experts
3. Test updated content with sample users
4. Deploy to staging environment
5. Conduct final validation
6. Deploy to production with rollback plan

This integration guide provides comprehensive instructions for successfully implementing the Evaluation Criteria Selection activity in various learning environments while maintaining quality, accessibility, and educational effectiveness.