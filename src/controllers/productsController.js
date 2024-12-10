const { Product, ProductCategory } = require('../database/models'); 

const productsController = {
    productCart: (req, res) => {
        res.render('products/productCart');
    },

    getAll: async (req, res) => {
        try {
            const { category } = req.query; 
    
            
            const product = {
                include: [
                    {
                        model: ProductCategory,
                        as: 'category'
                    }
                ]
            };
    
            
            if (category) {
                product.where = {
                    '$category.name$': category 
                };
            }
    
            
            const products = await Product.findAll(product);
    
            res.render('products/productDetail', { products });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error showing the products');
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
            res.status(500).send('Error showing the product');
        }
    },

    showCreateForm: (req, res) => {
        res.render('products/createProduct');
    },

    create: async (req, res) => {
        
        const { name, price, description, img, category_id } = req.body;

            
            
        try {
            const newProduct = await Product.create({
                name,
                price,
                description,
                img,
                category_id
            });
            
            res.redirect('/products');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error creating the product');
        }
    },

    showEditForm: async (req, res) => {
        const { id } = req.params;

        try {
            const product = await Product.findByPk(id);

            if (!product) {
                return res.status(404).send('product not found');
            }

            res.render('products/editProduct', { product });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error showing the product');
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
