import { getItemsCollection } from "../data/mongoClient.js"


export async function getAllItems(req, res, next) {
    try {
        const items = await getItemsCollection().find({}).toArray();
        res.status(200).json({
            status: "success",
            results: items.length,
            requestedAt: req.requestTime,
            data: { items },
        });
    } catch (error){
        next(error);
    }
}

export function getItem(req, res) {
    res.status(200).json({
        status: "success",
        data: { item: req.item },
    });
}

export async function createItem (req, res, next) {
    try {
        const items = getItemsCollection();

        const newItem = {
        name: req.body.name,
        description: req.body.description ?? "",
        category: req.body.category,
        price: Number(req.body.price),
        photo: req.body.photo,
        };
        const results = await items.insertOne(newItem);
        const createItem = await items.findOne({
            _id: results.insertedId,
        })

        res.status(201).json({
            status: "success",
            data: { item: createItem},
        });
    } catch (error) {
        next(error);
    }
}

export async function updateItem (req, res, next) {
    try {
        const updates = { ...req.body };
        delete updates._id;
        if (updates.price !== undefined) {
            updates.price = Number(updates.price);
        }

        await getItemsCollection().updateOne(
            { _id: req.item._id },
            { $set: updates },
        );

        const updatedItem = await getItemsCollection().findOne({
            _id: req.item._id,
        });

        res.status(200).json({
            status: "success",
            data: { item: updatedItem },
        });
    } catch (error) {
        next(error);
    }
}

export async function deleteItem (req, res, next) {
    try {
        await getItemsCollection().deleteOne({
            _id: req.item._id,
        })

        res.status(204).send();
    } catch (error) {
        next(error);
    }
}