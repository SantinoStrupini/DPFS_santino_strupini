const { Product, ProductCategory } = require('../../database/models');

const productsController = {
    getAll: async (req, res) => {
        try {
            const products = await Product.findAll({
                include: [
                    {
                        model: ProductCategory,
                        as: 'category'
                    }
                ]
            });

            res.status(200).json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener los productos', error });
        }
    },

    getById: async (req, res) => {
        const { id } = req.params;

        try {
            const product = await Product.findByPk(id, {
                include: [
                    {
                        model: ProductCategory,
                        as: 'category'
                    }
                ]
            });

            if (!product) {
                return res.status(404).json({ message: 'Producto not found' });
            }

            res.status(200).json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error showing product', error });
        }
    },

    create: async (req, res) => {
        const productData = req.body;

        try {
            const newProduct = await Product.create(productData);
            res.status(201).json(newProduct);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error creating product', error });
        }
    },

    edit: async (req, res) => {
        const { id } = req.params;
        const productData = req.body;

        try {
            const [updated] = await Product.update(productData, { where: { id } });

            if (!updated) {
                return res.status(404).json({ message: 'Product not found' });
            }

            const updatedProduct = await Product.findByPk(id);
            res.status(200).json(updatedProduct);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error updating product', error });
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;

        try {
            const deleted = await Product.destroy({ where: { id } });

            if (!deleted) {
                return res.status(404).json({ message: 'Product not found' });
            }

            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error deleting product', error });
        }
    }
};

module.exports = productsController;
