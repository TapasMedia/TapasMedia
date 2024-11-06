import React from 'react'
import { motion } from 'framer-motion'

const PerksPage = () => {
  const perks = [
    {
      title: "Unlimited Reading",
      description: "Access thousands of stories anytime, anywhere",
      gif: "https://media.giphy.com/media/3o7TKWpZ8Zy4qKPHxe/giphy.gif"
    },
    {
      title: "Original Content",
      description: "Exclusive stories you won't find anywhere else",
      gif: "https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif"
    },
    {
      title: "Daily Updates",
      description: "New episodes and stories added every day",
      gif: "https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif"
    },
    {
      title: "Offline Reading",
      description: "Download your favorite stories to read offline",
      gif: "https://media.giphy.com/media/3o7TKSjRrfIPjeiVyE/giphy.gif"
    },
    {
      title: "Personalized Experience",
      description: "Recommendations based on your reading preferences",
      gif: "https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif"
    },
    {
      title: "Community",
      description: "Connect with other readers and creators",
      gif: "https://media.giphy.com/media/3o7TKv2dpcwxlkD1pc/giphy.gif"
    }
  ]

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-indigo-900 mb-12 tracking-tight font-Cambay">
        PERKS OF TAPAS MEDIA
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {perks.map((perk, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group bg-white p-6 rounded-2xl shadow-magical hover:shadow-magical-2xl transition-all duration-300"
          >
            <div className="aspect-square rounded-xl overflow-hidden mb-4">
              <img
                src={perk.gif}
                alt={perk.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
              {perk.title}
            </h3>
            <p className="text-gray-600">
              {perk.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default PerksPage