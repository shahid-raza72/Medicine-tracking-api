const express =require('express')
const router = express.Router()
const {
    medicine_create,
    getMedicineByDate,
    updatemedicinetoTaken,
} =require('../controllers/medicineController.js')
const { protect} =require('../middleware/authMiddleware.js') 
router.route('/').post(protect, medicine_create)
router.route('/date').get(protect,getMedicineByDate)
router.route('/:id').post(protect, updatemedicinetoTaken)
 

module.exports = router