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
    showEditForm: async(req, res)=>{
        const id = req.params.id; // Captura el ID desde la URL
        const product = await Product.findById(id); // Busca el producto por ID usando el modelo

        if (!product) {
            return res.status(404).send('Producto no encontrado');
        }

        // Renderiza la vista pasando el producto encontrado
        res.render('products/editProduct', { product });
    },
    edit: async(req, res) =>{
        const id = req.params.id; // Captura el ID del producto desde los parámetros de la URL
        const product = req.body; // Obtiene los datos actualizados desde el cuerpo de la solicitud
        const response = await Product.put(id, product); // Llama al método update del modelo
        if (response === 'Producto no encontrado') {
            return res.status(404).json({ message: response }); // Si no encuentra el producto, responde con 404
        }
        res.redirect('/products'); // Responde con un mensaje de éxito
          
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
    },   */
    delete: (req,res) =>{
        const id = req.params.id; // Obtener el ID desde los parámetros de la URL
        const response = Product.delete(id); // Llamar al modelo para eliminar el producto
        if (response === 'Producto no encontrado') {
            return res.status(404).json({ message: response }); // Enviar error si el producto no existe
        }
        res.json({ message: response }); // Enviar un mensaje de éxito
    }
     
}

module.exports = productsController;