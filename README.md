# REST-API-ExpressJS-NodeJS
Rest API created with NodeJS &amp; ExpressJS. There is no database connection in there. I used JSON format instead of MongoDB.

I used ExpressJS for the first time and create well structured (Seperated with **routes** & **controller** folders) REST CRUD (_Create_ _Read[GET]_ _Update_ _Delete_)
API. It can have some const conflicts in there. I used JSON format.

## Most important parts of the project 
1. Not used **bodyParser** instead express.json which it is:
```
app.use(express.json());
```
2. index.js includes:

```
> const app = express();  -> (using ExpressJS)
> const PORT = 5000; -> this app is running on port:5000
> app.get('/', (req,res) => res.send('Hello from home page')); -> Home page paragraph
> app.use(express.json()); -> to get req.body
> app.use('/users',usersRoutes) -> standardized path as /users/...
> import usersRoutes from './routes/users.js'; -> standardized import section
> app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)) -> Running app in port: 5000 log about it.
```
3. routes/users.js includes:

``` 
> import {createUser, getUser, getSpecificUser, deleteUser, updateUser} from '../controllers/users.js'; -> Getting necessary functions from controller.
> const router = express.Router(); -> creating router
> router.get('/',getUser) -> when client send GET request to the /users getUser function will run.
> router.post('/',createUser) -> when client send POST request to the /users createUser function will run.
> router.get('/:id',getSpecificUser) -> when client send GET request to the /users/abA:c2as5a42sd:h:a:123 getSpecificuser function will run
> router.delete('/:id', deleteUser) -> when client send DELETE request to the /users/abA:c2as5a42sd:h:a:123 deleteUser function will run
> router.patch('/:id', updateUser) -> when client send PATCH request to the /users/abA:c2as5a42sd:h:a:123 updateUser function will run.
```
These whole functions located in the controllers/users.js file

4. controllers/users.js includes:

```
> import {v4 as uuidv4} from 'uuid'; -> For generating random ids
> let users=[...] -> mock datas, 
> uuidv4() -> Generating random id
> export const createUser = (req,res) => { -> Creating user function
 const user = req.body; -> taking request body
 users.push(){id:uuidv4()->generate random id, ...users -> Rest of the users mock data}
 res.send("...") -> Show response to the client
}
> export const getUser = (req,res) => {
  res.send(users) -> Show users mock data as a respond
}
> export const getSpecificUser = (req,res )=> {
  let {id} -> getting the id part from req.params = req.params;
  let founded = users.find((user)=>user.id==id) -> Get the specific user from users mock data which is matches the id from request parameters.
  res.send(founded)
}
> export const deleteUser = (req,res) ) => {
  let {id} = req.params;
  users = users.filter((user)=>user.id!=id) -> If the id not matches with request parameters than user will stay in the mock data
  res.send("...");
}
> export const updateUser = (req,res) => {
  let {id} = req.params;
  const {name,surname,age} = req.body; -> Get the name surname and age differently from request body
  let userUpdated = users.find((user)=>user.id==id)
  if(name) userUpdated.name = name -> if there is name parameter then change it with userUpdated.name
  if(surname) userUpdated.surname = surname -> if there is surname parameter then change it with userUpdated.surname
  if(age) userUpdated.age = age -> if there is age parameter then change it with userUpdated.age
}
```
