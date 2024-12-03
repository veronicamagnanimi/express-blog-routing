const express = require("express");
const router = express.Router();
module.exports = router; //esporto sull'app principale

//index --> GET
router.get('/', (req, res) => {
    res.json("Tutti i dati")
});

//show --> GET
router.get('/:id', (req, res) => {
    const postId = req.params.id;
    res.json("In evidenza l'elemento " + postId);
})

//create --> POST
router.post('/', (req, res) => {
    res.json("Creazione del nuovo post");
})

//update --> PUT
router.put('/:id', (req, res) => {
    const postId = req.params.id;
    res.json("Aggiornamento del post " + postId);
})

//destroy --> DELETE
router.delete('/:id', (req, res) => {
    const postId = req.params.id;
    res.json("Cancellazione del post " + postId);
})