# Microsoft Learn - Interactive GenAI Activities

An automated system for creating interactive learning activities through GitHub Issues and Actions.

## 🚀 Quick Start

### For Content Developers

1. **Create New Activity**: Go to [Issues](../../issues) → "New Issue" → "Learning Activity Request"
2. **Fill Template**: Complete all required fields with your content
3. **Submit**: GitHub Actions will automatically generate your HTML file
4. **Review**: Check the generated file and make any needed adjustments

### For Learners

Navigate to any generated activity and:
- Read the scenario context
- Select your answers by clicking cards
- Submit to receive personalized feedback
- Continue to the next activity in the sequence

## 📁 Repository Structure

```
├── .github/
│   ├── ISSUE_TEMPLATE/          # Templates for content requests
│   └── workflows/               # Automated generation workflows
├── docs/                        # Documentation and guides
├── recipe-chatbot-mockups/      # Example interactive activities
├── learning-activities-library/ # Reusable content templates
└── evaluation/                  # Assessment resources
```

## 🎯 Features

### Automated Generation
- **GitHub Issues** as content input interface
- **GitHub Actions** for automatic HTML generation
- **Template-based** consistent styling and functionality
- **Zero coding** required for content developers

### Interactive Activities
- **Multiple choice** selection with validation
- **Real-time feedback** based on performance
- **Personalized scoring** with custom messages
- **Navigation chains** for sequential learning
- **Mobile responsive** design

### Content Management
- **Version controlled** activities in Git
- **Reusable templates** for different activity types
- **Consistent styling** across all generated content
- **Easy customization** through template modification

## 📖 Documentation

- **[Automated Activity Generator Guide](docs/automated-activity-generator.md)** - Complete setup and usage instructions
- **[Example Usage](docs/example-usage.md)** - Step-by-step example with sample content
- **[Project Overview](docs/project-overview.md)** - High-level project goals and architecture

## 🔧 Current Activity Types

### Multiple Choice Selection
- Learners select N items from M options
- Immediate feedback on correct/incorrect choices
- Scoring with personalized messages
- Support for complex scenarios and explanations

### Coming Soon
- **Matching Activities** - Connect related concepts
- **Ranking Exercises** - Order items by priority/importance
- **True/False Questions** - Binary choice assessments
- **Drag & Drop** - Visual arrangement tasks

## 🎨 Existing Activities

### Recipe Chatbot Series
Interactive activities for learning chatbot design:
- **[Task 1: User Needs](recipe-chatbot-mockups/task-1-user-needs/)** - Identify key user requirements
- **[Task 2: Intent Matching](recipe-chatbot-mockups/task-2-intent-matching/)** - Map user inputs to responses
- **[Task 3: Metrics Selection](recipe-chatbot-mockups/task-3-metrics-selection/)** - Choose evaluation criteria
- **[Task 4: Test Creation](recipe-chatbot-mockups/task-4-test-creation/)** - Design test scenarios
- **[Task 5: ACRUE Evaluation](recipe-chatbot-mockups/task-5-acrue-evaluation/)** - Apply evaluation framework

## 🛠️ Technical Details

### Technologies Used
- **HTML/CSS/JavaScript** for interactive frontend
- **GitHub Actions** for automated processing
- **Node.js** for template processing and file generation
- **Markdown** for content templates and documentation

### Architecture
1. **Content Input** via structured GitHub Issue templates
2. **Processing** through GitHub Actions workflow
3. **Generation** using Node.js template engine
4. **Output** as interactive HTML files
5. **Version Control** through Git commits

### Customization
- **Styling**: Modify CSS templates in workflow
- **Functionality**: Update JavaScript templates
- **New Types**: Add templates for different activity patterns
- **Integration**: Connect with external systems or APIs

## 🤝 Contributing

### Content Developers
- Use the issue template system to request new activities
- Provide feedback on generated content
- Suggest improvements to templates and workflows

### Developers
- Enhance the generation workflow
- Add new activity types
- Improve styling and functionality
- Contribute to documentation

### Guidelines
1. **Test thoroughly** before committing changes
2. **Follow naming conventions** for consistency
3. **Document new features** in appropriate guides
4. **Maintain backward compatibility** with existing activities

## 📈 Future Enhancements

### Planned Features
- **Analytics Integration** for learning progress tracking
- **Accessibility Improvements** for inclusive design
- **Mobile App** companion for offline learning
- **Assessment Integration** with LMS platforms
- **Multi-language Support** for global reach

### Advanced Capabilities
- **AI-Generated Content** for rapid activity creation
- **Adaptive Learning** paths based on performance
- **Collaborative Activities** for team-based learning
- **Real-time Collaboration** features
- **Advanced Analytics** and reporting

## 📊 Usage Statistics

- **Activities Generated**: Track through GitHub Issues
- **Learner Interactions**: Monitor through analytics
- **Content Developer Adoption**: Measure issue template usage
- **Performance Metrics**: Analyze completion rates and scores

## 🔗 Related Projects

- **[Microsoft Learn](https://docs.microsoft.com/learn/)** - Main learning platform
- **[Azure Cognitive Services](https://azure.microsoft.com/services/cognitive-services/)** - AI services for enhancement
- **[GitHub Education](https://education.github.com/)** - Educational tools and resources

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Issues**: Use GitHub Issues for bug reports and feature requests
- **Discussions**: Use GitHub Discussions for questions and ideas
- **Documentation**: Check the `docs/` folder for detailed guides
- **Examples**: Review existing activities for reference patterns

---

**Ready to create your first interactive learning activity?** 
[Create a new issue](../../issues/new/choose) using the Learning Activity Request template!