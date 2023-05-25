import Link from "next/link";
import { Bars3CenterLeftIcon, XMarkIcon} from '@heroicons/react/24/solid'
import { useState } from "react";
const routes = [
  {id:1, name:'Home', link:''},
  {id:2, name:'Product', link:''},
  {id:3, name:'Pricing', link:''},
  {id:4, name:'Contact', link:''},
  // {id:5, name:'search', link:''},
  // {id:6, name:'shopping', link:''},
]
export default function Navigation(){
  const [open,setOpen] = useState(false)
    return(
        <nav className={`z-50 w-full md:w-4/5 mx-0 md:mx-auto text-white`}>
             <div onClick={() => setOpen(!open)} className='md:hidden flex justify-end mr-10 z-10'>
                {open ? <XMarkIcon className="h-8 w-8"></XMarkIcon> :<Bars3CenterLeftIcon className="h-8 w-8"></Bars3CenterLeftIcon>}
            </div>
            <div className={`md:flex md:justify-between  md:h-24 md:items-center md:pt-10 mt-[-32px]`}> 
                <h1 className='z-50 text-3xl md:text-center ml-10 md:ml-0'>Legalide</h1>
                <div className={``}>
                    <ul className={`flex text-2xl md:static absolute w-full duration-1000 ease-in ${open ? '-z-50 top-[0px]':'-z-50 top-[-520px]'} md:bg-inherit md:h-0 h-96 md:flex-row flex-col md:justify-normal justify-center items-center  bg-[#252b42]  order-1 pb-5 md:pb-0 md:pt-0 rounded-b-xl`}>
                        {
                            routes.map(route=> 
                             
                              
                              <li className='text-center md:mt-0 mt-5'>
                                <a className='pr-5 md:py-0 py-5' href={route.link}>{route.name}</a>
                              </li>  
                                
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}