const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background with amber glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #fef3c7 100%)
          `,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=700&fit=crop"
                alt="Traditional Bakery"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-200 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-100 rounded-full -z-10"></div>

            {/* Experience Badge */}
            <div className="absolute bottom-8 -right-4 bg-white rounded-2xl shadow-xl p-6 z-20">
              <div className="text-center">
                <span className="text-5xl font-bold text-amber-600">99+</span>
                <p className="text-gray-600 font-medium mt-1">Years of</p>
                <p className="text-gray-800 font-bold">Excellence</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <span className="text-amber-600 font-semibold text-lg">Our Story</span>
            <h2 className="section-title mt-2 font-playfair">
              A Legacy of{' '}
              <span className="gradient-text">Traditional</span> Baking
            </h2>

            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              Founded in 1925 in the heart of Lahore's historic Mochi Gate area,
              our bakery has been serving authentic traditional baked goods for
              nearly a century. What started as a small family shop has grown
              into a beloved institution, known for our signature Nan Khatai.
            </p>

            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              Our recipes have been passed down through four generations,
              maintaining the same authentic taste that our customers have loved
              for decades. We use only the finest ingredients - pure desi ghee,
              premium flour, and fresh almonds.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">100% Natural</h4>
                  <p className="text-gray-600 text-sm">No preservatives added</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Fresh Daily</h4>
                  <p className="text-gray-600 text-sm">Baked every morning</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Made with Love</h4>
                  <p className="text-gray-600 text-sm">Family recipes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Nationwide</h4>
                  <p className="text-gray-600 text-sm">Delivery available</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn-primary inline-block mt-8">
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
