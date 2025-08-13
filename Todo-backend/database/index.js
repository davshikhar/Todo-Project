const mongoose = require('mongoose');
require('dotenv').config();
const schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL);

// Define schemas

const UserSchema = new schema({
    // Schema definition here
    email:{type:String, unique:true},
    name:String,
    password:String
});

const TodoSchema = new schema({
    // Schema definition here
    title:String,
    done:Boolean,
    userId:{type:ObjectId, ref:'User'}
});

const UserModel = mongoose.model('User', UserSchema);
const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = {
    UserModel,
    TodoModel
}