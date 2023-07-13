const express = require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser')
const usuarios = []; // Array de usuário

app.use(bodyparser.urlencoded({ extended: true}))
app.use(bodyparser.json())

// inicio post 
app.post('/usuarios', (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    res.send(usuarios);
});
// Fim post 

//Inicio Get 
app.get('/usuariosUm', (req, res) => {
    res.send(usuarios);
});
//Fim Get  

//Inicio PUT 
app.put('/usuariosPut/:id', (req, res) => {
    const idex = usuarios.findIndex(user => user.id === ~~req.params.id); 
    const usuario = req.body;
    usuarios.splice(index, 1, usuario);
    res.send(usuario); 
});
//Fim PUT 


// inicio metodo GET 
app.get('/usuarios/:id', (req, res) => {
    const usuarios = [{
            id: 1,
            nome: 'João'
        },
        {
            id: 2,
            nome: 'Maria'
        }
    ]
    const usuario = usuarios.find(user => ~~req.params.id === user.id);
    res.send(usuarios)
})
// Fim metodo GET 

app.get('/carros', (req, res) => {
    res.send(
      [{
            id: 1,
            nome: 'Ferrari'
      },
      {
            id: 2, 
            nome: 'Audio'
      }
  
    ])
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// Tesete de commit 