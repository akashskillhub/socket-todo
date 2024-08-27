const asyncHandler = require("express-async-handler")
const Todo = require("../model/Todo")

exports.createTodo = asyncHandler(async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "create Todo success" })
})
exports.readTodo = asyncHandler(async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "read Todo success", result })
})
exports.updateTodo = asyncHandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "update Todo success" })
})
exports.deleteTodo = asyncHandler(async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: "delete Todo success" })
})