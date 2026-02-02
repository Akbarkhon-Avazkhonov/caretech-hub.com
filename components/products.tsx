'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Star } from 'lucide-react'
import Link from 'next/link'

const categories = [
  { name: 'Monitors', color: 'bg-accent' },
  { name: 'Sterilizers', color: 'bg-secondary' },
  { name: 'Warmers', color: 'bg-primary' },
  { name: 'Bags', color: 'bg-accent' },
  { name: 'Accessories', color: 'bg-primary' },
]

const productsByCategory = {
  'monitors': [
    { id: 1, slug: 'smart-baby-monitor-pro', name: 'Smart Baby Monitor Pro', price: '$199', rating: 4.8, badge: 'Top Rated', image: '/products/monitor.jpg' },
    { id: 2, slug: 'night-vision-monitor', name: 'Night Vision Monitor', price: '$149', rating: 4.6, badge: 'Best Seller', image: '/products/night-vision-monitor.jpg' },
    { id: 3, slug: 'portable-travel-monitor', name: 'Portable Travel Monitor', price: '$129', rating: 4.5, badge: 'New', image: '/products/portable-monitor.jpg' },
    { id: 4, slug: 'hd-dual-camera-monitor', name: 'HD Dual Camera Monitor', price: '$249', rating: 4.9, badge: 'Premium', image: '/products/dual-camera-monitor.jpg' },
  ],
  'sterilizers': [
    { id: 5, slug: 'hospital-grade-sterilizer', name: 'Hospital Grade Sterilizer', price: '$179', rating: 4.7, badge: 'Top Rated', image: '/products/sterilizer.jpg' },
    { id: 6, slug: 'uv-sterilizer-box', name: 'UV Sterilizer Box', price: '$89', rating: 4.4, badge: 'Compact', image: '/products/uv-box-sterilizer.jpg' },
    { id: 7, slug: 'steam-sterilizer-pro', name: 'Steam Sterilizer Pro', price: '$159', rating: 4.8, badge: 'Fast', image: '/products/steam-sterilizer.jpg' },
    { id: 8, slug: 'portable-uv-pen', name: 'Portable UV Pen', price: '$49', rating: 4.3, badge: 'Travel', image: '/products/uv-pen.jpg' },
  ],
  'warmers': [
    { id: 9, slug: 'smart-bottle-warmer', name: 'Smart Bottle Warmer', price: '$69', rating: 4.6, badge: 'Smart', image: '/products/warmer.jpg' },
    { id: 10, slug: 'fast-heat-warmer', name: 'Fast Heat Warmer', price: '$59', rating: 4.5, badge: 'Quick', image: '/products/fast-warmer.jpg' },
    { id: 11, slug: 'multi-function-warmer', name: 'Multi-Function Warmer', price: '$99', rating: 4.7, badge: 'Versatile', image: '/products/multi-warmer.jpg' },
    { id: 12, slug: 'gentle-pulse-warmer', name: 'Gentle Pulse Warmer', price: '$79', rating: 4.4, badge: 'Gentle', image: '/products/gentle-warmer.jpg' },
  ],
  'bags': [
    { id: 13, slug: 'premium-diaper-bag', name: 'Premium Diaper Bag', price: '$129', rating: 4.7, badge: 'Stylish', image: '/products/diaper-bag.jpg' },
    { id: 14, slug: 'smart-organize-bag', name: 'Smart Organize Bag', price: '$99', rating: 4.6, badge: 'Organized', image: '/products/smart-bag.jpg' },
    { id: 15, slug: 'travel-essential-set', name: 'Travel Essential Set', price: '$89', rating: 4.5, badge: 'Complete', image: '/products/travel-bag.jpg' },
    { id: 16, slug: 'luxury-designer-bag', name: 'Luxury Designer Bag', price: '$249', rating: 4.8, badge: 'Designer', image: '/products/designer-bag.jpg' },
  ],
  'accessories': [
    { id: 17, slug: 'digital-thermometer', name: 'Digital Thermometer', price: '$29', rating: 4.8, badge: 'Accurate', image: '/products/thermometer.jpg' },
    { id: 18, slug: 'smart-nightlight', name: 'Smart Nightlight', price: '$39', rating: 4.6, badge: 'Soothing', image: '/products/nightlight.jpg' },
    { id: 19, slug: 'sleep-sound-machine', name: 'Sleep Sound Machine', price: '$59', rating: 4.7, badge: 'Relaxing', image: '/products/sound-machine.jpg' },
    { id: 20, slug: 'safety-monitor-clips', name: 'Safety Monitor Clips', price: '$19', rating: 4.4, badge: 'Essential', image: '/products/monitor-clips.jpg' },
  ],
}

export function Products() {
  return (
    null
  )
}
