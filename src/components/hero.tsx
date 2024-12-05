import { useRef, useEffect } from "react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: { x: number; y: number };

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = canvas!.height + Math.random() * 200;
        this.radius = Math.random() * 2 + 1;
        this.color = `rgba(${255}, ${Math.floor(
          Math.random() * 100 + 150
        )}, 0, ${Math.random() * 0.6 + 0.2})`;
        this.velocity = {
          x: Math.random() * 1 - 0.5,
          y: Math.random() * -1.5 - 0.5,
        };
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        if (this.y + this.radius < 0) {
          this.y = canvas!.height + Math.random() * 200;
          this.x = Math.random() * canvas!.width;
        }
        this.draw();
      }
    }

    function createParticles() {
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      if (!ctx) return;
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      particles.forEach((particle) => particle.update());
    }

    createParticles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 z-10" />
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1480444704010-31f5e7c5707c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundPosition: "center",
            backgroundSize: "cover",
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
            crafted for those who appreciate sophisticated design and superior
            quality.
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
    </>
  );
};

export default Hero;
