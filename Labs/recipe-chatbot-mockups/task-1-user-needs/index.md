---
layout: task
title: "Task 1: Identify User Needs"
description: "Select the 3 most relevant user needs for a farm business recipe chatbot from the 9 options below."
task_progress: "Task 1 of 5"
next_link: "../task-2-intent-matching/index.html"
next_text: "Next: Task 2 →"
task_info:
  title: "Scenario Context"
  scenario:
    label: "Farm Business:"
    description: "Munson's Pickles and Preserves Farm - a family farm specializing in artisanal pickles, preserves, and farm-fresh produce"
  customer_base: "Busy families, health-conscious shoppers, and cooking enthusiasts"
  goal:
    label: "Chatbot Goal:"
    description: "Help customers discover recipes, plan meals, and make informed food choices"
custom_styles: |
  .needs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 15px;
      margin: 30px 0;
  }
  .need-card {
      border: 2px solid #d0d7de;
      border-radius: 6px;
      padding: 18px;
      background: white;
      cursor: pointer;
      transition: all 0.2s;
  }
  .need-card:hover {
      border-color: #0969da;
      background: #f0f9ff;
  }
  .need-card.selected {
      border-color: #0969da;
      background: #dbeafe;
      box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.1);
  }
  .need-title {
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 8px;
      color: #1f2937;
  }
  .need-description {
      font-size: 14px;
      color: #6b7280;
  }
  .selection-summary {
      background: #fff;
      border: 1px solid #0969da;
      border-radius: 6px;
      padding: 20px;
      margin: 30px 0;
      text-align: center;
  }
  .selected-count {
      font-size: 18px;
      font-weight: 600;
      color: #0969da;
      margin-bottom: 15px;
  }
custom_javascript: |
  let selectedNeeds = new Set();

  function toggleNeed(needId) {
      const card = document.querySelector(`[data-need="${needId}"]`);
      
      if (selectedNeeds.has(needId)) {
          selectedNeeds.delete(needId);
          card.classList.remove('selected');
      } else {
          if (selectedNeeds.size < 3) {
              selectedNeeds.add(needId);
              card.classList.add('selected');
          } else {
              alert('You can only select 3 needs. Please deselect one first.');
              return;
          }
      }
      
      updateSelectionCount();
  }

  function updateSelectionCount() {
      const count = selectedNeeds.size;
      document.getElementById('selectedCount').textContent = `${count} of 3 needs selected`;
      document.getElementById('submitBtn').disabled = count !== 3;
  }

  function submitSelection() {
      if (selectedNeeds.size !== 3) {
          alert('Please select exactly 3 needs.');
          return;
      }
      
      generatePersonalizedFeedback();
      document.getElementById('feedback').classList.add('show');
      document.querySelector('.selection-summary').style.display = 'none';
  }

  function generatePersonalizedFeedback() {
      const correctAnswers = new Set(['recipe-search', 'meal-planning', 'cooking-tips']);
      const selectedArray = Array.from(selectedNeeds);
      const correctSelections = selectedArray.filter(need => correctAnswers.has(need));
      const incorrectSelections = selectedArray.filter(need => !correctAnswers.has(need));
      const missedCorrect = Array.from(correctAnswers).filter(need => !selectedNeeds.has(need));
      
      const needTitles = {
          'recipe-search': 'Recipe Search & Discovery',
          'meal-planning': 'Meal Planning',
          'cooking-tips': 'Cooking Tips & Techniques',
          'price-comparison': 'Price Comparison',
          'nutritional-info': 'Nutritional Information',
          'store-navigation': 'Store Navigation',
          'inventory-management': 'Inventory Management',
          'delivery-tracking': 'Delivery Tracking',
          'seasonal-suggestions': 'Seasonal Suggestions'
      };

      let feedbackHTML = '<h3>Your Selection Feedback</h3>';
      
      // Score calculation
      const score = correctSelections.length;
      feedbackHTML += `<div class="score-section"><h4>Score: ${score}/3 correct</h4></div>`;
      
      // Correct selections feedback
      if (correctSelections.length > 0) {
          feedbackHTML += '<div class="correct-section"><h4>Correct Selections:</h4><ul>';
          correctSelections.forEach(need => {
              const explanations = {
                  'recipe-search': 'Core functionality - customers expect to find recipes easily',
                  'meal-planning': 'Helps busy families organize meals and shopping efficiently',
                  'cooking-tips': 'Essential support for successful recipe execution'
              };
              feedbackHTML += `<li><strong>${needTitles[need]}</strong> - ${explanations[need]}</li>`;
          });
          feedbackHTML += '</ul></div>';
      }
      
      // Incorrect selections feedback
      if (incorrectSelections.length > 0) {
          feedbackHTML += '<div class="incorrect-section"><h4>Incorrect Selections:</h4><ul>';
          incorrectSelections.forEach(need => {
              const explanations = {
                  'price-comparison': 'Not core to recipe functionality - belongs in e-commerce features',
                  'nutritional-info': 'While useful, not essential for basic recipe assistance',
                  'store-navigation': 'Physical store feature - less relevant for recipe chatbot',
                  'inventory-management': 'Advanced feature - not essential for initial recipe chatbot',
                  'delivery-tracking': 'Logistics feature - separate from recipe assistance',
                  'seasonal-suggestions': 'Nice-to-have but not core to recipe search and planning'
              };
              feedbackHTML += `<li><strong>${needTitles[need]}</strong> - ${explanations[need]}</li>`;
          });
          feedbackHTML += '</ul></div>';
      }
      
      // Missed correct answers
      if (missedCorrect.length > 0) {
          feedbackHTML += '<div class="missed-section"><h4>You Missed:</h4><ul>';
          missedCorrect.forEach(need => {
              const explanations = {
                  'recipe-search': 'Essential core functionality for any recipe chatbot',
                  'meal-planning': 'Critical for helping families organize their weekly cooking',
                  'cooking-tips': 'Vital for helping users succeed with recipes they find'
              };
              feedbackHTML += `<li><strong>${needTitles[need]}</strong> - ${explanations[need]}</li>`;
          });
          feedbackHTML += '</ul></div>';
      }
      
      // Overall feedback
      if (score === 3) {
          feedbackHTML += '<div class="overall-feedback"><p><strong>Excellent!</strong> You identified all the core needs for a recipe chatbot. These three needs form the foundation of effective recipe assistance.</p></div>';
      } else if (score === 2) {
          feedbackHTML += '<div class="overall-feedback"><p><strong>Good work!</strong> You got most of the core needs. Focus on features that directly support recipe discovery, planning, and execution.</p></div>';
      } else if (score === 1) {
          feedbackHTML += '<div class="overall-feedback"><p><strong>Keep learning!</strong> Think about what customers primarily need when looking for recipe help: finding recipes, planning meals, and cooking successfully.</p></div>';
      } else {
          feedbackHTML += '<div class="overall-feedback"><p><strong>Review needed.</strong> For a recipe chatbot, focus on the core recipe lifecycle: discovery, planning, and execution support.</p></div>';
      }
      
      feedbackHTML += '<a href="../task-2-intent-matching/index.html" class="next-task">Continue to Task 2: Evaluate Response Quality</a>';
      
      document.getElementById('feedback').innerHTML = feedbackHTML;
  }
---

<div class="needs-grid">
    <div class="need-card" data-need="recipe-search" onclick="toggleNeed('recipe-search')">
        <div class="need-title">Recipe Search & Discovery</div>
        <div class="need-description">Find recipes based on ingredients, dietary preferences, or cooking time constraints</div>
    </div>

    <div class="need-card" data-need="price-comparison" onclick="toggleNeed('price-comparison')">
        <div class="need-title">Price Comparison</div>
        <div class="need-description">Compare prices of similar products across different brands and sizes</div>
    </div>

    <div class="need-card" data-need="nutritional-info" onclick="toggleNeed('nutritional-info')">
        <div class="need-title">Nutritional Information</div>
        <div class="need-description">Get detailed nutrition facts, allergen information, and health benefits of ingredients</div>
    </div>

    <div class="need-card" data-need="store-navigation" onclick="toggleNeed('store-navigation')">
        <div class="need-title">Store Navigation</div>
        <div class="need-description">Find product locations and get directions within the physical store</div>
    </div>

    <div class="need-card" data-need="meal-planning" onclick="toggleNeed('meal-planning')">
        <div class="need-title">Meal Planning</div>
        <div class="need-description">Plan weekly meals, create shopping lists, and organize family dining schedules</div>
    </div>

    <div class="need-card" data-need="cooking-tips" onclick="toggleNeed('cooking-tips')">
        <div class="need-title">Cooking Tips & Techniques</div>
        <div class="need-description">Learn cooking methods, ingredient substitutions, and kitchen tips for better results</div>
    </div>

    <div class="need-card" data-need="inventory-management" onclick="toggleNeed('inventory-management')">
        <div class="need-title">Inventory Management</div>
        <div class="need-description">Track home pantry items, expiration dates, and suggest recipes based on what you have</div>
    </div>

    <div class="need-card" data-need="delivery-tracking" onclick="toggleNeed('delivery-tracking')">
        <div class="need-title">Delivery Tracking</div>
        <div class="need-description">Monitor order status, delivery times, and manage pickup/delivery preferences</div>
    </div>

    <div class="need-card" data-need="seasonal-suggestions" onclick="toggleNeed('seasonal-suggestions')">
        <div class="need-title">Seasonal Suggestions</div>
        <div class="need-description">Discover seasonal produce, holiday recipes, and timely cooking recommendations</div>
    </div>
</div>

<div class="selection-summary">
    <div class="selected-count" id="selectedCount">0 of 3 needs selected</div>
    <p>Choose exactly 3 user needs that are most relevant for a recipe-focused chatbot</p>
    <button class="submit-btn" id="submitBtn" onclick="submitSelection()" disabled>Submit Selection</button>
</div>

<div class="feedback" id="feedback">
    <!-- Feedback will be generated by JavaScript -->
</div>