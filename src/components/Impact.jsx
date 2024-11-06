import React from 'react'

const Impact = () => {
  return (
    <section className="py-24 w-screen">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-7xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl">We're committed to making a positive difference in the world.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-blue-600 mb-4">1M+</div>
            <h3 className="text-xl font-semibold mb-2">Lives Impacted</h3>
            <p className="text-gray-600">We've positively affected over a million lives through our initiatives.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-green-600 mb-4">50+</div>
            <h3 className="text-xl font-semibold mb-2">Countries Reached</h3>
            <p className="text-gray-600">Our impact spans across more than 50 countries worldwide.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-purple-600 mb-4">100K</div>
            <h3 className="text-xl font-semibold mb-2">Trees Planted</h3>
            <p className="text-gray-600">We've contributed to global reforestation efforts by planting 100,000 trees.</p>
          </div>
        </div>
        <div className="mt-16 text-center">
          <a href="#" className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">Learn More About Our Impact</a>
        </div>
      </div>
    </section>
  )
}

export default Impact