const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Khan',
      location: 'Karachi',
      rating: 5,
      text: "The best Nan Khatai I've ever tasted! Reminds me of my grandmother's recipe. Will definitely order again.",
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Fatima Ali',
      location: 'Islamabad',
      rating: 5,
      text: 'Amazing quality and fast delivery. The cake rusks are perfectly crispy. My whole family loved them!',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Hassan Malik',
      location: 'Lahore',
      rating: 5,
      text: 'Been ordering from them for years. Consistent quality every single time. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
  ]

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-amber-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-lg">Testimonials</span>
          <h2 className="section-title mt-2 font-playfair">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="section-subtitle mt-4">
            Don't just take our word for it - hear from our satisfied customers
            across Pakistan.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg border border-amber-100 card-hover"
            >
              {/* Quote Icon */}
              <div className="text-amber-300 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">{renderStars(testimonial.rating)}</div>

              {/* Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-300"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">Trusted by thousands of happy customers</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-amber-200 border-2 border-white flex items-center justify-center text-amber-700 font-bold text-sm"
                  >
                    {i}K
                  </div>
                ))}
              </div>
              <span className="text-gray-700 font-semibold ml-2">50,000+ Orders</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">{renderStars(5)}</div>
              <span className="text-gray-700 font-semibold">4.9 Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
