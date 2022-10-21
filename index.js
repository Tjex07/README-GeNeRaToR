const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = () => {

return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your application?',
    },
    {
      type: 'input',
      message: 'Provide a description of your application.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How does one install this readme generator?',
      name: 'installation',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How does one use this application?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'How does one test this readme generator?',
    },
    {
    type: 'checkbox',
    message: 'Choose your License!',
    name: 'license',
    choices: ['Cocoapods', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Crates.io'],
    },
    {
    type: 'input',
    message: 'If you are a Contributer for this application, please provided your GitHub username.',
    name: 'github',
    },
    {
      type: 'input',
      message: 'If you have any questions email me at.',
      name: 'email',
      },
])};

// function to write README file using file system 
const writeFile = data => {
  fs.writeFile('README.md', data, error => {
    // if there is an error 
    if (error) {
      console.log(error);
      return;
      // when the README has been created 
    } else {
      console.log("¥¥YoUr ReAdMe HaS bEeN sUcCeSsFuLlY gEnErAtEd!¥¥")
    }
  })
};

//initializes program and processes user input and then writes the input to the README.md
questions()
  
  .then(answers => {
    return generateMarkdown(answers);
  })
  .then(data => {
    return writeFile(data);
  })
  .catch(err => {
    console.log(err)
  });











