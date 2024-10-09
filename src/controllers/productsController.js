const Product = require('../models/products')

const productsController = {
   
    productCart: (req, res) => {
        
        res.render('products/productCart');
    },
     showCreateForm: (req, res) => {
        
        res.render('products/createProduct'); 
    }, 
   create: async(req, res) =>{
        const product = req.body;
       
        
        const createProduct = await Product.create(product);
       
        res.redirect('/products');
    }, 
    edit: (req, res) =>{
        
          
    },
    getAll: async (req, res) =>{
        const { category } = req.query;
        const products = await Product.findAll(category);
        res.render('products/productDetail', { products }); 
        
       
    },
  /*  getById: async(req, res) =>{
        const { id } = req.params;  
        const product = await Product.findById(id);  
        res.render('products/category', { product });
    }, */  
    delete: (req,res) =>{

    }
     
}

module.exports = productsController;