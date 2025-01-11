# ✅🐱‍🐉 ShrinkuApp: Full and Functional App Completed ✅🐱‍💻

## Running the Project

To use a split terminal, navigate to the directory containing the `package.json` file and use the respective commands to run the project.

### Terminal A: Frontend
1. Navigate to the frontend directory:
    ```sh
    cd "path"
    ```
2. Run the React+Vite project:
    ```sh
    npm run dev
    ```

### Terminal B: Backend
1. Navigate to the backend directory `urlshortener`:
    ```sh
    cd urlshortener
    ```
2. Start the backend server:
    ```sh
    npm start
    ```
    or
    ```sh
    nodemon
    ```

## Backend: CORS Configuration

Install CORS using npm:
```sh
npm i cors
```

Configure CORS to allow requests from your frontend domain (e.g., `localhost:5173`):
```javascript
import cors from 'cors';

const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
```

## Frontend: Axios Installation and Usage

Install Axios to make HTTP requests:
```sh
npm install axios
```

Use Axios in your frontend code:
```javascript
import axios from 'axios';

axios.get('http://localhost:3000/your-endpoint')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('There was an error!', error);
    });
```

Render data when the component mounts for the first time using `useEffect`:
```javascript
import { useEffect } from 'react';

useEffect(() => {
    axios.get('http://localhost:3000/your-endpoint')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}, []);
```

**Note**: You cannot use `async/await` directly in `useEffect`:
❌
```javascript
useEffect(async () => {
    const fetchedDatafromServerApi = await axios.get("http://localhost:8000/api/test");
    console.log(fetchedDatafromServerApi);
}, []);
```

## Problems Faced and Fixes

1. **CORS Errors**:
   - **Problem**: Requests from the frontend were blocked by CORS policy.
   - **Fix**: Configured CORS in the backend to allow requests from the frontend domain.

2. **Axios Network Errors**:
   - **Problem**: Network errors when making requests with Axios.
   - **Fix**: Ensured the backend server was running and the endpoint URLs were correct.

3. **useEffect Dependency Warnings**:
   - **Problem**: Warnings about missing dependencies in `useEffect`.
   - **Fix**: Added all necessary dependencies to the dependency array of `useEffect`.

## Common Errors and Best Practices

### Common Errors
- Forgetting to start the backend server.
- Incorrect endpoint URLs.
- Not handling errors in Axios requests.

### Best Practices
- Always handle errors in Axios requests using `.catch`.
- Use environment variables for configuration (e.g., API URLs).
- Keep the dependency array of `useEffect` up-to-date to avoid unnecessary re-renders or missing updates.
