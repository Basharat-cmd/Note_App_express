import express from "express";
import {test, all_notes, get_note, create_note, delete_note, update_note} from "../Controller/mainController.js";

const routes = express.Router();

routes.get('/test', test);

routes.get('/all_notes', all_notes);

routes.get('/get_note', get_note);

routes.post('/create_note', create_note);

routes.delete('/delete_note', delete_note);

routes.put('/update_note', update_note);

export default routes;