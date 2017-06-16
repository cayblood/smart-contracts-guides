## Setting up your machine for ethereum Dapp development
1. Open your terminal program.

2. (OSX Only) Install XCode in the App Store.

3. (OSX Only) Install [Homebrew](https://brew.sh/). This is a convenient tool for installing many different Unix utilities on your computer.

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
  
4. Install [node version manager](https://github.com/creationix/nvm). This makes it easier to manage multiple NodeJS projects on the same machine.

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

5. Close that terminal and open a new one so you get the nvm settings.

6. Install the latest version of node (7.10.0 as of this writing). Use whatever `nvm ls-remote` reports as the latest version as an argument to `nvm install`.

```
nvm ls-remote
nvm install <latest_version>
```

7. Activate the node version you just installed.

```
nvm use <version>
```

8. Install truffle.

```
npm install -g truffle
```

9. Install the ethereum test client.

```
npm install -g ethereumjs-testrpc
```
