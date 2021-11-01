const inquirer = require("inquirer");
const fs = require("fs");
const bodyHTML = require("./src/generateHTML.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { triggerAsyncId } = require("async_hooks");
const { inherits } = require("util");
const { takeCoverage } = require("v8");
const { createInflate } = require("zlib");
const { RSA_PKCS1_OAEP_PADDING } = require("constants");

const empArray = [];

const init = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Name of new Manager:",
        name: "name",
      },
      {
        type: "input",
        message: "ID Number:",
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
      },
    ])
    .then((data) => {
      let manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      empArray.push(manager);
      questionNewMember();
    });
};

function questionNewMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add a new member?",
        choices: ["Engineer", "Intern", "Done"],
        name: "role",
      },
    ])
    .then((data) => {
      switch (data.role) {
        case "Engineer":
          createEng();
          break;
        case "Intern":
          createInt();
          break;
        case "Done":
          buildTeam();
          break;
      }
    });
}

function createEng() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Name of new team member:",
        name: "name",
      },
      {
        type: "input",
        message: "ID Number:",
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
        message: "Github Username:",
        name: "github",
      },
    ])
    .then((data) => {
      let newMember = new Engineer(data.name, data.id, data.email, data.github);
      empArray.push(newMember);
      questionNewMember();
    });
}

function createInt() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Name of new team member:",
        name: "name",
      },
      {
        type: "input",
        message: "ID Number:",
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
        message: "School name:",
        name: "school",
      },
    ])
    .then((data) => {
      let newMember = new Intern(data.name, data.id, data.email, data.school);
      empArray.push(newMember);
      questionNewMember();
    });
}

function buildTeam() {
  fs.writeFile("./dist/index.html", bodyHTML(empArray), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Writing team profile...");
    }
  });
}

init();
