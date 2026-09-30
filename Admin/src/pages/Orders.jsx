import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Orders = ({ token, backendUrl }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) return;
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        { headers: { token } }
      )
      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error(error)
      toast.error("Error fetching orders")
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/status`,
        { orderId, status: event.target.value },
        { headers: { token } }
      )
      if (response.data.success) {
        await fetchAllOrders()
        toast.success("Order status updated")
      }
    } catch (error) {
      console.error(error)
      toast.error("Failed to update status")
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  return (
    <div className='p-4'>
      <h3 className='font-bold text-lg mb-4'>Order Page</h3>
      <div>
        {orders.map((order, index) => (
          <div key={index} className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 text-xs sm:text-sm text-gray-700'>
            <div>
              <p className='font-bold'>📦 Order</p>
            </div>
            <div>
              <div>
                {order.items.map((item, idx) => (
                  <p key={idx} className='py-0.5'>
                    {item.name} x {item.quantity} <span>({item.size})</span>
                  </p>
                ))}
              </div>
              <p className='mt-3 font-medium'>{order.address.firstName + " " + order.address.lastName}</p>
              <p>{order.address.street + ", " + order.address.city}</p>
            </div>
            <div>
              <p>Items: {order.items.length}</p>
              <p>Method: {order.paymentMethod}</p>
              <p>Payment: {order.payment ? 'Done' : 'Pending'}</p>
            </div>
            <p className='text-sm sm:text-[15px] font-semibold'>${order.amount}</p>
            <select value={order.status} onChange={(e) => statusHandler(e, order._id)} className='p-2 font-semibold border border-gray-300 rounded'>
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders