//fs o fileSystem: es un paquete que te permite manipular archivos, desde leerlos hasta editarlos
const { error } = require('console');
const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, '../data/products.json');

function getData(category) {
    try{
        const data = fs.readFileSync(filePath, 'utf-8');//aca lee el archivo json que le indique
        const parseData = JSON.parse(data);//parsea el JSON a js
        if(!category){
            return parseData;   
        }
        return parseData.filter(p => p.category.toLowerCase() === category.toLowerCase());


    } catch (error){
        console.log(error);
    }
};

function getById(id) {
    try{
        const data = fs.readFileSync(filePath, 'utf-8');//aca lee el archivo json que le indique
        const parseData = JSON.parse(data);//parsea el JSON a js
        if(!id){
            return parseData;   
        }
        return parseData.find(p => parseInt(p.id) === parseInt(id));


    } catch (error){
        console.log(error);
        
    }
};

function create(product) {
    try {  
        const data = fs.readFileSync(filePath, 'utf-8');//aca lee el archivo json que le indique
        const parseData = JSON.parse(data);//parsea el JSON a js
        const newId = parseData[parseData.length - 1].id + 1;//traigo el id del ultimo elemento
        parseData.push({
            id: newId,
            ...product
            
        });
        fs.writeFileSync(filePath, JSON.stringify(parseData, null, 2));//esta linea agarra el array nuevo y escribe todo devuelta con el producto nuevo
        return 'producto creado';
    } catch (error) {
        console.log(error);
        
    }
    
}

function put(id, product){
    const data = fs.readFileSync(filePath, 'utf-8');//aca lee el archivo json que le indique
    const parseData = JSON.parse(data);//parsea el JSON a js
    //usar un find para buscar el producto especificio que tengo que editar
    const productIndex = parseData.findIndex(p => parseInt(p.id) === parseInt(id));
    //con la info de product modifico la info
    parseData[productIndex] = {
        ...parseData[productIndex], // Mantiene las propiedades actuales del producto
        ...product// Reemplaza con las nuevas propiedades
    };
    //reescribo el archivo como hice para crear 
    fs.writeFileSync(filePath, JSON.stringify(parseData, null, 2));
    return 'Producto actualizado'; // Devuelve una confirmación
}

function deleteProduct(id){
    const data = fs.readFileSync(filePath, 'utf-8');//aca lee el archivo json que le indique
    const parseData = JSON.parse(data);//parsea el JSON a js
    const updatedData = parseData.filter(p => parseInt(p.id) !== parseInt(id))

    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
}
const Product = {
    findAll: (category) => {
        return getData(category);
    },
    findById: (id) =>{
        return getById(id);
    },
    create: (product)=>{
        return create(product);
    },
    put: (id, product) =>{
        return put(id, product);
    },
    delete: (id)=>{
        return deleteProduct(id);
    }
};



module.exports = Product;

