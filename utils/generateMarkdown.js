// Function to generate markdown for README
const generateMarkdown = (answers) => `# ${answers.project}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
- [Badges](#badges)


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

If you have any questions about this project, please reach out: https://github.com/${answers.username}, ${answers.email}

## Badges

${answers.badges}`;

module.exports = generateMarkdown;
