import Image from 'next/image'
import {t1,t2,t3} from '../public/assets/index'

const dummyData = [
    {
        id: 1,
        icon: t1
    },
    {
        id: 2,
        icon: t2
    },
    {
        id: 3,
        icon: t3
    },
    
]

export async function getStaticProps(){
    return{
        props:{
            productData: dummyData,
            text: 'Products are very good'
        }
    }
}

export default function Touch(){
   
    return(
        <div className={`mt-28 w-full `}>
            {/* Get In Touch */}
            <div className={`mx-6`}>
                <div className={`text-center w-[60%] mx-auto text-white mt-10`}>
                    <h1 className={`text-5xl`}>Get In Touch</h1>
                    <p className={` mt-5`}>Problems trying to resolve the conflict between <span className={`block`}>the two major realms of Classical physics: Newtonian mechanics</span> </p>
                </div>
                <div className={`md:flex items-center mt-20 w-full`}>
                    {
                        dummyData?.map(item=> <div className={`flex flex-col items-center ${item.id%2 === 0 ? 'bg-[#295C7A] h-[360px] p-16 text-white md:mt-0 mt-10 md:w-1/3 w-full': 'bg-white p-12 h-[320px] text-[#295C7A] md:mt-0 mt-10 md:w-1/3 w-full' }`}>
                            <Image
                                src={item.icon}
                                alt={`touch Image ${item.id}`}
                            />
                            <div className={`text-center font-bold my-3`}>
                                <h3>georgia.young@example.com</h3>
                                <h3>georgia.young@ple.com</h3>
                            </div>
                            <h1 className={`text-xl mb-4`}>Get Support</h1>
                            <button className={`px-4 py-2 ${item.id%2 === 0 ? 'border-[1px]  ' : ' border-[#295C7A] border-[1px]' }`}>Submit Request</button>
                        </div>
                        )
                    }
                </div>
            </div>
            
            {/* Request A Free Consultation */}

            <div className={`md:flex justify-between text-center md:text-left text-white mt-44`}>
                    <div>
                        <h1 className={`text-3xl`}>Request A Free Consultation</h1>
                        <p>the quick fox jumps over the lazy dog</p>
                    </div>
                    <div>
                    <button className="px-4 md:mt-0 mt-10 py-3 rounded-md bg-[#784F33]">Contact Us</button>
                    </div>
            </div>
        </div>
    )
}