# Employee_Server_Frontend
# Employee Server Frontend - React Application

## 📌 Overview
This repository contains the **React frontend** for the Employee Server application. It provides a user-friendly interface to interact with the backend API, allowing users to perform CRUD operations on employee data.

## 🚀 Features
- Built with **React.js**
- Fetches data from the **Spring Boot Backend**
- **React Router** for navigation
- **Axios** for API requests
- **Bootstrap/Material-UI** for styling

## 📂 Project Structure
```
Employee_Server_Frontend/
│── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── services/        # API request handling
│   ├── App.js           # Main application component
│── public/              # Static assets
│── package.json         # Dependencies & scripts
│── README.md            # Project documentation
```

## 🛠️ Prerequisites
Before running the project, ensure you have:
- **Node.js (v16+)** installed
- **npm or yarn** installed
- **Git** installed

## 🔧 Setup Instructions
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/rudhravyas/Employee_Server_Frontend.git
cd Employee_Server_Frontend
```

### 2️⃣ Install Dependencies
```sh
npm install  # or yarn install
```

### 3️⃣ Configure API Endpoint
Edit `src/services/api.js` to match your **backend API URL**:
```js
const API_BASE_URL = "http://localhost:8080/api";  // Change this for production
```

### 4️⃣ Run the Application
```sh
npm start  # or yarn start
```
The app should now be running at `http://localhost:3000/`.

## 🔗 Backend Connection
This frontend is designed to work with the **Spring Boot Backend**:  
🔗 [Backend Repository](https://github.com/rudhravyas/Backend)

## 📡 Deployment (Vercel / Netlify)
To deploy the frontend, follow these steps:

### **🔹 Deploy to Vercel**
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Run the deployment command:
   ```sh
   vercel
   ```
3. Follow the instructions to deploy.

### **🔹 Deploy to Netlify**
1. Install Netlify CLI:
   ```sh
   npm install -g netlify-cli
   ```
2. Build the project:
   ```sh
   npm run build
   ```
3. Deploy using:
   ```sh
   netlify deploy --prod
   ```

## ❓ Troubleshooting
- **API not working?** Ensure the backend server is running at the correct URL.
- **CORS issues?** Update backend to allow frontend requests (`@CrossOrigin` annotation in Spring Boot).
- **Build errors?** Try deleting `node_modules` and `package-lock.json`, then reinstall:
  ```sh
  rm -rf node_modules package-lock.json
  npm install
  ```

## 📜 License
This project is licensed under the MIT License.

## 👨‍💻 Author
[**Rudhra Vyas**](https://github.com/rudhravyas)

---
If you run into issues, feel free to open an issue on GitHub! 😊


 
