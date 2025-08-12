import { Heart, Users, Waves } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="heading-display mb-6">Our Story</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Born from a love of beach culture and queer authenticity, Himbo celebrates 
            the confident, playful spirit that lives in all of us.
          </p>
        </div>

        {/* Main Story */}
        <div className="prose max-w-none mb-16">
          <div className="bg-gradient-sunset rounded-3xl p-8 md:p-12 text-white mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Where Authenticity Meets Style
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-white/90">
              Himbo started as a simple idea: what if streetwear could be as free and 
              expressive as a perfect beach day? What if clothing could celebrate 
              confidence, playfulness, and authentic self-expression without compromise?
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              Our founder, inspired by the inclusive energy of coastal communities and 
              the bold spirit of queer culture, set out to create clothing that feels 
              as good as it looks. Every piece tells a story of freedom, acceptance, 
              and the joy of being exactly who you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="heading-section mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create beautiful, comfortable streetwear that celebrates diversity, 
                authenticity, and the carefree spirit of beach culture. We believe 
                fashion should be fun, inclusive, and sustainable.
              </p>
            </div>
            <div>
              <h3 className="heading-section mb-4">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every design choice reflects our commitment to inclusivity, sustainability, 
                and quality. We work with ethical manufacturers and use eco-friendly 
                materials because our planet deserves as much love as our community.
              </p>
            </div>
          </div>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-beach rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Made with Love</h3>
            <p className="text-muted-foreground">
              Every piece is crafted with care, attention to detail, and genuine 
              love for our community and craft.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community First</h3>
            <p className="text-muted-foreground">
              We're more than a brand - we're a community celebrating diversity, 
              acceptance, and authentic self-expression.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
              <Waves className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Beach Inspired</h3>
            <p className="text-muted-foreground">
              Our designs capture the freedom, warmth, and laid-back confidence 
              of coastal living and beach culture.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-beach rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join the Himbo Family
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Ready to express your authentic self with clothing that celebrates 
            who you are? Welcome to a community where everyone belongs.
          </p>
          <button className="btn-hero bg-white text-primary hover:bg-white/90">
            Shop Our Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;