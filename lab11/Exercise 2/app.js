const fs = require('fs');
const path = require('path');

// File path for operations
const filePath = path.join(__dirname, 'data.txt');

console.log('--- Starting File Operations Exercise ---');

// 1. Create a new file using fs.writeFile()
fs.writeFile(filePath, 'Initial Data: Node.js File System operations.\n', (err) => {
    if (err) {
        return console.error('Error creating file:', err);
    }
    console.log('1. [CREATE] File "data.txt" created successfully.');

    // 2. Read the contents of the file using fs.readFile()
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return console.error('Error reading file:', err);
        }
        console.log('2. [READ] Initial content:', data.trim());

        // 3. Append data to the existing file using fs.appendFile()
        fs.appendFile(filePath, 'Appended Data: Learning asynchronous callbacks.\n', (err) => {
            if (err) {
                return console.error('Error appending file:', err);
            }
            console.log('3. [APPEND] Data appended successfully.');

            // 4. Read the updated contents to verify append operation
            fs.readFile(filePath, 'utf8', (err, updatedData) => {
                if (err) {
                    return console.error('Error reading file after append:', err);
                }
                console.log('4. [READ UPDATED] Updated content:', updatedData.trim());

                // 5. Delete the file using fs.unlink()
                fs.unlink(filePath, (err) => {
                    if (err) {
                        return console.error('Error deleting file:', err);
                    }
                    console.log('5. [DELETE] File "data.txt" deleted successfully.');
                    console.log('--- File Operations Completed Successfully ---');
                });
            });
        });
    });
});
