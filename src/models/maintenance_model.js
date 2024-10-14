import { Schema, model } from "mongoose";

const maintenanceSchema = new Schema({
    workshop: {
        type: Schema.Types.ObjectId,
        ref: "Workshop",
        required: true
    },
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: "Vehicle",
        required: true
    },
    services: {
        type: [{name: String, price: Number}],
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    totalCost: {
        type: Number,
        required: true
    }
})

const Maintenance = model('Maintenance', maintenanceSchema)

export default Maintenance