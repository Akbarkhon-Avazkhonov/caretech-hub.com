'use client'

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

export default function ReviewsPage() {
  const reviews = [
    {
      name: 'Maria Gonzalez',
      role: 'Parent, Toronto',
      rating: 5,
      text: 'The AI-powered monitor has been a game-changer for us. We love the real-time alerts and the crystal-clear video quality. Highly recommend!',
      product: 'Smart Baby Monitor Pro'
    },
    {
      name: 'Alex Thompson',
      role: 'Parent, San Francisco',
      rating: 5,
      text: 'Best investment we made for our nursery. The sterilizer is efficient, and the smart home integration is seamless. Top-notch quality!',
      product: 'Hospital-Grade Sterilizer'
    },
    {
      name: 'Sophia Martinez',
      role: 'Parent, Madrid',
      rating: 5,
      text: 'Customer service is exceptional. The bottle warmer works perfectly, and it arrived faster than expected. Very satisfied!',
      product: 'Smart Bottle Warmer'
    },
    {
      name: 'Oliver Anderson',
      role: 'Parent, London',
      rating: 5,
      text: 'The diaper bag is so practical and stylish. All the smart compartments make organizing baby essentials so easy. Love it!',
      product: 'Smart Diaper Bag'
    },
    {
      name: 'Emma Wilson',
      role: 'Parent, Seoul',
      rating: 5,
      text: 'The accessories pack is complete and well-designed. Everything we needed and more. Great value for money!',
      product: 'Complete Accessories Kit'
    },
    {
      name: 'Ethan Murphy',
      role: 'Parent, Sydney',
      rating: 5,
      text: 'Outstanding product quality and attention to detail. The entire Caretech Hub experience has been fantastic. Definitely ordering again!',
      product: 'Smart Nursery Bundle'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Customer <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Reviews</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            See what families around the world are saying about Caretech Hub products.
          </p>
          <div className="mt-8 flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">4.9/5 (1,240+ reviews)</span>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-8 border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-foreground">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{review.text}</p>
                <p className="text-sm font-semibold text-primary">Product: {review.product}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50K+</div>
              <p className="text-muted-foreground">Happy Families</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">4.9★</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <p className="text-muted-foreground">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Caretech Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
