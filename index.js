const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

generateREADME();

async function generateREADME() {
    try {
        const { username } = await inquirer.prompt({
            message: "Enter your GitHub username",
            name: "username",
        });

        const { data } = await axios.get(
            `https://api.github.com/users/${username}`
        );

        const email = data.email;
        const profileImg = data.avatar_url;
        
        // project title
        const { projectTitle } = await inquirer.prompt({
            type: "input",
            message: "What is the title of your project?",
            name: "projectTitle",
        });

        // project description 
        const { projectDescription } = await inquirer.prompt({
            type: "input",
            message: "What is the project description?",
            name: "projectDescription",
        });

        // table of contents
        const { tableContent } = await inquirer.prompt({
            type: "input",
            message: "List your table of content. Separate each section with a comma. Example: 1. Intro, 2. Guidelines.",
            name: "tableContent",
        });

        // installation
        const { installation } = await inquirer.prompt({
            type: "input",
            message: "What are the installation instructions?",
            name: "installation",
        });

        // usage
        const { usage } = await inquirer.prompt({
            type: "input",
            message: "What's the usage?",
            name: "usage",
        });

        // license
        const { license } = await inquirer.prompt({
            type: "input",
            message: "Are there any licenses?",
            name: "license",
        });

        // get badge
        const { userlabel } = await inquirer.prompt({
            type: "input",
            message: "What label do you want your badge to have?",
            name: "userlabel",
        });

        const { usermessage } = await inquirer.prompt({
            type: "input",
            message: "What message do you want your badge to have?",
            name: "usermessage",
        });

        const { usercolor } = await inquirer.prompt({
            type: "list",
            message: "What color do you want your badge to have?",
            name: "usercolor",
            choices: ["brightgreen", "green", "yellowgreen", "yellow", "orange", "red", "blue",
                "lightgrey", "success", "important", "critical", "informational", "inactive", "blueviolet",
                "ff69b4", "9cf"],
        });

        const badgeURL = `https://img.shields.io/badge/${userlabel}-${usermessage}-${usercolor}`;

        // contributing
        const { contributing } = await inquirer.prompt({
            type: "input",
            message: "What are the guidelines for contributing?",
            name: "contributing",
        });

        // tests
        const { tests } = await inquirer.prompt({
            type: "input",
            message: "What are the tests for your application?",
            name: "tests",
        });

        // questions

        // write README.md
        fs.writeFile("README.md", "# **" + projectTitle + "**\n***\n", (err) => {
            if (err) throw (err);
            console.log("Added Title");
        });

        fs.appendFile("README.md", "![badge](" + badgeURL + ")\n", (err) => {
            if (err) throw (err);
            console.log("Added Badge");
        });

        fs.appendFile("README.md", "## **Description** \n***\n" + projectDescription + "\n", (err) => {
            if (err) throw (err);
            console.log("Added Description");
        });

        const splitContent = tableContent.split(",").join("\n");
        fs.appendFile("README.md", "## **Table of Contents** \n***\n" + splitContent + "\n", (err) => {
            if (err) throw (err);
            console.log("Added Table of Contents");
        });

        fs.appendFile("README.md", "## **Installation** \n***\n" + installation + "\n", (err) => {
            if (err) throw (err);
            console.log("Added Installation");
        });

        fs.appendFile("README.md", "## **Usage** \n***\n" + usage + "\n", (err) => {
            if (err) throw (err);
            console.log("Added Usage");
        });

        fs.appendFile("README.md", "## **License** \n***\n" + license + "\n", (err) => {
            if (err) throw (err);
            console.log("Added License");
        });

        fs.appendFile("README.md", "## **Contributing** \n***\n" + contributing + "\n", (err) => {
            if (err) throw (err);
            console.log("Added Contributing");
        });

        fs.appendFile("README.md", "## **Tests** \n***\n" + tests + "\n", (err) => {
            if (err) throw (err);
            console.log("Added Tests");
        });

        fs.appendFile("README.md", "## **Questions** \n***\n" + "![profile Image](" + profileImg + ")\n" + email, (err) => {
            if (err) throw (err);
            console.log("Added Questions");
        });

    } catch (err) {
        console.log({ error: (err) });
    }
}

