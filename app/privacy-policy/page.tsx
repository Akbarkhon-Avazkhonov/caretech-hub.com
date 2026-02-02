'use client'

import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted to-background">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: February 2026</p>

          <div className="space-y-8">
            <Card className="p-8 border-border">
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Caretech Hub ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </Card>

            <Card className="p-8 border-border">
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-bold text-foreground mb-2">Personal Information:</h3>
                  <p>When you create an account, make a purchase, or contact us, we collect information such as your name, email address, phone number, shipping address, and payment information.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Device Information:</h3>
                  <p>We automatically collect information about your device when you visit our site, including IP address, browser type, operating system, and pages visited.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-border">
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. How We Use Your Information</h2>
              <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                <li>To process and fulfill your orders</li>
                <li>To communicate with you about your account and transactions</li>
                <li>To send you marketing and promotional materials (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To prevent fraud and ensure security</li>
              </ul>
            </Card>

            <Card className="p-8 border-border">
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </Card>

            <Card className="p-8 border-border">
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to access, correct, and delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, please contact us at privacy@caretech-hub.com.
              </p>
            </Card>

            <Card className="p-8 border-border">
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:<br />
                <strong>Email:</strong> privacy@caretech-hub.com<br />
                <strong>Address:</strong> 1770 Windy Ridge Road, Fort Wayne, IN 46805<br />
                <strong>Phone:</strong> +1 (260) 572-5662
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
