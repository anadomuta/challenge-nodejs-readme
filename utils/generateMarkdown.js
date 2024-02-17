// Function to generate markdown for README
const generateMarkdown = (answers) => `# ${answers.project}

## Description

${answers.description}

## Installation 

To install the necessary dependencies, run the following command: 

${answers.dependencies}

## Usage

${answers.usage}

## Licence

This project is licensed under the ${answers.license}.

## Contributing

${answers.contribution}

## Tests

To run tests, use the following command: 

${answers.tests}

## Questions 

If you have any questions about this project, please reach out: https://github.com/${answers.username}, ${answers.email}`;

module.exports = generateMarkdown;
