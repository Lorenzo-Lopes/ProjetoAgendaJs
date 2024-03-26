const Login = require("../models/loginModel")

exports.index = (req, res)=>{
    res.render('login')
}

exports.register = async function(req,res){
    try{

        const login =new Login(req.body)
        await login.register()
        res.send(login.errors)
    
        if( login.errors.length>0){
            req.flash('erros', login.errors)
            req.session.save(function(){
            // return res.redirect('back')
            })
            return
        }   
        req.flash('success', 'deu certo caraio')
        req.session.save(function(){
        //    return res.redirect('back')
        });
        
        return res.send(login.errors)
    }catch(e){
      return res.render('404')
    }
}
