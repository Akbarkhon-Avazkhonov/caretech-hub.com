'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ShoppingCart, ArrowLeft, Filter } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Navigation } from '@/components/navigation'

const categoryProducts: Record<string, any[]> = {
  monitors: [
    {
      id: 1,
      name: 'AI Smart Monitor Pro',
      category: 'Video Monitors',
      price: '$299',
      image: '🎥',
      badge: 'AI Powered',
      badgeColor: 'bg-accent',
      description: 'Advanced temperature tracking with AI analysis',
      inStock: true,
    },
    {
      id: 5,
      name: 'UltraVision 4K Monitor',
      category: 'Video Monitors',
      price: '$349',
      image: '📹',
      badge: 'New',
      badgeColor: 'bg-primary',
      description: '4K clarity with night vision and two-way talk',
      inStock: true,
    },
    {
      id: 6,
      name: 'SmartSound Audio Monitor',
      category: 'Audio Monitors',
      price: '$99',
      image: '🔊',
      badge: 'Budget Friendly',
      badgeColor: 'bg-secondary',
      description: 'Crystal clear audio monitoring with white noise',
      inStock: true,
    },
  ],
  sterilizers: [
    {
      id: 2,
      name: 'UltraSteam Pro X',
      category: 'Sterilizers',
      price: '$199',
      image: '🌡️',
      badge: 'Hospital Grade',
      badgeColor: 'bg-primary',
      description: 'Hospital-grade sterilization in 8 minutes',
      inStock: true,
    },
    {
      id: 7,
      name: 'CompactSteam Portable',
      category: 'Sterilizers',
      price: '$149',
      image: '🧼',
      badge: 'Travel Friendly',
      badgeColor: 'bg-accent',
      description: 'Lightweight portable sterilizer for on-the-go',
      inStock: true,
    },
  ],
  warmers: [
    {
      id: 3,
      name: 'WarmFlow Smart Warmer',
      category: 'Bottle Warmers',
      price: '$79',
      image: '🍼',
      badge: 'Quick Heat',
      badgeColor: 'bg-secondary',
      description: 'Precise temperature control in seconds',
      inStock: true,
    },
    {
      id: 8,
      name: 'DualHeat Bottle & Food Warmer',
      category: 'Bottle Warmers',
      price: '$129',
      image: '🥣',
      badge: 'Versatile',
      badgeColor: 'bg-primary',
      description: 'Warm bottles or baby food with precision',
      inStock: true,
    },
  ],
  bags: [
    {
      id: 4,
      name: 'ParentEssence Bag',
      category: 'Diaper Bags',
      price: '$129',
      image: '👜',
      badge: 'Premium',
      badgeColor: 'bg-primary',
      description: 'Tech-integrated premium diaper bag',
      inStock: false,
    },
    {
      id: 9,
      name: 'TravelEssence Backpack',
      category: 'Diaper Bags',
      price: '$99',
      image: '🎒',
      badge: 'Popular',
      badgeColor: 'bg-accent',
      description: 'Ergonomic backpack design with smart pockets',
      inStock: true,
    },
  ],
  accessories: [
    {
      id: 10,
      name: 'SmartTemperature Thermometer',
      category: 'Accessories',
      price: '$49',
      image: '🌡️',
      badge: 'Digital',
      badgeColor: 'bg-secondary',
      description: 'Non-contact infrared thermometer',
      inStock: true,
    },
    {
      id: 11,
      name: 'Night Light Pro',
      category: 'Accessories',
      price: '$39',
      image: '💡',
      badge: 'Smart',
      badgeColor: 'bg-accent',
      description: 'Color-changing smart night light for nursery',
      inStock: true,
    },
  ],
}

const products = [
  {
    id: 1,
    name: 'AI Smart Monitor Pro',
    category: 'Video Monitors',
    price: '$299',
    image: '🎥',
    badge: 'AI Powered',
    badgeColor: 'bg-accent',
    description: 'Advanced temperature tracking with AI analysis',
    inStock: true,
  },
]

export default function CategoryPage() {
  const params = useParams()
  const categoryName = (params.name as string)?.toLowerCase() || ''
  const products = categoryProducts[categoryName] || []

  const categoryTitles: Record<string, string> = {
    monitors: 'Baby Monitors',
    sterilizers: 'Sterilizers',
    warmers: 'Bottle Warmers',
    bags: 'Diaper Bags',
    accessories: 'Accessories',
  }

  const categoryDescriptions: Record<string, string> = {
    monitors: 'Keep an eye on your little one with our advanced monitoring solutions',
    sterilizers: 'Hospital-grade sterilization for complete peace of mind',
    warmers: 'Perfectly warm bottles and food every time',
    bags: 'Stylish and functional bags for modern parents',
    accessories: 'Essential add-ons for complete baby care',
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">{categoryTitles[categoryName]}</h1>
          <p className="text-lg text-muted-foreground mb-8">{categoryDescriptions[categoryName]}</p>

          <div className="flex gap-4 flex-wrap">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10 bg-transparent">
              Sort by Price
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {products.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden hover:shadow-xl transition-all border-border/50 hover:border-primary/50 bg-card hover:bg-card/50"
                >
                  <div className="relative h-40 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
                    <div className="text-6xl group-hover:scale-110 transition-transform">
                      {product.image}
                    </div>
                    {product.inStock && (
                      <div
                        className={`absolute top-3 right-3 ${product.badgeColor} text-white text-xs px-3 py-1 rounded-full font-semibold`}
                      >
                        {product.badge}
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-bold">Out of Stock</span>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                      {product.category}
                    </p>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>

                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <button
                        className={`p-2 rounded-lg transition-colors ${
                          product.inStock
                            ? 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                            : 'bg-muted text-muted-foreground cursor-not-allowed'
                        }`}
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground mb-4">No products found in this category</p>
              <Link href="/">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm opacity-75">
          <p>© 2024 Caretech Hub. All rights reserved. Made with ❤️ for modern families.</p>
        </div>
      </footer>
    </div>
  )
}
