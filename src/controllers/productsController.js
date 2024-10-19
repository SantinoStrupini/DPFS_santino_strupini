const Product = require('../models/products')

const productsController = {
   
    productCart: (req, res) => {
        
        res.render('products/productCart');
    },
    getAll: async (req, res) =>{
        const { category } = req.query;
        const products = await Product.findAll(category);
        res.render('products/productDetail', { products }); 
        
       
    },
    getById: async (req, res) => {
        const { id } = req.params;
        const product = await Product.findById(id);
        
        if (product) {
            res.render('products/category', { products: [product] }); 
        }
        return res.render('products/category', { products: [] }); 
        
    },
    
    showCreateForm: (req, res) => {
        
        res.render('products/createProduct'); 
    },
   create: async(req, res) =>{
        const product = req.body;
       
        
        const createProduct = await Product.create(product);
       
        res.redirect('/products');
    }, 
    showEditForm: async(req, res)=>{
        const id = req.params.id;
        const product = await Product.findById(id); 

        if (!product) {
            return res.status(404).send('Producto no encontrado');
        }

        
        res.render('products/editProduct', { product });
    },
    edit: async(req, res) =>{
        const id = req.params.id; 
        const product = req.body; 
        const response = await Product.put(id, product); 
        if (response === 'Producto no encontrado') {
            return res.status(404).json({ message: response });
        }
        res.redirect('/products');
          
    },
    showDeleteForm: async(req, res)=>{
        const id = req.params.id;
        const product = await Product.findById(id); 

        if (!product) {
            return res.status(404).send('Producto no encontrado');
        }

        
        res.render('products/deleteProduct', { product });
    },
    delete: (req,res) =>{
        const id = req.params.id; 
        const product = req.body;
        const response = Product.delete(id); 
        if (response === 'Producto no encontrado') {
            return res.status(404).json({ message: response }); 
        }
        res.redirect('/products');
    }
     
}

module.exports = productsController;