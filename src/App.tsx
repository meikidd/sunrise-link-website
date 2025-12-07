import logo from '/logo_en_zh.png'
import BgImage from '/banner-bg.jpg'
import HeroImage from '/banner-hero.png'
import ProtectIcon from './svg/protect.svg?react'
import SupportIcon from './svg/customer-service.svg?react'
import PaperworkIcon from './svg/paperwork.svg?react'
import HeartBeatIcon from './svg/heart-beat.svg?react'
import DomesticHelpersIcon from './svg/home-care.svg?react'
import EldercareSpecialistsIcon from './svg/elderly-care.svg?react'
import ChildcareExpertsIcon from './svg/child-care.svg?react'
import RightArrowIcon from './svg/right-arrow.svg?react'
import PhoneIcon from './svg/phone.svg?react'
import EmailIcon from './svg/email.svg?react'
import WhatsappIcon from './svg/whatsapp.svg?react'
import './App.css'

function App() {

  return (
    <div>
      <div className="h-24 py-2 px-8 flex items-center justify-between">
        <img className="h-full" src={logo} alt="Sunrise Link logo" />
        <div className='text-xl font-bold mr-8 bg-[#E0910F] text-white rounded-full py-2 px-4 flex items-center gap-x-2 cursor-pointer'>
          <WhatsappIcon />
          <span>+65 82935678</span>
        </div>
      </div>
      <div className='relative h-[500px] overflow-hidden'>
        <div className='absolute top-[50px] w-full z-10 text-center font-bold'>
          <div className=' text-white text-4xl'>A sunrise of care, a link of trust</div>
          <div className='bg-white text-2xl text-[#E0910F] px-4 py-2 rounded-full mt-4 cursor-pointer inline-flex items-center gap-x-2'><WhatsappIcon /> Enquire Now</div>
        </div>
        <img src={BgImage} alt="Sunrise Link background image" className='absolute bottom-0 w-full object-cover z-0' />
        <img src={HeroImage} alt="Sunrise Link hero image" className='w-[600px] absolute bottom-0 left-1/2 -translate-x-1/2 z-10' />
      </div>

      <div className='mt-16 px-4 max-w-[1024px] mx-auto'>
        <div className='relative text-2xl font-bold text-center after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:rounded after:top-10 after:block after:h-1 after:bg-linear-to-r after:from-[#E0910F] after:to-[#EFC78C]'>Why Choose Us?</div>
        <div className='flex mt-16 gap-4'>
          <div>
            <div className='mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C] text-2xl text-white flex items-center justify-center'><ProtectIcon /></div>
            <div className='my-5 text-lg font-bold text-center'>Trusted & Verified</div>
            <div className='text-center'>All our helpers undergo rigorous background checks and professional training to ensure the highest standards of service.</div>
          </div>
          <div>
            <div className='mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C] text-2xl text-white flex items-center justify-center'><SupportIcon /></div>
            <div className='my-5 text-lg font-bold text-center'>24/7 Support</div>
            <div className='text-center'>Our dedicated team is always available to assist you with any concerns or questions you may have, day or night.</div>
          </div>
          <div>
            <div className='mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C] text-2xl text-white flex items-center justify-center'><HeartBeatIcon /></div>
            <div className='my-5 text-lg font-bold text-center'>Personalized Care</div>
            <div className='text-center'>We understand that every home has unique needs. Our matching process ensures you find the perfect helper for your family.</div>
          </div>
          <div>
            <div className='mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C] text-2xl text-white flex items-center justify-center'><PaperworkIcon /></div>
            <div className='my-5 text-lg font-bold text-center'>Hassle-free Process</div>
            <div className='text-center'>We handle all documentation, permits and paperwork, making the hiring process smooth and stress-free for you.</div>
          </div>
        </div>
      </div>

      <div className='mt-16 bg-gray-50 py-10 px-4'>
        <div className='relative text-2xl font-bold text-center after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:rounded after:top-10 after:block after:h-1 after:bg-linear-to-r after:from-[#E0910F] after:to-[#EFC78C]'>Our Services</div>
        <div className='flex gap-4 mt-16 max-w-[1024px] mx-auto'>
          <div className='bg-white rounded-lg pt-8 p-6'>
            <div className='text-4xl flex items-center text-[#E0910F]'><DomesticHelpersIcon /></div>
            <div className='mt-2 mb-4 text-lg font-bold'>Domestic Helpers</div>
            <div>Experienced helpers for household chores, cooking, cleaning and maintaining your home to the highest standards.</div>
          </div>
          <div className='bg-white rounded-lg pt-8 p-6'>
            <div className='text-4xl flex items-center text-[#E0910F]'><EldercareSpecialistsIcon /></div>
            <div className='mt-2 mb-4 text-lg font-bold'>Eldercare Specialists</div>
            <div>Compassionate caregivers trained to provide specialized care and companionship for elderly family members.</div>
          </div>
          <div className='bg-white rounded-lg pt-8 p-6'>
            <div className='text-4xl flex items-center text-[#E0910F]'><ChildcareExpertsIcon /></div>
            <div className='mt-2 mb-4 text-lg font-bold'>Childcare Experts</div>
            <div>Attentive and nurturing helpers who specialize in childcare, early education and developmental support.</div>
          </div>
        </div>
      </div>

      <div className='mt-16 px-4 max-w-[1024px] mx-auto'>
        <div className='relative text-2xl font-bold text-center after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:rounded after:top-10 after:block after:h-1 after:bg-linear-to-r after:from-[#E0910F] after:to-[#EFC78C]'>How It Works</div>
        <div className='flex gap-8 mt-16'>
          <div>
            <div className='text-white font-bold flex items-center justify-center text-xl mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C]'>1</div>
            <div className='my-5 text-lg font-bold text-center'>Consultation</div>
            <div className='text-center'>Meet with our consultant to discuss your specific needs and preferences.</div>
          </div>
          <div>
            <div className='text-white font-bold flex items-center justify-center text-xl mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C]'>2</div>
            <div className='my-5 text-lg font-bold text-center'>Selection</div>
            <div className='text-center'>Review profiles and interview pre-screened candidates that match your requirements.</div>
          </div>
          <div>
            <div className='text-white font-bold flex items-center justify-center text-xl mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C]'>3</div>
            <div className='my-5 text-lg font-bold text-center'>Documentation</div>
            <div className='text-center'>We handle all necessary paperwork, permits and legal requirements.</div>
          </div>
          <div>
            <div className='text-white font-bold flex items-center justify-center text-xl mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C]'>4</div>
            <div className='my-5 text-lg font-bold text-center'>Placement</div>
            <div className='text-center'>Your helper arrives with ongoing support from our team throughout the placement.</div>
          </div>
        </div>
      </div>

      <div className='mt-16 py-8 bg-[#3E3E3E]'>
        <div className='flex justify-between text-white gap-x-6 max-w-[1024px] mx-auto'>
          <div className='flex-none w-[240px] mr-20'>
            <div className="w-full p-1">
              <img src={logo} className='w-full' alt="Sunrise Link logo" />
            </div>
            <div className='text-sm opacity-70 text-justify'>
              Connecting families with trusted helpers. Our mission is to provide care and support that brings peace of mind to Singapore families.
            </div>
          </div>
          <div className='flex-auto'>
            <div className='text-lg font-bold mb-4'>Quick Links</div>
            <div className='flex items-center gap-x-1 opacity-70 mb-2'>
              <div className='text-[8px]'><RightArrowIcon /></div>
              <div>Why Choose Us?</div>
            </div>
            <div className='flex items-center gap-x-1 opacity-70 mb-2'>
              <div className='text-[8px]'><RightArrowIcon /></div>
              <div>Our Services</div>
            </div>
            <div className='flex items-center gap-x-1 opacity-70 mb-2'>
              <div className='text-[8px]'><RightArrowIcon /></div>
              <div>How It Works</div>
            </div>
          </div>
          <div className='flex-auto'>
            <div className='text-lg font-bold mb-4'>Our Services</div>
            <div className='flex items-center gap-x-1 opacity-70 mb-2'>
              <div>Domestic Helpers</div>
            </div>
            <div className='flex items-center gap-x-1 opacity-70 mb-2'>
              <div>Eldercare Specialists</div>
            </div>
            <div className='flex items-center gap-x-1 opacity-70 mb-2'>
              <div>Childcare Experts</div>
            </div>
          </div>
          <div className='flex-auto'>
            <div className='text-lg font-bold mb-4'>Contact Us</div>
            <div className='flex items-center gap-x-1 opacity-70 mb-2'>
              <div><PhoneIcon /></div>
              <div>+65 82935678</div>
            </div>
            <div className='flex items-center gap-x-1 opacity-70 mb-2'>
              <div><EmailIcon /></div>
              <div>info@sunriselink.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#F8F8F833] py-4 text-center text-sm bg-[#3E3E3E] text-white">Sunrise Link Pte Ltd. Licence Number: 25C3065</div>
    </div>
  )
}

export default App
