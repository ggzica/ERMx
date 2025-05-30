import Client from '../models/client.model.js'

export const createClient = async (req, res, next) => {
    try {
        const client = await Client.create({
            ...req.body,
            createdBy: req.user._id
        })

        res.status(201).json({ success: true, data: client })
    }
    catch (err) {
        next(err)
    }
}

export const getAllClients = async (req, res, next) => {
    try {
        const clients = await Client.find()

        res.status(201).json({ success: true, data: clients })
    }
    catch (err) {
        next(err)
    }
}