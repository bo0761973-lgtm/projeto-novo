const express = require ('express')
const app = express ()
const port = 3000

const mensagem = [ 'Bomdia']
app.get('/', (req, res)=>{
    res.send('OLA MUNDO')
}
);
app.get('/vistante',(req,res)=>{
    console.log("Acessou a rota de mensagens",mensagem);
    
}
);
app.listen (port, ()=>{
    console.log('Mensagem de boas vindas ${port}')
  });   