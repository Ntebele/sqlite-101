
//start here
import express from 'express';
import {getGreetings, addGreeting} from './db.js'



const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4001;

//http://localhost:4001/api/greetings

//get all the greetings

app.get('/api/greetings', async (req, res) =>{
const greetings= await getGreetings();
console.log(greetings);
res.json({
    greetings
   })
});

//create a  route to add a greeting
//?

app.post('/api/greetings', async (req, res)=> {
   const language = req.body.language
   const greeting = req.body.greeting
   // add language
   await addGreeting(language, greeting);


   res.json({
       status: 'Success',
       message: `greeting '${greeting}' added for ${language}`

       // language, 
       // greeting
   })
})


app.listen(PORT, () => console.log(`started on port : ${PORT}`) )

//ends here

console.log('start')

