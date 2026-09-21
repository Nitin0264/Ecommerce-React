import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../context/UserContext'
import axios from 'axios'
import { toast } from 'react-toastify'

function Orders() {
  const { backendUrl } = useContext(userContext)
  const [orderData, setOrderData] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch complete historical lists from server database records
  const loadOrderData = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        setLoading(false)
        return
      }

      const response = await axios.post(
        `${backendUrl}/api/order/userorders`, 
        {}, 
        { headers: { token } }
      )

      if (response.data.success) {
        let allOrdersItem = []
        // Loop over each order block and extract single items out into a flat array structure
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            // Append general order parameters directly alongside item variables
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        // Sort orders so the newest purchases appear at the top
        setOrderData(allOrdersItem.reverse())
      }
    } catch (error) {
      console.error(error)
      toast.error("Failed to retrieve your order dashboard timeline")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadOrderData()
  }, [])

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-[60vh]'>
        <p className='text-gray-400 text-sm animate-pulse'>Synchronizing purchase records...</p>
      </div>
    )
  }

  return (
    <div className='border-t pt-16 max-w-5xl mx-auto px-4 min-h-screen bg-white'>
      <div className='text-2xl mb-8'>
        <h2 className='text-gray-500 font-light tracking-wide'>MY <span className='text-gray-900 font-medium'>ORDERS</span></h2>
      </div>

      <div>
        {orderData.length === 0 ? (
          <div className='text-center py-20 border border-dashed rounded-xl border-gray-200 bg-gray-50'>
            <p className='text-gray-400 text-base'>You haven't placed any purchases yet.</p>
          </div>
        ) : (
          <div className='flex flex-col gap-4'>
            {orderData.map((item, index) => (
              <div key={index} className='p-5 border border-gray-100 rounded-xl bg-white shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-gray-700 hover:border-gray-200 transition-all'>
                
                {/* Left Block: Product Metadata Display */}
                <div className='flex items-start gap-4 text-sm'>
                  <img className='w-16 sm:w-20 rounded-lg object-cover aspect-square border border-gray-50 bg-gray-50 flex-shrink-0' src={item.image[0]} alt={item.name} />
                  <div className='min-w-0'>
                    <p className='sm:text-base font-semibold text-gray-900 truncate'>{item.name}</p>
                    <div className='flex flex-wrap items-center gap-3 mt-1.5 text-xs text-gray-500 font-medium'>
                      <p className='text-gray-900 font-bold text-sm'>${item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p className='px-2 py-0.5 bg-gray-100 border border-gray-200 text-gray-700 rounded uppercase font-semibold text-[10px]'>Size: {item.size}</p>
                    </div>
                    <p className='mt-2 text-xs text-gray-400'>
                      Date: <span className='text-gray-600'>{new Date(item.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </p>
                    <p className='text-xs text-gray-400 mt-0.5'>
                      Payment: <span className='text-gray-600 uppercase font-medium'>{item.paymentMethod}</span>
                    </p>
                  </div>
                </div>

                {/* Middle Block: Status Tracking Indicator Ring */}
                <div className='md:w-1/3 flex items-center justify-start md:justify-center gap-2'>
                  <span className={`w-2 h-2 rounded-full ${
                    item.status === 'Delivered' ? 'bg-green-500' :
                    item.status === 'Shipped' ? 'bg-blue-500' : 'bg-amber-500'
                  }`} />
                  <p className='text-sm font-semibold text-gray-800'>{item.status}</p>
                </div>

                {/* Right Block: Actions Trigger Button */}
                <div className='flex justify-end'>
                  <button 
                    onClick={loadOrderData} 
                    className='border border-gray-200 text-gray-700 bg-white font-medium text-xs px-4 py-2.5 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer shadow-sm'
                  >
                    Track Order Status
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Orders