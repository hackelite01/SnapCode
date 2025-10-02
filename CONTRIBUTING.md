# Contributing to SnapCode 🚀

Welcome to SnapCode! We're excited that you're interested in contributing to this amazing code snippet visualization tool. This document provides guidelines and information for contributors.

## 🎯 About SnapCode

SnapCode is a beautifully designed application that helps developers generate beautiful and customizable images of their code snippets. Built with Next.js, TypeScript, and Tailwind CSS, it's a developer tool created by developers, for developers.

## 🎃 Hacktoberfest 2025

This project is participating in **Hacktoberfest 2025**! We welcome contributions from developers of all skill levels. Look for issues tagged with `hacktoberfest` to get started.

### What is Hacktoberfest?
Hacktoberfest is a month-long celebration of open source software. Submit 6 quality pull requests to participating repositories between October 1-31 to earn digital badges and potentially a t-shirt!

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 13+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Code Editor**: CodeMirror 6
- **State Management**: Jotai
- **UI Components**: Radix UI
- **Deployment**: Vercel
- **Containerization**: Docker

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Git
- A GitHub account

### Local Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/SnapCode.git
   cd SnapCode
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Docker Development (Optional)

```bash
# Build and run with Docker Compose
docker-compose up -d
```

## 📋 Ways to Contribute

We welcome various types of contributions:

### 🔧 Code Contributions
- **Bug fixes**: Fix existing issues
- **New features**: Add new functionality
- **Performance improvements**: Optimize existing code
- **UI/UX enhancements**: Improve user interface and experience
- **Accessibility improvements**: Make the app more accessible
- **Mobile responsiveness**: Enhance mobile experience

### 📚 Non-Code Contributions
- **Documentation**: Improve README, add tutorials, API docs
- **Translation**: Help translate the interface to other languages
- **Testing**: Write unit tests, integration tests, or manual testing
- **Design**: Create icons, illustrations, or UI mockups
- **Bug reports**: Report issues with detailed reproduction steps
- **Feature requests**: Suggest new features with detailed descriptions

### 🎨 Specific Areas for Contribution

1. **Language Support**: Add support for new programming languages
2. **Themes**: Create new CodeMirror themes
3. **Export Formats**: Add new export formats (WebP, PDF, etc.)
4. **Background Options**: Add new gradient presets or patterns
5. **Social Features**: Share snippets functionality
6. **Keyboard Shortcuts**: Implement hotkeys for common actions
7. **Accessibility**: Screen reader support, keyboard navigation
8. **Performance**: Code splitting, image optimization

## 🐛 Reporting Issues

When reporting issues, please include:

1. **Clear title** describing the problem
2. **Steps to reproduce** the issue
3. **Expected behavior** vs **actual behavior**
4. **Screenshots** or **screen recordings** if applicable
5. **Environment details**:
   - OS (Windows, macOS, Linux)
   - Browser and version
   - Device type (desktop, mobile, tablet)

### Issue Templates

Use these labels when creating issues:
- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `hacktoberfest` - Hacktoberfest eligible issues
- `help wanted` - Extra attention is needed

## 🔄 Pull Request Process

### Before You Start
1. Check if an issue exists for your proposed change
2. If not, create an issue to discuss the change
3. Wait for maintainer approval before starting work on major features

### Creating a Pull Request

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

2. **Make your changes**
   - Follow the coding standards below
   - Write clear, concise commit messages
   - Test your changes thoroughly

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new export format for WebP"
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Use a clear, descriptive title
   - Reference any related issues
   - Provide a detailed description of changes
   - Include screenshots for UI changes

### Pull Request Guidelines

- **Title Format**: Use conventional commits format
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation
  - `style:` for formatting changes
  - `refactor:` for code refactoring
  - `test:` for adding tests
  - `chore:` for maintenance tasks

- **Description**: Include:
  - What changes were made
  - Why the changes were necessary
  - How to test the changes
  - Screenshots (for UI changes)
  - Breaking changes (if any)

- **Code Quality**:
  - Follow TypeScript best practices
  - Ensure no ESLint errors
  - Add comments for complex logic
  - Update documentation if needed

## 📝 Coding Standards

### TypeScript/JavaScript
- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for public functions
- Prefer functional components with hooks

### CSS/Styling
- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Use CSS variables for custom properties
- Maintain consistent spacing and sizing

### File Organization
```
src/
├── components/           # Reusable UI components
├── contexts/            # React contexts
├── data/               # Static data and constants
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── stores/             # State management
├── utils/              # Helper functions
└── types/              # TypeScript type definitions
```

### Git Commit Messages
Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): description

[optional body]

[optional footer]
```

Examples:
- `feat(editor): add syntax highlighting for Python`
- `fix(export): resolve image quality issue in PNG export`
- `docs: update installation instructions`

## 🧪 Testing

### Running Tests
```bash
npm run test
# or
yarn test
```

### Testing Guidelines
- Write unit tests for utility functions
- Test components with React Testing Library
- Include integration tests for critical workflows
- Test accessibility features
- Verify mobile responsiveness

## 📦 Release Process

1. Version bumping follows [Semantic Versioning](https://semver.org/)
2. Releases are created from the `main` branch
3. Release notes include all notable changes
4. Docker images are automatically built and pushed

## 🤝 Code of Conduct

Please note that this project is released with a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.

## 💬 Getting Help

- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For questions and community discussions
- **Discord**: Join our [community Discord](https://discord.gg/hacktoberfest) for real-time chat

## 🙏 Recognition

Contributors are recognized in several ways:
- Listed in the [Contributors](https://github.com/hackelite01/SnapCode/graphs/contributors) section
- Mentioned in release notes for significant contributions
- Featured in our README for major contributions

## 📄 License

By contributing to SnapCode, you agree that your contributions will be licensed under the [MIT License](LICENSE).

## 🌟 First Time Contributors

New to open source? Here are some beginner-friendly resources:
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [First Contributions](https://github.com/firstcontributions/first-contributions)
- [GitHub's Git Tutorial](https://try.github.io/)

Look for issues labeled `good first issue` to get started!

---

## 🎉 Thank You!

Thank you for considering contributing to SnapCode! Every contribution, no matter how small, helps make this tool better for developers worldwide. 

Happy coding! 🚀

---

**Project Maintainer**: [Mayank Rajput](https://github.com/hackelite01)  
**Website**: [snapcode.cf](https://www.snapcode.cf)  
**Support**: [Buy me a coffee](https://www.buymeacoffee.com/hackelite01) ☕