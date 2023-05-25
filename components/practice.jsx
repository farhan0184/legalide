import Image from "next/image";
import img1 from '/public/images/cover.png'
import img2 from '/public/images/cover (1).png'
import img3 from '/public/images/media.png'
import img4 from '/public/images/media (1).png'


const data=[
    {
        id:1,
        title:'Frauds or Mislead',
        desc: 'Newton thought that light was made up of particles, but then it was discovered',
        img: img1
    },
    {
        id:2,
        title:'Bailes & Warrants',
        desc: '“Quantum mechanics” is the description of the behaviour of matter',
        img: img2
    },
    {
        id:3,
        title:'Federal Drug Crimes',
        desc: 'They describe a universe consisting of bodies moving',
        img: img3
    },
    {
        id:4,
        title:'Traffic Related Crimes',
        desc: 'They finally obtained a consistent description of the behaviour',
        img: img4
    },
]

export default function Practice(){
    return (
        <>
            <div className={`text-center w-[60%] mx-auto text-white mt-60`}>
                <h1 className={`text-5xl`}>Practice Advice</h1>
                <p className={` mt-5`}>Problems trying to resolve the conflict between <span className={`block`}>the two major realms of Classical physics: Newtonian mechanics</span> </p>
            </div>
            <div className={`md:flex gap-10 mt-16 mb-44`}>
                {
                    data.map(item=>
                        <div key={item.id} className="bg-white md:w-[25%] mt-10 flex flex-col justify-between border-none">
                            <header className={`p-[35px]`}>
                                <h1 className={`text-2xl font-[Martel] mb-6 text-[#252B42]`}>{item.title}</h1>
                                <p className={`text-[#737373] font-[Open Sans]`}>{item.desc}</p>
                            </header>
                            <footer>
                                <Image
                                    className="w-screen h-[138px]"
                                    src={item.img}
                                    alt="Frauds or Mislead"
                                    
                                />
                            </footer>
                        </div>    
                    )
                }
                
            </div>
        </>        
    )
}