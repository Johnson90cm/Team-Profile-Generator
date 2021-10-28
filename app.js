// Packages
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const OUTPUT_DIR = path.resolve(___dirname, "dist");

// Modules
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

// Render
const render = require("./lib/index");

// Array
const staff = [];

// Inquirer Prompts
const employeePrompts = [
    {
        type: 'input',
        name: 'name',
        message: 'Employee Name?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Employee Name?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Employee Name?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Employee Name?'
    },
]

managerPrompts = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the managers office number?',
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                console.log("Enter an office number to proceed.");
                return false;
            }
        }
    }
]

engineerQuestions = [
    {
        type: "input",
        name: "github",
        message: "What is the engineer's Github Username? (Required)",
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log("Please enter a GitHub username!");
                return false;
            }
        }
    }
]

internQuestions = [

    {
        type: "input",
        name: "school",
        message: "What school is the intern from? (Required)",
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log("Please enter a school name!");
                return false;
            }
        }
    }
]

