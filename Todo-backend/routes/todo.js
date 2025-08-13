const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const { User, Todo, TodoModel } = require("../database");
const router = Router();


// todo Routes
router.post('/', adminMiddleware, async (req, res) => {
    // Implement todo creation logic
    const email = req.body.email;

    const title = req.body.title;
    const done = req.body.done;
    const id = req.userId;

    const userId = await User.findOne({email:email});

    const todo = await TodoModel.create({
        title:title,
        done:done,
        userId:id
    });

    res.status(200).json({message:"Todo Uploaded very well"});
});

router.put('/', adminMiddleware, async (req, res) => {
    // Implement update todo  logic
    const id = req.userId;
    const title = req.body.title;
    const todoId = req.body.todoId;
    const done = req.body.done;

    const todo = await TodoModel.find({_id:todoId});
    if(!todo){
        res.json({message:"Todo does not exist"});
    }
    else{
        await TodoModel.update({_id:todoId},{$set:{title:title}});
        res.status(200).json({message:"Your todo has been updated"});
    }
});

router.delete('/', adminMiddleware, async (req, res) => {
    // Implement delete todo logic
    const id = req.userId;

    await TodoModel.deleteMany({userId:id});
    res.json({message:"Your todo has been deleted"});

});

router.delete('/:id', adminMiddleware, async (req, res) => {
    // Implement delete todo by id logic
    const todoId = req.params.id;

    await TodoModel.deleteOne({_id:todoId});
    res.json({message:"The todo has been deleted"});
});


router.get('/', adminMiddleware, async (req, res) => {
    // Implement fetching all todo logic
    const id = req.userId;

    const todoList = await TodoModel.find({userId:id});
    res.json({message:"Your todos are", todos:todoList});

});

router.get('/:id', adminMiddleware, async (req, res) => {
    // Implement fetching todo by id logic
    const todoId = req.params.id;
    const singleTodo = await TodoModel.findOne({_id:todoId});
});

module.exports = router;