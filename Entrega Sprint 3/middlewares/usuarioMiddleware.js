function usuarioMiddleware(req, res, next){
    if (req.session.userLogged){
        return res.redirect('/usuarios');
    } 
    next();
};
module.exports = usuarioMiddleware;