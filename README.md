# RWR-boilerplate

App boilerplate for project on top of React, Webpack and Rails.
Based on https://github.com/netguru/react_webpack_rails.

##### INCLUDES:
* Rails + React + Webpack
* Hot Module Replacement
* configured Redux
* Foundation Sites
* SASS
* Autoprefixer
* configured ESLint
* configured Stylelint
* base layout, base router, example es2015 component

### Install

```
git clone https://github.com/sunstorymvp/RWR-boilerplate.git _PROJECT_NAME_
cd _PROJECT_NAME_

rvm use ruby-2.3.0@_PROJECT_NAME_ --ruby-version --create
cp config/secrets.example.yml config/secrets.yml
cp config/database.example.yml config/database.yml

gem install bundler
bundle
npm update --save
npm update --save-dev

rm -rf .git
git init
git remote add origin _NEW_GIT_REPOSITORY_
git add .
git commit -m 'initial commit'
git push -u origin master
```
### Start

```
foreman start
```
