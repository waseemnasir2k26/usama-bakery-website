const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full relative flex items-center justify-center overflow-hidden"
    >
      {/* Amber Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #f59e0b 100%)
          `,
          backgroundSize: '100% 100%',
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200 rounded-full opacity-50 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-amber-300 rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-amber-100 rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-amber-400 rounded-full opacity-30 animate-float" style={{ animationDelay: '0.5s' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Demo Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 rounded-full px-6 py-2 mb-8 shadow-md">
          <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
          <span className="text-amber-800 font-semibold text-sm tracking-wide">
            DEMO WEBSITE FOR USAMA CHAUDHRY
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-6 font-playfair leading-tight">
          Taste the{' '}
          <span className="gradient-text">Love</span>
          <br />
          in Every Bite
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Since 1925, we've been crafting the finest traditional baked goods
          with authentic recipes passed down through generations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#products" className="btn-primary text-lg px-10 py-4">
            Explore Our Menu
          </a>
          <a href="#about" className="btn-secondary text-lg px-10 py-4">
            Our Story
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-amber-600">99+</h3>
            <p className="text-gray-600 mt-2">Years of Legacy</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-amber-600">50K+</h3>
            <p className="text-gray-600 mt-2">Happy Customers</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-amber-600">100%</h3>
            <p className="text-gray-600 mt-2">Fresh Baked</p>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 fill-white"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
