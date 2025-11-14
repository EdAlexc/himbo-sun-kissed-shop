import { Package, RefreshCw, Mail, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CustomerService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-beach bg-clip-text text-transparent">
            Customer Service & Returns
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help! Find answers to common questions or reach out to our team.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="card-hover">
              <CardHeader>
                <Mail className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Email Us</CardTitle>
                <CardDescription>We'll respond within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="mailto:support@himbo.com" className="text-primary hover:underline">
                  support@himbo.com
                </a>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Phone className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Call Us</CardTitle>
                <CardDescription>Mon-Fri, 9am-5pm PST</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="tel:+1234567890" className="text-primary hover:underline">
                  (123) 456-7890
                </a>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <MessageCircle className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Available during business hours</CardDescription>
              </CardHeader>
              <CardContent>
                <button className="text-primary hover:underline">
                  Start Chat
                </button>
              </CardContent>
            </Card>
          </div>

          {/* Return Tracking */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <RefreshCw className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle className="text-2xl">Track Your Return</CardTitle>
                  <CardDescription>Monitor the status of your return</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-2">
                  No returns in process. If this is a mistake please call or email us to verify on the potential issue(s).
                </p>
              </div>
              
              {/* Process visualization (shown when there's an active return) */}
              <div className="hidden">
                <div className="flex justify-between items-center max-w-4xl mx-auto">
                  {[
                    { label: "Request Return", icon: Mail },
                    { label: "Pack & Ship", icon: Package },
                    { label: "Quality Check", icon: CheckCircle2 },
                    { label: "Refund Processed", icon: CheckCircle2 }
                  ].map((step, index) => (
                    <div key={index} className="flex flex-col items-center flex-1 relative">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-sm text-center font-medium">{step.label}</span>
                      {index < 3 && (
                        <div className="absolute top-6 left-1/2 w-full h-0.5 bg-border -z-10" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Returns Policy */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <RefreshCw className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle className="text-2xl">Returns & Exchanges</CardTitle>
                  <CardDescription>Easy 30-day returns</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Return Window</h3>
                <p className="text-muted-foreground">
                  You have 30 days from the date of delivery to return your item for a full refund or exchange.
                  Items must be unworn, unwashed, and in original condition with all tags attached.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">How to Return</h3>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Email us at returns@himbo.com with your order number</li>
                  <li>We'll send you a prepaid return label within 24 hours</li>
                  <li>Pack your item securely with the original packaging</li>
                  <li>Drop off at any postal location</li>
                  <li>Refund processed within 5-7 business days after we receive your return</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Exchange Policy</h3>
                <p className="text-muted-foreground">
                  Need a different size or color? We offer free exchanges! Follow the same return process
                  and let us know what you'd like instead.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Info */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Package className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle className="text-2xl">Shipping Information</CardTitle>
                  <CardDescription>Fast & reliable delivery</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Shipping Options</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Standard Shipping:</strong> 5-7 business days - $5.99</li>
                  <li>• <strong>Express Shipping:</strong> 2-3 business days - $14.99</li>
                  <li>• <strong>Overnight:</strong> 1 business day - $24.99</li>
                  <li>• <strong>Free Shipping:</strong> On orders over $75</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">International Shipping</h3>
                <p className="text-muted-foreground">
                  We currently ship to the US, Canada, UK, and Australia. International shipping times
                  vary by location (typically 7-14 business days). Customs fees may apply.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CustomerService;
