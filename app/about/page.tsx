'use client'

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Caretech Hub</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            We're on a mission to revolutionize baby care with smart, innovative technology that gives parents peace of mind.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Caretech Hub was founded by a group of parents who understood the challenges of modern parenting. We recognized the need for reliable, smart solutions that could help families care for their babies with confidence.
            </p>
            <p>
              Since our launch, we've been committed to developing innovative products that combine cutting-edge technology with user-friendly design. Our team works tirelessly to ensure that every product meets the highest standards of safety and quality.
            </p>
            <p>
              Today, we're proud to serve thousands of families worldwide, helping them create safer, smarter nurseries for their little ones.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border border-border hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold text-foreground mb-4">Safety First</h3>
              <p className="text-muted-foreground">
                Every product is rigorously tested and certified to meet the highest safety standards for your peace of mind.
              </p>
            </Card>
            <Card className="p-8 border border-border hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold text-foreground mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously invest in research and development to bring you the latest smart technology for baby care.
              </p>
            </Card>
            <Card className="p-8 border border-border hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold text-foreground mb-4">Customer Care</h3>
              <p className="text-muted-foreground">
                Our dedicated support team is always available to help you get the most out of your Caretech Hub products.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose Us?</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <div className="flex items-center gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <span>Hospital-grade quality and safety standards</span>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <span>AI-powered features for smarter parenting</span>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <span>Expert-recommended by pediatricians</span>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <span>24/7 customer support and warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Join the Caretech Community</h2>
          <p className="text-lg text-muted-foreground mb-8">Experience smart baby care today</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Explore Products
          </Button>
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
