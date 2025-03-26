# Task Management WebApp 

A full-stack task management web application with React frontend and Node.js/Express backend, using MongoDB for database storage.

---

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Postman API Examples](#postman-api-examples)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features ✨

**Frontend (algorootfrontend)**
- Create, Read, Update, Delete tasks
- Task filtering and sorting
- Responsive UI with modern design
- Real-time updates


**Backend (algorootbackend)**
- RESTful API endpoints
- MongoDB database integration
- Mongoose schema validation
- Error handling middleware

---

## Installation 🛠️

**Prerequisites**
- Node.js (v18+)
- MongoDB Atlas account or local MongoDB installation
- Postman (for API testing)

1. Clone the repository:

git clone this repository...
Backend Setup:

bash
Copy
cd algorootbackend
npm install
Frontend Setup:

bash
Copy
cd ../algorootfrontend
npm install
Configuration ⚙️
Create .env file in algorootbackend:

env
Copy
MONGODB_URI=your_mongodb_connection_string
PORT=5000
(Optional) Create .env file in algorootfrontend if using environment variables:

env
Copy
REACT_APP_API_URL=http://localhost:5000
Usage 🚀
Start Backend Server:

bash
Copy
cd algorootbackend
npm start
Start Frontend Development Server:

bash
Copy
cd algorootfrontend
npm start
Access the application at http://localhost:3000

API Endpoints 📡
Method	Endpoint	Description
GET	[/api/tasks	Get all tasks](http://localhost:5000/api/tasks)
POST[	/api/tasks	Create new task](http://localhost:5000/api/tasks)
GET	 http://localhost:5000/api/tasks/67e440374a86bd02df5ba4a5
PUT	/api/tasks/:id	Update task  http://localhost:5000/api/tasks/67e440dc4a86bd02df5ba4a8
DELETE	/api/tasks/:id	Delete task   http://localhost:5000/api/tasks/67e440dc4a86bd02df5ba4a8

![image](https://github.com/user-attachments/assets/d59fa4de-8dba-4901-ba4e-0dc09d9d2b00)
![image](https://github.com/user-attachments/assets/1f34a7b2-1126-417f-9971-5ea06f3dabd1)
![image](https://github.com/user-attachments/assets/38fe6f7c-6ba4-40bd-a2fa-f41b90d7c2fe)
![image](https://github.com/user-attachments/assets/0805ecb3-24b1-447e-8f3b-83d0b86f36c4)

![image](https://github.com/user-attachments/assets/1d001611-475c-4ae5-8902-df3d250c5cea)

Screenshots 📷
Frontend Interface
![image](https://github.com/user-attachments/assets/2c769df3-1660-4de7-8e8b-ef1911743609)


Task List
Main task interface showing task list

Create Task
Task creation form

Postman API Examples 🔧
Get All Tasks
Example GET request for all tasks

Create Task
Example POST request to create task

Update Task
Example PUT request to update task

Contributing 🤝
Fork the repository

Create your feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

Contact 📧
Email:-vmapari19@gmail.com



---




