const Login = require("../models/loginModel")

exports.index = (req, res)=>{
    res.render('login')
}

exports.register = async function(req,res){
    const login =new Login(req.body)
    await login.register()

    if( login.errors.length>0){
        
        req.flash('erros', login.erro)
        req.session.save(function(){
            res.redirect('back')
        })
        return
    }
    res.send(req.body)
    res.send(login.erro)
    res.send(login.user)

}
