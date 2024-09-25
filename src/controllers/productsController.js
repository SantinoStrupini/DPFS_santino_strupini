const productsController = {
    index: (req, res) => {
        res.render('productDetail');
    },
    guitarsDetail: (req, res) => {
        res.render('guitarsDetail');
    },
    drumsDetail: (req, res) => {
        res.render('drumsDetail');
    },
    bassDetail: (req, res) => {
        res.render('bassDetail');
    },
    productCart: (req, res) => {
        res.render('productCart');
    }
    
}

module.exports = productsController;