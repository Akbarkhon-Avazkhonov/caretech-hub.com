'use client'

import React from "react"

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            We'd love to hear from you. Contact us with any questions or feedback.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="p-8 text-center border border-border hover:border-primary/50 transition-colors">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">support@caretech-hub.com</p>
            </Card>
            <Card className="p-8 text-center border border-border hover:border-primary/50 transition-colors">
              <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm">+1 (260) 572-5662</p>
            </Card>
            <Card className="p-8 text-center border border-border hover:border-primary/50 transition-colors">
              <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Address</h3>
              <p className="text-muted-foreground text-sm">1770 Windy Ridge Road<br />Fort Wayne, IN 46805<br />United States</p>
            </Card>
            <Card className="p-8 text-center border border-border hover:border-primary/50 transition-colors">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Hours</h3>
              <p className="text-muted-foreground text-sm">24/7 Support Available</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  placeholder="Subject of your message"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card className="p-6 border border-border">
              <h3 className="font-bold text-foreground mb-2">What is the warranty period?</h3>
              <p className="text-muted-foreground">All Caretech Hub products come with a 2-year manufacturer's warranty covering defects in materials and workmanship.</p>
            </Card>
            <Card className="p-6 border border-border">
              <h3 className="font-bold text-foreground mb-2">Do you offer international shipping?</h3>
              <p className="text-muted-foreground">Yes, we ship to over 50 countries worldwide. Shipping costs and times vary by location.</p>
            </Card>
            <Card className="p-6 border border-border">
              <h3 className="font-bold text-foreground mb-2">How can I track my order?</h3>
              <p className="text-muted-foreground">You'll receive a tracking number via email once your order ships. You can use this to monitor delivery status.</p>
            </Card>
            <Card className="p-6 border border-border">
              <h3 className="font-bold text-foreground mb-2">What if I have compatibility issues?</h3>
              <p className="text-muted-foreground">Our support team is available 24/7 to help troubleshoot any technical issues you may encounter.</p>
            </Card>
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
