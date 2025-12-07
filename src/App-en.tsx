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

function AppEn() {

  return (
    <div>
      {/* Header */}
      <header className="h-16 py-2 px-4 md:px-8 flex items-center justify-between">
        <img className="h-full" src={logo} alt="Sunrise Link logo" />
        <div className="flex items-center gap-x-4">
          <a href="/zh" className="text-sm hover:text-[#E0910F] transition-colors">切换到：中文</a>
          <a
            href="https://wa.me/6582935678"
            target="_blank"
            rel="noopener noreferrer"
            className='text-sm md:text-xl font-bold bg-[#E0910F] text-white rounded-full py-1.5 px-3 md:py-2 md:px-4 flex items-center gap-x-1 md:gap-x-2 cursor-pointer hover:bg-[#D08010] transition-colors'
          >
            <WhatsappIcon />
            <span>+65 82935678</span>
          </a>
        </div>
      </header>
      {/* Banner */}
      <section className='relative h-[200px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden' aria-label="Hero Banner">
        <div className='absolute top-[30px] sm:top-[50px] w-full z-10 text-center font-bold px-4'>
          <div className='text-white text-xl sm:text-2xl md:text-4xl leading-tight hidden sm:block'>A sunrise of care, a link of trust</div>
          <a 
            href="https://wa.me/6582935678" 
            target="_blank" 
            rel="noopener noreferrer"
            className='bg-white text-base sm:text-xl md:text-2xl text-[#E0910F] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mt-0 sm:mt-4 cursor-pointer items-center gap-x-2 inline-flex hover:bg-gray-100 transition-colors'
          >
            <WhatsappIcon /> Enquire Now
          </a>
        </div>
        <img src={BgImage} alt="Sunrise Link professional helper agency background" className='absolute bottom-0 w-full object-cover z-0' />
        <img src={HeroImage} alt="Professional domestic helper providing care services in Singapore" className='w-[250px] sm:w-[400px] md:w-[450px] lg:w-[600px] absolute bottom-0 left-1/2 -translate-x-1/2 z-10' />
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className='mt-8 sm:mt-12 md:mt-16 px-4 max-w-[1024px] mx-auto scroll-mt-20' aria-labelledby="why-choose-heading">
        <h2 id="why-choose-heading" className='relative text-xl sm:text-2xl font-bold text-center after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:rounded after:top-8 sm:after:top-10 after:block after:h-1 after:bg-linear-to-r after:from-[#E0910F] after:to-[#EFC78C]'>Why Choose Us?</h2>
        <div className='flex flex-col sm:flex-row mt-12 sm:mt-16 gap-6 sm:gap-4 mx-10 sm:mx-0'>
          <article className='flex-1'>
            <div className='mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C] text-2xl text-white flex items-center justify-center' aria-hidden="true"><ProtectIcon /></div>
            <h3 className='my-4 sm:my-5 text-base sm:text-lg font-bold text-center'>Trusted & Verified</h3>
            <p className='text-sm sm:text-base text-center'>All our helpers undergo rigorous background checks and professional training to ensure the highest standards of service.</p>
          </article>
          <article className='flex-1'>
            <div className='mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C] text-2xl text-white flex items-center justify-center' aria-hidden="true"><SupportIcon /></div>
            <h3 className='my-4 sm:my-5 text-base sm:text-lg font-bold text-center'>24/7 Support</h3>
            <p className='text-sm sm:text-base text-center'>Our dedicated team is always available to assist you with any concerns or questions you may have, day or night.</p>
          </article>
          <article className='flex-1'>
            <div className='mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C] text-2xl text-white flex items-center justify-center' aria-hidden="true"><HeartBeatIcon /></div>
            <h3 className='my-4 sm:my-5 text-base sm:text-lg font-bold text-center'>Personalized Care</h3>
            <p className='text-sm sm:text-base text-center'>We understand that every home has unique needs. Our matching process ensures you find the perfect helper for your family.</p>
          </article>
          <article className='flex-1'>
            <div className='mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C] text-2xl text-white flex items-center justify-center' aria-hidden="true"><PaperworkIcon /></div>
            <h3 className='my-4 sm:my-5 text-base sm:text-lg font-bold text-center'>Hassle-free Process</h3>
            <p className='text-sm sm:text-base text-center'>We handle all documentation, permits and paperwork, making the hiring process smooth and stress-free for you.</p>
          </article>
        </div>
      </section>

      {/* Our Services */}
      <section id="our-services" className='mt-8 sm:mt-12 md:mt-16 bg-gray-50 py-8 sm:py-10 px-4 scroll-mt-20' aria-labelledby="services-heading">
        <h2 id="services-heading" className='relative text-xl sm:text-2xl font-bold text-center after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:rounded after:top-8 sm:after:top-10 after:block after:h-1 after:bg-linear-to-r after:from-[#E0910F] after:to-[#EFC78C]'>Our Services</h2>
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-4 mt-12 sm:mt-16 max-w-[1024px] mx-auto'>
          <article className='flex-1 bg-white rounded-lg pt-6 sm:pt-8 p-5 sm:p-6'>
            <div className='text-3xl sm:text-4xl flex items-center text-[#E0910F]' aria-hidden="true"><DomesticHelpersIcon /></div>
            <h3 className='mt-2 mb-3 sm:mb-4 text-base sm:text-lg font-bold'>Domestic Helpers</h3>
            <p className='text-sm sm:text-base'>Experienced helpers for household chores, cooking, cleaning and maintaining your home to the highest standards.</p>
          </article>
          <article className='flex-1 bg-white rounded-lg pt-6 sm:pt-8 p-5 sm:p-6'>
            <div className='text-3xl sm:text-4xl flex items-center text-[#E0910F]' aria-hidden="true"><EldercareSpecialistsIcon /></div>
            <h3 className='mt-2 mb-3 sm:mb-4 text-base sm:text-lg font-bold'>Eldercare Specialists</h3>
            <p className='text-sm sm:text-base'>Compassionate caregivers trained to provide specialized care and companionship for elderly family members.</p>
          </article>
          <article className='flex-1 bg-white rounded-lg pt-6 sm:pt-8 p-5 sm:p-6'>
            <div className='text-3xl sm:text-4xl flex items-center text-[#E0910F]' aria-hidden="true"><ChildcareExpertsIcon /></div>
            <h3 className='mt-2 mb-3 sm:mb-4 text-base sm:text-lg font-bold'>Childcare Experts</h3>
            <p className='text-sm sm:text-base'>Attentive and nurturing helpers who specialize in childcare, early education and developmental support.</p>
          </article>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className='mt-8 sm:mt-12 md:mt-16 px-4 max-w-[1024px] mx-auto scroll-mt-20' aria-labelledby="how-it-works-heading">
        <h2 id="how-it-works-heading" className='relative text-xl sm:text-2xl font-bold text-center after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:rounded after:top-8 sm:after:top-10 after:block after:h-1 after:bg-linear-to-r after:from-[#E0910F] after:to-[#EFC78C]'>How It Works</h2>
        <div className='flex flex-col sm:flex-row gap-6 sm:gap-8 mt-12 sm:mt-16'>
          <article className='flex-1'>
            <div className='text-white font-bold flex items-center justify-center text-xl mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C]' aria-hidden="true">1</div>
            <h3 className='my-4 sm:my-5 text-base sm:text-lg font-bold text-center'>Consultation</h3>
            <p className='text-sm sm:text-base text-center'>Meet with our consultant to discuss your specific needs and preferences.</p>
          </article>
          <article className='flex-1'>
            <div className='text-white font-bold flex items-center justify-center text-xl mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C]' aria-hidden="true">2</div>
            <h3 className='my-4 sm:my-5 text-base sm:text-lg font-bold text-center'>Selection</h3>
            <p className='text-sm sm:text-base text-center'>Review profiles and interview pre-screened candidates that match your requirements.</p>
          </article>
          <article className='flex-1'>
            <div className='text-white font-bold flex items-center justify-center text-xl mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C]' aria-hidden="true">3</div>
            <h3 className='my-4 sm:my-5 text-base sm:text-lg font-bold text-center'>Documentation</h3>
            <p className='text-sm sm:text-base text-center'>We handle all necessary paperwork, permits and legal requirements.</p>
          </article>
          <article className='flex-1'>
            <div className='text-white font-bold flex items-center justify-center text-xl mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C]' aria-hidden="true">4</div>
            <h3 className='my-4 sm:my-5 text-base sm:text-lg font-bold text-center'>Placement</h3>
            <p className='text-sm sm:text-base text-center'>Your helper arrives with ongoing support from our team throughout the placement.</p>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className='mt-8 sm:mt-12 md:mt-16 py-6 sm:py-8 bg-[#3E3E3E] px-4'>
        <div className='flex flex-col sm:flex-row sm:justify-between text-white gap-6 sm:gap-x-6 max-w-[1024px] mx-auto'>
          <div className='flex-none sm:w-[240px] md:mr-20'>
            <div className="w-full sm:p-1 max-w-[200px] sm:max-w-full">
              <img src={logo} className='w-full' alt="Sunrise Link - Trusted helper agency in Singapore" />
            </div>
            <p className='text-sm opacity-70 mt-3 sm:text-justify'>
              Connecting families with trusted helpers. Our mission is to provide care and support that brings peace of mind to Singapore families.
            </p>
          </div>
          <nav className='flex-auto'>
            <div className='text-base sm:text-lg font-bold mb-3 sm:mb-4'>Quick Links</div>
            <a href='#why-choose-us' className='text-white flex items-center gap-x-1 opacity-70 hover:opacity-100 mb-2 text-sm sm:text-base transition-opacity cursor-pointer'>
              <div className='text-[8px]'><RightArrowIcon /></div>
              <div>Why Choose Us?</div>
            </a>
            <a href='#our-services' className='text-white flex items-center gap-x-1 opacity-70 hover:opacity-100 mb-2 text-sm sm:text-base transition-opacity cursor-pointer'>
              <div className='text-[8px]'><RightArrowIcon /></div>
              <div>Our Services</div>
            </a>
            <a href='#how-it-works' className='text-white flex items-center gap-x-1 opacity-70 hover:opacity-100 mb-2 text-sm sm:text-base transition-opacity cursor-pointer'>
              <div className='text-[8px]' aria-hidden="true"><RightArrowIcon /></div>
              <div>How It Works</div>
            </a>
          </nav>
          <div className='flex-auto'>
            <div className='text-base sm:text-lg font-bold mb-3 sm:mb-4'>Our Services</div>
            <div className='flex items-center gap-x-1 opacity-70 mb-2 text-sm sm:text-base'>
              <div>Domestic Helpers</div>
            </div>
            <div className='flex items-center gap-x-1 opacity-70 mb-2 text-sm sm:text-base'>
              <div>Eldercare Specialists</div>
            </div>
            <div className='flex items-center gap-x-1 opacity-70 mb-2 text-sm sm:text-base'>
              <div>Childcare Experts</div>
            </div>
          </div>
          <address className='flex-auto not-italic'>
            <div className='text-base sm:text-lg font-bold mb-3 sm:mb-4'>Contact Us</div>
            <div className='flex items-center gap-x-1 opacity-70 mb-2 text-sm sm:text-base'>
              <div><PhoneIcon /></div>
              <div>+65 82935678</div>
            </div>
            <div className='flex items-center gap-x-1 opacity-70 mb-2 text-sm sm:text-base'>
              <div aria-hidden="true"><EmailIcon /></div>
              <a href="mailto:info@sunriselink.com" className='text-white hover:opacity-100'>info@sunriselink.com</a>
            </div>
          </address>
        </div>
      </footer>
      <div className="border-t border-[#F8F8F833] py-3 sm:py-4 text-center text-xs sm:text-sm bg-[#3E3E3E] text-white px-4">
        <p>Sunrise Link Pte Ltd. Licence Number: 25C3065</p>
      </div>
    </div>
  )
}

export default AppEn
