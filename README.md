# PARTUM
> The xelatex cli for easy use!

## Highlights
- Auto file detection
- Auto cleanup

## Comming soon
- Templates
- Watching and recompiling

## Installation
To get started, install the cli with:

```bash
npm install -g partum
```
or 
```bash
yarn global add partum
```
Please make sure xelatex is installed on your system, if not check the [Installation-Guide](#xelatex-installation)

## Usage
Currently, this awesome tool features two modes; check and compile.
You can run each mode with this simple command:
```bash
partum check
```
## Check
This option just simply checks if all necessary requirements are installed on the system. If not, check out the [Installation-Guide](#xelatex-installation)

### Compile
This creates a new PDF file from your Xetex source file. You can either let the tool auto detect the .tex file or if there are more than one files in the directory, specify it as an argument:
```bash
partum compile document.tex
```

## Xelatex Installation
### Ubuntu, Debian, etc

```bash
sudo apt install texlive-xetex texlive texlive-latex-extra texlive-generic-extra 
```

### Windows
_Guide coming soon_

### OSX
_Guide coming soon_