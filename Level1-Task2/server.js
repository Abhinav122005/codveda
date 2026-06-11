const express = require('express');

const app = express();

app.use(express.json());   

const users = [
    { id: 1, name: "Abhinav" },
    { id: 2, name: "John" }
];

app.get('/', (req, res) => {
    res.send('Codveda REST API is running');
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});


// adding the users
// {
//     "id": 3,
//     "name": "Rahul"
// }
app.post('/users', (req, res) => {
    const newUser = req.body;

    users.push(newUser);

    res.json({
        message: "User Added",
        user: newUser
    });
});

// update the user 

app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    user.name = req.body.name;

    res.json({
        message: "User updated successfully",
        user
    });
});


// delete the users

app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    users.splice(index, 1);

    res.json({
        message: "User deleted successfully"
    });
});


