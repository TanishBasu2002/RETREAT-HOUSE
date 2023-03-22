# Client Side

## Prerequisites
Node.js and npm should be installed on your machine.
## Step 1: Create a new React app
You can create a new React app using create-react-app by running the following command in your terminal:


Copy code
```bash
   npx create-react-app my-app 
```

Replace my-app with the name of your app.

## Step 2: Install the dependencies
Navigate to the root directory of your app and run the following command to install the dependencies listed in your package.json file:

Copy code
```bash
    npm install
```

## Step 3: Add Refine to your app
To add Refine to your app, run the following command:

Copy code
```bash
    npm install @pankod/refine-mui @pankod/refine-core @pankod/refine-react-router-v6 @pankod/refine-simple-rest @pankod/refine-inferencer @pankod/refine-react-hook-form --save
```

## Step 4: Install Material UI Icons
To use Material UI Icons in your app, run the following command:

Copy code
```bash
    npm install @mui/icons-material --save
```

## Step 5: Install ApexCharts
To use ApexCharts in your app, run the following command:

Copy code
```bash
    npm install apexcharts react-apexcharts --save
```
## Step 6: Install Axios
To use Axios in your app, run the following command:

Copy code
```bash
    npm install axios --save
```

## Step 7: Install dotenv
To use dotenv in your app, run the following command:

Copy code
```bash
   npm install dotenv --save 
```

## Step 8: Install React Spinners
To use React Spinners in your app, run the following command:

Copy code
```bash
   npm install react-spinners --save 
```

## Step 9: Install Testing Libraries
To use Testing Libraries in your app, run the following command:

Copy code
```bash
  npm install @testing-library/jest-dom @testing-library/react @testing-library/user-event --save-dev  
```

## Step 10: Install Typescript and related types
To use TypeScript in your app, run the following command:

Copy code
```bash
  npm install typescript @types/node @types/react @types/react-dom --save-dev
```

## Step 11: Start the app
To start the app, run the following command:

Copy code
```bash
   npm start 
```

## This will start the development server and your app should be accessible on http://localhost:3000.

That's it! You now have a basic React app set up with the listed dependencies. From here, you can start building your app by using the different libraries and tools you have installed.

# Server Side

## Prerequisites
Node.js and npm should be installed on your machine.
## Step 1: Create a new Node.js project
Create a new Node.js project by running the following command in your terminal:

perl
Copy code
```bash
  mkdir my-app
 ```
 ```bash
cd my-app
```
```bash
npm init -y
```
Replace my-app with the name of your app.

## Step 2: Install the dependencies
Navigate to the root directory of your app and run the following command to install the dependencies listed in your package.json file:

Copy code
```bash
npm install
```
## Step 3: Install Express
To use Express in your app, run the following command:

Copy code
```bash
npm install express --save
```
## Step 4: Install Mongoose
To use Mongoose in your app, run the following command:

Copy code
```bash
npm install mongoose --save
```
## Step 5: Install dotenv
To use dotenv in your app, run the following command:

Copy code
```bash
npm install dotenv --save
```
## Step 6: Install cors
To use cors in your app, run the following command:

Copy code
```bash
npm install cors --save
```
## Step 7: Install Cloudinary
To use Cloudinary in your app, run the following command:

Copy code
```bash
npm install cloudinary --save
```
## Step 8: Install nodemon
To use nodemon in your app, run the following command:

Copy code
```bash
npm install nodemon --save-dev
```
## Step 9: Create a .env file
Create a .env file in the root directory of your app and add your environment variables. For example:

makefile
Copy code
```bash
PORT=3000
MONGODB_URI=mongodb://localhost/my-database
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```
## Step 10: Create the app
Create a new file called app.js in the root directory of your app and add the following code:

```bash
Copy code
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('error', err => {
  console.error(`Error: ${err.message}`);
});

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```
## Step 11: Start the app
To start the app, run the following command:

Copy code
```bash
npm run dev
```
This will start the development server with nodemon, and your app should be accessible on http://localhost:3000.

That's it! You now have a basic Node.js app set up with the listed dependencies. From here, you can start building your app by using the different libraries and tools you have installed.
