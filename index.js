const inquirer = require("inquirer")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const fs = require('fs')
const generateHtml = require('./src/generate-html')
const teamArr = []

function createManager(){
    inquirer.prompt([
        {
            type: "input",
            name: 'name',
            message:"what is the Managers name?"
        },
        {
            type: "input",
            name: 'id',
            message:"what is the Managers ID?"
        },
        {
            type: "input",
            name: 'email',
            message:"what is the Managers email?"
        },
        {
            type: "input",
            name: 'officeNumber',
            message:"what is the Managers office number?"
        }
    ]).then((answers)=>{
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        teamArr.push(manager)
    otherMembers()
    })
}

function otherMembers(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'userChoice',
            message: 'what would you like to do next?',
            choices: ['add engineer', 'add intern', 'build team']
        },
    ]).then ((answers)=>{
        switch(answers.userChoice){
            case 'add engineer':
                addEngineer()
                break;
            case 'add intern':
                addIntern()
                break;
            default: 
            buildTeam()
        }
    })
}

function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: 'name',
            message:"what is the Engineers name?"
        },
        {
            type: "input",
            name: 'id',
            message:"what is the Engineers ID?"
        },
        {
            type: "input",
            name: 'email',
            message:"what is the Engineers email?"
        },
        {
            type: "input",
            name: 'github',
            message:"what is the Engineers Github username?"
        } 
    ]).then ((answers)=>{
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        teamArr.push(engineer)
        otherMembers()
    })
}

function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: 'name',
            message:"what is the Intern name?"
        },
        {
            type: "input",
            name: 'id',
            message:"what is the Intern ID?"
        },
        {
            type: "input",
            name: 'email',
            message:"what is the Intern email?"
        },
        {
            type: "input",
            name: 'school',
            message:"what is the Interns school?"
        } 
    ]).then ((answers)=>{
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        teamArr.push(intern)
        otherMembers()
    })
}

function buildTeam(){
fs.writeFileSync('./dist/index.html', generateHtml(teamArr),'utf8')
}
createManager()