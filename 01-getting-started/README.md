
This file should be viewed from [github](https://github.com/larryevolveu/reference/tree/master/01-getting-started). Do not view from an editor.

This project is the "Getting Started" project for the EvovleU Full Stack Development program. It is a baseline to demonstrate:

- development environment
- development tools
- best practices

## Required Tools

See the README.md for the main repository for tool setup instructions in [github](https://github.com/larryevolveu/reference).


## Setup Instructions

Once all the base tools are installed this is the instructions to run the first sample project.

1. Install the dependencies required for the project. This command looks at the 'package.json' file and installs all of the dependencies. You must be in the correct directory to run this.  
```sh
cd reference
cd 01-getting-started
# Check to see if package.json is here
# by using ls or dir
npm i
# over 500 packages should be installed
```
2. Run the automated unit tests to ensure the code works as advertised. 
```sh
npm test
```
All the tests should run.

3. Start a simple development server with live load capabilities. 
```sh
cd src
live-server
```
Look through the application. Notice in the "Size" section of the web page there is some logic that, based on a number, will tell you if it is small / medium / large.

## Dissecting what's there

Let's start looking at this simple application. First, you will notice that the HTML and CSS in the project are fairly complicated. Like it or not, the design and layout is the sizzle that sells. The functionality is expected to work. 

As Full Stack Developers, we will often be expected to contribute or even write the design component of the project. For the next six months, we will be concentrating on the Programming or logic component more than the css or html components. This does not mean that it's not important.

1. Notice the directory structure. It may not be exact, but it will be close.
```
reference/
  01-getting-started/
    node_modules/
    src/
      images/
      scripts/
      index.css
      index.html
    .babelrc
    package-lock.json
    package.json
    README.md
  (other stuff for later)
  .gitignore
```
If you do not see the files that start with '.' you will have to 'show hidden files' in your explorer / file manager.
2. At your leisure, look through the HTML and CSS and figure out how it works. For now, let's look at the simple logic component.
3. In file src/01-getting-started/index.html search for "idSize". Let's drill into how that works. Look at src/01-getting-started/scripts. We will spend some time here.
 
