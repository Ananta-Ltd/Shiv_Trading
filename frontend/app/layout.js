
import './globals.css'
import { Roboto } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Provider from './components/Provider'
import { Toaster } from 'react-hot-toast'

const roboto = Roboto({ 
  subsets: ['latin'] , 
  weight: ['100','300']
})

export const metadata = {
  title: 'Shiv trading | Nepal',
  description: 'Best tiles and marbles',
  icons: "icon.png",
}

export default function RootLayout({ children }) {
  return (
    <Provider>
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        {children}
        <Toaster 
          toastOptions={{
            style: {
              marginTop:"62px",
              },
            }} 
          position='top-right'/>
        <Footer/>
      </body>
      
    </html>
    </Provider>
  )
}
