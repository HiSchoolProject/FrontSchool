# HiSchool! Project FrontSchool

Requirements
---
This application is a front end for [BackSchool](https://gitlab.com/HiSchoolProject/BackSchool). You should have a
working instance of BackSchool before running FrontSchool.

You need [Node.js](https://nodejs.org/en/download/package-manager) and a Node package manager.
[Yarn] (https://yarnpkg.com) is recommended.

On an APT-based system, run:
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt install nodejs yarn
```

Setup
---

- Clone this repository and move to the project directory
- Install the required dependencies: `yarn`
- Run the server: `yarn start`
