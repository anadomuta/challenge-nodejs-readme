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
    message: "Please write a short description of your project.",
  },
  {
    type: "list",
    name: "license",
    message:
      "What kind of license should your project have? Please pick one of the licenses from the list or select None if you would like no licence.",
    choices: [
      {
        name: "Academic Free License v3.0",
        value: "Academic",
      },
      {
        name: "Apache license 2.0",
        value: "Apache",
      },
      {
        name: "Artistic license 2.0",
        value: "Artistic",
      },
      {
        name: "Boost Software License 1.0",
        value: "Boost-1.0",
      },
      {
        name: "BSD 2-Clause 'Simplified' license",
        value: "BSD-2-Clause",
      },
      {
        name: "BSD 3-Clause 'New' or 'Revised' license",
        value: "BSD_3_Clause",
      },
      {
        name: "BSD 3-Clause Clear license",
        value: "BSD_3_Clause_Clear",
      },
      {
        name: "BSD 4-Clause 'Original' or 'Old' license",
        value: "BSD_4_Clause",
      },
      {
        name: "BSD Zero-Clause license",
        value: "BSD_Zero",
      },
      {
        name: "Creative Commons license family",
        value: "Creative",
      },
      {
        name: "Creative Commons Zero v1.0 Universal",
        value: "Creative_Zero",
      },
      {
        name: "Creative Commons Attribution 4.0",
        value: "Creative_Attribution",
      },
      {
        name: "Creative Commons Attribution ShareAlike 4.0",
        value: "Creative_ShareAlike",
      },
      {
        name: "Educational Community License v2.0",
        value: "Educational",
      },
      {
        name: "Eclipse Public License 1.0",
        value: "Eclipse_1.0",
      },
      {
        name: "Eclipse Public License 2.0",
        value: "Eclipse_2.0",
      },
      {
        name: "European Union Public License 1.1",
        value: "EUPL_1.1",
      },
      {
        name: "GNU Affero General Public License v3.0",
        value: "AGPL_3.0",
      },
      {
        name: "GNU General Public License family",
        value: "GPL",
      },
      {
        name: "GNU General Public License v2.0",
        value: "GPL_2.0",
      },
      {
        name: "GNU General Public License v3.0",
        value: "GPL_3.0",
      },
      {
        name: "GNU Lesser General Public License family	",
        value: "LGPL",
      },
      {
        name: "GNU Lesser General Public License v2.1",
        value: "LGPL_2.1",
      },
      {
        name: "GNU Lesser General Public License v3.0",
        value: "LGPL_3.0",
      },
      {
        name: "ISC",
        value: "ISC",
      },
      {
        name: "LaTeX Project Public License v1.3c",
        value: "LaTeX",
      },
      {
        name: "Microsoft Public License",
        value: "Microsoft",
      },
      {
        name: "MIT",
        value: "MIT",
      },
      {
        name: "Mozilla Public License 2.0",
        value: "Mozilla",
      },
      {
        name: "Open Software License 3.0",
        value: "OSL_3.0",
      },
      {
        name: "PostgreSQL License",
        value: "PostgreSQL",
      },
      {
        name: "SIL Open Font License 1.1",
        value: "OFL_1.1",
      },
      {
        name: "University of Illinois/NCSA Open Source License",
        value: "NCSA",
      },
      {
        name: "The Unlicense",
        value: "Unlicense",
      },
      {
        name: "zLib License",
        value: "zLib",
      },
      {
        name: "No License",
        value: "None",
      },
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

    if (!fs.existsSync(`generated`)) {
      fs.mkdirSync(`generated`);
    }

    await writeFileAsync(
      path.join(`${process.cwd()}/generated/`, "README.md"),
      markdown
    );

    console.info("Successfully wrote to README.md");
  } catch (err) {
    console.error(err);
  }
};

// Function call to initialize program
init();
