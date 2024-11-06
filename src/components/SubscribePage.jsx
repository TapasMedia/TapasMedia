import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const SubscribePage = () => {
  const growthData = [
    { month: 'Jan', growth: 10 },
    { month: 'Feb', growth: 25 },
    { month: 'Mar', growth: 45 },
    { month: 'Apr', growth: 70 },
    { month: 'May', growth: 100 },
  ]

  

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-screen p-8 items-center justify-center">
      <div className=" p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Subscribe Now</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Premium Subscription</h2>
          <p className="text-gray-600 mb-6">
            Get access to exclusive features and premium content
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">$29.99/month</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Unlimited access to all features</li>
              <li>Priority support</li>
              <li>Advanced analytics</li>
              <li>Custom solutions</li>
            </ul>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Subscribe Now
          </button>
        </div>
      </div>
      <div className=" p-6 items-center justify-center flex flex-col">
        <h2 className="text-2xl font-semibold mb-8">Growth Projection</h2>
        <LineChart
          width={window.innerWidth < 600 ? 300 : 500}
          height={window.innerWidth < 600 ? 300 : 500}
          data={growthData}
          responsive={true}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="growth"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>{" "}
      </div>
    </div>
  );
}

export default SubscribePage