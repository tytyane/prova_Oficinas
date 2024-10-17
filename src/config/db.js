import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URI)
        console.log('MongoDB conectado om sucesso!')
    } catch(error){
        console.error('Erro ao conectar ao MongoDB:', error)
    }
}

export default connectDB