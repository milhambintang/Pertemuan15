import mongoose from "mongoose";

const mahasiswaSchema = new mongoose.Schema({
    fullname:{
        type: String
    },
    npm: {
        type: String,
        unique: true,
        required: true,
        maxLength : 10,
    },
    password : {
        type : String,
        required: true
    }
})

export default mongoose.model('Mahasiswa', mahasiswaSchema);

