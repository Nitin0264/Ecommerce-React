import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) return;
    try {
      const response = await axios.post(`${backendUrl}/api/order/list`, {}, { headers: { token } })
      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error(error)
      toast.error(error.message)
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
        toast.success(response.data.message)
      }
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  return (
    <div className='flex flex-col gap-4 w-full p-4 sm:p-6'>
      <p className='text-lg font-semibold text-gray-700 mb-2'>Order Management Page</p>
      <div>
        {orders.map((order, index) => (
          <div
            className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700 rounded-lg bg-white shadow-sm'
            key={index}
          >
            <div className='w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full font-bold text-gray-500'>
              📦
            </div>
            <div>
              <div>
                {order.items.map((item, idx) => (
                  <p className='py-0.5' key={idx}>
                    {item.name} x {item.quantity} <span>{item.size}</span>
                    {idx !== order.items.length - 1 && ','}
                  </p>
                ))}
              </div>
              <p className='mt-3 mb-2 font-semibold text-gray-900'>
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div>
                <p>{order.address.street + ","}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
              </div>
              <p className='mt-2 font-medium text-gray-600'>{order.address.phone}</p>
            </div>
            <div>
              <p className='text-sm sm:text-[15px]'>Items: {order.items.length}</p>
              <p className='mt-3'>Method: {order.paymentMethod}</p>
              <p>Payment: {order.payment ? 'Done' : 'Pending'}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className='text-sm sm:text-[15px] font-semibold text-gray-800'>
              {currency}{order.amount}
            </p>
            <select
              onChange={(e) => statusHandler(e, order._id)}
              value={order.status}
              className='p-2 font-semibold border border-gray-300 rounded outline-none bg-gray-50 text-gray-700 cursor-pointer'
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}

        {orders.length === 0 && (
          <p className='text-center py-8 text-gray-500 bg-white border border-dashed rounded-lg'>
            No orders placed yet.
          </p>
        )}
      </div>
    </div>
  )
}

export default Orders