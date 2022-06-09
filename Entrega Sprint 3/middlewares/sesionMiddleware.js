function sesionMiddleware (req, res, next){
    if (req.session.userLogged){
        next()
    }
    res.send('No tienes permisos para ingresar a esta página')
};
module.exports = sesionMiddleware;