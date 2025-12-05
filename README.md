# RapidResq

Steps to run the RapidResq MERN project locally:

---

## 1. Clone the repository

```bash
git clone https://github.com/shamaiem10/RapidResq.git
cd RapidResq
```
## 2. Install dependencies
- Backend (Node/Express)
```bash
cd backend
npm install
```
- Frontend (React)
```bash
cd ../frontend
npm install
```

## 3. Setup environment variables

Create a .env file in the backend folder:

```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```
## 4. Run the project
- Start Backend Server
```bash
cd backend
npm run dev   # or npm start
```
- Start React Frontend
```bash
cd ../frontend
npm start
```
