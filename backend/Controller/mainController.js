import Note from "../DataBase/models/Note.js";

export const test = (_req, res) => {
    res.send("hi");
}

export const all_notes = async (req, res) => {
    try{
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch(error){
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }
}

export const get_note = async (req, res) => {
    const { note_title } = req.query;
    if (!note_title) return res.status(400).json({"error": "note title is required"});
    try{
        const note_data = await Note.findOne({title: note_title});
        if (!note_data) return res.status(404).json({"error": "note title not found"});

        res.json(note_data);

    } catch (error){
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }
}

export const create_note = async (req, res) => {
    const {title, content} = req.body;

    if (!title) return res.status(400).json({"error": "title is required"});
    try{

        const exists = await Note.findOne({ title: title});

        if (exists) return res.status(400).json({error: "note already exists"});

        const newNote = await Note.create({
            title: title,
            content: content
        });

        res.json({message: "note created successfully"});
    } catch (error){
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }
}

export const delete_note = async (req, res) =>{
    const { note_title } = req.query;
    if (!note_title) return res.status(400).json({"error": "note title is required"});
    try{
        const note_data = await Note.findOne({title: note_title});
        if (!note_data) return res.status(404).json({"error": "note title not found"});

        const deleted = await Note.findOneAndDelete({ title: note_title});
        if (!deleted) return res.status(404).json({ error: "note not found" });
        
        res.json({ message: "note deleted successfully" });
    } catch (error){
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }
} 

export const update_note = async (req, res) => {
    const { title, content} = req.body;
    if (!title) return res.status(400).json({"error": "note title is required"});

    try{
        const updated = await Note.findOneAndUpdate(
            { title: title },
            {
                title: title,
                content: content
            },
            { new: true}
        );

        if (!updated) return res.status(404).json({ error: "note not found" });

        res.status(200).json({message: "note updated successfully"})
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }
}