import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-image.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const Home = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Beach Sunset Tee",
      price: 32,
      image: product1,
      description: "Soft cotton blend with dreamy sunset vibes"
    },
    {
      id: "2", 
      name: "Ocean Wave Hoodie",
      price: 68,
      image: product2,
      description: "Cozy fleece perfect for beach evenings"
    },
    {
      id: "3",
      name: "Coastal Breeze Shorts",
      price: 42,
      image: product3,
      description: "Lightweight and perfect for summer adventures"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-beach opacity-90" />
        <img
          src={heroImage}
          alt="Himbo streetwear collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="heading-hero mb-6">
            Be Bold.<br />Be You.<br />Be Himbo.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Playful queer streetwear that celebrates authenticity with a beachy, confident vibe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero">
              Shop Collection
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button className="btn-secondary">
              Our Story
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-display mb-4">Featured Collection</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our latest pieces designed for those who live authentically and dress boldly.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 overflow-x-auto">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="btn-hero">
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 px-4 bg-gradient-ocean">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="card-beach text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Inclusive Design</h3>
              <p className="text-white/80">
                Created for everyone, celebrating diversity and authentic self-expression in every stitch.
              </p>
            </div>
            
            <div className="card-beach text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Sustainable Materials</h3>
              <p className="text-white/80">
                Eco-friendly fabrics and ethical production because we care about our planet's future.
              </p>
            </div>
            
            <div className="card-beach text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Beach Vibes</h3>
              <p className="text-white/80">
                Inspired by coastal living and the freedom that comes with salt air and sunny days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-section mb-4">Stay in the Loop</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the latest drops, exclusive offers, and beach vibes straight to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-full border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button className="btn-hero">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;