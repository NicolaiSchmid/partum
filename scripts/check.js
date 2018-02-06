const shell = require('shelljs');
const chalk = require('chalk');

if (!shell.which('xelatex')) {
    console.log(
        `Xelatex is ${chalk.red.bold(
            'not'
        )} installed, please check https://github.com/NicolaiSchmid/partum/#xelatex-installation if you're not shure how to install it`
    );
} else {
    console.log(chalk.green(`You're system is all setup 👍`));
}
