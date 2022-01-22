const express = require('express')
const router = express.Router()
const Data = require('../models/Data')
const solveLHS = require('./functions/solveLHS')
const solveEquation = require('./functions/solveEquation')
const componentsOfEquation = require('./functions/componentsOfEquation')

router.get('/getdata',async(req,res)=>{
    try{
        const data = await Data.find().select({_id:0,__v:0})
        return res.send(data[0])
    }
    catch(err){
        return res.status(400).send(err)
    }
})

router.post('/getresult',async(req,res)=>{
    let data;
    try{
        data = await Data.find().select({_id:0,__v:0})
        data = data[0]["data"]
    }
    catch(err){
        return console.log(err)
    }
    const equation = req.body.equation
    const {lhs,comparator,rhs} = componentsOfEquation(equation,data)
    
    
    const lhsResult = solveLHS(lhs,data)
    const result = solveEquation(lhsResult,comparator,rhs)
    res.send(result)
    
})
router.post('/addData',async(req,res)=>{
    const data = req.body.data
    try{
        await Data.deleteMany({})
        const newData = new Data({
            data: data
        })
        await newData.save()
    }
    catch(err){
        console.log(err)
    }
})
module.exports = router