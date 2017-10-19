# WindowApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Then Run `npm run electron` for a dev instance of electron. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build for distribution

Set PACKAGE=true in .env file, then Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
Then Run `npm run electron` to start the app

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Bootstrapping Windows

Prerequisites

Windows 7 / Server 2008 R2 or higher
Visual Studio 2015 Update 3 - download VS 2015 Community Edition for free
Python 2.7
Node.js
Git
Debugging Tools for Windows if you plan on creating a full distribution since symstore.exe is used for creating a symbol store from .pdb files.

The bootstrap script will download all necessary build dependencies and create the build project files. Notice that we’re using ninja to build Electron so there is no Visual Studio project generated.

`$ python script\bootstrap.py -v`

## Building Windows

After building is done, you can find electron.exe under out\D (debug target) or under out\R (release target).

`$ python script\build.py`

## 32bit Build Windows

To build for the 32bit target, you need to pass --target_arch=ia32 when running the bootstrap script:

`$ python script\bootstrap.py -v --target_arch=ia32`

## To generate a Visual Studio project, you can pass the --msvs parameter: Windows

`$ python script\bootstrap.py --msvs`

## Cleaning

`$ npm run clean`

## Additional data
`import * as moment from 'moment';`
`import _ from "lodash";`
`import * as numeral from 'numeral';`
`import * as d3 from 'd3';`



