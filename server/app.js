import express from 'express';
import bodyParser from 'body-parser';
import * as db from './models//utils/DataBaseUtils.js'; //import all functionality
import {serverPort} from '../etc/config.json';

db.setUpConnection();
const app = express();

//in order to work in function we need to translate inputs which in JSON to normal format via body parser.
app.use(bodyParser.json()); //this function will called upon each msg

//get all notes
app.get('/notes', (req,res)=>{
        //res.send("Hello word");
    // after we get all notes via listNotes take all reurned data and write it to response msg
   db.listNotes().then( data=>res.send(data));
});

//create new note
app.post('notes', (req,res)=>{
    db.createNote(req.body.then(data=>res.send(data)));
});

//delete note with specific id (id generate atomatilcy
app.delete('notes:id', (req,res)=>{
    db.deleteNote(req.params.id).then(data=> res.send(data));
});

const server = app.listen(serverPort, () => {
    console.log('seerver is up and listen to port', serverPort);
});


