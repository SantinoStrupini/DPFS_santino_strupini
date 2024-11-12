const Product = require('../../models/products')

const productsApiController = {
   
    getAll: async (req, res) =>{
        const { category } = req.query;
        const products = await Product.findAll(category);
        res.json('products/productDetail', { products }); 
        
       
    },
    getById: async (req, res) => {
        const { id } = req.params;
        const product = await Product.findById(id);
        
        if (product) {
            res.json('products/category', { products: [product] }); 
        }
        return res.json('products/category', { products: [] }); 
        
    },
   create: async(req, res) =>{
        const product = req.body;
       
        
        const createProduct = await Product.create(product);
       
        res.status(201).json({
            message: 'product created'
        })
    }, 
    edit: async(req, res) =>{
        const id = req.params.id; 
        const product = req.body; 
        const response = await Product.put(id, product); 
        if (response === 'Producto no encontrado') {
            return res.status(404).json({ message: response });
        }
        res.status(202).json({ message: 'Product updated' });
          
    },
    delete: (req,res) =>{
        const id = req.params.id; 
        const product = req.body;
        const response = Product.delete(id); 
        if (response === 'Producto no encontrado') {
            return res.status(404).json({ message: response }); 
        }
        res.status(202).json({ message: 'Product deleted' });
    }
     
}

module.exports = productsApiController;