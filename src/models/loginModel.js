const mongoose = require('mongoose');
const validator = require("validator")
const { CleanPlugin } = require('webpack');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  senha: { type: String, required: true },
  
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body){
    this.body=body;
    this.errors = [];
    this.user =null

  }
  register(){
    this.valida();
    if (this.errors.length>0) return
  }
  valida(){
    this.cleanUP
    if(! validator.isEmail(this.body.email))this.errors.push('Email invaido')

    if (this.body.password.length<3 ||this.body.password.length >50 ){
      this.errors.push('tamanho da senha invalido')
    }


  }
  cleanUP(){
    for (const key in this.body){
      if(typeof this,body[key]!== 'string'){
        this.body[key]=''
      }
    }
    this.body={
      email: this.body.email,
      password: this.body.password
    }

  }

}

module.exports = Login;
