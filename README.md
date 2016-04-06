# love-send
Service which can help people to send theirs words of love in a postcard from different countries!

## Used Technologies

* Coffeescript
* Sass (BEM, CMACSS & different external mixin libraries)
* Angularjs
* jQuery
* Youtube API
* Foundation
* Gulp
* Bower

## Getting Started
To get you started you can simply clone the love-send repository and install the dependencies:

### Prerequisites
You need git to clone the love-send repository. You can get git from [http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize love-send. You must have node.js and its package manager (npm) installed. You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone love-send

Clone the love-send repository using [git](https://git-scm.com/):
```
git clone https://github.com/ssavitski/love-send.git
cd love-send
```
### Install Dependencies
We have two kinds of dependencies in this project: tools and external libraries. The tools help us manage the application. The external libraries and frameworks such as Angular, jQuery, Foundation, etc were used for building aplication and also for proper functioning of all its components.

* We get the tools we depend upon via `npm`, the [node package manager](https://www.npmjs.com/).
* We get the external libraries via `bower`, a [client-side code package manager](http://bower.io/).

To install global requirements we can simply do:
```
npm install -g gulp bower
```

To install local dependencies we can simply do:
```
npm install
bower install
```
You should find that you have two new folders in your project.
* `node_modules` - contains the npm packages for the tools we need
* `bower_components` - contains the external libraries files

### Run the Application
We have preconfigured the project with a simple development web server. The simplest way to start this server is:
```
gulp
```
After executing this command app automatically will opened in the default browser engine on your machine at `http://localhost:3000/`
