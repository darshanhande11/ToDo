# ToDo
**A simple ToDo application to manage your daily tasks and set reminders.**

![ToDo](https://user-images.githubusercontent.com/56157418/116068137-879e9b80-a6a7-11eb-9653-a2790f9bd41d.gif)


### What can it do?
- Add Task and Day & Time.
- Also, set a reminder while adding a task, by checking the checkbox.
- Or, you can also double tap a task to add a reminder to it.
- Delete a Task by clicking the red cross icon.

### Framework and Dependencies
- React JS used for the overall FrontEnd Dev.
- [npm json server](https://www.npmjs.com/package/json-server) helps us to use a mock backend and save the tasks in a json file. We can also perform POST, PUT and DELETE requests to `http://localhost:5000/tasks` using this dependency.
- [react-icons](https://www.npmjs.com/package/react-icons) used for icons.
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) used for adding routes and Link Component.

### Steps to run the application locally
- You should have npm installed on your machine.
- Clone this repository.
- Go to the root directory of the cloned repo in cmd.
- Now, run `npm i` in cmd to install all the dependencies.
- Now, open another terminal and go to the same directory as the current one.
- In the first terminal, run `npm start`
- Now, in the second terminal, run `npm run server`
- Once the command in the first terminal finishes compiling, you can view the webpage at `http://localhost:3000`

![visitors](https://visitor-badge.glitch.me/badge?page_id=darshanhande11.ToDo)
