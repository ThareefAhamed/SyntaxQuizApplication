import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        minlength:6,
        required:true,
    },
});

const Admin = mongoose.model("Admin",adminSchema);

export default Admin;