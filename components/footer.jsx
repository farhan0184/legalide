import Image from 'next/image'
import {f1,f2,f3,facebook,instragram,twitter,youtube} from '../public/assets/index'

const dataImage = [
    {
        id: 1,
        icon: f1,
        text: '(480) 555-0103'
    },
    {
        id: 2,
        icon: f2,
        text: '4517 Washington Ave.'
    },
    {
        id: 3,
        icon: f3,
        text: 'debra.holt@example.com'
    },
    
]
const data = [
    {
        id:1,
        title: 'Company Info',
        subject: ['About Us', 'Carrier','We are hiring','Blog']
    },
    {
        id:2,
        title: 'Legal',
        subject: ['About Us', 'Carrier','We are hiring','Blog']
    },
    {
        id:3,
        title: 'Feature',
        subject: ['Business Marketing', 'User Analytic','Live Chat','Unlimited Support']
    },
    {
        id:4,
        title: 'Resources',
        subject: ['IOS & Android', 'Watch a Demo','Customer','API']
    },
]

const socialMedia=[
    {
        id: 1,
        icon: facebook,
        text:'facebook'
    },
    {
        id: 2,
        icon: instragram,
        text:'instragram'
    },
    {
        id: 3,
        icon: twitter,
        text:'twitter'
    },
    {
        id: 4,
        icon: youtube,
        text:'youtube'
    },
]

// array element display
function myFunction(value) {
    return <p className={`mt-5`}>{value}</p>
}
export default function Footer(){
    return(
        <>
            <div className={`bg-gradient-to-l from-[#295C7A] to-[#0072B5] py-10`}>
                <div className={`text-white w-[80%] mx-auto`}>
                    
                    <section className={`md:flex justify-between w-full  md:text-left text-center`}>
                        {/* Data section */}
                        <div className={`md:flex gap-20 md:mb-0 mb-5`}>
                            {
                                data.map(item=>
                                    <div className={`md:mt-0 mt-10`}>
                                        <h1 className={`text-xl mb-5`}>{item.title}</h1>
                                        <div className={``}>
                                            {
                                                item.subject.map(myFunction)
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        {/* Image Data  */}
                        <div>
                            <h1 className={`text-xl`}>Get In Touch</h1>
                            <div className='md:block flex flex-col justify-center items-center'>
                                {
                                    dataImage.map(item=>
                                        <div key={item.id} className={`flex gap-2  mt-5 md:text-left text-center`}>
                                            <Image
                                            src={item.icon}
                                            alt={`touch ${item.id}`}
                                            width={20}
                                            height={20}
                                            />
                                            <p>{item.text}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </section>

                </div>
            </div>
            {/* last footer */}
            <div className={`bg-[#252b42]  py-5`}>
                <div className={`text-white w-[80%] mx-auto md:flex justify-between md:text-left text-center md:mt-0 mt-4`}>
                    <div>
                        <p>Made With Love By Figmaland All Right Reserved </p>
                    </div>
                    <div className={`flex justify-between md:mym-0  gap-4`}>
                        {
                            socialMedia.map(item=>
                                <Image
                                    key={item.id}
                                    src={item.icon}
                                    alt={item.text}
                                    
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}