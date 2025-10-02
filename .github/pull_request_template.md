name: Pull Request
description: Create a pull request for SnapCode
title: "[PR] "
labels: []
assignees: []
body:
  - type: textarea
    id: description
    attributes:
      label: Description
      description: Describe the changes you made and why
      placeholder: What changes were made and why are they needed?
    validations:
      required: true

  - type: textarea
    id: type
    attributes:
      label: Type of Change
      description: What type of change does this PR introduce?
      value: |
        - [ ] Bug fix (non-breaking change which fixes an issue)
        - [ ] New feature (non-breaking change which adds functionality)
        - [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
        - [ ] Documentation update
        - [ ] Code refactoring
        - [ ] Performance improvement
        - [ ] Security enhancement
        - [ ] Other (please specify):

  - type: textarea
    id: testing
    attributes:
      label: Testing
      description: How have you tested these changes?
      placeholder: Describe the tests you ran and any manual testing performed...

  - type: textarea
    id: screenshots
    attributes:
      label: Screenshots (if applicable)
      description: Add screenshots to show the changes, especially for UI changes

  - type: textarea
    id: checklist
    attributes:
      label: Checklist
      description: Please check all that apply
      value: |
        - [ ] My code follows the project's coding standards
        - [ ] I have tested my changes thoroughly
        - [ ] I have updated documentation if needed
        - [ ] My changes don't break existing functionality
        - [ ] I have added tests for new features (if applicable)
        - [ ] All tests pass
        - [ ] I have followed the commit message guidelines

  - type: textarea
    id: related
    attributes:
      label: Related Issues
      description: Link any related issues or pull requests
      placeholder: Fixes #123, Closes #456, Related to #789

  - type: textarea
    id: additional
    attributes:
      label: Additional Notes
      description: Any additional information or context?