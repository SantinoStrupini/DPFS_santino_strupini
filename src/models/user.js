const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/users.json');

function getData() {
    const data = fs.readFileSync(filePath, 'utf-8'); 
    return JSON.parse(data);
}

const User = {
    findAll: () => {
        return getData();
    },
    findByEmail: (email) => {
        const users = getData();
        return users.find(user => user.email === email);
    },
    findById: (id) => { 
        const users = getData();
        return users.find(user => user.id === Number(id));
    },
    create: (data) => { 
        const users = getData();
        const newUser = {
            id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
            userName: data.userName,
            email: data.email,
            password: data.password,
            category: data.category
        };
        users.push(newUser); 
        fs.writeFileSync(filePath, JSON.stringify(users, null, 4));
        return newUser;
    },
    update: (id, data) => {
        const users = getData();
        const index = users.findIndex(user => user.id === Number(id));
        users[index] = { 
            id: users[index].id,
            userName: data.userName || users[index].userName,
            email: data.email || users[index].email,
            password: data.password || users[index].password,
            category: data.category || users[index].category
        };
        fs.writeFileSync(filePath, JSON.stringify(users, null, 4));
        return users[index];
    },
    delete: (id) => {
        const users = getData();
        const index = users.findIndex(user => user.id === Number(id));
        if (index !== -1) {
            users.splice(index, 1);
            fs.writeFileSync(filePath, JSON.stringify(users, null, 4));
            return true;
        }
        return false;
    }
};

module.exports = User;
