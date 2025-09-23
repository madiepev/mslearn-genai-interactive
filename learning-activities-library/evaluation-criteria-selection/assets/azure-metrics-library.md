# Azure AI Foundry Evaluation Metrics Library

This document provides comprehensive details about the built-in evaluation metrics available in Azure AI Foundry, organized by category and use case.

## Overview

Azure AI Foundry provides a comprehensive suite of evaluation metrics designed to assess AI model performance across different dimensions. These metrics help ensure that AI applications meet business requirements, safety standards, and user expectations.

## Metric Categories

### Content Quality Metrics

These metrics focus on the fundamental quality of AI-generated content, ensuring responses are well-structured, accurate, and appropriate.

#### Coherence
- **Azure Foundry ID**: `coherence`
- **Purpose**: Measures logical flow and consistency in responses
- **Evaluation Focus**: Logical structure, consistent reasoning, narrative flow
- **Business Value**: Ensures professional, trustworthy communication that builds credibility
- **Best Applications**: Long-form content, complex explanations, multi-step processes
- **Scoring**: 1-5 scale (1=Incoherent, 5=Perfectly coherent)
- **Complementary Metrics**: Fluency, Relevance

#### Fluency
- **Azure Foundry ID**: `fluency`
- **Purpose**: Evaluates natural language quality and readability
- **Evaluation Focus**: Grammar, syntax, naturalness, language quality
- **Business Value**: Creates positive user experience through clear, professional communication
- **Best Applications**: Customer-facing content, written communications, documentation
- **Scoring**: 1-5 scale (1=Poor fluency, 5=Native-level fluency)
- **Complementary Metrics**: Coherence, Professionalism

#### Relevance
- **Azure Foundry ID**: `relevance`
- **Purpose**: Measures appropriateness and topic alignment
- **Evaluation Focus**: Question addressing, topic adherence, information appropriateness
- **Business Value**: Improves user satisfaction by providing exactly what users need
- **Best Applications**: Search and retrieval, Q&A systems, information lookup
- **Scoring**: 1-5 scale (1=Completely irrelevant, 5=Perfectly relevant)
- **Complementary Metrics**: Groundedness, Product Knowledge

#### Groundedness
- **Azure Foundry ID**: `groundedness`
- **Purpose**: Ensures factual accuracy and source-based responses
- **Evaluation Focus**: Context adherence, source citation, factual accuracy
- **Business Value**: Reduces misinformation risk and builds trust through accurate information
- **Best Applications**: Knowledge bases, research assistance, fact-checking
- **Scoring**: 1-5 scale (1=Ungrounded, 5=Fully grounded in sources)
- **Complementary Metrics**: Relevance, Transparency

### Safety & Responsibility Metrics

These metrics ensure AI applications operate safely, fairly, and transparently, meeting ethical and regulatory requirements.

#### Content Safety
- **Azure Foundry ID**: `content_safety`
- **Purpose**: Detection of harmful or inappropriate content
- **Evaluation Focus**: Harmful content identification, offensive material detection, inappropriate content filtering
- **Business Value**: Protects brand reputation and ensures safe user experiences
- **Best Applications**: Public-facing AI, user-generated content, moderation systems
- **Scoring**: Pass/Fail with severity levels (Safe, Low Risk, Medium Risk, High Risk)
- **Complementary Metrics**: Fairness, Transparency

#### Fairness
- **Azure Foundry ID**: `fairness`
- **Purpose**: Bias detection and equitable treatment evaluation
- **Evaluation Focus**: Demographic bias, equitable treatment, inclusive language
- **Business Value**: Promotes inclusive practices and reduces discrimination risk
- **Best Applications**: HR applications, financial services, healthcare AI
- **Scoring**: 1-5 scale (1=Highly biased, 5=Completely fair)
- **Complementary Metrics**: Content Safety, Empathy

#### Transparency
- **Azure Foundry ID**: `transparency`
- **Purpose**: Measures explainability and reasoning clarity
- **Evaluation Focus**: Reasoning explanation, decision process clarity, limitation acknowledgment
- **Business Value**: Builds trust through understanding and enables informed decision-making
- **Best Applications**: Complex decisions, regulatory compliance, high-stakes scenarios
- **Scoring**: 1-5 scale (1=Opaque, 5=Completely transparent)
- **Complementary Metrics**: Groundedness, Professionalism

### Business-Specific Metrics

These metrics evaluate AI performance against specific business objectives and commercial use cases.

#### Persuasiveness
- **Azure Foundry ID**: `persuasiveness`
- **Purpose**: Evaluates ability to influence effectively without being pushy
- **Evaluation Focus**: Compelling arguments, influence techniques, ethical persuasion
- **Business Value**: Drives conversions and business outcomes through effective communication
- **Best Applications**: Sales AI, marketing content, recommendation systems
- **Scoring**: 1-5 scale (1=Not persuasive, 5=Highly persuasive)
- **Complementary Metrics**: Product Knowledge, Professionalism

#### Product Knowledge
- **Azure Foundry ID**: `product_knowledge`
- **Purpose**: Measures depth of product/service understanding
- **Evaluation Focus**: Product accuracy, feature knowledge, benefit articulation
- **Business Value**: Builds customer confidence and enables effective sales and support
- **Best Applications**: Sales assistance, product support, technical documentation
- **Scoring**: 1-5 scale (1=No knowledge, 5=Expert knowledge)
- **Complementary Metrics**: Relevance, Lead Qualification

#### Lead Qualification
- **Azure Foundry ID**: `lead_qualification`
- **Purpose**: Evaluates ability to identify and qualify potential customers
- **Evaluation Focus**: Prospect identification, qualification criteria assessment, information gathering
- **Business Value**: Improves sales efficiency by focusing efforts on qualified leads
- **Best Applications**: Sales chatbots, lead generation, customer screening
- **Scoring**: 1-5 scale (1=Poor qualification, 5=Expert qualification)
- **Complementary Metrics**: Persuasiveness, Product Knowledge

#### Professionalism
- **Azure Foundry ID**: `professionalism`
- **Purpose**: Maintains professional demeanor and language standards
- **Evaluation Focus**: Business tone, etiquette, communication standards
- **Business Value**: Represents brand professionally and maintains business relationships
- **Best Applications**: Business communications, customer service, B2B interactions
- **Scoring**: 1-5 scale (1=Unprofessional, 5=Highly professional)
- **Complementary Metrics**: Fluency, Empathy

#### Objection Handling
- **Azure Foundry ID**: `objection_handling`
- **Purpose**: Evaluates ability to address concerns and overcome resistance
- **Evaluation Focus**: Concern acknowledgment, objection resolution, resistance management
- **Business Value**: Converts hesitant prospects and resolves customer concerns effectively
- **Best Applications**: Sales conversations, negotiation support, customer retention
- **Scoring**: 1-5 scale (1=Poor handling, 5=Expert handling)
- **Complementary Metrics**: Persuasiveness, Empathy

#### Creating Urgency
- **Azure Foundry ID**: `creating_urgency`
- **Purpose**: Motivates action without high-pressure tactics
- **Evaluation Focus**: Appropriate urgency creation, ethical pressure, action motivation
- **Business Value**: Drives timely decision-making and reduces sales cycle length
- **Best Applications**: Sales closing, limited-time offers, decision acceleration
- **Scoring**: 1-5 scale (1=No urgency, 5=Effective urgency)
- **Complementary Metrics**: Persuasiveness, Professionalism

### Interaction Quality Metrics

These metrics assess the quality of human-AI interactions, focusing on user experience and relationship building.

#### Empathy
- **Azure Foundry ID**: `empathy`
- **Purpose**: Measures understanding and emotional intelligence
- **Evaluation Focus**: Emotion recognition, appropriate responses, emotional support
- **Business Value**: Improves customer satisfaction and builds stronger relationships
- **Best Applications**: Customer support, healthcare AI, crisis management
- **Scoring**: 1-5 scale (1=No empathy, 5=Highly empathetic)
- **Complementary Metrics**: Professionalism, Problem Solving

#### Personalization
- **Azure Foundry ID**: `personalization`
- **Purpose**: Evaluates ability to tailor responses to individual users
- **Evaluation Focus**: Context adaptation, preference recognition, individual needs
- **Business Value**: Increases engagement and conversion through relevant, targeted communication
- **Best Applications**: Recommendation engines, personalized marketing, adaptive learning
- **Scoring**: 1-5 scale (1=Generic, 5=Highly personalized)
- **Complementary Metrics**: Relevance, Engagement

#### Engagement
- **Azure Foundry ID**: `engagement`
- **Purpose**: Measures ability to maintain interest and interactive dialogue
- **Evaluation Focus**: Interest maintenance, interactive quality, compelling conversation
- **Business Value**: Increases user retention and interaction duration
- **Best Applications**: Chatbots, educational AI, entertainment applications
- **Scoring**: 1-5 scale (1=Boring, 5=Highly engaging)
- **Complementary Metrics**: Personalization, Empathy

#### Problem Solving
- **Azure Foundry ID**: `problem_solving`
- **Purpose**: Evaluates effectiveness in resolving issues and providing solutions
- **Evaluation Focus**: Problem understanding, solution effectiveness, resolution guidance
- **Business Value**: Reduces support costs and improves customer satisfaction
- **Best Applications**: Technical support, troubleshooting, help desk systems
- **Scoring**: 1-5 scale (1=No solution, 5=Perfect solution)
- **Complementary Metrics**: Empathy, Product Knowledge

## Metric Selection Guidelines

### Coverage Principles

1. **Balanced Coverage**: Select metrics from multiple categories for comprehensive evaluation
2. **Business Alignment**: Choose metrics that directly support your business objectives
3. **User-Centric**: Prioritize metrics that enhance user experience and satisfaction
4. **Risk Management**: Include safety and responsibility metrics for public-facing applications

### Category Combinations

#### High-Trust Scenarios (Healthcare, Financial)
- **Primary**: Groundedness, Transparency, Content Safety
- **Secondary**: Empathy, Professionalism, Fairness

#### Sales & Marketing Applications
- **Primary**: Persuasiveness, Product Knowledge, Lead Qualification
- **Secondary**: Professionalism, Coherence, Objection Handling

#### Customer Support Systems
- **Primary**: Empathy, Problem Solving, Professionalism
- **Secondary**: Groundedness, Transparency, Product Knowledge

#### Educational Applications
- **Primary**: Engagement, Personalization, Empathy
- **Secondary**: Coherence, Transparency, Fairness

#### Content Generation
- **Primary**: Coherence, Fluency, Groundedness
- **Secondary**: Relevance, Content Safety, Professionalism

## Implementation Considerations

### Evaluation Setup
- Configure metrics in Azure AI Foundry evaluation dashboard
- Set appropriate thresholds for each metric based on business requirements
- Establish baseline measurements using sample data
- Plan for regular evaluation cycles and metric reviews

### Data Requirements
- Ensure sufficient evaluation data for reliable metric calculation
- Include diverse scenarios representative of production use cases
- Plan for both automated and human evaluation components
- Document evaluation criteria and rating guidelines

### Integration Patterns
- Integrate metrics into CI/CD pipelines for continuous evaluation
- Set up automated alerts for metric threshold violations
- Establish metric reporting dashboards for stakeholder visibility
- Plan for A/B testing with different metric configurations

### Continuous Improvement
- Regularly review metric performance and business alignment
- Adjust thresholds based on production performance data
- Expand metric coverage as application complexity grows
- Incorporate user feedback into metric evaluation criteria

## Common Metric Combinations

### Sales AI (3-metric selection)
1. **Persuasiveness** - Drive conversions
2. **Product Knowledge** - Build credibility
3. **Lead Qualification** - Improve efficiency

### Customer Support AI (3-metric selection)
1. **Empathy** - Handle emotions
2. **Problem Solving** - Resolve issues
3. **Professionalism** - Represent brand

### Educational AI (3-metric selection)
1. **Engagement** - Maintain interest
2. **Personalization** - Adapt to learners
3. **Empathy** - Support students

### Content AI (3-metric selection)
1. **Coherence** - Logical structure
2. **Fluency** - Language quality
3. **Groundedness** - Factual accuracy

### Healthcare AI (3-metric selection)
1. **Groundedness** - Factual accuracy
2. **Empathy** - Patient sensitivity
3. **Transparency** - Clear limitations

This metrics library serves as a comprehensive reference for selecting appropriate Azure AI Foundry evaluation criteria based on specific business scenarios and application requirements.