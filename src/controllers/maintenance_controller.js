import Maintenance from "../models/maintenance_model.js"

export const store = async (req, res) => {
    try {
        const maintenance = await Maintenance.create({
            workshop: req.body.workshop,
            vehicle: req.body.vehicle,
            services: req.body.services,
            date: req.body.date,
            totalCost: req.body.totalCost
        })
        res.status(201).json(maintenance)
    } catch(error){
        res.status(400).send(error)
    }
}

export const index = async (req, res) => {
    try {
        const maintenance = await Maintenance.find()
        .populate("workshop")
        .populate("vehicle").exec()
        res.status(200).json(maintenance)
    } catch(error){
        res.status(400).send(error)
    }
}

export const update = async (req, res) => {
    try {
        const maintenance = await Maintenance.findByIdAndUpdate(
            req.params.id,{
                workshop: req.body.workshop,
                vehicle: req.body.vehicle,
                services: req.body.services,
                date: req.body.date,
                totalCost: req.body.totalCost
            }).exec()
        if(!maintenance){
            res.status(404).json({erro: "Manutenção não encontrada"})
        }
        res.json(maintenance)
    } catch(error){
        res.status(400).send(error)
    }
}

export const destroy = async (req, res) => {
    try{
        const maintenance = await Maintenance.findByIdAndDelete(req.params.id).exec()
        if(!maintenance){
            res.status(404).json({erro: "Manutenção não encontrada"})
        }
        res.json(maintenance)
    } catch(error){
        res.status(400).send(error)
    }
}