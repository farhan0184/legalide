import Image from "next/image";
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
import img from '../public/images/intro1.png'
import img1 from '../public/images/intro2.png'
import img2 from '../public/images/intro3.png'
export default function Intro(){
    return(
        
        <>
            <div className={`text-center w-[60%] mx-auto text-white`}>
                    <h1 className={`text-5xl`}>Who We Are</h1>
                    <p className={` mt-5`}>Problems trying to resolve the conflict between the two major realms <span className={`block`}>of Classical physics: Newtonian mechanics </span> </p>
            </div>

            <div className={`md:flex mt-32 text-white`}>
                <div className={`flex-1 w-full`}>
                    <ReactPlayer 
                        className={`relative `}
                        light={<Image  src={img} alt='Thumbnail' />} 
                        config={{
                            youtube: {
                            playerVars: { showinfo: 1 }
                            },
                            
                        }}
                        volume= '1' 
                        url='https://www.youtube.com/watch?v=oTR8BDFcT3o' 
                        
                        width='100%'
                        height='100%'
                        
                    />   
                    

                </div>
                <div className={`md:pl-28 flex-1`}>
                    <h1  className={`text-5xl mb-5`}>Most trusted in our field</h1>
                    <p>Most calendars are designed for teams. Slate 
                        is designed for freelancers who want a 
                        simple way to plan their schedule.</p>
                    <div className="mt-8">
                        <div className={`flex mb-5`}>
                            <Image
                                src={img1}
                                alt="victor 6"
                                className={`h-[25px] mt-1`}
                            />
                            <div className="pl-5">
                                <h1 className="font-bold">the quick fox jumps over the lazy dog</h1>
                                <h1 className="font-bold">Things on a very small scale ...</h1>
                            </div>
                        </div>
                        <div className="flex"> 
                        <Image
                                src={img2}
                                alt="victor 6"
                                className={`h-[25px] mt-1`}
                            />
                            <div className="pl-5">
                                <h1 className="font-bold">the quick fox jumps over the lazy dog</h1>
                                <h1 className="font-bold">Things on a very small scale ...</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
            
    )
}