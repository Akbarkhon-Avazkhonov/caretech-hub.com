'use client'

import Link from "next/link"

import { useState } from "react"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ShoppingCart, ChevronRight } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Products } from '@/components/products'

const products = [
  {
    id: 1,
    name: 'AI Smart Monitor Pro',
    category: 'Video Monitors',
    price: '$299',
    image: '/products/ai-smart-monitor-pro.jpg',
    badge: 'AI Powered',
    badgeColor: 'bg-accent',
    description: 'Advanced temperature tracking with AI analysis',
    inStock: true,
  },
  {
    id: 2,
    name: 'UltraSteam Pro X',
    category: 'Sterilizers',
    price: '$199',
    image: '/products/ultrasteam-pro-x.jpg',
    badge: 'Hospital Grade',
    badgeColor: 'bg-primary',
    description: 'Hospital-grade sterilization in 8 minutes',
    inStock: true,
  },
  {
    id: 3,
    name: 'WarmFlow Smart Warmer',
    category: 'Bottle Warmers',
    price: '$79',
    image: '/products/warmflow-smart-warmer.jpg',
    badge: 'Quick Heat',
    badgeColor: 'bg-secondary',
    description: 'Precise temperature control in seconds',
    inStock: true,
  },
  {
    id: 4,
    name: 'ParentEssence Bag',
    category: 'Diaper Bags',
    price: '$129',
    image: '/products/parentessence-bag.jpg',
    badge: 'Premium',
    badgeColor: 'bg-primary',
    description: 'Tech-integrated premium diaper bag',
    inStock: false,
  },
]

const features = [
  {
    icon: '🛡️',
    title: 'Safety First',
    description: 'Hospital-grade sterilization standards for every product',
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    description: 'Smart monitoring and predictive alerts for peace of mind',
  },
  {
    icon: '⚡',
    title: 'Quick & Efficient',
    description: 'Advanced technology designed for busy parents',
  },
  {
    icon: '📱',
    title: 'Connected Home',
    description: 'Seamless integration with your smart home ecosystem',
  },
]

const categories = [
  {
    name: 'Monitors',
    color: 'bg-primary',
  },
  {
    name: 'Sterilizers',
    color: 'bg-secondary',
  },
  {
    name: 'Warmers',
    color: 'bg-accent',
  },
  {
    name: 'Bags',
    color: 'bg-primary',
  },
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Monitors')

  const filteredProducts = products.filter(p => p.category.includes(selectedCategory))

  return (
    <div className="min-h-screen bg-background">

      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-pretty leading-tight mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Smart Care.
              </span>
              <br />
              Simple Love.
            </h1>
            <p className="text-lg text-muted-foreground mb-2 font-medium">
              The High-Tech Heart of Parenting
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Curated safety and care solutions for the modern family. From AI-powered monitors to
              hospital-grade sterilization—we power your peace of mind.
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 backdrop-blur border border-primary/30 flex items-center justify-center overflow-hidden">
            <img 
              src="/ai-nursery-monitor.jpg" 
              alt="AI-Powered Nursery Monitor" 
              className="w-full h-full object-cover"
            />
            {/* Glassmorphism accent */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Category Pills Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-background sticky top-16 z-40 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.name
                    ? `${cat.color} text-white`
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Curated For Modern Families</h2>
            <p className="text-muted-foreground text-lg">
              Handpicked essentials that combine safety, technology, and design
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover:shadow-xl transition-all border-border/50 hover:border-primary/50 bg-card hover:bg-card/50"
              >
                <div className="relative h-40 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image || "/placeholder.svg"} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
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

                  
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <Products />

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why CareHub?</h2>
            <p className="text-muted-foreground text-lg">
              Every product is selected for quality, safety, and innovation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="border-border/50 hover:border-accent/50 transition-all hover:shadow-lg bg-card"
              >
                <div className="p-6">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-t border-primary/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Trusted by 50,000+ Families</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            From pediatricians to tech innovators, we&apos;re the choice for parents who demand the best
          </p>

          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">30+</div>
              <p className="text-muted-foreground">Award-Winning Products</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <p className="text-muted-foreground">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-3xl border border-primary/30 p-12 text-center backdrop-blur">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Upgrade Your Nursery?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Join thousands of modern parents who trust CareHub for their baby&apos;s care
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-secondary to-primary hover:opacity-90 text-white rounded-full font-bold"
          >
            Start Shopping <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-4 gap-8 mb-8">
            
            
            
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <Link href="/privacy-policy" className="hover:opacity-100 transition-opacity">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:opacity-100 transition-opacity">
                    Terms of Service
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8">
            <div className="grid sm:grid-cols-2 gap-8 mb-8 text-sm opacity-75">
              <p>As an Amazon Associate, we earn from qualifying purchases.</p>
              <p className="text-right sm:text-left">© 2024 Caretech Hub. All rights reserved. Made with ❤️ for modern families.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
