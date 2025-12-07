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

function AppZh() {

  return (
    <div>
      {/* Header */}
      <header className="h-16 py-2 px-4 md:px-8 flex items-center justify-between">
        <img className="h-full" src={logo} alt="日升女佣 logo" />
        <div className="flex items-center gap-x-4">
          <a href="/" className="text-sm hover:text-[#E0910F] transition-colors">Switch to: English</a>
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
      <section className='relative h-[200px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden' aria-label="主页横幅">
        <div className='absolute top-[30px] sm:top-[50px] w-full z-10 text-center font-bold px-4'>
          <div className='text-white text-xl sm:text-2xl md:text-4xl leading-tight hidden sm:block'>关怀如晨曦，信任织纽带</div>
          <a
            href="https://wa.me/6582935678"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-white text-base sm:text-xl md:text-2xl text-[#E0910F] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mt-0 sm:mt-4 cursor-pointer items-center gap-x-2 inline-flex hover:bg-gray-100 transition-colors'
          >
            <WhatsappIcon /> 立即咨询
          </a>
        </div>
        <img src={BgImage} alt="日升女佣专业女佣中介服务背景" className='absolute bottom-0 w-full object-cover z-0' />
        <img src={HeroImage} alt="新加坡专业女佣提供家庭护理服务" className='w-[250px] sm:w-[400px] md:w-[450px] lg:w-[600px] absolute bottom-0 left-1/2 -translate-x-1/2 z-10' />
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className='mt-8 sm:mt-12 md:mt-16 px-4 max-w-[1024px] mx-auto scroll-mt-20' aria-labelledby="why-choose-heading">
        <h2 id="why-choose-heading" className='relative text-xl sm:text-2xl font-bold text-center after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:rounded after:top-8 sm:after:top-10 after:block after:h-1 after:bg-linear-to-r after:from-[#E0910F] after:to-[#EFC78C]'>为什么选择我们？</h2>
        <div className='flex flex-col sm:flex-row mt-12 sm:mt-16 gap-6 sm:gap-4 mx-10 sm:mx-0'>
          <article className='flex-1'>
            <div className='mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C] text-2xl text-white flex items-center justify-center' aria-hidden="true"><ProtectIcon /></div>
            <h3 className='my-4 sm:my-5 text-base sm:text-lg font-bold text-center'>值得信赖与验证</h3>
            <p className='text-sm sm:text-base text-center'>所有女佣均经过严格的背景调查和专业培训，确保提供最高标准的服务。</p>
          </article>
          <article className='flex-1'>
            <div className='mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C] text-2xl text-white flex items-center justify-center' aria-hidden="true"><SupportIcon /></div>
            <h3 className='my-4 sm:my-5 text-base sm:text-lg font-bold text-center'>24/7 全天候支持</h3>
            <p className='text-sm sm:text-base text-center'>我们的专业团队随时待命，无论白天黑夜，随时为您解答疑问和提供帮助。</p>
          </article>
          <article className='flex-1'>
            <div className='mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C] text-2xl text-white flex items-center justify-center' aria-hidden="true"><HeartBeatIcon /></div>
            <h3 className='my-4 sm:my-5 text-base sm:text-lg font-bold text-center'>个性化护理</h3>
            <p className='text-sm sm:text-base text-center'>我们深知每个家庭的需求独一无二。我们的匹配流程确保您找到最适合您家庭的女佣。</p>
          </article>
          <article className='flex-1'>
            <div className='mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C] text-2xl text-white flex items-center justify-center' aria-hidden="true"><PaperworkIcon /></div>
            <h3 className='my-4 sm:my-5 text-base sm:text-lg font-bold text-center'>轻松无忧流程</h3>
            <p className='text-sm sm:text-base text-center'>我们处理所有文书工作、许可证和手续，让您的聘请过程顺畅无忧。</p>
          </article>
        </div>
      </section>

      {/* Our Services */}
      <section id="our-services" className='mt-8 sm:mt-12 md:mt-16 bg-gray-50 py-8 sm:py-10 px-4 scroll-mt-20' aria-labelledby="services-heading">
        <h2 id="services-heading" className='relative text-xl sm:text-2xl font-bold text-center after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:rounded after:top-8 sm:after:top-10 after:block after:h-1 after:bg-linear-to-r after:from-[#E0910F] after:to-[#EFC78C]'>我们的服务</h2>
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-4 mt-12 sm:mt-16 max-w-[1024px] mx-auto'>
          <article className='flex-1 bg-white rounded-lg pt-6 sm:pt-8 p-5 sm:p-6'>
            <div className='text-3xl sm:text-4xl flex items-center text-[#E0910F]' aria-hidden="true"><DomesticHelpersIcon /></div>
            <h3 className='mt-2 mb-3 sm:mb-4 text-base sm:text-lg font-bold'>家庭女佣</h3>
            <p className='text-sm sm:text-base'>经验丰富的女佣，擅长家务、烹饪、清洁，并将您的家维护到最高标准。</p>
          </article>
          <article className='flex-1 bg-white rounded-lg pt-6 sm:pt-8 p-5 sm:p-6'>
            <div className='text-3xl sm:text-4xl flex items-center text-[#E0910F]' aria-hidden="true"><EldercareSpecialistsIcon /></div>
            <h3 className='mt-2 mb-3 sm:mb-4 text-base sm:text-lg font-bold'>老人护理专家</h3>
            <p className='text-sm sm:text-base'>富有同情心的护理人员，经过培训为年长家庭成员提供专业护理和陪伴。</p>
          </article>
          <article className='flex-1 bg-white rounded-lg pt-6 sm:pt-8 p-5 sm:p-6'>
            <div className='text-3xl sm:text-4xl flex items-center text-[#E0910F]' aria-hidden="true"><ChildcareExpertsIcon /></div>
            <h3 className='mt-2 mb-3 sm:mb-4 text-base sm:text-lg font-bold'>儿童看护专家</h3>
            <p className='text-sm sm:text-base'>细心呵护的女佣，专注于儿童看护、早期教育和发展支持。</p>
          </article>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className='mt-8 sm:mt-12 md:mt-16 px-4 max-w-[1024px] mx-auto scroll-mt-20' aria-labelledby="how-it-works-heading">
        <h2 id="how-it-works-heading" className='relative text-xl sm:text-2xl font-bold text-center after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:rounded after:top-8 sm:after:top-10 after:block after:h-1 after:bg-linear-to-r after:from-[#E0910F] after:to-[#EFC78C]'>服务流程</h2>
        <div className='flex flex-col sm:flex-row gap-6 sm:gap-8 mt-12 sm:mt-16'>
          <article className='flex-1'>
            <div className='text-white font-bold flex items-center justify-center text-xl mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C]' aria-hidden="true">1</div>
            <h3 className='my-4 sm:my-5 text-base sm:text-lg font-bold text-center'>咨询洽谈</h3>
            <p className='text-sm sm:text-base text-center'>与我们的顾问会面，讨论您的具体需求和偏好。</p>
          </article>
          <article className='flex-1'>
            <div className='text-white font-bold flex items-center justify-center text-xl mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C]' aria-hidden="true">2</div>
            <h3 className='my-4 sm:my-5 text-base sm:text-lg font-bold text-center'>挑选面试</h3>
            <p className='text-sm sm:text-base text-center'>查看档案并面试符合您要求的预审候选人。</p>
          </article>
          <article className='flex-1'>
            <div className='text-white font-bold flex items-center justify-center text-xl mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C]' aria-hidden="true">3</div>
            <h3 className='my-4 sm:my-5 text-base sm:text-lg font-bold text-center'>文件办理</h3>
            <p className='text-sm sm:text-base text-center'>我们处理所有必要的文书工作、许可证和法律要求。</p>
          </article>
          <article className='flex-1'>
            <div className='text-white font-bold flex items-center justify-center text-xl mx-auto rounded-full h-12 w-12 bg-linear-to-br from-[#E0910F] to-[#EFC78C]' aria-hidden="true">4</div>
            <h3 className='my-4 sm:my-5 text-base sm:text-lg font-bold text-center'>安排上岗</h3>
            <p className='text-sm sm:text-base text-center'>您的女佣到岗，我们的团队在整个安置过程中提供持续支持。</p>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className='mt-8 sm:mt-12 md:mt-16 py-6 sm:py-8 bg-[#3E3E3E] px-4'>
        <div className='flex flex-col sm:flex-row sm:justify-between text-white gap-6 sm:gap-x-6 max-w-[1024px] mx-auto'>
          <div className='flex-none sm:w-[240px] md:mr-20'>
            <div className="w-full sm:p-1 max-w-[200px] sm:max-w-full">
              <img src={logo} className='w-full' alt="日升女佣 - 新加坡值得信赖的女佣中介" />
            </div>
            <p className='text-sm opacity-70 mt-3 sm:text-justify'>
              连接家庭与值得信赖的女佣。我们的使命是提供让新加坡家庭安心的护理和支持。
            </p>
          </div>
          <nav className='flex-auto'>
            <div className='text-base sm:text-lg font-bold mb-3 sm:mb-4'>快速链接</div>
            <a href='#why-choose-us' className='text-white flex items-center gap-x-1 opacity-70 hover:opacity-100 mb-2 text-sm sm:text-base transition-opacity cursor-pointer'>
              <div className='text-[8px]'><RightArrowIcon /></div>
              <div>为什么选择我们？</div>
            </a>
            <a href='#our-services' className='text-white flex items-center gap-x-1 opacity-70 hover:opacity-100 mb-2 text-sm sm:text-base transition-opacity cursor-pointer'>
              <div className='text-[8px]'><RightArrowIcon /></div>
              <div>我们的服务</div>
            </a>
            <a href='#how-it-works' className='text-white flex items-center gap-x-1 opacity-70 hover:opacity-100 mb-2 text-sm sm:text-base transition-opacity cursor-pointer'>
              <div className='text-[8px]' aria-hidden="true"><RightArrowIcon /></div>
              <div>服务流程</div>
            </a>
          </nav>
          <div className='flex-auto'>
            <div className='text-base sm:text-lg font-bold mb-3 sm:mb-4'>我们的服务</div>
            <div className='flex items-center gap-x-1 opacity-70 mb-2 text-sm sm:text-base'>
              <div>家庭女佣</div>
            </div>
            <div className='flex items-center gap-x-1 opacity-70 mb-2 text-sm sm:text-base'>
              <div>老人护理专家</div>
            </div>
            <div className='flex items-center gap-x-1 opacity-70 mb-2 text-sm sm:text-base'>
              <div>儿童看护专家</div>
            </div>
          </div>
          <address className='flex-auto not-italic'>
            <div className='text-base sm:text-lg font-bold mb-3 sm:mb-4'>联系我们</div>
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
        <p>Sunrise Link Pte Ltd. 许可证号：25C3065</p>
      </div>
    </div>
  )
}

export default AppZh
