const Hero = () => {
  return (
    <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1480444704010-31f5e7c5707c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Ignite Your
          <span className="block bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
            Style
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover our exclusive collection of premium lighters and vapes, 
          crafted for those who appreciate sophisticated design and superior quality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-md hover:from-orange-600 hover:to-red-700 transition">
            Shop Lighters
          </button>
          <button className="px-8 py-3 bg-white/10 text-white rounded-md hover:bg-white/20 transition backdrop-blur-sm">
            Explore Vapes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;