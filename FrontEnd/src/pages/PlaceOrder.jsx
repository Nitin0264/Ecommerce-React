import React, { useContext, useState } from 'react'
import { userContext } from '../context/UserContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function PlaceOrder() {
  const { products, cardItem, totalPrice, backendUrl, setCartItems } = useContext(userContext);
  const navigate = useNavigate();
  
  // 1. Delivery address form inputs state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  })

  // 2. Payment choice selection state (Defaults to Cash on Delivery)
  const [paymentMethod, setPaymentMethod] = useState('cod')

  // Input change interceptor handler
  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Calculate prices using your context totals helper
  const subTotal = totalPrice ? totalPrice() : 0;
  const shippingFee = subTotal > 300 || subTotal === 0 ? 0 : 10;
  const total = subTotal + shippingFee;

  // 3. Form submission request pipeline
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    
    try {
      if (subTotal === 0) {
        toast.error("Your checkout cart is empty!")
        return
      }

      // Format your nested layout item mapping to send across the API payload channel
      let orderItems = []
      for (const itemId in cardItem) {
        for (const size in cardItem[itemId]) {
          if (cardItem[itemId][size] > 0) {
            const itemInfo = products.find((p) => p._id === itemId)
            if (itemInfo) {
              // Deep clone item metadata and add structural selection fields
              const itemClone = structuredClone(itemInfo)
              itemClone.size = size
              itemClone.quantity = cardItem[itemId][size]
              orderItems.push(itemClone)
            }
          }
        }
      }

      // Assemble the final request package
      const orderData = {
        address: formData,
        items: orderItems,
        amount: total
      }

      // Route selection handler based on selected strategy
      switch (paymentMethod) {
        case 'cod': {
          const response = await axios.post(
            `${backendUrl}/api/order/place`, 
            orderData, 
            { headers: { token: localStorage.getItem('token') } }
          )

          if (response.data.success) {
            setCartItems({}); // Reset local cart state context mapping
            toast.success(response.data.message || "Order placed successfully!")
            navigate('/orders'); // Route over to personal purchase history tracking view
          } else {
            toast.error(response.data.message)
          }
          break;
        }

        case 'stripe': {
          const response = await axios.post(
            `${backendUrl}/api/order/stripe`, 
            orderData, 
            { headers: { token: localStorage.getItem('token') } }
          )

          if (response.data.success) {
            const { session_url } = response.data
            window.location.replace(session_url) // Redirect user securely out to Stripe Checkout payment gateway page
          } else {
            toast.error(response.data.message)
          }
          break;
        }

        case 'razorpay': {
          const response = await axios.post(
            `${backendUrl}/api/order/razorpay`, 
            orderData, 
            { headers: { token: localStorage.getItem('token') } }
          )

          if (response.data.success) {
            const { order } = response.data;
            
            // Build Razorpay client orchestration configurations
            const options = {
              key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_your_key_here', 
              amount: order.amount,
              currency: order.currency,
              name: 'E-Commerce Store',
              description: 'Order Checkout Payment',
              order_id: order.id,
              handler: async (response) => {
                try {
                  const verifyResponse = await axios.post(
                    `${backendUrl}/api/order/verifyRazorpay`, 
                    { razorpay_order_id: response.razorpay_order_id }, 
                    { headers: { token: localStorage.getItem('token') } }
                  )
                  
                  if (verifyResponse.data.success) {
                    setCartItems({}) // Clear active cart state properties
                    toast.success("Payment Received Successfully!")
                    navigate('/orders')
                  } else {
                    toast.error(verifyResponse.data.message)
                  }
                } catch (err) {
                  console.error(err)
                  toast.error("Internal verification runtime breakdown")
                }
              },
              theme: { color: "#000000" } 
            };

            const rzp = new window.Razorpay(options);
            rzp.open(); // Opens modal interface smoothly over screen viewport layers
          } else {
            toast.error(response.data.message)
          }
          break;
        }

        default:
          break;
      }

    } catch (error) {
      console.error(error)
      toast.error(error.response?.data?.message || "Failed to finalize your checkout order pipeline")
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center justify-center min-h-screen w-full bg-gray-50 p-4'>
      <h2 className='mb-10 text-3xl font-medium tracking-tight text-gray-900'>Delivery Information</h2>

      <div className='flex flex-col lg:flex-row gap-10 items-start justify-center w-full max-w-6xl'>

        {/* ── Left Side: Controlled Form Field Entry Inputs ── */}
        <div className='flex flex-col gap-4 w-full lg:w-3/5'>
          <div className='flex gap-4'>
            <input required name="firstName" value={formData.firstName} onChange={onChangeHandler} className='h-11 flex-1 border border-gray-200 bg-white rounded px-3 focus:outline-none focus:border-black text-sm' type="text" placeholder='First Name' />
            <input required name="lastName" value={formData.lastName} onChange={onChangeHandler} className='h-11 flex-1 border border-gray-200 bg-white rounded px-3 focus:outline-none focus:border-black text-sm' type="text" placeholder='Last Name' />
          </div>
          <input required name="email" value={formData.email} onChange={onChangeHandler} className='h-11 w-full border border-gray-200 bg-white rounded px-3 focus:outline-none focus:border-black text-sm' type="email" placeholder='Email Address' />
          <div className='flex gap-4'>
            <input required name="city" value={formData.city} onChange={onChangeHandler} className='h-11 flex-1 border border-gray-200 bg-white rounded px-3 focus:outline-none focus:border-black text-sm' type="text" placeholder='City' />
            <input required name="state" value={formData.state} onChange={onChangeHandler} className='h-11 flex-1 border border-gray-200 bg-white rounded px-3 focus:outline-none focus:border-black text-sm' type="text" placeholder='State' />
          </div>
          <div className='flex gap-4'>
            <input required name="zipCode" value={formData.zipCode} onChange={onChangeHandler} className='h-11 flex-1 border border-gray-200 bg-white rounded px-3 focus:outline-none focus:border-black text-sm' type="number" placeholder='Zip Code' />
            <input required name="country" value={formData.country} onChange={onChangeHandler} className='h-11 flex-1 border border-gray-200 bg-white rounded px-3 focus:outline-none focus:border-black text-sm' type="text" placeholder='Country' />
          </div>
          <input required name="phone" value={formData.phone} onChange={onChangeHandler} className='h-11 w-full border border-gray-200 bg-white rounded px-3 focus:outline-none focus:border-black text-sm' type="tel" placeholder='Mobile Number' />
        </div>

        {/* ── Right Side: Cart Totals & Interactive Payment Selector ── */}
        <div className='w-full lg:w-2/5 border border-gray-200 p-8 bg-white rounded-xl shadow-sm'>
          <h1 className='text-xl font-bold mb-6 border-b pb-3 text-gray-900'>Cart Total</h1>

          {subTotal > 0 ? (
            <div className='flex flex-col gap-3 mb-8 text-sm text-gray-600'>
              <p className='flex justify-between'>
                <span>Subtotal</span>
                <span className='font-semibold text-gray-900'>${subTotal.toFixed(2)}</span>
              </p>
              <p className='flex justify-between border-b pb-3'>
                <span>Shipping Fee</span>
                <span className='font-semibold text-gray-900'>${shippingFee.toFixed(2)}</span>
              </p>
              <p className='flex justify-between pt-2 items-baseline'>
                <span className='text-lg font-bold text-gray-900'>Total</span>
                <span className='text-xl font-bold text-black'>${total.toFixed(2)}</span>
              </p>
            </div>
          ) : (
            <p className='text-red-500 font-medium mb-8 text-sm'>Your cart is empty.</p>
          )}

          {/* Payment Options Mapping Row */}
          <p className='font-semibold mb-3 uppercase text-xs tracking-wider text-gray-400'>Payment Method</p>
          <div className='flex flex-col sm:flex-row gap-3 mb-8'>
            {[
              { id: 'razorpay', label: 'Razorpay' },
              { id: 'stripe', label: 'Stripe' },
              { id: 'cod', label: 'Cash on Delivery' }
            ].map((method) => (
              <button 
                type="button"
                key={method.id} 
                onClick={() => setPaymentMethod(method.id)}
                className={`flex-1 border rounded-lg px-4 py-3 text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  paymentMethod === method.id 
                    ? 'border-black bg-gray-50 font-semibold shadow-sm' 
                    : 'border-gray-200 text-gray-600 bg-white hover:bg-gray-50'
                }`}
              >
                {/* Visual choice indicator ring */}
                <span className={`w-3 h-3 rounded-full border flex items-center justify-center ${paymentMethod === method.id ? 'border-black bg-black' : 'border-gray-300'}`}>
                  {paymentMethod === method.id && <span className='w-1 h-1 bg-white rounded-full' />}
                </span>
                {method.label}
              </button>
            ))}
          </div>

          <button type="submit" className='w-full bg-black text-white py-3.5 rounded-lg font-semibold hover:bg-gray-800 active:scale-[0.99] transition-all uppercase tracking-wider text-sm shadow-md'>
            Place Order
          </button>
        </div>

      </div>
    </form>
  )
}

export default PlaceOrder