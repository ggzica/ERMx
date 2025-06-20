import Client from "../models/client.model.js";

export const createClient = async (req, res, next) => {
  try {
    const client = await Client.create({
      ...req.body,
      createdBy: req.user._id,
    });

    res.status(201).json({ success: true, data: client });
  } catch (err) {
    next(err);
  }
};

export const getAllClients = async (req, res, next) => {
  const { page = 1, pageSize = 10 } = req.query;
  const queryFilters = { ...req.query };
  const excludedFields = ["page", "pageSize"];
  excludedFields.forEach((el) => delete queryFilters[el]);
  console.log(queryFilters);
  try {
    const clients = await Client.find(queryFilters)
      .limit(pageSize * 1)
      .skip((page - 1) * pageSize);
    const count = await Client.countDocuments();
    res.status(201).json({
      success: true,
      data: clients,
      meta: {
        pagination: {
          page: page,
          pageSize: pageSize,
          pageCount: Math.ceil(count / pageSize),
          total: count,
        },
      },
      currentPage: page,
    });
  } catch (err) {
    next(err);
  }
};
