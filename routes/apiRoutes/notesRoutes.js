const path = require('path')
const fs = require('fs')
const express = require('express')
const router = express.Router();
const notes = require('../../db/db.json')

router.get('/notes', (req, res) =>  {
    res.json(notes)
    })

    router.post('/notes', (req, res) =>  {
        let newNotes = notes
        req.body.id = Math.floor(Math.random()*10000000)
        newNotes.push(req.body)
        fs.writeFileSync('./db/db.json', JSON.stringify(newNotes))
        res.json(notes)
        })

module.exports = router;