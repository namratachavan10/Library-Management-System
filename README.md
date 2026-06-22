# 📚 Library Management System

A full-stack Library Management System built using **React.js, Node.js, Express.js, and MongoDB**. The application helps manage books, issue/return operations, and library records through an interactive dashboard.

---

## 🚀 Features

### 📖 Book Management

* Add new books
* Update existing books
* Delete books
* Search books by title
* View all available books

### 🔐 Authentication

* Student Registration
* Student Login
* Secure authentication

### 📚 Book Issue & Return

* Issue books to students
* View issued books
* Return books
* Track issued and returned books

### 📊 Dashboard

* Total Books Count
* Issued Books Count
* Returned Books Count
* Simple analytics overview

### 🎨 User Interface

* Modern sidebar navigation
* Responsive dashboard
* Clean card-based layout
* Easy-to-use forms

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

---

## 📂 Project Structure

```text
Library-Management-System
│
├── client
│   ├── src
│   │   ├── components
│   │   │   └── Navbar.jsx
│   │   ├── pages
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Books.jsx
│   │   │   ├── IssueBook.jsx
│   │   │   ├── IssuedBooks.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── services
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/namratachavan10/Library-Management-System.git
```

### Navigate to Project

```bash
cd Library-Management-System
```

---

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start Backend:

```bash
npm start
```

Server runs on:

```text
http://localhost:5000
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Books

```http
GET    /api/books
POST   /api/books
PUT    /api/books/:id
DELETE /api/books/:id
```

### Issues

```http
GET    /api/issues
POST   /api/issues
PUT    /api/issues/return/:id
```

### Dashboard

```http
GET /api/dashboard
```

---

## Future Enhancements

* Admin Role Management
* JWT Protected Routes
* Book Due Date Tracking
* Fine Calculation System
* Email Notifications
* Advanced Search & Filters
* Deployment on Render & Vercel

---

## 👩‍💻 Author

**Namrata Chavan**

GitHub:
https://github.com/namratachavan10

---

## ⭐ Support

If you like this project, please give it a ⭐ on GitHub.
