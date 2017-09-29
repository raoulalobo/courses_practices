# courses_practices

Initial Setup
In this section, we will be following a simple step-by-step guide to set up our
environment. The steps are as follows:
	1.	
The first step is to create a directory where our source code
is going to be. Create a directory and name it whatever you
want.
	2.	
Go into that particular directory and run the following
command from your terminal:
npm init
	3.	
After running step 2, it will be asking you a set of questions;
you can provide the value you want. Once it’s done, it will
create a file called pacakage.json in your current directory.
The project package.json that I have created looks like this as shown here in
Listing 2-6.  Package.json Contents
{
  "name": "learning-functional",
  "version": "1.0.0",
  "description": "Functional lib and examples in ES6",
  "main": "index.js",
  "scripts": {
    "playground" : "babel-node functional-playground/play.js --presets es2015-node5"
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Anto Aravinth @antoaravinth",
  "license": "ISC"
}
Now we need to add a few libraries, which will allow us to write ES6 code and
execute them. Run the following command in the current directory:
npm install --save-dev babel-preset-es2015-node5
  4.
npm run playground
