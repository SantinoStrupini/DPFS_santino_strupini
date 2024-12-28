const mainController = {
    index: (req, res) => {
        const user = req.user || null; // Si no hay usuario autenticado, será null
        res.render('index', { user });
    },

}

module.exports = mainController;