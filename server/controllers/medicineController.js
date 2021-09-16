 
const Medicine = require('../models/medicine.js') 

const medicine_create = function (req, res) {
  let medicine = new Medicine(
      {
          name: req.body.name,
          quantity: req.body.quantity,
          medicinetype:req.body.medicinetype,
          time:req.body.time,
          startDate:req.body.startDate,
          endDate: req.body.endDate


      }
  );

  medicine.save(function (err) {
      if (err) {
          return next(err);
      }
      res.send('Medicine Created successfully')
  })
};
const getMedicineByDate = async(req, res) => {

    try {
       
    
        let { date } = req.query;
    
       
       if(date === '') {
       return res.status(400).json({
           status:'failure',
           message: 'Please ensure you to pick dates'
            })
           }
    
   
       console.log({ date});

    const medicine= Medicine.find({ 
    createdAt: new Date(new Date(date)) 
            
             
      }).sort({ createdAt: 'asc'})  
    
    
    
    if (!medicine) {
    return res.status(404).json({
     status:'failure',
     message:'Could not retrieve medicine'
    })
    }
    
    if(medicine || medicine.isTaken==True){
      res.status(200).json({
        status:'success',
        data: medicine
           })
    }
    
    
    } 
    
    catch(error) {
      return res.status(500).json({
         status:'failure',
         error: error.message
            })
     }
    
    }

    const updatemedicinetoTaken = async (req, res) => {
        const medicine = await Medicine.findById(req.params.id)
      
        if (medicine) {
          medicine.isTaken = true
          medicine.TakenAt = Date.now()
      
          const updateTaken = await medicine.save()
      
          res.json(updateTaken)
        } else {
          res.status(404).send('medicine not found')
        }
      }

module.exports ={
  medicine_create,
  getMedicineByDate,
  updatemedicinetoTaken,

}