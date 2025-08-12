import { Ruler, Shirt, User } from "lucide-react";

const SizingGuide = () => {
  const sizeChart = [
    { size: "XS", chest: "32-34", waist: "26-28", hips: "34-36" },
    { size: "S", chest: "36-38", waist: "30-32", hips: "38-40" },
    { size: "M", chest: "40-42", waist: "34-36", hips: "42-44" },
    { size: "L", chest: "44-46", waist: "38-40", hips: "46-48" },
    { size: "XL", chest: "48-50", waist: "42-44", hips: "50-52" },
    { size: "XXL", chest: "52-54", waist: "46-48", hips: "54-56" },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-display mb-4">Sizing Guide</h1>
          <p className="text-lg text-muted-foreground">
            Find your perfect fit with our comprehensive sizing guide
          </p>
        </div>

        {/* How to Measure */}
        <section className="mb-16">
          <h2 className="heading-section mb-8 text-center">How to Measure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-beach text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Chest</h3>
              <p className="text-white/80">
                Measure around the fullest part of your chest, keeping the tape parallel to the floor.
              </p>
            </div>
            
            <div className="card-beach text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Ruler className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Waist</h3>
              <p className="text-white/80">
                Measure around your natural waistline, about an inch above your belly button.
              </p>
            </div>
            
            <div className="card-beach text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Shirt className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Hips</h3>
              <p className="text-white/80">
                Measure around the fullest part of your hips, keeping the tape parallel to the floor.
              </p>
            </div>
          </div>
        </section>

        {/* Size Chart */}
        <section className="mb-16">
          <h2 className="heading-section mb-8 text-center">Size Chart</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-beach">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Size</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Chest (inches)</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Waist (inches)</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Hips (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeChart.map((size, index) => (
                    <tr key={size.size} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-primary">{size.size}</td>
                      <td className="px-6 py-4">{size.chest}</td>
                      <td className="px-6 py-4">{size.waist}</td>
                      <td className="px-6 py-4">{size.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Fit Guide */}
        <section>
          <h2 className="heading-section mb-8 text-center">Fit Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">Regular Fit</h3>
              <p className="text-muted-foreground mb-4">
                Our regular fit offers a comfortable, relaxed silhouette that's perfect for everyday wear.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Relaxed through the body</li>
                <li>• Easy movement</li>
                <li>• Classic streetwear fit</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">Oversized Fit</h3>
              <p className="text-muted-foreground mb-4">
                Our oversized fit creates a trendy, laid-back look that embodies the himbo aesthetic.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Loose through the body</li>
                <li>• Drop shoulder design</li>
                <li>• Statement streetwear look</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <div className="text-center mt-16 p-8 bg-gradient-beach rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-white">Still need help?</h3>
          <p className="text-white/80 mb-6">
            Our team is here to help you find the perfect fit. Don't hesitate to reach out!
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default SizingGuide;