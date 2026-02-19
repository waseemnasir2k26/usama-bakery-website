const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Nan Khatai Special',
      description: 'Traditional almond-flavored shortbread cookies made with pure ghee',
      price: 'Rs. 850',
      weight: 'Per Kg',
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
      badge: 'Best Seller',
    },
    {
      id: 2,
      name: 'Cake Rusk Premium',
      description: 'Crispy double-baked cake rusks, perfect with chai',
      price: 'Rs. 650',
      weight: 'Per Kg',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
      badge: 'Popular',
    },
    {
      id: 3,
      name: 'Baqarkhani',
      description: 'Flaky layered sweet bread, a Lahori specialty',
      price: 'Rs. 450',
      weight: 'Per Dozen',
      image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400&h=300&fit=crop',
      badge: 'Traditional',
    },
    {
      id: 4,
      name: 'French Heart Biscuits',
      description: 'Buttery heart-shaped puff pastry with sugar glaze',
      price: 'Rs. 750',
      weight: 'Per Kg',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop',
      badge: 'New',
    },
    {
      id: 5,
      name: 'Chana Biscuits',
      description: 'Crunchy gram flour cookies with traditional spices',
      price: 'Rs. 550',
      weight: 'Per Kg',
      image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400&h=300&fit=crop',
      badge: 'Classic',
    },
    {
      id: 6,
      name: 'Makhan Toffee',
      description: 'Rich butter toffee that melts in your mouth',
      price: 'Rs. 900',
      weight: 'Per Kg',
      image: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?w=400&h=300&fit=crop',
      badge: 'Premium',
    },
  ]

  const getBadgeColor = (badge) => {
    const colors = {
      'Best Seller': 'bg-red-500',
      'Popular': 'bg-blue-500',
      'Traditional': 'bg-green-600',
      'New': 'bg-purple-500',
      'Classic': 'bg-amber-600',
      'Premium': 'bg-amber-500',
    }
    return colors[badge] || 'bg-gray-500'
  }

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-lg">Our Menu</span>
          <h2 className="section-title mt-2 font-playfair">
            Delicious <span className="gradient-text">Treats</span>
          </h2>
          <p className="section-subtitle mt-4">
            Discover our handcrafted selection of traditional baked goods,
            made fresh daily with the finest ingredients.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <span
                  className={`absolute top-4 left-4 ${getBadgeColor(
                    product.badge
                  )} text-white text-xs font-bold px-3 py-1 rounded-full`}
                >
                  {product.badge}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-amber-600">
                      {product.price}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">
                      {product.weight}
                    </span>
                  </div>
                  <button className="bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-secondary">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  )
}

export default Products
