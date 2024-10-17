import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import workshop_route from "./routes/workshop_route.js"
import vehicle_route from "./routes/vehicle_route.js"
import maintenance_route from "./routes/maintenance_route.js"

dotenv.config()
connectDB()

const port = process.env.PORT || 3000
const app = express()
app.use(express.json())

app.use('/oficina', workshop_route)
app.use('/veiculo', vehicle_route)
app.use('/manutencao', maintenance_route)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))

export default app