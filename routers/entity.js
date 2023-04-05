const express = require('express')
const { emit } = require('../models/db-schema')
const EntitySchema = require('../models/db-schema')

const router = express.Router()

router.get('/', async (req, res)=>{
    try{
        const entity = await EntitySchema.find()
        res.json(entity)

    }catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id', async (req,res)=>{
    try {
        const entity = await EntitySchema.findById(req.params.id)
        res.json(entity)
    } catch (err) {
        console.log("Err" + err);
        res.send(err)
    }
})

router.patch('/:id', async (req,res)=>{
    try {
        const entity = await EntitySchema.findById(req.params.id)
        entity.stu = req.body.stu
        const e1 = await entity.save()
        res.json(e1)
    } catch (err) {
        console.log(('ERR'+ err))
        res.send(err)
    }
})

router.delete('/:id', async (req, res)=>{
    const entity = await EntitySchema.findById(req.params.id)
    const e1 = await entity.deleteOne()
    res.json(e1)
})

router.post('/', async (req,res)=>{
    console.log(req.body)
     const entity = new EntitySchema({
        name:req.body.name,
        tech:req.body.tech,
        stu:req.body.stu
     })

     try{
        const e1 = await entity.save()
        res.json(e1)
     }catch(err){
        res.send('Err' + err)
     }
})

module.exports = router