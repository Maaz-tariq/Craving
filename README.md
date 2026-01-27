# 🍔 Kraving — Food Ordering Web App (MERN Prototype)

Kraving is a **full-stack MERN food ordering web application prototype** that demonstrates how a real-world food ordering platform works at a basic level.

This project focuses on **core web-app functionality** such as authentication, browsing items, cart management, checkout, and order history — without unnecessary complexity.

> ⚠️ **Note:**  
> This is a **prototype / learning project**, not a production-ready application.  
> It implements only the **essential features** that most web apps contain.

---

## 🚀 Project Overview

Kraving simulates the **end-to-end user flow** of a food ordering application:

1. User signs up or logs in
2. User browses food items
3. User adds items to cart (with quantity & size)
4. User checks out
5. User views previous orders

This makes the project suitable for:
- Learning the MERN stack
- Hackathons
- Portfolio projects
- Understanding frontend–backend integration

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Bootstrap 5
- React Router
- Context API (cart management)
- FontAwesome Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## ✨ Features

### 🔐 Authentication
- User signup
- User login
- JWT-based authentication
- Session persistence using `localStorage`

### 🍽️ Food Browsing
- Food items fetched from backend
- Categorized food display
- Responsive food cards

### 🛒 Cart System
- Add items to cart
- Select quantity & size
- Remove items from cart
- Dynamic price calculation
- Cart state managed via Context API

### 💳 Checkout (Prototype)
- Orders stored in MongoDB
-# 🍔 Kraving — Food Ordering Web App (MERN Prototype)

Kraving is a **full-stack MERN food ordering web application prototype** that demonstrates how a real-world food ordering platform works at a basic level.

This project focuses on **core web-app functionality** such as authentication, browsing items, cart management, checkout, and order history — without unnecessary complexity.

> ⚠️ **Note:**  
> This is a **prototype / learning project**, not a production-ready application.  
> It implements only the **essential features** that most web apps contain.

---

## 🚀 Project Overview

Kraving simulates the **end-to-end user flow** of a food ordering application:

1. User signs up or logs in
2. User browses food items
3. User adds items to cart (with quantity & size)
4. User checks out
5. User views previous orders

This makes the project suitable for:
- Learning the MERN stack
- Hackathons
- Portfolio projects
- Understanding frontend–backend integration

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Bootstrap 5
- React Router
- Context API (cart management)
- FontAwesome Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## ✨ Features

### 🔐 Authentication
- User signup
- User login
- JWT-based authentication
- Session persistence using `localStorage`

### 🍽️ Food Browsing
- Food items fetched from backend
- Categorized food display
- Responsive food cards

### 🛒 Cart System
- Add items to cart
- Select quantity & size
- Remove items from cart
- Dynamic price calculation
- Cart state managed via Context API

### 💳 Checkout (Prototype)
- Orders stored in MongoDB
- Cart cleared after checkout
- No payment gateway (intentional)

### 📦 My Orders
- View previous orders
- Orders grouped by date
- Responsive order layout

### 🎨 UI / UX
- Clean, minimalist design
- Consistent design language
- Responsive across devices
- UI improvements without altering logic

---

## 🧪 Project Scope

### ✅ What this project includes
- Functional MERN stack setup
- Real backend APIs
- Authentication & authorization
- Cart & order flow
- Clean frontend design

### ❌ What this project does NOT include
- Payment gateway
- Admin dashboard
- Delivery tracking
- Order status updates
- Role-based access control

These exclusions are **intentional** to keep the project focused on fundamentals.

---

## 📂 Project Structure

```text
kraving/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── db.js
│   └── index.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│
└── README.md
```



### 🔄 Application Flow

- User registers → data stored in MongoDB
- User logs in → JWT token generate
- Food data fetched from backend
- Cart managed using Context API
- Checkout saves order to database
- Orders fetched using user email

###  🧩 Known Limitations

- No payment integration
- No admin panel
- No real-time updates
- No delivery workflow
- Limited error handling

### 📌 Final Note

Kraving is built to understand how real web applications work, not to be perfect.
If you understand this project, you understand the core concepts of MERN development.

⭐ If you find this project helpful, feel free to star the repository.
