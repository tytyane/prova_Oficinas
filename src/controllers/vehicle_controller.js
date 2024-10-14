import Vehicle from "../models/vehicle_model.js"

export const store = async (req, res) => {
    try {
        const vehicle = await Vehicle.create({
            plate: req.body.plate,
            model: req.body.model,
            year: req.body.year,
            owner: req.body.owner,
            maintenances: req.body.maintenances
        })
        res.status(201).json(vehicle)
    } catch(error){
        res.status(400).send(error)
    }
}

export const index = async (req, res) => {
    try {
        const vehicle = await Vehicle.find()
        .populate("maintenances").exec()
        res.status(200).json(vehicle)
    } catch(error){
        res.status(400).send(error)
    }
}

export const update = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(
            req.params.id,{
                plate: req.body.plate,
                model: req.body.model,
                year: req.body.year,
                owner: req.body.owner,
                maintenances: req.body.maintenances
            }).exec()
        if(!vehicle){
            res.status(404).json({erro: "Veículo não encontrado"})
        }
        res.json(vehicle)
    } catch(error){
        res.status(400).send(error)
    }
}

export const destroy = async (req, res) => {
    try{
        const vehicle = await Vehicle.findByIdAndDelete(req.params.id).exec()
        if(!vehicle){
            res.status(404).json({erro: "Veículo não encontrado"})
        }
        res.json(vehicle)
    } catch(error){
        res.status(400).send(error)
    }
}