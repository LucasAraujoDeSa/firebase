const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const fbService = require('./fbService')

app.post('/register',async(req,res)=>{
    try{
        const{email,password} = req.body;//passando email e senha pelo corpo da requisiçao
        const user = await fbService.addUser(email,password);//chmando o metodo do firebase para criar novo usuario 
        return res.status(200).json({response: "user register"});//retornando codigo 200 e json de sucesso 
    }catch(err){
        return res.status(400).json({err: err});//retornando codigo 400 e json de error
    }
});

app.post('/login',async(req,res)=>{
    try{
        const{email,password}=req.body
        const user = await fbService.signUser(email,password);
        return res.status(200).json({response:"success"})
    }catch(err){
        return res.status(400).json({err:err})
    }
})


app.listen(3000,()=>{console.log('server on')})