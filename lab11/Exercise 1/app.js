/**
 * lab11 - Exercise 1
 * A simple Node.js web server handling HTTP requests and responses
 * without using any external frameworks.
 */

// Import required modules using the require() function
const http = require('http');

// Define server constants
const PORT = 3000;
const HOST = 'localhost';

// Define the server using the createServer() method
// Handle incoming client requests using request-response callback function
const server = http.createServer((req, res) => {
    // Log the incoming request
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} request received for ${req.url}`);

    // Set appropriate response headers using response.setHeader()
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Powered-By', 'Node.js');

    // Create a premium, wowed-at-first-glance HTML response
    const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Node.js Server | Lab 11</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
        <style>
            :root {
                --primary: #6366f1;
                --secondary: #a855f7;
                --bg: #0f172a;
                --card-bg: rgba(30, 41, 59, 0.7);
                --text: #f8fafc;
                --accent: #22d3ee;
            }

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: 'Outfit', sans-serif;
                background-color: var(--bg);
                background-image: 
                    radial-gradient(circle at 0% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
                    radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.15) 0%, transparent 50%);
                color: var(--text);
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
            }

            .container {
                position: relative;
                z-index: 1;
                text-align: center;
                padding: 3rem;
                background: var(--card-bg);
                backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 24px;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                max-width: 600px;
                width: 90%;
                animation: fadeIn 1s ease-out;
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }

            .badge {
                display: inline-block;
                padding: 0.5rem 1rem;
                background: rgba(99, 102, 241, 0.1);
                border: 1px solid var(--primary);
                color: var(--accent);
                border-radius: 100px;
                font-size: 0.8rem;
                font-weight: 600;
                letter-spacing: 1px;
                text-transform: uppercase;
                margin-bottom: 2rem;
            }

            h1 {
                font-family: 'Playfair Display', serif;
                font-size: 3.5rem;
                margin-bottom: 1.5rem;
                background: linear-gradient(to right, #fff, var(--accent));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                line-height: 1.2;
            }

            p {
                font-size: 1.1rem;
                color: #94a3b8;
                line-height: 1.6;
                margin-bottom: 2.5rem;
            }

            .status-indicator {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                background: rgba(34, 211, 238, 0.1);
                padding: 1rem;
                border-radius: 12px;
                border: 1px dashed var(--accent);
            }

            .pulse {
                width: 12px;
                height: 12px;
                background-color: var(--accent);
                border-radius: 50%;
                box-shadow: 0 0 0 0 rgba(34, 211, 238, 0.7);
                animation: pulse 2s infinite;
            }

            @keyframes pulse {
                0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 211, 238, 0.7); }
                70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(34, 211, 238, 0); }
                100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 211, 238, 0); }
            }

            .details {
                margin-top: 2rem;
                font-size: 0.9rem;
                color: #64748b;
            }

            .decoration {
                position: absolute;
                width: 300px;
                height: 300px;
                background: var(--primary);
                filter: blur(100px);
                opacity: 0.1;
                z-index: -1;
                border-radius: 50%;
            }

            .top-right { top: -150px; right: -150px; }
            .bottom-left { bottom: -150px; left: -150px; }
        </style>
    </head>
    <body>
        <div class="decoration top-right"></div>
        <div class="decoration bottom-left"></div>

        <div class="container">
            <span class="badge">Node.js Native Server</span>
            <h1>Server Response Successful</h1>
            <p>Your request has been processed by the built-in <code>http</code> module. This application demonstrates handling client-server communication without any external dependencies.</p>
            
            <div class="status-indicator">
                <div class="pulse"></div>
                <span>Server is live on <strong>${HOST}:${PORT}</strong></span>
            </div>

            <div class="details">
                Request Method: ${req.method} | Protocol: HTTP/1.1
            </div>
        </div>
    </body>
    </html>
    `;

    // Send a response to the client using the response object methods (write, end)
    res.statusCode = 200;
    res.write(htmlResponse);
    res.end();
});

// Run the server on a specific port using the listen() method
server.listen(PORT, HOST, () => {
    // Display server status in the console using console logging
    console.log(`\n🚀 Server is running and listening for requests!`);
    console.log(`🔗 Access the server at: http://${HOST}:${PORT}`);
    console.log(`📡 Press Ctrl+C to stop the server\n`);
});
