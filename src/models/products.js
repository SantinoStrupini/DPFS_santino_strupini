//fs o fileSystem: es un paquete que te permite manipular archivos, desde leerlos hasta editarlos
const { error } = require('console');
const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, '../data/products.json');

function getData(category) {
    try{
        const data = fs.readFileSync(filePath, 'utf-8');
        const parseData = JSON.parse(data);
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
        const data = fs.readFileSync(filePath, 'utf-8');
        const parseData = JSON.parse(data);
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
        const data = fs.readFileSync(filePath, 'utf-8');
        const parseData = JSON.parse(data);
        const newId = parseData[parseData.length - 1].id + 1;
        parseData.push({
            id: newId,
            ...product
            
        });
        fs.writeFileSync(filePath, JSON.stringify(parseData, null, 2));
        return 'producto creado';
    } catch (error) {
        console.log(error);
        
    }
    
}

function put(id, product){
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
    const parseData = JSON.parse(data);
    const productIndex = parseData.findIndex(p => parseInt(p.id) === parseInt(id));
    parseData[productIndex] = {
        ...parseData[productIndex], 
        ...product
    };
    
    fs.writeFileSync(filePath, JSON.stringify(parseData, null, 2));
    return 'Producto actualizado'; 
    } catch (error) {
     console.log(error);
        
    }
    
}

function deleteProduct(id){
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        const parseData = JSON.parse(data);
        const updatedData = parseData.filter(p => parseInt(p.id) !== parseInt(id))

        fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
    } catch (error) {
        console.log(error);
        
    }
    
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

