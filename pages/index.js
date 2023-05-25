
import Header from '@/components/header'
import Product from '../components/product'
import Practice from '@/components/practice'
import Intro from '@/components/intro'
import Clients from '@/components/clients'
import Touch from '@/components/touch'
import Footer from '@/components/footer'
import Head from 'next/head';




export default function Home() {
  
  return (
    <div>
    <Head>
      <title>Legalide</title>
      <meta name='website' content='figma design website'></meta>
    </Head>
    <div>
      {/* header section */}
      <Header/>
      <div className={` bg-[#252b42] py-12`}>
          <div className={`w-[80%] mx-auto`}> 
            {/* product section */}
            <Product/>
            {/* practice area */}
            <Practice/>
            {/* intro section */}
            <Intro/>
            {/* Clients  logo*/}
            <Clients/>
            {/* get touch */}
            <Touch/>
            
          </div>
          
      </div>
      {/* footer section */}
      <Footer/>
    </div>
    </div>
   
  )
}
