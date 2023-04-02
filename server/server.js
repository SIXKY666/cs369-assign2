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
    const id = req.params.id
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send({ error: 'Unable to read data file.' });
        } else {
            const pokemons = JSON.parse(data)
            const pokemon = pokemons[Number(id) - 1]
            res.json(pokemon)
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

app.post('/pokemon', (req, res) => {
    const newData = req.body
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

app.put("/pokemon/:id", (req, res) => {
    const id = req.params.id;

    //read file and data
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ message: 'Error reading data file!' });
            return;
        }

        //find an item by id
        const existingData = JSON.parse(data);
        const index = existingData.findIndex(product => product.id === id);
        if (index === -1) {
            res.status(404).json({ message: `Data with ID ${id} not found!` });
            return;
        }

        //insert update data into the index
        const updatedData = { ...existingData[index], ...newData };
        existingData[index] = updatedData;

        //write file
        fs.writeFile(DATA_FILE, JSON.stringify(existingData), (err) => {
            if (err) {
                res.status(500).json({ message: 'Error writing to data file!' });
                return;
            }
            res.json({ message: 'Data updated successfully!', data: updatedData });
        });
    });
})
app.post('/upload', (req, res) => {
    // Get the file that was set to our field named "image"
    const { image } = req.files;

    // If no image submitted, exit
    if (!image) return res.sendStatus(400);

    // Move the uploaded image to our upload folder
    image.mv('../client/src/images/' + image.name);

    res.sendStatus(200);
});
app.delete("/pokemon/:id", (req, res) => {
    const id = req.params.id;
    const data = JSON.parse(fs.readFileSync(DATA_FILE));
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
        data.splice(index, 1);
        fs.writeFileSync(DATA_FILE, JSON.stringify(data));
        res.status(200).json({ message: 'Data deleted successfully' });
    } else {
        res.status(404).json({ message: 'Data not found' });
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})