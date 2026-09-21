import express from 'express'
import { placeOrderCod, placeOrderStripe, verifyStripe, placeOrderRazorpay, verifyRazorpay, userOrders } from '../controllers/orderController.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

orderRouter.post('/place', authUser, placeOrderCod)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/verifyStripe', authUser, verifyStripe)
orderRouter.post('/userorders', authUser, userOrders)

// Razorpay endpoints
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay)

export default orderRouter