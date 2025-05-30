import Chart from '../models/charts.model.js'

export const createChart = async (req, res, next) => {
    try {
        const Chart = await Chart.create({
            ...req.body,
            createdBy: req.user._id
        })

        res.status(201).json({ success: true, data: client })
    }
    catch (err) {
        next(err)
    }
}

export const getClientAllCharts = async (req, res, next) => {
    try {
        const clients = await Client.find()

        res.status(201).json({ success: true, data: clients })
    }
    catch (err) {
        next(err)
    }
}