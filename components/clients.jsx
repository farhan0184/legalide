import Image from 'next/image'
import {img1,img2,img3,img4,img5,img6} from '../public/assets/index'

const dummyData = [
    {
        id: 1,
        img: img1,
        alt: 'client1'
    },
    {
        id: 2,
        img: img2,
        alt: 'client2'
    },
    {
        id: 3,
        img: img3,
        alt: 'client3'
    },
    {
        id: 4,
        img: img4,
        alt: 'client4'
    },
    {
        id: 5,
        img: img5,
        alt: 'client5'
    },
    {
        id: 6,
        img: img6,
        alt: 'client6'
    },
]

export default function Clients(){
    
    return(
        
            
            <div className={` w-full md:mt-44 px-6 mb-16`}>
                <div className={`flex md:flex-row flex-col justify-between items-center`}>
                    {
                        dummyData.map(item =><div key={item.id}>
                            <Image
                            className='  md:mt-0 mt-20'
                            src={item.img}
                            alt={item.alt}
                            />
                        </div>)
                    }
                </div>

                <div className='md:flex items-center px-16 py-8 mt-24 bg-gradient-to-l from-[#295C7A] to-[#0072B5] text-white md:text-left text-center'>
                    <div className={`flex-1`}>
                        <h1 className={`text-3xl md:w-[60%] w-full font-[Martel]`}>Subscribe For Latest Newsletter</h1>
                    </div>
                    <div className={`flex-1 md:mt-0 mt-10`}>
                        <form action="">
                            <input className={`md:w-[75%] w-full 
                             md:rounded-s-md rounded-md px-6 py-4`} type="text" placeholder='Your Email' />
                            <button className={`px-4 py-4 md:rounded-e-md rounded-md bg-[#D0A144] md:inline block `}>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            
        
    )

}