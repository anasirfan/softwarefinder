import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '../Components/NavBar.js';
import Banner from '@/Components/banner.js';
import banner from '../Components/banner.png';
import banner2 from '../Components/banner2.png';
import heading1img from '../Components/heading1img.jpg';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>

      <div className='fixed w-full z-10'><NavBar /></div>

      <div className="relative mt- h-520">
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
      <div className='flex flex-row w-full mt-28  pl-28 pr-12 h-screen mb-8 space-x-12'>
        <div className='relative w-full '>
          <div className={`${styles.openSans} pl-4 leading-10 pr-28 text-2sm text-justify w-full h-96`}>
            <p className='pb-2'>Training without an effective learning management system (LMS) is like driving without knowing directions. You can’t be sure where you’re going or what the terrain would look like. Keeping with the same analogy, it similarly becomes very difficult (and time-consuming) for companies  to figure out how to best train  their workers  when all of the hassle typically associated with the affair could have been avoided with one simple solution.  </p>
            <p className='pb-2'>While it’s true that some organizations see LMSs as a costly indulgence, the investment has been shown – time and again – to pay off in huge dividends. The reason? It helps create a higher ROI on training resulting from more knowledgeable employees who can do their jobs better!</p>
            <p className='pb-2'>Apart from the hefty, tangible returns,, however, there are numerous other reasons why a company should spend money on an LMS integration that warrant your attention..</p>
            <p className='pb-8'>Read on as we dish our informed scoop on the subject.</p>
            <h1 className='text-3xl font-bold'>
              Six Features that Make an LMS Worth Breaking the Kitty
            </h1>
            <p className='pt-8 pb-2'>And before you dive headfirst into the narration, note our disclaimer: </p>
            <p className='pb-2'>These prescriptions come backed by both our hands-on experience with several of these utilities as well as the scores of user-reviews consulted. So, you can rest assured about their actionable credibility – we only posit what we know to be legit.</p>
            <h2 className='text-3xl font-semibold'>1. Apart from the one-time cost, it's cheaper in the long run</h2>
            <Image className='rounded-2xl'
                  src={heading1img}
                  alt="Banner Image"

                  style={{ layout: "fill", objectFit: 'cover', height: "740px", width: "740px" }}/>
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
    </div>
  )
}

