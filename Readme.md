

for frontend dev:
all routes

http://localhost:5000/notes/create_note:
    gets a POST request you send title and content of the note

http://localhost:5000/notes/update_note
    get a PUT request you send title of note with content to change
    so if you want a change the title you need to create a new title

http://localhost:5000/notes/get_note?note_title=hi
    this sends a GET request with a query of note_title
    so here the part ?note_title=hi is sending hi with name
    of note_title to backend to get it from backend
    you recieve note of that title

http://localhost:5000/notes/test
    is just a simple GET request path to check if everything working

http://localhost:5000/notes/all_notes
    it is a simple GET request gives all notes

http://localhost:5000/notes/delete_note?note_title=hi
    this give a DELETE request to backend
    here part ?note_title=hi sends a request to delete
    the note with title "hi" to backend


these gives json body with error in case of error
and json body with message in case of success