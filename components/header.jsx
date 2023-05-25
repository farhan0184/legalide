import Image from 'next/image'

import img from '/public/images/cover (2).png'
import img1 from '/public/images/agent-v 1.png'
import Navigation from './navigation'
export default function Header(){
    return(
        <div className=" relative sm:h-[100vh] h-[143vh]">
          <div className="absolute inset-0 bg-black/40 ">
                  <Image
                      className={`mix-blend-overlay`}
                      src={img}
                      alt="background image"
                      fill
                  />
          </div>
          <div className={`relative z-50  mx-auto py-4`}>
            <Navigation></Navigation>
          </div>
          <div className={`relative z-10 w-4/5  mx-auto py-4`}>
            <section className={`md:flex  absolute md:h-[calc(100vh-52px)] w-full`}>
              <div className={`flex-1 flex md:items-center text-white`}>
                  <div className={`md:mt-0 mt-20 md:text-left text-center `}>
                    <h1 className={`text-6xl md:w-[70%] mb-8`}>LEGAL PRO SERVICES</h1>
                    <p className={`text-2xl md:mb-8 mb-10 `}>We know how large objects will act,<span className='block'> but things on a small scale.</span></p>
                    <div className={`md:flex block`}>
                    <button className={`px-6 py-3 rounded-[50px] bg-[#D0A144] sm:mr-5 mr-0 md:mb-0 mb-4`}>Get Quote Now</button>
                    <button className={`px-6 py-3 border-solid border-2 rounded-[50px]`}>Learning More</button>
                    </div>
                  </div>
              </div>
              <div className='flex-1 flex py-[60px]'>
                <Image
                    className={`w-[90%] xl:h-[100%] `}
                    src={img1}
                    alt="background image"
                    
                ></Image>
              </div>
            </section>
          </div>
          
        </div>
    )
}