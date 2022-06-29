import dbConnect from "../../../utils/dbConnect";
import Note from "../../../models/NoteModel";

dbConnect();

export default async (req, res) => {
  const methodType = req.method;

  switch (methodType) {
    case "GET":
      try {
        const notes = await Note.find({});
        res.status(200).json({ success: true, data: notes });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "POST":
      try {
        const note = await Note.create(req.body);
        res.status(201).json({ success: true, data: note });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false, error: "methodType Error" });
      break;
  }
};
