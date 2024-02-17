const generateBadges = (selectedBadges) => {
  const badges = [];

  if (selectedBadges.includes("HTML")) {
    badges.push(
      `![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)`
    );
  }

  if (selectedBadges.includes("CSS")) {
    badges.push(
      `![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
    `
    );
  }

  return badges.join("\n");
};

const generateLicenseBadge = (license) => {
  if (license !== "None") {
    return `![${license}](https://img.shields.io/badge/license-${license}-white.svg)`;
  } else {
    return "";
  }
};

// Function to generate markdown for README
const generateMarkdown = (answers) => {
  return `# ${answers.project}

  ${generateLicenseBadge(answers.license)}

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

This project is licensed under the ${answers.license} license.

## Contributing

${answers.contribution}

## Tests

To run tests, use the following command: 

${answers.tests}

## Questions 

If you have any questions about this project, please reach out: https://github.com/${
    answers.username
  }, ${answers.email}

## Badges

${generateBadges(answers.badges)}`;
};

module.exports = generateMarkdown;
