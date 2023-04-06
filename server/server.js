const express = require('express')
const fs = require('fs');
const path = require('path');
const fileUpload = require('express-fileupload');
const port = 4000
const DATA_FILE = "./pokemon.json"
const app = express()


app.use(express.json())
app.use(fileUpload());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/pokemon', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send({ error: 'Unable to read data file.' });
        } else {
            res.send(JSON.parse(data));
        }
    });

})

app.get('/pokemon/:id', (req, res) => {
    const id = parseInt(req.params.id)
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send({ error: 'Unable to read data file.' });
        } else {
            const pokemonData = JSON.parse(data)
            const pokemon = pokemonData.find(pokemon => pokemon.id === id);
            console.log(pokemon);
            res.send(pokemon)
        }
    });
})
app.get('/images/:filename',(req,res)=>{
    const fileName = req.params.filename;
    console.log(fileName);
    const imagePath = path.join(__dirname,'images', fileName);

    fs.readFile(imagePath, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(404).send('Image not found');
        }
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(data);
    });
})
app.get('/pokemon/images/:filename',(req,res)=>{
    const fileName = req.params.filename;
    console.log(fileName);
    const imagePath = path.join(__dirname,'images', fileName);

    fs.readFile(imagePath, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(404).send('Image not found');
        }
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(data);
    });
})

app.post('/pokemon', (req, res) => {
    const newData = req.body
    newData.id = Number(req.body.id);
    const { image } = req.files

    // If no image submitted, exit
    if (!image) return res.sendStatus(400);

    // Move the uploaded image to our upload folder
    image.mv('./images/' + image.name);

    newData["imgUrl"] = './images/' + image.name;

    fs.readFile(DATA_FILE, (err, data) => {
        if (err) {
            console.error(err)
            res.sendStatus(500)
            return;
        }
        const parsedData = JSON.parse(data);
        parsedData.push(newData)
        fs.writeFile(DATA_FILE, JSON.stringify(parsedData), (err) => {
            if (err) {
                console.error(err)
                res.sendStatus(500)
                return;
            }
            res.json(newData);
        });
    });
})

app.listen(port, () => {
    console.log(`Pokemon app listening on port ${port}`)
})