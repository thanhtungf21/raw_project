import axios from 'axios';

// Get the base URL from environment variables, with a fallback
const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'; // Fallback URL

// Create an Axios instance
const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        // You can add other default headers here, like Authorization tokens
        // 'Authorization': `Bearer ${getToken()}` // Example if you have a token function
    },
    // You can add other Axios config options here (e.g., timeout)
    // timeout: 10000, // 10 seconds timeout
});

// --- Optional: Interceptors ---
// Interceptors allow you to run code before a request is sent or after a response is received.

// Request Interceptor (e.g., adding auth token dynamically)
apiClient.interceptors.request.use(
    (config) => {
        // const token = localStorage.getItem('authToken'); // Example: Get token from storage
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        console.log('Starting Request', config); // Optional: Log request config
        return config;
    },
    (error) => {
        console.error('Request Error Interceptor:', error);
        return Promise.reject(error);
    }
);

// Response Interceptor (e.g., handling global errors or data transformation)
apiClient.interceptors.response.use(
    (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        console.log('Response Received', response); // Optional: Log response
        // You could potentially transform the response data here if needed
        // return response.data; // Example: Only return the data part
        return response;
    },
    (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        console.error('Response Error Interceptor:', error.response || error.message);

        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            const status = error.response.status;
            // Handle specific status codes globally if needed
            if (status === 401) {
                // Example: Unauthorized - maybe redirect to login or refresh token
                console.error('Unauthorized access - 401');
                // window.location.href = '/login'; // Example redirect
            } else if (status === 403) {
                console.error('Forbidden - 403');
                // Handle forbidden access
            } else if (status === 500) {
                console.error('Server Error - 500');
                // Handle server errors
            }
            // You might want to display a generic error message to the user
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Network Error or No Response:', error.request);
            // Handle network errors (e.g., display a "cannot connect" message)
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Axios Config Error:', error.message);
        }

        // IMPORTANT: Always reject the promise so individual calls can also catch the error
        return Promise.reject(error);
    }
);

export default apiClient;