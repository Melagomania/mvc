Task: MVC Concept
===============================

This task is about creating simple web application using MVC.

Overview
----

Implement application that shows photos and accepts 'likes' from user.
Web page should have:
- block with current image
- like counter for that image
- like button to increment counter
- prev/next buttons to change current image.
- list of all images(names) with like counts sorted by likes  

>**[ -note- ]** You don't have to provide any styling for this component.

Split application in 4 parts:
- model - storage of photo data
- view-like - creates DOM nodes for like 
- view-top - creates DOM nodes for top photos list
- controller - handles the user interactions and connects view with model

The recommended project structure:

```
task-01
└─── index.html
└─── js/
      └─── controller.js
      └─── model.js
      └─── view-top.js
      └─── view-like.js
...
```
      

------------------- END OF HOMEWORK TASK ------------------------

Deadline:
----------

Due Date - 2018-18-04 23:59
Penalty will be applied for each overdue day