import Workshop from "../models/workshop_model.js";

export const store = async (req, res) => {
    try {
        const workshop = await Workshop.create({
            name: req.body.name,
            address: req.body.address,
            specialties: req.body.specialties
        })
        res.status(201).json(workshop)
    } catch(error){
        res.status(400).send(error)
    }
}

export const index = async (req, res) => {
    try {
        const workshop = await Workshop.find().exec()
        res.status(200).json(workshop)
    } catch(error){
        res.status(400).send(error)
    }
}

export const update = async (req, res) => {
    try {
        const workshop = await Workshop.findByIdAndUpdate(
            req.params.id,{
                name: req.body.name,
                address: req.body.address,
                specialties: req.body.specialties
            }).exec()
        if(!workshop){
            res.status(404).json({erro: "Oficina não encontrada"})
        }
        res.json(workshop)
    } catch(error){
        res.status(400).send(error)
    }
}

export const destroy = async (req, res) => {
    try{
        const workshop = await Workshop.findByIdAndDelete(req.params.id).exec()
        if(!workshop){
            res.status(404).json({erro: "Oficina não encontrada"})
        }
        res.json(workshop)
    } catch(error){
        res.status(400).send(error)
    }
}
