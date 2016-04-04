# RWR-boilerplate

App boilerplate for project on top of React, Webpack and Rails.
Based on https://github.com/netguru/react_webpack_rails.

##### DEVELOPED WITH:

```
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
* separate css bundle with webpack ExtractTextPlugin (conflict with HMR)
* render rails layout without yield and react_controller
* git

##### RESOLVED:
* Rails + React + Webpack
* Hot Module Replacement
* SASS
* Autoprefixer
* Foundation Sites

### Install

```
git clone https://github.com/sunstorymvp/RWR-boilerplate.git _PROJECT_NAME_
cd _PROJECT_NAME_
rvm gemset create _PROJECT_NAME_
rvm gemset use _PROJECT_NAME_
gem install rails -v 5.0.0.beta3
bundle
npm install
```
### Start

```
foreman start
```
