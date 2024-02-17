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
      "AFL_3.0",
      "Apache_2.0",
      "Artistic_2.0",
      "BSL_1.0",
      "BSD_2_Clause",
      "BSD_3_Clause",
      "BSD_3_Clause_Clear",
      "BSD_4_Clause",
      "0BSD",
      "CC",
      "CC_1.0",
      "CC_BY_4.0",
      "CC_BY_SA_4.0",
      "WTFPL",
      "ECL_2.0",
      "EPL_1.0",
      "EPL_2.0",
      "EUPL_1.1",
      "AGPL_3.0",
      "GPL",
      "GPL_2.0",
      "GPL_3.0",
      "LGPL",
      "LGPL_2.1",
      "LGPL_v3.0",
      "ISC",
      "LPPL_1.3c",
      "MS_PL",
      "MIT",
      "MPL_2.0",
      "OSL_3.0",
      "PostgreSQL",
      "OFL_1.1",
      "NCSA",
      "Unlicense",
      "zLib",
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
