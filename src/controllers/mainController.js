const mainController = {
    index: (req, res) => {
        const user = req.user || null; 
        res.render('index', { user });
    },

}

module.exports = mainController;