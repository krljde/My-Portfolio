import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillFacebook, AiFillInstagram} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Karl Jude</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40'>
       <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons'>Karl Jude</h1> 
          <ul className='flex items-center'>
            <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
            <li>
              <a href="#" className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a>
            </li>
          </ul>
        </nav>
        <div className='text-left p-10 py-10'>
          <h2 className='text-4xl py-2 text-teal-600 to-blue-50 font-medium text-left'>👋 Hi  There!</h2>
          <h3 className='text-2xl py-2 text-gray-600 md:text-xl max-w-xl text-left'><span className='text-teal-600'>I&apos;m Karl</span>,a Social Media Manager with a passion for creating engaging content. 
          Whether I&apos;m snapping photos or shooting videos, I love being hands-on in the content creation process.</h3>
          <p className='text-medium py-1 leading-8 text-gray-600 md:text-l max-w-xl text-left'>Thanks for stopping by and taking a look at my work. I hope you find something that inspires you.</p>
        </div>
        <div className='text-5xl flex justify-center gap-10 py-3 text-gray-600 animate-pulse'>
          <AiFillFacebook/>
          <AiFillInstagram/>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
          <Image src={deved} layout='fill' objectFit='cover' alt={''}/>
        </div>
       </section>
       
        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I Offer</h3>
            <p className='text-md py-1 leading-8 text-gray-300'>
              Description here
            </p>
          </div>
          <div className='lg:flex gap-10 justify-center'>
            <div  className='text-center shadow-lg p-10 round-xl my-10'>
           
              <Image className='mx-auto' src={design} alt={''} width={100} height={100}/>
              
              <h3 className='text-lg font-medium pt-8 pb-2'>My Designs</h3>
              <p className='max-w-xs mx-auto py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <h4 className='py-4 text-teal-600'>Tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Photoshop</p>
            </div>
            <div  className='text-center shadow-lg p-10 round-xl my-10'>
           
              <Image className='mx-auto' src={code} alt={''} width={100} height={100}/>
              
              <h3 className='text-lg font-medium pt-8 pb-2'>My Designs</h3>
              <p className='max-w-xs mx-auto py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <h4 className='py-4 text-teal-600'>Tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Photoshop</p>
            </div>
            <div  className='text-center shadow-lg p-10 round-xl my-10'>
           
              <Image className='mx-auto' src={consulting} alt={''} width={100} height={100}/>
              
              <h3 className='text-lg font-medium pt-8 pb-2'>My Designs</h3>
              <p className='max-w-xs mx-auto py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <h4 className='py-4 text-teal-600'>Tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Photoshop</p>
            </div>
          </div>
          <div>
            <div>
              <Image src={web1} alt={''}/>
            </div>
            <div>
              <Image src={web2} alt={''}/>
            </div>
            <div>
              <Image src={web3} alt={''}/>
            </div>
            <div>
              <Image src={web4} alt={''}/>
            </div>
            <div>
              <Image src={web5} alt={''}/>
            </div>
            <div>
              <Image src={web6} alt={''}/>
            </div>
          </div>

        </section>
      </main>
    </>
  )
}
