const Marquee = () => {
  const announcements = [
    '🚚 Free Delivery on Orders Above Rs. 2000!',
    '🎉 Nationwide Delivery Available!',
    '🎁 Buy 5kg, Get 500g FREE!',
    '⭐ Premium Quality Since 1925',
    '📞 Order Now: +92 300 1234567',
  ]

  return (
    <div className="bg-amber-500 py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...announcements, ...announcements].map((text, index) => (
          <span
            key={index}
            className="text-white font-semibold text-lg mx-12 inline-block"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
