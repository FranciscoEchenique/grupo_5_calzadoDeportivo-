function adminMiddleware (req, res, next){
    if (req.session.userLogged.rol){
        next()
    }
    res.send('No tienes permisos para ingresar a esta página');
};
module.exports = adminMiddleware;