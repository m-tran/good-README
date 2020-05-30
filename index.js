const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
    .prompt({
        message: "Enter your GitHub username",
        name: "username",
    })
    .then(function ({ username }) {
        const queryURL = `https://api.github.com/users/${username}`;

        axios.get(queryURL).then((res) => {
            // console.log(res.data);
            const email = res.data.email;
            const profileImg = res.data.avatar_url;

            console.log(profileImg);
            console.log(email);
        });
    });