const shell = require('shelljs');
const path = require('path');
const chalk = require('chalk');

const cwd = path.join(__dirname);
const indexTex = path.join(__dirname, 'index.tex');

shell.config.silent = true;

const texfiles = shell.ls('-L', '*.tex');

if (texfiles.length === 1 || process.argv[3]) {
    const texFile = texfiles[0] || process.argv[3];
    const baseName = path.basename(texFile, '.tex');

    if (!shell.test('-f', texFile)) {
        console.error(chalk.red(`The tex file was empty. Please provide a valid file`));
        process.exit(1);
    }

    // Create temp directory
    shell.mkdir('./.tmp');

    const output = shell.exec(`xelatex --output-directory=./.tmp --halt-on-error ${texFile}`);

    // Notifiy user and exit script on error
    if (output.code !== 0) {
        // TODO Output filering?
        console.error(output.stdout);
        console.error(
            chalk.red(`An error occurred.`),
            `Please check the logs above for the reason`
        );
        process.exit(1);
    }

    // TODO Implement custom output directory
    // Move pdf to current directory, leaving garbage logs behind
    shell.mv(`./.tmp/${baseName}.pdf`, `.`);

    process.exit(0);
}

if (texfiles.length === 0) {
    console.error(`No tex files were found, please provide a file as an argument`);
    process.exit(0);
}

if (texfiles.length > 1) {
    console.error(`Multiple tex files were found, please provide a file as an argument`);
    process.exit(0);
}
