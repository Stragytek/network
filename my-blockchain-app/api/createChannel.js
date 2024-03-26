const express = require('express');
const app = express();
const { exec } = require('child_process');

// Endpoint để tạo mới channel
app.post('/create-channel', (req, res) => {
    exec('./byfn.sh up', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Failed to create channel');
        }
        console.log(stdout);
        res.send('Channel created successfully');
    });
});

// Khởi chạy server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
