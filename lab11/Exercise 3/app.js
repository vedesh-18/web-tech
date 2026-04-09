// Import the events module using the require() function
const EventEmitter = require('events');

// Create an event emitter object using EventEmitter instance
const eventEmitter = new EventEmitter();

/**
 * Functional Requirement: Register event listeners using the on() method
 * Functional Requirement: Handle multiple listeners for a single event
 */

// Listener 1: Logging the order details
eventEmitter.on('orderPlaced', (orderData) => {
    console.log('--- Listener 1: Order Received ---');
    console.log(`Processing order #${orderData.id} for: ${orderData.product}`);
});

// Listener 2: Simulating sending an email notification
eventEmitter.on('orderPlaced', (orderData) => {
    console.log('--- Listener 2: Notification Service ---');
    console.log(`Sending confirmation email to user for order #${orderData.id}...`);
});

// Listener for the custom 'success' event to demonstrate data passing and completion
eventEmitter.on('orderCompleted', (orderId) => {
    console.log('\n--- Final Response ---');
    console.log(`Order #${orderId} has been successfully processed and shipped.`);
});

/**
 * Functional Requirement: Demonstrate asynchronous behavior
 * We use setImmediate or setTimeout to show event-driven flow where 
 * events can be triggered at different points in the event loop.
 */
console.log('Welcome to the Order Management System');
console.log('Starting order processing pipeline...\n');

// Define custom events and trigger them using the emit() method
// Passing data through events using arguments in emit()
const order = { id: 1001, product: 'High-Performance Laptop' };

console.log('Emitting "orderPlaced" event...');
eventEmitter.emit('orderPlaced', order);

console.log('\n(Simulator: System is doing some background work...)\n');

// Demonstrate asynchronous behavior by triggering an event after logic completes
setTimeout(() => {
    console.log('Background task finished. Emitting "orderCompleted" event...');
    eventEmitter.emit('orderCompleted', order.id);
}, 2000);

console.log('Main program execution continues while waiting for order completion...');
