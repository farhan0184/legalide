import weight from '/public/images/weight.png'
import hummer from '/public/images/hummer.png'
import document from '/public/images/document.png'
import Image from 'next/image'


export default function Product(){
    
    return(
        <>
            <div className={`text-center w-[60%] mx-auto text-white mt-10`}>
                <h1 className={`text-5xl`}>Our Practice Areas</h1>
                <p className={` mt-5`}>Problems trying to resolve the conflict between <span className={`block`}>the two major realms of Classical physics: Newtonian mechanics</span> </p>
            </div>
            <div className={`md:flex md:gap-8 mt-12 w-full`}>
                <div className={`px-24  mt-8 rounded-md bg-white text-[#252B42] py-12 text-center md:w-1/3`}>
                    <Image className={'mx-auto mb-3'} src={weight} alt='Trust & Estates' width={50} height={50}/>
                    <h1>Family Law</h1>
                </div>
                <div className={`px-24  mt-8 rounded-md bg-[#295C7A] text-white py-12 text-center md:w-1/3`}>
                    <Image className={'mx-auto mb-3'} src={hummer} alt='Business Law' width={50} height={50}/>
                    <h1>Business  Law</h1>
                </div>
                <div className={`px-24  mt-8 rounded-md bg-white text-[#252B42] py-12 text-center md:w-1/3`}>
                    <Image className={'mx-auto mb-3'} src={document} alt='Trust & Estates' width={50} height={50}/>
                    <h1>Trust & Estates</h1>
                </div>
            </div>
        </>
    )
}