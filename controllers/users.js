import {v4 as uuidv4} from 'uuid';

let users = [
    {
        id: uuidv4(),
        name: "Dogukan",
        surname: "Gulyasar",
        age: 21
    },
    {
        id: uuidv4(),
        name: "Arda",
        surname: "Kavas",
        age: 99
    }
]

export const createUser = (req,res)=> {
    const user = req.body;
    users.push({id:uuidv4(), ...user});
    res.send(`User with the name ${user.name} added to the db`);
};

export const getUser = (req, res) => {
    res.send(users);
};

export const getSpecificUser = (req, res) => {
    let {id} = req.params;
    let founded = users.find((user)=> user.id==id );
    res.send(founded)
};

export const deleteUser = (req,res) => {
    let {id} = req.params;
    users = users.filter((user)=>user.id != id)
    res.send("User deleted");
};

export const updateUser = (req,res)=> {
    let {id} = req.params;
    const {name, surname, age} = req.body;
    let userUpdated = users.find((user)=>user.id == id);
    if(name) userUpdated.name=name;
    if(surname) userUpdated.surname=surname;
    if(age)userUpdated.age=age;
    res.send(users);
};