import mongoose from "mongoose";

const NoteSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    trim: true,
    maxlength: [40, "Cannot be more than 40 characters"],
  },
  description: {
    type: String,
    required: [true, "PLZ ADD DESCRTIPTION"],
    maxlength: [200, "Cannot be more than 200 characters"],
  },
});

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);
//export default mongoose.model("NoteSchema", NoteSchema);
