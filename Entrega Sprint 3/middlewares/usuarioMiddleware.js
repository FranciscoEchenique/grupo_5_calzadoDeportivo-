function usuarioMiddleware(req, res, next){
    if (req.session.userLogged){
        return res.redirect('/usuarios');
    } else {
        next();
    }
}
module.exports = usuarioMiddleware;