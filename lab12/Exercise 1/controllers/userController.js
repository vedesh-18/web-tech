// In-memory data store for users
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Get all users
exports.getAllUsers = (req, res) => {
    res.json(users);
};

// Get user by ID
exports.getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

// Create new user
exports.createUser = (req, res) => {
    const { name, email } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    const newUser = {
        id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
        name,
        email
    };
    
    users.push(newUser);
    res.status(201).json(newUser);
};

// Update user
exports.updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;
    
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], name: name || users[userIndex].name, email: email || users[userIndex].email };
        res.json(users[userIndex]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

// Delete user
exports.deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1);
        res.json({ message: 'User deleted successfully', user: deletedUser[0] });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};
