const { Product, ProductCategory } = require('../database/models'); 

const productsController = {
    productCart: (req, res) => {
        res.render('products/productCart');
    },

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

            res.render('products/productDetail', { products });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al mostrar los productos');
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

            if (product) {
                return res.render('products/category', { products: [product] });
            }
            return res.render('products/category', { products: [] });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al mostrar el producto');
        }
    },

    showCreateForm: (req, res) => {
        res.render('products/createProduct');
    },

    create: async (req, res) => {
        const productData = req.body;

        try {
            await Product.create(productData);
            res.redirect('/products');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al crear el producto');
        }
    },

    showEditForm: async (req, res) => {
        const { id } = req.params;

        try {
            const product = await Product.findByPk(id);

            if (!product) {
                return res.status(404).send('Producto no encontrado');
            }

            res.render('products/editProduct', { product });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al mostrar el producto');
        }
    },

    edit: async (req, res) => {
        const { id } = req.params;
        const productData = req.body;

        try {
            const [updated] = await Product.update(productData, { where: { id } });

            if (!updated) {
                return res.status(404).send('Producto no encontrado');
            }

            res.redirect('/products');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al actualizar el producto');
        }
    },

    showDeleteForm: async (req, res) => {
        const { id } = req.params;

        try {
            const product = await Product.findByPk(id);

            if (!product) {
                return res.status(404).send('Producto no encontrado');
            }

            res.render('products/deleteProduct', { product });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al mostrar el producto');
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;

        try {
            const deleted = await Product.destroy({ where: { id } });

            if (!deleted) {
                return res.status(404).send('Producto no encontrado');
            }

            res.redirect('/products');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al eliminar el producto');
        }
    }
};

module.exports = productsController;
