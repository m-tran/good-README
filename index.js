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

    } catch (err) {
        console.log({error: (err)});
    }
}

