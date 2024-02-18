const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const util = require("util");
const emailValidator = require("email-validator");

const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// Function to validate user email address
const validateEmail = (email) => {
  if (emailValidator.validate(email)) {
    return true;
  } else {
    return "Please enter a valid email address.";
  }
};

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
    validate: validateEmail,
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
      "Academic",
      "Apache",
      "Artistic",
      "Boost-1.0",
      "BSD-2-Clause",
      "BSD_3_Clause",
      "BSD_3_Clause_Clear",
      "Creative",
      "Creative_Attribution",
      "Educational",
      "Eclipse",
      "GPL",
      "LGPL",
      "ISC",
      "LaTeX",
      "Microsoft",
      "MIT",
      "Mozilla",
      "OSL",
      "PostgreSQL",
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
