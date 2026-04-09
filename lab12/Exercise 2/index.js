const express = require('express');
const app = express();
const PORT = 3000;

// 1. Custom Global Logger Middleware
// Logs request details: method, URL, and timestamp
const loggerMiddleware = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} request to ${req.url}`);
    next(); // Control flow to the next middleware
};

// 2. Global Preprocessing Middleware
// Handles request preprocessing by adding a custom property
const preprocessorMiddleware = (req, res, next) => {
    console.log("Global Preprocessor: Adding request start time...");
    req.requestStartTime = Date.now();
    next();
};

// Apply middleware globally using application-level middleware
app.use(loggerMiddleware);
app.use(preprocessorMiddleware);

// 3. Route-level Middleware Function
const authMiddleware = (req, res, next) => {
    console.log("Route-level: Authenticating user...");
    // Simulated authentication check
    const authHeader = req.headers['authorization'];
    if (authHeader) {
        console.log("Authentication successful.");
        next();
    } else {
        console.log("Authentication failed. Use 'Authorization' header to pass.");
        res.status(401).send("Unauthorized: Please provide an Authorization header.");
    }
};

// 4. Middleware Chaining Example
const auditMiddleware = (req, res, next) => {
    console.log("Audit Layer: Recording access to sensitive route...");
    next();
};

// ROUTES

// Root route - only global middlewares apply
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Middleware Demo</h1><p>Check your console for logs!</p>');
});

// Specific route with route-level middleware
app.get('/admin', authMiddleware, (req, res) => {
    const processingTime = Date.now() - req.requestStartTime;
    res.send(`<h1>Admin Dashboard</h1><p>Request processed in ${processingTime}ms</p>`);
});

// Sensitive route with chained middleware
app.get('/secure-data', authMiddleware, auditMiddleware, (req, res) => {
    res.json({
        message: "This is highly secure data.",
        accessTime: new Date().toLocaleTimeString()
    });
});

// Error handling middleware (Bonus)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log("Functional Requirements Demonstrated:");
    console.log("- Global Logger Middleware");
    console.log("- Application-level Middleware");
    console.log("- Route-level Middleware");
    console.log("- Middleware Chaining");
    console.log("- Request Preprocessing");
    console.log("- Execution Order Control using next()");
});
