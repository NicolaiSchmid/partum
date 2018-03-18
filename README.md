# PARTUM
> The xelatex cli for easy use! 📖

## Highlights
- Auto file detection 👀
- Auto cleanup 🧹

## Comming soon
- Templates
- Watching and recompiling 👀

## Installation
To get started 🎬, install the cli with:

```bash
yarn global add partum
# or NPM
npm install -g partum
```
[Please make sure](#check) xelatex is installed on your system, if not check the [Installation-Guide](#xelatex-installation)

## Usage
Currently, this awesome tool features two modes; check and compile.
You can run each mode with this simple command:
```bash
partum [command]
```
## Check
`partum check` just checks if all necessary requirements are installed on the system. If not, follow  the [Installation-Guide](#xelatex-installation)

### Compile
`partum compile document.tex` will compile your tex-file to a new PDF. You can omit the `document.tex` if only one `.tex` file is in the directory.

## Xelatex Installation
### Ubuntu, Debian, etc
Just a simple apt install will do the trick:
```bash
sudo apt install texlive-xetex texlive texlive-latex-extra texlive-generic-extra 
```

### Windows
_Guide coming soon_

### OSX
_Guide coming soon_