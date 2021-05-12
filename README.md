# Simple Memo Example
## Remindings
You can refer to the hackmd tutorials, and take this Simple Memo Example as a reference for your own memo project.

You need to use ajax to add/modify/delete the memo. If you have time, you can also create a user management system for the selection of different users.
## Setup
```
$ git clone https://github.com/flyotlin/SimpleMemoExample.git
$ cd SimpleMemoExample
$ npm install
$ npm start
```

## Structures
* `index.ejs` is the main memo html file.
* `indexController.ejs` is the Javascript code for all ajax and the dynamic DOM manipulation. 
    It is included in `index.ejs`. Other function descriptions can refer to the comments.
