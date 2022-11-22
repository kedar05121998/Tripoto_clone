const express=require('express');
const router=express.Router();
const Hotels=require("../model/hotels")
const mongoose=require('mongoose')



router.get('/',(req,res,next)=>{
  Hotels.find()
  .then(result=>{
    res.status(200).json({
        HotelsData:result
    })
  })
  .catch(err=>{
    console.log(err)
    res.status(500).json({
        error:err
    })

  })
})
//for id catch
router.get('/:id',(req,res,next)=>{
    console.log(req.params.id)
    Hotels.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            hotels:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err

        })
    })

})


router.post('/',(req,res,next)=>{
   const hotels=new Hotels({
     _id:new mongoose.Types.ObjectId,
    
     title:req.body.title,
     image:req.body.image,
     by:req.body.by,
     stays:req.body.stays
   
   })
   hotels.save()
   .then(result=>{
    console.log(result);
    res.status(200).json({
        newHotels:result
    })
   })
   .catch(err=>{
    console.log(err)
    res.status(404).json({
        error:err
    })
   })
})
module.exports=router





// {
//     "id": 1,
//     "title": "Unwind At The Vedic Village Spa Resort in Kolkata",
//     "image": "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664284466_1501572387_vedicvillage1.jpg",
//     "by": "Aakanksha Magan",
//     "stays": "Luxury Stays"
//   }