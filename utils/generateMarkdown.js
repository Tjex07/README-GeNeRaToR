// function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.name}
  ## Github licence(https://img.shields.io/badge/license-${data.license}-green.svg)
  ## https://opensource.org/licenses/${data.license}
  
  ## Description 
  ${data.description}
  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [License](#license)
  * [Contributing](#contributing)
 
  * [Questions](#questions)
  
  ## How does one install this readme generator? 
  ${data.installation}

  ## How does one use this readme generator? 
  ${data.usage}

  ## Test 
  ${data.test}

  ## Choose your License! 
  This project is license under ${data.license}

  ## If you are contributing, please provide your email address. 
  ${data.email}

  ## How does one test this readme generator? 
  ${data.test}

  ## Questions 
  If you have any questions about this readme generator, please don't email ${data.email}. Don't go to my github either... https://github.com/${data.github}.

  ## License
${data.license} https://img.shields.io/badge/license-${data.license}-green.svg
https://opensource.org/licenses/${data.license}
  `;
}



// use for importing Markdown in index 
module.exports = generateMarkdown;
