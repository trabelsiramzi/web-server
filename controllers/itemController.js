const Item = require('../models/Item');

// Create a new item
exports.createItem = async (req, res) => {
    try {
        const newItem = await Item.create(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Fetch all items
exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.findAll();
        res.status(200).json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Fetch a single item by ID
exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findByPk(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update an item by ID
exports.updateItem = async (req, res) => {
    try {
        const item = await Item.findByPk(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        await item.update(req.body);
        res.status(200).json({ message: 'Item updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete an item by ID
exports.deleteItem = async (req, res) => {
    try {
        const item = await Item.findByPk(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        await item.destroy();
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
