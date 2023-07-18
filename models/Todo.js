import mongoose from "mongoose";
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);


const Todo = mongoose.model('todo', todoSchema)
export default Todo;