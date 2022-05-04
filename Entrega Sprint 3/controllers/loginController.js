const login = (req, res) => {
    res.render('login');
};

const loginController = {
    login,
}

module.exports = loginController;