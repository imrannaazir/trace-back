# **Lost and Found System Assignment**

### Deployed API URL : [https://lost-and-found-lyart.vercel.app/api/v1](https://lost-and-found-lyart.vercel.app)

## **The Problem this Project Solved**

A "Lost and Found" project is a vital project in various environments, offering a centralized platform for reporting lost items and facilitating their return to their rightful owners. By providing a single point of contact, it streamlines the process of reclaiming lost belongings, saving time and effort for both individuals and administrators. Such projects not only serve as a practical solution for efficient retrieval but also foster a sense of community and trust among members.

## **Technology I used to build this Project**

- **Programming Language:** `TypeScript`
- **Web Framework:** `Express.js`
- **Object Relational Mapping (ORM):** `Prisma for PostgreSQL`
- **Authentication:** `JWT (JSON Web Tokens) `

## **To Run This Project In Your Local**

### Clone the project

```bash
  git clone https://github.com/Porgramming-Hero-web-course/l2-b2-fullstack-track-assignment-8-imrannaazir.git
```

### Go to the project directory

```bash
  cd l2-b2-fullstack-track-assignment-8-imrannaazir
```

### Create a new `.env` file in the root with this data

```bash
NODE_ENV="development"
PORT=5000
PAGE=1
LIMIT=10
DATABASE_URL="postgresql://postgres:rkiYtObVIEipcILiFWgOukctzRitvojl@monorail.proxy.rlwy.net:55980/railway"
SALT_ROUND=12
JWT_SECRET=83c0b00c36a4088f58cd268683f7fbad9d43814ecc740a19c7989e414641fa67dff48bd5214da6cd338e2f738cd42d965bdb3c6946381717e29ae7e3964fce2e
JWT_EXPIRES_IN='5m'
```

### Install dependencies

```bash
  npm install
```

### Start the server

```bash
  npm run dev
```

## **Endpoints:**

### Base API URL For Deployed Project: `https://lost-and-found-lyart.vercel.app`

### Base API URL For Deployed Project: `http://localhost:5000`

### **1. User Registration**

This endpoint handles user registration, creating both the user account and corresponding user profile simultaneously using a transactional approach.

- **Endpoint:** **`POST /api/register`**
- **Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password",
  "profile": {
    "bio": "Passionate about helping people find their lost items.",
    "age": 30
  }
}
```

### **2. User Login**

- **Endpoint:** **`POST /api/login`**
- **Request Body:**

```json
{
  "email": "john@example.com",
  "password": "password"
}
```

### **3. Create Found Item Category**

- **Endpoint:** **`POST /api/found-item-categories`**
- **Request Headers:**
  - **`Authorization: <JWT_TOKEN>`**
- **Request Body:**

```json
{
  "name": "Electronics"
}
```

This endpoint allows authenticated users to create a new category for found items.

### **4. Report a Found Item**

Creates a Found Item using the user's details extracted from the authorization token.

- **Endpoint:** **`POST /api/found-items`**
- **Request Headers:**
  - `Authorization: <JWT_TOKEN>`
- **Request Body:**

```json
{
  "categoryId": "9deaf54e-3f4f-4b50-9902-6c272f73db4a",
  "foundItemName": "iPhone 12 Pro",
  "description": "Lost iPhone 12 Pro, some other information about the item",
  "location": "Rampura, Banssree"
}
```

### **5. Get Paginated and Filtered Found Items**

- **Endpoint:** **`GET /api/found-items`**

**Query Parameters for API Requests:**

When interacting with the API, you can utilize the following query parameters to customize and filter the results according to your preferences.

- searchTerm: (Optional) Searches for items based on a keyword or phrase. Only applicable to the following fields: `foundItemName`, `location`, `description` (searching mode insensitive)
- page: (Optional) Specifies the page number for paginated results. Default is 1. Example: ?page=1
- limit: (Optional) Sets the number of items per page. Default is a predefined limit. Example: ?limit=10
- sortBy: (Optional) Specifies the field by which the results should be sorted. Only applicable to the following fields: `foundItemName`, `category`, `foundDate`. Example: ?sortBy=foundItemName
- sortOrder: (Optional) Determines the sorting order, either 'asc' (ascending) or 'desc' (descending). Example: ?sortOrder=desc
- foundItemName: (Optional) Filters results by the name of the found item. Example: ?foundItemName=iphone 15 pro

### **6. Create a Claim**

Creates a Claim using the user's details extracted from the authorization token.

- **Endpoint:** **`POST  /api/claims`**
- **Request Headers:**
  - `Authorization: <JWT_TOKEN>`
- **Request Body:**

```json
{
  "foundItemId": "9deaf54e-3f4f-4b50-9902-6c272f73db4a",
  "distinguishingFeatures": "My phone has a small scratch on the back cover.",
  "lostDate": "2024-03-25T10:00:00Z"
}
```

### **7. Get Claims**

- **Endpoint:** **`GET /api/claims`**
- **Request Headers:**
  - `Authorization: <JWT_TOKEN>`

### **8. Update Claim Status**

- **Endpoint:** **`PUT  /api/claims/:claimId`**
- **Request Headers:**
  - `Authorization: <JWT_TOKEN>`
- **Request Body:**

```json
{
  "status": "APPROVED"
}
```

### **9. Get Profile**

- **Endpoint:** **`GET  /api/my-profile`**
- **Request Headers:**
  - `Authorization: <JWT_TOKEN>`

### **10. Update My Profile**

- **Endpoint:** **`PUT  /api/my-profile`**
- **Request Headers:**
  - `Authorization: <JWT_TOKEN>`
- **Request Body:**

```json
{
  "bio": "Updated bio text",
  "age": 35
}
```

This endpoint allows users to update their profile information such as bio and age.

**Thank you so much for reviewing the project.**
