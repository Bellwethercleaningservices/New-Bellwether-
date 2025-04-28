"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function ServiceCalculator() {
  const [formData, setFormData] = useState({
    serviceType: 'regular',
    propertySize: 'small',
    frequency: 'oneTime',
    extras: []
  })
  
  const [price, setPrice] = useState(0)
  
  const servicePrices = {
    regular: {
      small: 80,
      medium: 120,
      large: 160
    },
    deep: {
      small: 150,
      medium: 200,
      large: 250
    },
    endOfTenancy: {
      small: 200,
      medium: 250,
      large: 300
    }
  }
  
  const frequencyDiscounts = {
    oneTime: 1,
    weekly: 0.9,
    biweekly: 0.95,
    monthly: 0.98
  }
  
  const extraServices = [
    { id: 'windows', name: 'Window Cleaning', price: 30 },
    { id: 'oven', name: 'Oven Deep Clean', price: 40 },
    { id: 'fridge', name: 'Refrigerator Cleaning', price: 25 },
    { id: 'cabinets', name: 'Inside Cabinet Cleaning', price: 35 },
    { id: 'ironing', name: 'Ironing Service', price: 20 }
  ]
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      setFormData(prev => {
        if (checked) {
          return { ...prev, extras: [...prev.extras, value] }
        } else {
          return { ...prev, extras: prev.extras.filter(extra => extra !== value) }
        }
      })
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }
  
  const calculatePrice = () => {
    // Base price based on service type and property size
    let basePrice = servicePrices[formData.serviceType][formData.propertySize]
    
    // Apply frequency discount
    let discountedPrice = basePrice * frequencyDiscounts[formData.frequency]
    
    // Add extras
    let extrasTotal = 0
    formData.extras.forEach(extraId => {
      const extra = extraServices.find(e => e.id === extraId)
      if (extra) {
        extrasTotal += extra.price
      }
    })
    
    // Calculate final price
    const finalPrice = discountedPrice + extrasTotal
    
    setPrice(finalPrice)
  }
  
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Service Price Calculator</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Type
          </label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="regular">Regular Cleaning</option>
            <option value="deep">Deep Cleaning</option>
            <option value="endOfTenancy">End of Tenancy Cleaning</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Property Size
          </label>
          <select
            name="propertySize"
            value={formData.propertySize}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="small">Small (1-2 bedrooms)</option>
            <option value="medium">Medium (3-4 bedrooms)</option>
            <option value="large">Large (5+ bedrooms)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cleaning Frequency
          </label>
          <select
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="oneTime">One-time Service</option>
            <option value="weekly">Weekly (10% discount)</option>
            <option value="biweekly">Bi-weekly (5% discount)</option>
            <option value="monthly">Monthly (2% discount)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Extra Services
          </label>
          <div className="space-y-2">
            {extraServices.map(extra => (
              <div key={extra.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={extra.id}
                  name="extras"
                  value={extra.id}
                  checked={formData.extras.includes(extra.id)}
                  onChange={handleChange}
                  className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                />
                <label htmlFor={extra.id} className="ml-2 text-sm text-gray-700">
                  {extra.name} (+£{extra.price})
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <button
          type="button"
          onClick={calculatePrice}
          className="btn-primary w-full"
        >
          Calculate Price
        </button>
        
        {price > 0 && (
          <div className="mt-6 p-4 bg-black text-white rounded-lg text-center">
            <p className="text-lg font-semibold">Estimated Price</p>
            <p className="text-3xl font-bold">£{price}</p>
            <p className="text-sm mt-2">This is an estimate. Final price may vary based on specific requirements.</p>
            <Link href="/booking" className="inline-block mt-4 bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition-colors">
              Book This Service
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
