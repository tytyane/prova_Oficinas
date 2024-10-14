import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/oficinas')
        console.log('MongoDB conectado om sucesso!')
    } catch(error){
        console.erro('Erro ao conectar ao MongoDB:', error)
    }
}

export default connectDB