const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// Array of questions for user
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "project",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description og your project.",
  },
  {
    type: "list",
    name: "license",
    message:
      "What kind of license should your project have? Please pick one of the licenses from the list or select None if you would like no licence.",
    choices: [
      "Academic Free License v3.0",
      "Apache license 2.0",
      "Artistic-2.0",
      "Boost Software License 1.0",
      'BSD 2-clause "Simplified" license',
      'BSD 3-clause "New" or "Revised" license',
      "BSD 3-clause Clear license",
      'BSD 4-clause "Original" or "Old" license',
      "BSD Zero-Clause license",
      "Creative Commons license family",
      "Creative Commons Zero v1.0 Universal",
      "Creative Commons Attribution 4.0",
      "Creative Commons Attribution ShareAlike 4.0",
      "Do What The F*ck You Want To Public License",
      "Educational Community License v2.0",
      "Eclipse Public License 1.0",
      "Eclipse Public License 2.0",
      "European Union Public License 1.1",
      "GNU Affero General Public License v3.0",
      "GNU General Public License family",
      "GNU General Public License v2.0",
      "GNU General Public License v3.0",
      "GNU Lesser General Public License family",
      "GNU Lesser General Public License v2.1",
      "GNU Lesser General Public License v3.0",
      "ISC",
      "LaTeX Project Public License v1.3c",
      "Microsoft Public License",
      "MIT",
      "Mozilla Public License 2.0",
      "Open Software License 3.0",
      "PostgreSQL License",
      "SIL Open Font License 1.1",
      "University of Illinois/NCSA Open Source License",
      "The Unlicense",
      "zLib License",
      "None",
    ],
  },
  {
    type: "input",
    name: "dependencies",
    message: "What command should be run to install dependencies",
    default: "npm i",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What does the user need to know about contributing to the repo?",
  },
  {
    type: "input",
    name: "credits",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.",
  },
  {
    type: "input",
    name: "features",
    message: "If your project has a lot of features, please list them here.",
  },
  {
    type: "checkbox",
    name: "badges",
    message:
      "Please select which languages and tools you used to create this project.",
    choices: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "NodeJS"],
  },
];

// Function to prompt user
const promptUser = () => {
  return inquirer.prompt(questions);
};

// Function to write to README
const init = async () => {
  try {
    const answers = await promptUser();

    const markdown = generateMarkdown(answers);

    await writeFileAsync("README.md", markdown);

    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
};

// Function call to initialize program
init();
