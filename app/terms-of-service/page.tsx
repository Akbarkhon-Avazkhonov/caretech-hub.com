'use client'

import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TermsOfService() {
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

          <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last updated: February 2026</p>

          <div className="space-y-8">
            <Card className="p-8 border-border">
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Caretech Hub website and services, you accept and agree to be bound by and comply with these Terms of Service. If you do not agree to abide by the above, please do not use this service.
              </p>
            </Card>

            <Card className="p-8 border-border">
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Caretech Hub's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </Card>

            <Card className="p-8 border-border">
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on Caretech Hub's website are provided on an 'as is' basis. Caretech Hub makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </Card>

            <Card className="p-8 border-border">
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Caretech Hub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Caretech Hub's website, even if Caretech Hub or a Caretech Hub authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </Card>

            <Card className="p-8 border-border">
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Accuracy of Materials</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on Caretech Hub's website could include technical, typographical, or photographic errors. Caretech Hub does not warrant that any of the materials on our website are accurate, complete, or current. Caretech Hub may make changes to the materials contained on our website at any time without notice.
              </p>
            </Card>

            <Card className="p-8 border-border">
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Caretech Hub has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Caretech Hub of the site. Use of any such linked website is at the user's own risk.
              </p>
            </Card>

            <Card className="p-8 border-border">
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                Caretech Hub may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </Card>

            <Card className="p-8 border-border">
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of Indiana, United States, and you irrevocably submit to the exclusive jurisdiction of the courts located in Indiana.
              </p>
            </Card>

            <Card className="p-8 border-border">
              <h2 className="text-2xl font-bold mb-4 text-foreground">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:<br />
                <strong>Email:</strong> support@caretech-hub.com<br />
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
