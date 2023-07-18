import Todo from "./models/Todo.js";

const resolvers = {
  Query: {
    getTodos: async () => {
      const todos = await Todo.find();
      return todos;
    },

    getTodo: async (root, {id}) => {
      const todo = await Todo.findById(id);
      return todo;
    },
  },

  Mutation: {
    addTodo: async (root, {task, description, dueDate}) => {
      const todo = new Todo({
        task: task,
        description: description,
        dueDate: dueDate,
      });
      await todo.save();
      return todo;
    },

    updateTodo: async (root, {id, task, description, dueDate}) => {
      const updatedTodo = {}
      if(task != undefined) {
        updatedTodo.task = task
      }
      if(description != undefined) {
        updatedTodo.description = description
      }
      if(dueDate != undefined) {
        updatedTodo.dueDate = dueDate
      }
      const todo = await Todo.findByIdAndUpdate(id, updatedTodo, { new: true }) 
      return todo;
    },

    deleteTodo: async (root, {id}) => {
      await Todo.findOneAndDelete({id})
      return "task deleted successfully"
    },

  },
};

export default resolvers;
