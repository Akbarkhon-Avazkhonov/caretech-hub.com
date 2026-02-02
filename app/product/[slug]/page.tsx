'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Navigation } from '@/components/navigation'
import { ArrowLeft, ExternalLink, Star, Check, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const allProducts = [
  { id: 1, slug: 'smart-baby-monitor-pro', name: 'Smart Baby Monitor Pro', price: '$199', rating: 4.8, badge: 'Top Rated', image: '/products/monitor.jpg', category: 'monitors', amazonUrl: 'https://amazon.com/s?k=smart+baby+monitor+pro', description: 'Advanced AI-powered baby monitor with real-time alerts and crystal-clear HD video quality. Features night vision, two-way talk, temperature monitoring, and seamless smart home integration.' },
  { id: 2, slug: 'night-vision-monitor', name: 'Night Vision Monitor', price: '$149', rating: 4.6, badge: 'Best Seller', image: '/products/night-vision-monitor.jpg', category: 'monitors', amazonUrl: 'https://amazon.com/s?k=night+vision+baby+monitor', description: 'Professional night vision baby monitor with infrared technology. Perfect for dark nurseries with crystal-clear black and white imaging.' },
  { id: 3, slug: 'portable-travel-monitor', name: 'Portable Travel Monitor', price: '$129', rating: 4.5, badge: 'New', image: '/products/portable-monitor.jpg', category: 'monitors', amazonUrl: 'https://amazon.com/s?k=portable+travel+baby+monitor', description: 'Compact and lightweight baby monitor designed for travel. Easy to set up anywhere with excellent battery life.' },
  { id: 4, slug: 'hd-dual-camera-monitor', name: 'HD Dual Camera Monitor', price: '$249', rating: 4.9, badge: 'Premium', image: '/products/dual-camera-monitor.jpg', category: 'monitors', amazonUrl: 'https://amazon.com/s?k=hd+dual+camera+baby+monitor', description: 'Premium dual camera system for complete nursery coverage. 1080p resolution with panoramic view capability.' },
  { id: 5, slug: 'hospital-grade-sterilizer', name: 'Hospital Grade Sterilizer', price: '$179', rating: 4.7, badge: 'Top Rated', image: '/products/sterilizer.jpg', category: 'sterilizers', amazonUrl: 'https://amazon.com/s?k=hospital+grade+sterilizer', description: 'Professional UV-C sterilizer used in hospitals. Eliminates 99.9% of bacteria and viruses in minutes.' },
  { id: 6, slug: 'uv-sterilizer-box', name: 'UV Sterilizer Box', price: '$89', rating: 4.4, badge: 'Compact', image: '/public/products/uv-box-sterilizer.jpg', category: 'sterilizers', amazonUrl: 'https://amazon.com/s?k=uv+sterilizer+box', description: 'Compact UV sterilizer perfect for small spaces. Ideal for quick sterilization of pacifiers and small items.' },
  { id: 7, slug: 'steam-sterilizer-pro', name: 'Steam Sterilizer Pro', price: '$159', rating: 4.8, badge: 'Fast', image: '/public/products/steam-sterilizer.jpg', category: 'sterilizers', amazonUrl: 'https://amazon.com/s?k=steam+sterilizer', description: 'High-capacity steam sterilizer that handles multiple bottles at once. Fast cycle time of just 8 minutes.' },
  { id: 8, slug: 'portable-uv-pen', name: 'Portable UV Pen', price: '$49', rating: 4.3, badge: 'Travel', image: '/public/products/uv-pen.jpg', category: 'sterilizers', amazonUrl: 'https://amazon.com/s?k=portable+uv+pen+sterilizer', description: 'Handheld UV sterilizer pen for on-the-go sanitization. Perfect for travel and outdoor use.' },
  { id: 9, slug: 'smart-bottle-warmer', name: 'Smart Bottle Warmer', price: '$69', rating: 4.6, badge: 'Smart', image: '/products/warmer.jpg', category: 'warmers', amazonUrl: 'https://amazon.com/s?k=smart+bottle+warmer', description: 'Intelligent bottle warmer with precise temperature control. App-connected for remote monitoring.' },
  { id: 10, slug: 'fast-heat-warmer', name: 'Fast Heat Warmer', price: '$59', rating: 4.5, badge: 'Quick', image: '/public/products/fast-warmer.jpg', category: 'warmers', amazonUrl: 'https://amazon.com/s?k=fast+bottle+warmer', description: 'Rapid heating bottle warmer that reaches optimal temperature in under 2 minutes.' },
  { id: 11, slug: 'multi-function-warmer', name: 'Multi-Function Warmer', price: '$99', rating: 4.7, badge: 'Versatile', image: '/public/products/multi-warmer.jpg', category: 'warmers', amazonUrl: 'https://amazon.com/s?k=multi+function+bottle+warmer', description: 'Multi-purpose warmer for bottles, baby food, and breast milk. Gentle warming technology.' },
  { id: 12, slug: 'gentle-pulse-warmer', name: 'Gentle Pulse Warmer', price: '$79', rating: 4.4, badge: 'Gentle', image: '/public/products/gentle-warmer.jpg', category: 'warmers', amazonUrl: 'https://amazon.com/s?k=gentle+pulse+bottle+warmer', description: 'Pulse warming technology that heats evenly without hot spots. Preserves nutrients in breast milk.' },
  { id: 13, slug: 'premium-diaper-bag', name: 'Premium Diaper Bag', price: '$129', rating: 4.7, badge: 'Stylish', image: '/products/diaper-bag.jpg', category: 'bags', amazonUrl: 'https://amazon.com/s?k=premium+diaper+bag', description: 'Luxury diaper bag with smart compartments and elegant design. Perfect for style-conscious parents.' },
  { id: 14, slug: 'smart-organize-bag', name: 'Smart Organize Bag', price: '$99', rating: 4.6, badge: 'Organized', image: '/public/products/smart-bag.jpg', category: 'bags', amazonUrl: 'https://amazon.com/s?k=smart+diaper+bag', description: 'Intelligently designed bag with dedicated pockets for every essential. Maximum organization.' },
  { id: 15, slug: 'travel-essential-set', name: 'Travel Essential Set', price: '$89', rating: 4.5, badge: 'Complete', image: '/public/products/travel-bag.jpg', category: 'bags', amazonUrl: 'https://amazon.com/s?k=travel+diaper+bag+set', description: 'Complete travel set including diaper bag and accessories. Everything you need on the go.' },
  { id: 16, slug: 'luxury-designer-bag', name: 'Luxury Designer Bag', price: '$249', rating: 4.8, badge: 'Designer', image: '/public/products/designer-bag.jpg', category: 'bags', amazonUrl: 'https://amazon.com/s?k=luxury+designer+diaper+bag', description: 'High-end designer diaper bag from a luxury brand. Premium materials and impeccable craftsmanship.' },
  { id: 17, slug: 'digital-thermometer', name: 'Digital Thermometer', price: '$29', rating: 4.8, badge: 'Accurate', image: '/public/products/thermometer.jpg', category: 'accessories', amazonUrl: 'https://amazon.com/s?k=digital+baby+thermometer', description: 'Fast and accurate digital thermometer with LED display. Clinically tested and certified.' },
  { id: 18, slug: 'smart-nightlight', name: 'Smart Nightlight', price: '$39', rating: 4.6, badge: 'Soothing', image: '/public/products/nightlight.jpg', category: 'accessories', amazonUrl: 'https://amazon.com/s?k=smart+baby+nightlight', description: 'Smart LED nightlight with color options and adjustable brightness. App-controlled.' },
  { id: 19, slug: 'sleep-sound-machine', name: 'Sleep Sound Machine', price: '$59', rating: 4.7, badge: 'Relaxing', image: '/public/products/sound-machine.jpg', category: 'accessories', amazonUrl: 'https://amazon.com/s?k=baby+sleep+sound+machine', description: 'White noise machine with 20+ soothing sounds. Helps babies sleep better and longer.' },
  { id: 20, slug: 'safety-monitor-clips', name: 'Safety Monitor Clips', price: '$19', rating: 4.4, badge: 'Essential', image: '/public/products/monitor-clips.jpg', category: 'accessories', amazonUrl: 'https://amazon.com/s?k=baby+monitor+clips', description: 'Secure clips for attaching monitors to cribs. Universal compatibility with most brands.' },
]

export default function ProductPage() {
  const params = useParams()
  const slug = params.slug as string

  const product = allProducts.find(p => p.slug === slug)

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto">
          <Link href="/products" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Products</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden">
                <img 
                  src={product.image || '/placeholder.svg'}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                    {product.badge}
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-secondary text-secondary'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-foreground">{product.rating}</span>
                <span className="text-muted-foreground">(127 reviews)</span>
              </div>

              {/* Price */}
              

              {/* Description */}
              <p className="text-foreground text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-8 space-y-3">
                <h3 className="font-semibold text-foreground">Key Features:</h3>
                <div className="space-y-2">
                  {['Premium quality materials', 'Smart technology integration', '24/7 customer support', 'Satisfaction guaranteed'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Buy on Amazon
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12">Related Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts
              .filter(p => p.category === product.category && p.slug !== product.slug)
              .slice(0, 4)
              .map(relProduct => (
                <Link key={relProduct.id} href={`/product/${relProduct.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer bg-card border-border hover:border-primary/50">
                    <div className="relative h-40 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden">
                      <img 
                        src={relProduct.image || '/placeholder.svg'}
                        alt={relProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2 line-clamp-2">{relProduct.name}</h4>
                      
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
