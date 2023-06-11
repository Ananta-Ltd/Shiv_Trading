import './globals.css'
import { Roboto } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const roboto = Roboto({ 
  subsets: ['latin'] , 
  weight: ['100','300','500','700']
})

export const metadata = {
  title: 'Shiv trading | Nepal',
  description: 'Visit Nepal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
