import  mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
    cpf: {
        type: int,
        required: true,
        index: {
            unique: true
        }
    },
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    nacionalidae: {
        type: String,
        required: true
    },
    cep: {
        type: int,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    logradouro: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: int,
        required: true
    },
    senha: {
        type: String,
        required: true
    }

    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Cadastro",userSchema)