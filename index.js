const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Required to push data to 
const empArray= [];

// function to addMember - questions
const addMember = () => {
  return inquirer.prompt([
    {
      type: "list",
      message: "Role of new team member:",
      choices: ["Manager", "Engineer", "Intern"],
      name: "role",
      when: 
    },
    {
      type: "input",
      message: "Name of new team member:",
      name: "name",
    },
    {
      type: "input",
      message: "ID Number:", // ID can be alphanumerical
      name: "id",
    },
    {
      type: "input",
      message: "Email address:",
      name: "email",
      validate: (email) => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (valid) {
          return true;
        } else {
          console.log("\n Please enter an valid email!");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Office Number:",
      name: "officeNumber",
      when: (answers) => {
        if (answers.role === "Manager") {
          return true;
        }
      },
    },
    {
        type: "input",
        message: "Github Username:",
        name: "github",
        when: (answers) => {
            if (answers.role === "Engineer") {
                return true;
            }
        },
    },
    {
        type: "input",
        message: "School name:",
        name: "school",
        when: (answers) => {
            if (answers.role === "Intern") {
                return true;
            }
        },
    },
    {
        type: "confirm",
        message: "Would you like to add more team members?",
        name: "confirmAddNew",
        default: "No"
    },
  ]);
  .then((employeeData) => {
    let newMember;
    if (role === "Engineer") {
        newMember = new Engineer(name, id, email);
    } else if (role === "Manager") {
        newMember = new Manager(name, id, email, officeNumber);
    } else if (role === "Intern") {
        newMember = new Intern(name, if, email, school);
    }
    empArray.push(newMember); // Push to existing array
    if (confirmAddNew === "Yes") {
        addMember();
    } else {
        return;
    }
  })
};


// function to initiate via node index.js
(() => {
  addMember()
    .then((answers) => fs.writeFileSync("index.html", generateHTML(answers)))
    .then(() => console.log("Creating Team Profile...."))
    .catch((err) => console.error(err));
})();
