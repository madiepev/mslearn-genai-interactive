---
layout: task
title: "Task 3: Select Evaluation Metrics"
description: "Choose the 3 most relevant evaluation metrics for a recipe chatbot from the 6 available options."
task_progress: "Task 3 of 5"
back_link: "../task-2-intent-matching/index.html"
next_link: "../task-4-test-creation/index.html"
next_text: "Next: Task 4 →"
task_info:
  title: "Scenario Context"
  content: |
    You're evaluating the performance of Munson's Pickles and Preserves Farm recipe chatbot. Select metrics that will help you assess whether the chatbot is meeting customer needs effectively.
custom_styles: |
  .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin: 30px 0;
  }
  .metric-card {
      border: 2px solid #d0d7de;
      border-radius: 8px;
      padding: 20px;
      background: white;
      cursor: pointer;
      transition: all 0.2s;
      height: auto;
      display: flex;
      flex-direction: column;
  }
  .metric-card:hover {
      border-color: #0969da;
      background: #f0f9ff;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  .metric-card.selected {
      border-color: #0969da;
      background: #dbeafe;
      box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.1);
  }
  .metric-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
  }
  .metric-name {
      font-weight: 600;
      font-size: 16px;
      color: #1f2937;
  }
  .metric-type {
      background: #f3f4f6;
      color: #374151;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
  }
  .metric-description {
      font-size: 14px;
      color: #6b7280;
      margin-bottom: 15px;
      flex-grow: 1;
  }
  .metric-example {
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 4px;
      padding: 10px;
      font-size: 13px;
      color: #4b5563;
      font-style: italic;
  }
  .selection-panel {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 25px;
      border-radius: 8px;
      margin: 30px 0;
      text-align: center;
  }
  .selection-count {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 10px;
  }
  .dashboard-preview {
      background: #fff;
      border: 2px solid #0969da;
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
      display: none;
  }
  .dashboard-preview.show {
      display: block;
  }
  .dashboard-title {
      color: #0969da;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 15px;
      text-align: center;
  }
  .metric-dashboard {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin-top: 15px;
  }
  .dashboard-metric {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 15px;
      text-align: center;
  }
  .dashboard-value {
      font-size: 24px;
      font-weight: 700;
      color: #0969da;
  }
  .dashboard-label {
      font-size: 12px;
      color: #64748b;
      margin-top: 5px;
  }
custom_javascript: |
  let selectedMetrics = new Set();

  function toggleMetric(metricId) {
      const card = document.querySelector(`[data-metric="${metricId}"]`);
      
      if (selectedMetrics.has(metricId)) {
          selectedMetrics.delete(metricId);
          card.classList.remove('selected');
      } else {
          if (selectedMetrics.size < 3) {
              selectedMetrics.add(metricId);
              card.classList.add('selected');
          } else {
              alert('You can only select 3 metrics. Please deselect one first.');
              return;
          }
      }
      
      updateSelectionCount();
  }

  function updateSelectionCount() {
      const count = selectedMetrics.size;
      document.getElementById('selectionCount').textContent = count;
      document.getElementById('submitBtn').disabled = count !== 3;
  }

  function submitMetrics() {
      if (selectedMetrics.size !== 3) {
          alert('Please select exactly 3 metrics.');
          return;
      }
      
      generateDashboardPreview();
      generatePersonalizedFeedback();
      document.getElementById('feedback').classList.add('show');
      document.getElementById('dashboardPreview').classList.add('show');
      document.querySelector('.selection-panel').style.display = 'none';
  }

  function generateDashboardPreview() {
      const metricNames = {
          'relevance': 'Relevance Score',
          'response-time': 'Response Time',
          'helpfulness': 'Helpfulness Rating',
          'accuracy': 'Accuracy Score',
          'engagement': 'User Engagement',
          'completion': 'Task Completion'
      };

      const sampleData = {
          'relevance': { value: '87%', color: '#10b981' },
          'response-time': { value: '1.2s', color: '#3b82f6' },
          'helpfulness': { value: '4.1/5', color: '#8b5cf6' },
          'accuracy': { value: '92%', color: '#10b981' },
          'engagement': { value: '68%', color: '#f59e0b' },
          'completion': { value: '78%', color: '#ef4444' }
      };

      let dashboardHTML = '<div class="metric-dashboard">';
      selectedMetrics.forEach(metricId => {
          const data = sampleData[metricId];
          dashboardHTML += `
              <div class="dashboard-metric">
                  <div class="dashboard-value" style="color: ${data.color}">${data.value}</div>
                  <div class="dashboard-label">${metricNames[metricId]}</div>
              </div>
          `;
      });
      dashboardHTML += '</div>';

      document.getElementById('dashboardContent').innerHTML = dashboardHTML;
  }

  function generatePersonalizedFeedback() {
      const correctAnswers = new Set(['relevance', 'helpfulness', 'accuracy']);
      const selectedArray = Array.from(selectedMetrics);
      const correctSelections = selectedArray.filter(metric => correctAnswers.has(metric));
      const incorrectSelections = selectedArray.filter(metric => !correctAnswers.has(metric));
      const missedCorrect = Array.from(correctAnswers).filter(metric => !selectedMetrics.has(metric));
      
      const metricTitles = {
          'relevance': 'Relevance Score',
          'response-time': 'Response Time',
          'helpfulness': 'Helpfulness Rating',
          'accuracy': 'Accuracy Score',
          'engagement': 'User Engagement',
          'completion': 'Task Completion Rate'
      };

      let feedbackHTML = '<h3>Metric Selection Feedback</h3>';
      
      const score = correctSelections.length;
      feedbackHTML += `<div class="score-section"><h4>Score: ${score}/3 optimal metrics selected</h4></div>`;
      
      if (correctSelections.length > 0) {
          feedbackHTML += '<div class="correct-section"><h4>Excellent Choices:</h4><ul>';
          correctSelections.forEach(metric => {
              const explanations = {
                  'relevance': 'Critical for recipe chatbots - measures if responses match user intent',
                  'helpfulness': 'Direct measure of user satisfaction and practical value',
                  'accuracy': 'Essential for cooking - incorrect recipe info can ruin meals'
              };
              feedbackHTML += `<li><strong>${metricTitles[metric]}</strong> - ${explanations[metric]}</li>`;
          });
          feedbackHTML += '</ul></div>';
      }
      
      if (incorrectSelections.length > 0) {
          feedbackHTML += '<div class="incorrect-section"><h4>Less Optimal Choices:</h4><ul>';
          incorrectSelections.forEach(metric => {
              const explanations = {
                  'response-time': 'While important, speed is secondary to content quality for recipe assistance',
                  'engagement': 'Useful but doesn\'t directly measure if the chatbot helps with recipes',
                  'completion': 'Important but doesn\'t capture content quality or user satisfaction'
              };
              feedbackHTML += `<li><strong>${metricTitles[metric]}</strong> - ${explanations[metric]}</li>`;
          });
          feedbackHTML += '</ul></div>';
      }
      
      if (missedCorrect.length > 0) {
          feedbackHTML += '<div class="missed-section"><h4>Consider These Instead:</h4><ul>';
          missedCorrect.forEach(metric => {
              const explanations = {
                  'relevance': 'Essential for measuring if responses address user cooking needs',
                  'helpfulness': 'Direct feedback on whether responses solve user problems',
                  'accuracy': 'Crucial for recipe content - errors can impact cooking success'
              };
              feedbackHTML += `<li><strong>${metricTitles[metric]}</strong> - ${explanations[metric]}</li>`;
          });
          feedbackHTML += '</ul></div>';
      }
      
      if (score === 3) {
          feedbackHTML += '<div class="overall-feedback"><p><strong>Perfect selection!</strong> You chose the three most important metrics for evaluating recipe chatbot quality and user satisfaction.</p></div>';
      } else if (score === 2) {
          feedbackHTML += '<div class="overall-feedback"><p><strong>Good thinking!</strong> You selected key metrics. For recipe chatbots, focus on content quality over technical performance.</p></div>';
      } else {
          feedbackHTML += '<div class="overall-feedback"><p><strong>Keep learning!</strong> For recipe assistance, prioritize metrics that measure content quality and user satisfaction over technical metrics.</p></div>';
      }
      
      feedbackHTML += '<a href="../task-4-test-creation/index.html" class="next-task">Continue to Task 4: Create Test Set</a>';
      
      document.getElementById('feedback').innerHTML = feedbackHTML;
  }
---

<div class="metrics-grid">
    <div class="metric-card" data-metric="relevance" onclick="toggleMetric('relevance')">
        <div class="metric-header">
            <div class="metric-name">Relevance Score</div>
            <div class="metric-type">Quality</div>
        </div>
        <div class="metric-description">
            Measures how well the chatbot's responses address the specific intent and context of each customer query.
        </div>
        <div class="metric-example">
            Example: User asks for "quick chicken dinner" → Response suggests 15-minute chicken recipes vs. elaborate 3-hour dishes.
        </div>
    </div>

    <div class="metric-card" data-metric="response-time" onclick="toggleMetric('response-time')">
        <div class="metric-header">
            <div class="metric-name">Response Time</div>
            <div class="metric-type">Performance</div>
        </div>
        <div class="metric-description">
            Tracks the average time between user query submission and chatbot response delivery.
        </div>
        <div class="metric-example">
            Example: Measuring if responses arrive within 2 seconds vs. taking 10+ seconds to appear.
        </div>
    </div>

    <div class="metric-card" data-metric="helpfulness" onclick="toggleMetric('helpfulness')">
        <div class="metric-header">
            <div class="metric-name">Helpfulness Rating</div>
            <div class="metric-type">Satisfaction</div>
        </div>
        <div class="metric-description">
            Direct user feedback rating on whether the response successfully helped them with their cooking/recipe need.
        </div>
        <div class="metric-example">
            Example: "Was this response helpful?" with 1-5 star rating after each interaction.
        </div>
    </div>

    <div class="metric-card" data-metric="accuracy" onclick="toggleMetric('accuracy')">
        <div class="metric-header">
            <div class="metric-name">Accuracy Score</div>
            <div class="metric-type">Quality</div>
        </div>
        <div class="metric-description">
            Evaluates the factual correctness of recipe information, cooking times, techniques, and ingredient suggestions.
        </div>
        <div class="metric-example">
            Example: Verifying cooking temperatures (350°F vs. 450°F), ingredient measurements, and cooking techniques.
        </div>
    </div>

    <div class="metric-card" data-metric="engagement" onclick="toggleMetric('engagement')">
        <div class="metric-header">
            <div class="metric-name">User Engagement</div>
            <div class="metric-type">Behavior</div>
        </div>
        <div class="metric-description">
            Measures user interaction patterns like session length, follow-up questions, and return visit frequency.
        </div>
        <div class="metric-example">
            Example: Users spend 5+ minutes asking multiple recipe questions vs. leaving after one query.
        </div>
    </div>

    <div class="metric-card" data-metric="completion" onclick="toggleMetric('completion')">
        <div class="metric-header">
            <div class="metric-name">Task Completion Rate</div>
            <div class="metric-type">Success</div>
        </div>
        <div class="metric-description">
            Percentage of users who successfully complete their intended task (finding recipe, meal planning, etc.).
        </div>
        <div class="metric-example">
            Example: 80% of users who ask for "dinner ideas" end up with a specific recipe they want to try.
        </div>
    </div>
</div>

<div class="selection-panel">
    <div class="selection-count" id="selectionCount">0</div>
    <h3>of 3 metrics selected</h3>
    <p>Choose the most important metrics for evaluating a recipe chatbot's effectiveness</p>
    <button class="submit-btn" id="submitBtn" onclick="submitMetrics()" disabled>Generate Evaluation Dashboard</button>
</div>

<div class="dashboard-preview" id="dashboardPreview">
    <div class="dashboard-title">📊 Your Custom Evaluation Dashboard</div>
    <p style="text-align: center; color: #6b7280; margin-bottom: 20px;">Sample dashboard showing your selected metrics with simulated data</p>
    <div id="dashboardContent"></div>
</div>

<div class="feedback" id="feedback">
    <!-- Feedback will be generated by JavaScript -->
</div>