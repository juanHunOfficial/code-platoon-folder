# Linux Installfest

## Prerequesites

- Make sure your system is up to date and run any 'check for updates' command that is built into the OS
- Make sure you already have created an account with Github

## What we'll cover

We are going to install everything that you will need for this course. Please do this in order!

1. Terminal
2. Visual Studio Code & `code`
3. Package Management
4. Python
5. Node
6. Git
7. zsh shell
8. Alisases
9. PostgreSQL
10. VSCode Extensions

## Terminal

If you are on Linux we are going to assume you already know what a terminal is and have one ready to go.

These instructions are going to assume that your terminal is using `bash` as the main shell, but if `zsh` is the default on your system we will note when that difference matters. If you are in doubt what shell you are using type this into your terminal and note the result:

```bash
echo $SHELL
```

## Visual Studio Code & `code`

There are many IDEs (integrated development environments) out there that developers can use. For our class, we're going to be using Visual Studio Code, a free IDE created by Microsoft. VSCode is a powerful, flexible editor that supports many different coding languages. VSCode is also highly extensible, with a rich ecosystem of plugins.

- Download [Visual Studio Code](https://code.visualstudio.com/download) and click on the `.deb` installer (assuming you are on Ubuntu, otherwise you are on your own).
- During install, VSCode will by default ask to add itself to your system's PATH envirnmental variable - keep this box checked!
- This will allow you to open VSCode from the terminal using the command `code` like so:

```bash
# to simply open VSCode from the command line, type 'code'
code
# to open a specific file, specify it as the first argument to `code`
code myfile.txt
# to open the current folder
code .
```

Test that this `code` command actually works before moving on. You may need to close and reopen your terminal.

> A note about extensions: You are free to install any/all extensions you find on the VSCode marketplace as they suit you and we will be recommending some throughout the course. That said, I want to strongly advise you to _not_ install any AI code-completion tool like Github Copilot or Micrsoft's IntelliCode. Your goal in this course is to learn to program and these tools tend to interfere with that process by giving you regular autocompletion options that are not accurate solutions to the problem at hand. These tools have their place, but it is generally a bad habit to copy/paste code you do not understand yourself and these tools make that a seamless process, so please do avoid them for the duration of this course.

## Package Management

Advanced Package Tool (APT, or `apt`) is a built-in package manager for Ubuntu that handles the installation, versioning and removal of software.

The `update` command in apt will fetch a list of packages from an external source that are available for download. This list changes frequently so it's important to run the update command before installing anything to ensure you will be fetching the latest package and not an outdated one.

```bash
# update the list of external packages that are available for install
sudo apt-get update
```

## Python

Python comes built in with Ubuntu but to ensure that we have the must up to date version, let's run the following commands:

```bash
sudo apt-get install python3
sudo apt-get install python3-pip
sudo apt-get install python3-setuptools
```

> Note: if you ever need to install multiple packages simultaneously, apt-get supports this like so:
>
> ```bash
> sudo apt-get install python3 python3-pip python3-setuptools
> ```
>
> This is just a matter of convenience though, installing the packages as seperate commands will result in the same outcome.

Test that you can run the commands `python3` and `pip3`. For `pip3` you will simply see some output indicating it's usage, but as long as it recognizes the command as existing you are good. As per usual you may need to close and reopen your terminal to see these working.

### Python Virtual Environment

Python uses the concept of a 'virtual envrionment' to install packages through pip uniquely for a given project. In order to make creating such environments possible first install the necessary tool:

```bash
sudo apt-get install python3.10-venv
```

While you can make virtual environments for a given project it is also wise to have a default virtual environment, which we will create now. Open a new terminal and ensure you are in the home folder (`~`) and then run:

```bash
python3 -m venv default
```

If it works this will create a new folder in your current directory called 'test_project'. Inside that folder we should see a bin folder holding an `activate` script, a `pip` script, and several others. Ensure both the `activate` and `pip` scripts are present. Do so with:

If it works this will create a new folder in your current directory called 'default'. Inside that folder we should see a bin folder holding an `activate` script. Run that script with:

```bash
source ~/default/bin/activate
```

After running the above you should see the name of the venv ('default') represented somewhere in your command line. Close the terminal and reopen it and you will see this name is no longer there. That is because the venv needs to be set every time you open your terminal. Because it is easy to forget to do this we will make it happen on startup by adding it to our `.bash_profile` file later, but first, let's install node.

## Node

In this section, we'll use `apt` to install `npm`, the default package manager for node. We'll then use `npm` to install `n`, which is a tool to help manage different versions of `node`. Lastly, we'll use `n` to install the latest stable version of `node`.

```bash
# use apt to install npm
sudo apt-get install npm
# use npm to install n (-g means globally, as opposed to in a specific project/folder)
sudo npm install -g n
# use n to install the latest stable version of node
sudo n stable
```

Close and reopen your terminal if necessary and test that both the commands `node` and `npm` are recognized.

## `git`

Git may or may not be install by defaullt on your system, but to make sure use `apt` to install it.

```bash
sudo apt-get install git
```

Next, we'll configure Git with sensible defaults:

```bash
git config --global user.name "<YOUR_NAME>"
git config --global user.email "<YOUR_EMAIL>"
```

We also want to make sure that when committing we open the commit message prompt in VSCode (default will be `vim` and you will not like it):

```bash
git config --global core.editor code
```

You can confirm git is configured correctly by running `git config --global -l`. You should see that your username, email, and editor are all listed.

### Github and `gh`

Github's preferred way you interact with it now is a command line tool called `gh`. First, you will need a github account to continue, then, in your terminal type:

```bash
sudo apt-get install gh
```

Once downloaded type:

```bash
gh auth login
```

and follow the wizard steps to complete the authentication process. When done you should be able to close a repo like so:

```bash
gh repo clone lodash/lodash
```

This will install that repo in your current directory. Assuming this is successful if you want to delete it afterwards type:

```bash
rm -rf lodash
```



### bash and zsh

By default Ubuntu is using the shell called [bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)). This is the program that runs in your terminal. zsh is a newer shell program, very similar to bash, but with some amenities. zsh is also the default shell on MacOS, so we will install zsh and use it as our default so everyone is using the same shell.

You can run this command to see the shell currently being used. It should print `/bin/bash` or something similar with 'bash' in it:

```bash
echo $SHELL
```

### Installing zsh

Use apt to install zsh:

```sh
sudo apt-get install zsh
```

Verify that zsh has been installed:

```sh
zsh --version
```

### Set zsh as the default shell

Now we will configure Ubuntu to always use zsh. First get the path to where `zsh` lives on your filesystem`:

```sh
which zsh
```

It should print out something like:

```sh
/usr/bin/zsh
```

**Whatever that path is**, use it in this command below:

```sh
chsh -s <YOUR_PATH_TO_ZSH>
```

Now your default shell is zsh!

**Now, Close your terminal and VS Code entirely, and open VS Code and it's terminal again.**

Confirm that when we opened the terminal, which started a new shell session, ubuntu used zsh:

```sh
echo $SHELL
```

It should print `/bin/zsh` or a similar path with 'zsh' in it.

### Installing oh-my-zsh

One advantage of zsh is it is easy to install extension and add-ons. [oh-my-zsh](https://ohmyz.sh/) is an extremely popular extension which will add lots of useful features, customization, colors, etc to your zsh shell and command line experience.

To install it run:

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

And now you are uzing zsh!

## Alisases

Every time you open your terminal a special file will automatically be read from to do any necessary 'setup' type work. Assuming the terminal you are using is `bash` this file will be called `.bash_profile`.

If you are using `zsh` it will `.zshrc`.

We are going to modify `~/.zshrc` again so that we don't need to type `python3` but just `python` to invoke the correct program. This is a small change but it's a way of making it clear what your 'default' version is on a platform, and also an opportunity to discuss the concept of aliases.

Open `~/.zshrc` in VSCode like so:

```sh
code ~/.zshrc
```

VSCode should open the document. At the bottom of the file add the lines:

```sh
# Aliases

alias python='python3'
alias pip='pip3'
```

Aliases are what they sound like, simply a new name that points to an existing command.

We are also going to add another line to our `.zshrc` to make sure we are using our default Python venv everytime we open the terminal. So below your aliases within `.zshrc` add:

```sh
# activate default python venv
source $HOME/default/bin/activate
```

Test this by opening a new shell / terminal and run:

```sh
which python
```

It should print something like this: `aliased to python3`

## PostgreSQL

We will now install PostgreSQL by running the following command:

```bash
sudo apt-get install postgresql@14 postgresql-contrib
```

Start a PostgreSQL instance (in the background) like so:

```bash
sudo service postgresql@14 restart
```

To enter PostgreSQL we will switch our shell user to one named `postgres`, and then we can enter the running PostgreSQL instance.

```bash
# switch to the user `postgres`
sudo -i -u postgres

# connect to the running PostgreSQL instance
psql
```

If your terminal now looks like it does below, you have succesfully installed PostgreSQL:

```
postgres=#
```

To exit out of this enviroment type

```
postgres=# \q
```

You will still be logged in as the user 'postgres' even after this step, so either close the terminal outright or press `Ctrl-D` to return to the regular terminal environment you began in.

## VSCode Extensions

### Python

Open VSCode and create a new file called `example.py`. This will be enough for VSCode to prompt you to download it's official Python extension. If this doesn't happen for whatever reason, you can select the extension tab on the left pane and search for 'python' and download the one made by Microsoft (it should be the top result). You will know this was succesful if afterwords you can write some simply Python code like:

```py
print("hello")
```

and when you hover over the print function with your mouse pointer VSCode gives you some intellisense (essentially in-line documentation about what that bit of code does).

### Live Share

Live Share is another official Microsoft extension that will allow us as instructors and TAs to collaborate with you VSCode in real-time, which can be very helpful when troubleshooting a tricky bug. Search the extensions store for 'Live Share' and make sure it is published by Microsoft and download it. We won't expect you to set it up at this point but it is good enough to have it already installed for now.

### Live Server

Live Server is an extension that makes it simple to spin up a server to work with a website using HTML/CSS/JS without having to write your own basic server in Python/Django. This is useful when learning frontend.
