const execa = require('execa');
const chalk = require('chalk');

execa('xelatex', ['--version'], {
    env: process.env,
})
    .then((result) => {
        console.log(chalk.green(`You're system is all setup 👍`));
    })
    .catch((error) => {
        if (error.code === 'ENOENT') {
            console.log((`Xelatex is ${chalk.red.bold('not')} installed, please check https://github.com/NicolaiSchmid/partum if you're not shure how to install it`));
            return;
        }
        console.log(error);
    });