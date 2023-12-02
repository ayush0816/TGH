# TGH

Steps to Run:
 1. Clone the repository.
 2. Enter .env variables.
 3. Run npm install.
 4. Run nodemon index.js

Postman Documentation URL = https://documenter.getpostman.com/view/19851035/2s9YeK4Aa1


The http endpoints created till now are:
 1. `/auth/admin/login` : Admin can login using his email, password, and name.
 2. `/admin/addStudent` : Admin can add and register students.
 3. `/student/login` : Students can login using their credentials.
 4. `/api/admin/assignTask` : Admin can assign task to the students.
 5. `/api/student/viewTasks` Students can view their tasks assigned by admin.
 6. `/api/student/updateTaskStatus` : Students can change the status of their tasks.


The curl for all the endpoints are added in the postman documentation.


.env variables to be added
  
  PORT=YOUR_PORT
  DBURL=YOUR_ATLAS_URL
  SECRET_KEY=YOUR_SECRET_KEY


