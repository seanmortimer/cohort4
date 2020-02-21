# EvolveU API Server

The API server is a utility within the repository. It was built to assist students with the concept of using an API to maintain data on a server. In this case, the data is just "state" as it is not persisted in a long term data store. The data is maintained in state and will be lost when you shutdown the server.

Python and pipenv is required to run the API Server.

If you have a version of Python that is at least 3.? you will be fine. To check enter:

```sh
python -V
```

On some systems you may need to enter:

```sh
python3 -V
```

If you do not have at least version python 3, install the suggested version of python using the instructions at [downloads](https://www.python.org/downloads/).

Once python is installed, check to see if pipenv is installed on your computer. To do this enter:

```sh
pipenv ?
```

If you get a "command not found" type message enter the following command to install pipenv:

```sh
pip install --user pipenv
```

Read the messages from the install very carefully. It may tell you to add pipenv to the path. If you do get that message, lookup on the internet on how to add a folder to a path for your operating system.

Now check to see if pipenv has been installed properly:

```sh
pipenv ?
```

If you get a "command not found" type message it did not work and you must start problem solving.

pipenv is used to manage our python environments.

Now that python and pipenv are installed on your computer, you are ready to set up the environment for the utility. You need to: 
- git pull from the "reference project" to install this utility onto your computer
- in console mode, change directory to reference/src/api

Install the packages required for the API using the following command. You must be in the correct directory for the rest of these commands to work.

```sh
cd /code/reference/src/api          ==> Windows
cd ~/code/reference/src/api         ==> linux / mac

pipenv install
```

Every time you start the API server you must be in the correct directory and start the python environment. The following command puts you into the correct python environment. We will spend more time explaining this later. 

```sh
pipenv shell
```

Now that the project and all its dependencies are installed and we are in the correct python environment, let's test to see how well the code works. Of course there is a test framework for python.


Run the tests as follows but only run the first line:

```sh
 python -m pytest -s
```

If the tests all work, start the web server. If the tests fail we'll need to fix that first. That is one of the points of writing tests. The following command will start the web server:

```sh
pipenv shell # only do this once per session
python web.py
```

Your test / play API server is now running on your computer. This is simulating a server on the internet. 

In your browser address enter the following:
- http://localhost:5000
you should see a welcome screen.


Start your JavaScript server (live-server) and start developing your fetch application.


To work with and test fetch you may need to change a few files in your project. Compare the files:

- code/reference/.babelrc / cohort?/reference/.babelrc
- code/reference/package.json / cohort?/reference/package.json