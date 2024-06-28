# learn-npm-playwright
how to automate task with playwright and node js

Install node into Windows
```ruby
https://nodejs.org/en/download/prebuilt-installer
```
Install node into Linux
```ruby
# installs fnm (Fast Node Manager)
curl -fsSL https://fnm.vercel.app/install | bash

# download and install Node.js
fnm use --install-if-missing 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.15.0`

# verifies the right NPM version is in the environment
npm -v # should print `10.7.0`
```
Install playwright into VS code
```ruby
npm init playwright@latest --yes -- --quiet --browser=chromium --browser=firefox --browser=webkit
```
