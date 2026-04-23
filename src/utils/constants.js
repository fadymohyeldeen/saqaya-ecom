import customerIcon from '@/assets/icons/about/icon-customer.svg'
import dollarIcon from '@/assets/icons/about/icon-dollar.svg'
import moneyIcon from '@/assets/icons/about/icon-money-bag.svg'
import sellerIcon from '@/assets/icons/about/icon-sellers.svg'
import cartIcon from '@/assets/icons/header/icon-cart.svg'

// --------------- Services ---------------
export const SERVICES = [
  {
    icon: cartIcon,
    alt: 'Delivery',
    title: 'FREE AND FAST DELIVERY',
    description: 'Free delivery for all orders over $140',
    inverted: true,
  },
  {
    icon: customerIcon,
    alt: 'Customer Service',
    title: '24/7 CUSTOMER SERVICE',
    description: 'Friendly 24/7 customer support',
    inverted: false,
  },
  {
    icon: dollarIcon,
    alt: 'Money Back',
    title: 'MONEY BACK GUARANTEE',
    description: 'We return money within 30 days',
    inverted: false,
  },
]

// ------------- Sort Options -------------
export const SORT_OPTIONS = [
  { label: 'Price: Low to High', value: 'price', order: 'asc' },
  { label: 'Price: High to Low', value: 'price', order: 'desc' },
  { label: 'Rating: High to Low', value: 'rating', order: 'desc' },
  { label: 'Rating: Low to High', value: 'rating', order: 'asc' },
]

// ---------------- Stats -----------------
export const STATS = [
  { icon: sellerIcon, number: '10.5k', label: 'Sellers active our site' },
  { icon: dollarIcon, number: '33k', label: 'Monthly Product Sale' },
  { icon: customerIcon, number: '45.5k', label: 'Customer active in our site' },
  { icon: moneyIcon, number: '25k', label: 'Anual gross sales in our site' },
]

// ----------------- Team -----------------
export const TEAM = [
  {
    name: 'Jack willson',
    role: 'Founder & Chairman',
    image:
      'https://images.unsplash.com/photo-1590086782792-42dd2350140d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  },
  {
    name: 'Adam Smith',
    role: 'Managing Director',
    image:
      'https://images.unsplash.com/photo-1623184663110-89ba5b565eb6?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  },
  {
    name: 'Richard Branson',
    role: 'Product Designer',
    image:
      'https://images.unsplash.com/photo-1755140208191-ec5def51708d?q=80&w=721&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  },
]
