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

        console.log(email, profileImg);
        
        // project title
        const { projectTitle } = await inquirer.prompt({
            type: "input",
            message: "What is the title of your project?",
            name: "projectTitle",
        })

        // project description 
        const { projectDescription } = await inquirer.prompt({
            type: "editor",
            message: "What is the project description?",
            name: "projectDescription",
        })

        // table of contents
        const { tableContent } = await inquirer.prompt({
            type: "input",
            message: "List your table of content.",
            name: "tableContent",
        })

        // installation
        const { installation } = await inquirer.prompt({
            type: "editor",
            message: "What are the installation instructions?",
            name: "installation",
        })

        // usage

        // license

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

        console.log(badgeURL);

        // contributing

        // tests

        // questions

    } catch (err) {
        console.log({ error: (err) });
    }
}

