// dynamic route
import dbConnect from "../../../utils/dbConnect";
import Note from "../../../models/NoteModel";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const note = await Note.findById(id);
        if (!note) {
          return res
            .status(404)
            .json({ success: false, err: "note found", method });
        }
        res.status(200).json({ success: true, data: note, method });
      } catch (error) {
        res.status(404).json({ success: false, err: "note found", method });
      }
      break;
    case "PUT":
      try {
        const note = await Note.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!note) {
          return res
            .status(404)
            .json({ success: false, err: "note found", method });
        }
        res.status(200).json({ success: true, data: note, method });
      } catch (error) {
        res.status(404).json({ success: false, err: "note found", method });
      }
      break;
    case "DELETE":
      try {
        const deletedNote = await Note.deleteOne({ _id: id });
        if (!deletedNote) {
          res.status(400).json({ success: false, err: "note found", method });
        }
        res.status(200).json({ success: true, data: {}, method });
      } catch (error) {
        res.status(400).json({ success: false, err: "note found", method });
      }
      break;
    default:
      res.status(400).json({ success: false, err: "note found" });
      break;
  }
};
