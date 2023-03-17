import React from 'react'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '../Components/NavBar.js';
import Banner from '@/Components/banner.js';
import banner from '../Components/banner.png';
import banner2 from '../Components/banner2.png';
import heading1img from '../Components/heading1img.jpg';
import heading2img from '../Components/heading2img.jpg';
import heading3img from '../Components/heading3img.jpg';
import heading4img from '../Components/heading4img.jpg';
import heading5img from '../Components/heading5img.jpg';
import heading6img from '../Components/heading6img.jpg';
import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })
const mainpg = (props) => {
  return (
    <div><div className='fixed w-full z-10'><NavBar /></div>

    <div className="relative h-520">
      <Image
        src={banner}
        alt="Banner Image"

        style={{ layout: "fill", objectFit: 'cover', height: "420px" }}


      />


      <div className="flex flex-col px-8">
        <div className="absolute h-20 mt-20 inset-0 flex justify-center items-center text-center text-4xl font-semibold text-white ">
          <h2 >
            How Switching to an LMS can be the Ultimate Game Changer
          </h2>
        </div>
        <div className="absolute h-40 mt-40 w-full inset-0 flex justify-center items-center text-center px-10 font-semibold space-x-2 text-white">
          <input
            type="text"
            className="border-2 w-35  rounded  px-4 py-2 mb-2 "
            placeholder="Name"
          />
          <input
            type="text"
            className="border-2  rounded  px-4 py-2 mb-2 w-35"
            placeholder="Organization Name"
          />
          <input
            type="text"
            className="border-2  rounded  px-4 py-2 mb-2 w-35"
            placeholder="Phone"
          />
          <input
            type="text"
            className="border-2  rounded  px-4 py-2 mb-2 w-35"
            placeholder="Email"
          />
          <button className={`${styles.customcol} text-white font-bold px-4 py-2 mb-2 rounded hover:bg-orange-500 transition duration-200`}>
            Request Demo
          </button>

        </div>
      </div>
    </div>
    <div className='flex flex-row w-full mt-28 pl-28 pr-12  space-x-12'>
      <div className='relative w-full mb-12 '>
        <div className={`${styles.openSans} pl-4 leading-10 pr-28 text-2sm text-justify w-full`}>
        {props.products.data.map((items) =>{
      return (
        <div>
          {items.attributes.content}
        </div>
      )
    })}
          <h1 className='text-3xl font-bold'>
            Six Features that Make an LMS Worth Breaking the Kitty
          </h1>
          <p className='pt-8 pb-2'>And before you dive headfirst into the narration, note our disclaimer: </p>
          <p className='pb-2'>These prescriptions come backed by both our hands-on experience with several of these utilities as well as the scores of user-reviews consulted. So, you can rest assured about their actionable credibility – we only posit what we know to be legit.</p>
          <h2 className='text-3xl font-semibold'>1. Apart from the one-time cost, it`s cheaper in the long run</h2>
          <Image className='rounded-2xl'
                src={heading1img}
                alt="Banner Image"

                style={{ layout: "fill", objectFit: 'cover', height: "740px", width: "740px" }}/>
                <p className='pt-8 pb-2'>Switching to a learning management system can be expensive upfront, but hear us out. The long-term benefits of employee retention and productivity will make up for this cost many times over!</p>
                <p className='pb-2'>Investing in your employees is a smart move for many reasons. Not only does it help increase productivity, it also reduces turnover rates and the cost of training new staff members.</p>
                <p className='pb-8'>The right LMS, further, reduces costs by cutting out instructor fees and rental prices, among other things – so you’ll likely be running a profit each year. </p>
          <h2 className='text-3xl font-semibold mb-6'>2. Train employees on the go</h2>
          <Image className='rounded-2xl'
                src={heading2img}
                alt="Banner Image"

                style={{ layout: "fill", objectFit: 'cover', height: "475px", width: "759px" }}/>
                <p className='pt-8 pb-2'>In today’s cut-throat day and age, the importance of subscribing to a learning management system cannot be overstated. On a very basic level, it allows your company to provide accessible training that can move with employees regardless of their location. In addition, with an LMS, you’ll be able to communicate training content on multiple devices whenever downtime occurs (due to a server or network lapse), providing unparallelled accessibility.  </p>
                <h2 className='text-3xl font-semibold mb-6'>3. Collaboration becomes as smooth as a breeze</h2>
                <Image className='rounded-2xl  '
                src={heading3img}
                alt="Banner Image"

                style={{ layout: "fill", objectFit: 'cover', height: "506px", width: "759px" }}/>
                <p className='pt-8 pb-2'>A learning management system that facilitates instructor collaboration is essential for many reasons. Not only does it increase accessibility, but by using plugins and API applications provided within the interface, you can easily connect with other instructors or industry professionals when needed.</p>
                <p className='pb-8'>Collaborating with other companies, in any case, makes for  a great way to grow your business and recruit more people to your team.</p> 
                <h2 className='text-3xl font-semibold mb-6'>4. Hassle-free course management</h2>
                <Image className='rounded-2xl  '
                src={heading4img}
                alt="Banner Image"
                style={{ layout: "fill", objectFit: 'cover', height: "524px", width: "759px" }}/>
                <p className='pb-2 pt-8'>In a remote/mobility-first world, using a learning management system is key to keeping your course on track and engaging with fellow learners. With an easy-to-use, robust platform that provides constant updates (in the majoritarian software case), you can tailor each course section for individual needs without hassle.</p>
                <p className='pb-8'>In addition, an LMS provides many remarkable features that make course design simple for training instructors. For example, the drag-and-drop feature facilitates the uploading of courses to system interfaces. Furthermore, it lets you manage tutorials by categorizing their informing themes based on what your learners need most at any given moment in their journey toward complete subject mastery!</p>
                <h2 className='text-3xl font-semibold mb-6'>5. No more compliance issues</h2>
                <Image className='rounded-2xl  '
                src={heading5img}
                alt="Banner Image"
                style={{ layout: "fill", objectFit: 'cover', height: "740px", width: "593" }}/>
                <p className='pt-8 pb-2'>With ever-changing compliance requirements, it can be difficult for organizations to keep up; especially if they don’t have a solid administrative framework in place or when application updates are too time-consuming. When these constraints impinge, your instructor-led courses might fall short of expectations and leave you without enough resources to teach what matters most.</p>

                <p className='pb-8'>However, if you invest in the right LMS, you can easily integrate the updates into your training courses and promptly distribute them to your employees without impeding their learning journey(s).</p>
                <h2 className='text-3xl font-semibold mb-6'>6. Milestones are easy to track</h2>
                <Image className='rounded-2xl  '
                src={heading6img}
                alt="Banner Image"
                style={{ layout: "fill", objectFit: 'cover', height: "740px", width: "740px" }}/>
                <p className='pb-2 pt-8'>You can check whether your online training courses are effective by monitoring their progress. This gives you a way of measuring whether or not they have the desired effect on learners and allows for any needed adjustments to be implemented before it’s too late.</p>
                <p className='pb-8'>There are many benefits to investing in an LMS for your company, such as tracking learners’ development and determining whether or not they’re applying what was learned. You’ll also be able to provide them with training that addresses any gaps detected during this process.</p>
                <h2 className='text-2xl font-medium mb-6'>So…Convinced, Yet, to Go Ahead To Buy an LMS?</h2>
                <p className='pb-2 pt-2'>If you feel like your company is in a rut and could use a shake-up, subscribing to an LMS might be the game-changer you need.</p>
                <p className='pb-2 '>Not sure where to start? </p>
                <p className='pb-2 '>Software Finder can help.  </p>
                <p className='pb-2 '>We’ve got all the information you need to decide which LMS suits your business.</p>
        <div className='flex flex-grow mt-16 flex-row justify-center space-x-10 mx-28 items-center'>
          <button className='bg-grey-800 flex w-96 text-sm items-center justify-center h-8'>corporate LMS</button>
          <button className='bg-grey-800 flex w-full text-sm items-center justify-center h-8'>learning and training</button>
          <button className='bg-grey-800 flex w-full text-sm items-center justify-center h-8'>LMS</button>
        </div> 
        </div>
      </div>
      <div className='relative w-80 right-0 pl-4 h-196 overflow-visible'>
        <div className=' py-96 h-screen overflow-visible'>
          <div className=' pt-96  -translate-y-2/3 '>
            <div className='w-80 mb-8 h-full'>
              
                <Image
           className='rounded-2xl'
           src={banner2}
           alt="Banner Image"

           style={{ layout: "fill", objectFit: 'cover', height: "453px", width: "244px" }}/>


             
            </div>
            <div className='h-full overflow-visible'>
              <h1 className={`${styles.openSans} text-xl font-semibold mb-4`}>Featured Whitepapers</h1>
              <div className='w-4/5'>
                <Link href="https://softwarefinder.com/resources/medical-billing-software-pricing-covid-19">
                  <p className={`pb-2 font-semibold ${styles.linkcol}`}>Medical Billing Software Pricing – Updated for COVID-19</p>
                </Link>
                <Link href="https://softwarefinder.com/resources/ehr-implementation-tips">
                  <p className={`pb-2 font-semibold ${styles.linkcol}`}>6 Tips For A Successful EHR Implementation</p>
                </Link>
                <Link href="https://softwarefinder.com/resources/5-ehrs-foolproof-patient-privacy-features">
                  <p className={`pb-2 font-semibold ${styles.linkcol}`}>5 EHRs with Foolproof Patient Privacy Features</p>
                </Link>
                <Link href="https://softwarefinder.com/resources/emr-guide-for-small-practice">
                  <p className={`pb-2 font-semibold ${styles.linkcol}`}>A Guide to EMR for Small Practices</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='relative'>
      <h2 className='text-2xl ml-20'>Recommended Posts</h2>
    </div></div>
  )
}
export async function getServerSideProps(context){
  let a = await fetch("http://127.0.0.1:1337/api/articles?populate=1")
  let products =  await a.json()
  console.log(products)
  return{
    props : {products: products},
  }
}
export default mainpg