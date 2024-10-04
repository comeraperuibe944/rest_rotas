const express = require('express');

const path = require('path');

const app = express();

app.set('view enfine', 'ejs');
app.set('views', path.join(__dirname, 'views'));





let comentarios = [
    {
        id: 1,
        username: 'Todd',
        comment: 'lol'
    },
    {
        id: 2,
        username: 'Todd2',
        comment: 'lol2'
    },
    {
        id: 3,
        username: 'Todd3',
        comment: 'lol3'
    },
    {
        id: 4,
        username: 'Todd4',
        comment: 'lol4'
    }
];

app.get('/comentario', (req, res)=>{
    res.send(comentarios); //Pega os dados do servidor
});

app.get('/comentario/:id', (req, res)=>{
    const {id} = req.params;
    let comentario = comentarios.find(c => c.id === Number(id));
    res.send(comentarios);
    //Pega os dados do servidor
});

app.post('/comentario', (req, res)=>{
    const {username, comentario} = req.body; //Insere os dados no servidor
    comentarios.push(username, comentario);
    res.redirect('/comentario');
});




app.patch('/comentario')
app.delete('/comentario')

app.get('/usuario')
app.post('/usuario')
app.patch('/usuario')
app.delete('/usuario')

app.listen(80, ()=>{
    console.log('Working on 80')
});