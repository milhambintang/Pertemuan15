import Mahasiswa from "../models/mahasiswa.js";
import bcrypt from "bcryptjs";

const createMahasiswa = async (req, res) => {
    try{
        const{fullname, npm, password} = req.body;
        const existsMahasiswa = await Mahasiswa.findOne({npm});
        if(existsMahasiswa) return res.status(400).json({
            message: "NPM already registered"
        });

        const hashPassword = await bcrypt.hash(password, 10);
        const newMahasiswa = await Mahasiswa.create({
            fullname: fullname,
            npm: npm,
            password: hashPassword
        });

        res.status(201).json({
            message: "Mahasiswa created successfully",
            data: newMahasiswa
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
}

export default (createMahasiswa);