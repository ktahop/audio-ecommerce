import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'audiophile',
  description: 'audiophile eCommerce Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
