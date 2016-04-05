# RWR-boilerplate

App boilerplate for project on top of React, Webpack and Rails.
Based on https://github.com/netguru/react_webpack_rails.

##### DEVELOPED WITH:

```
$ ruby -v
ruby 2.3.0p0 (2015-12-25 revision 53290) [x86_64-darwin15]

$ rails -v
Rails 5.0.0.beta3

$ rvm -v
rvm 1.26.11 (master) by Wayne E. Seguin <wayneeseguin@gmail.com>, Michal Papis <mpapis@gmail.com> [https://rvm.io/]

$ node -v
v5.9.1

$ nvm --version
0.30.1

$ npm -v
3.7.3
```

##### NOT RESOLVED:
* server side react components with RWR (conflict with style imports)
* git

##### RESOLVED:
* Rails + React + Webpack
* Hot Module Replacement
* SASS
* Autoprefixer
* Foundation Sites
* base layout, base router, example es2015 component
* configured ESLint
* Redux

### Install

```
git clone https://github.com/sunstorymvp/RWR-boilerplate.git _PROJECT_NAME_
cd _PROJECT_NAME_
rvm use ruby-2.3.0@_PROJECT_NAME_ --ruby-version --create
gem install bundler
cp config/secrets.example.yml config/secrets.yml
bundle
npm install
```
### Start

```
foreman start
```
