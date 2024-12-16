# NguyenChiThanh- Intern

## 1. Technology used:

- **TypeScript**
- **Jest**
- **React-hook-form**
- **React-query**
- **Nextjs**
- **ShadcnUI**
- **BALKAN OrgChart JS**
- **Nodejs**
- **Express**
- **Zod**
- **Mongodb**
- **Mongoose**

## 2. Setup

### 2.1. Prerequisites

- Node 20
- MongoDB

### 2.2. Installation

1. Clone the repository:

   ```bash
   git clone [https://github.com/NguyenChiThannh/loopme-apis.git](https://github.com/Backend-Programmer-Intern/thanh.nguyen.git)
   cd thanh.nguyen
   ```
2. Install node module for each task

    2.1 Task 1
     ```bash
   cd task1
   npm i
   ```
    Run the test files:

    ```bash
    npx jest test/t1.1.test.ts
    npx jest test/t1.2.test.ts
    npx jest test/t1.3.test.ts
   ```

    Or execute the scripts directly:

    ```bash
    tsx t1.1.ts
    tsx t1.2.ts
    tsx t1.3.ts
   ```

    2.2 Task 2 + 3
     ```bash
     cd task23
     cd front-end
    npm i
    npm run dev
    cd ..
    cd back-end
    npm i
    npm run dev
   ```

## 3. API:

#### 3.1. User (For task 2)
- **GET** `/`: Get all user
- **POST** `/`: Create a new user.
- **POST** `/create-many`: Create multiple users.
- **DELETE** `/:id`: Delete a user by ID.
- **PATCH** `/:id`: Update a user's details by ID.

#### 3.1. Relation (For task 3)
- **GET** `/`: Get all relations.
- **POST** `/`: Create a new relation.
- **GET** `/:userId`: Retrieve relations for a specific user by user ID.
- **PATCH** `/:userId`: Update relation details by ID.

## 3. UI:
Task 2: View user information, search for users, create new users, edit user details, and delete users.
![image](https://github.com/user-attachments/assets/5af1d3d9-df14-4213-a0ae-bca853c64a82)
![image](https://github.com/user-attachments/assets/59d792d1-0c7e-41d9-9e59-c33755031332)
Task 3: 
![image](https://github.com/user-attachments/assets/9418c1de-432c-4308-a079-6d15f71008a9)
![image](https://github.com/user-attachments/assets/ba2833b5-35c9-44c2-94bd-d024ac05f00a)
Users can click to view the node information and edit the node details:
![image](https://github.com/user-attachments/assets/8f2e6a4b-e28f-44a8-8507-f0aaa64ac9b5)
Users can view the detailed information of the entire family tree:
![image](https://github.com/user-attachments/assets/4b1acf52-30c8-4a34-8cd1-e938bcbffc43)










