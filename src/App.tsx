import logo from '/logo_en_zh.png'
import './App.css'

function App() {

  return (
    <div>
      <div className="h-24 p-4">
        <img className="h-full" src={logo} alt="Sunrise Link logo" />
      </div>
      <div>
        <div>Why Choose Us?</div>
        <div className='flex'>
          <div>
            <div className='rounded-full h-12 w-12 bg-gray-200'></div>
            <div>Trusted & Verified</div>
            <div>All our helpers undergo rigorous background checks and professional training to ensure the highest standards of service.</div>
          </div>
          <div>
            <div className='rounded-full h-12 w-12 bg-gray-200'></div>
            <div>24/7 Support</div>
            <div>Our dedicated team is always available to assist you with any concerns or questions you may have, day or night.</div>
          </div>
          <div>
            <div className='rounded-full h-12 w-12 bg-gray-200'></div>
            <div>Personalized Care</div>
            <div>We understand that every home has unique needs. Our matching process ensures you find the perfect helper for your family.</div>
          </div>
          <div>
            <div className='rounded-full h-12 w-12 bg-gray-200'></div>
            <div>Hassle-free Process</div>
            <div>We handle all documentation, permits and paperwork, making the hiring process smooth and stress-free for you.</div>
          </div>
        </div>
      </div>

      <div>
        <div>Our Services</div>
        <div className='flex'>
          <div>
            <div>Icon</div>
            <div>Domestic Helpers</div>
            <div>Experienced helpers for household chores, cooking, cleaning and maintaining your home to the highest standards.</div>
          </div>
          <div>
            <div>Icon</div>
            <div>Eldercare Specialists</div>
            <div>Compassionate caregivers trained to provide specialized care and companionship for elderly family members.</div>
          </div>
          <div>
            <div>Icon</div>
            <div>Childcare Experts</div>
            <div>Attentive and nurturing helpers who specialize in childcare, early education and developmental support.</div>
          </div>
        </div>
      </div>

      <div>
        <div>How It Works</div>
        <div className='flex'>
          <div>
            <div>1</div>
            <div>Consultation</div>
            <div>Meet with our consultant to discuss your specific needs and preferences.</div>
          </div>
          <div>
            <div>2</div>
            <div>Selection</div>
            <div>Review profiles and interview pre-screened candidates that match your requirements.</div>
          </div>
          <div>
            <div>3</div>
            <div>Documentation</div>
            <div>We handle all necessary paperwork, permits and legal requirements.</div>
          </div>
          <div>
            <div>4</div>
            <div>Placement</div>
            <div>Your helper arrives with ongoing support from our team throughout the placement.</div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <img className="h-full" src={logo} alt="Sunrise Link logo" />
          <div>
            Connecting families with trusted helpers. Our mission is to provide care and support that brings peace of mind to Singapore families.
          </div>
        </div>
        <div>
          <div>Contact Us</div>
          <div>
            <div>icon</div>
            <div>+65 82935678</div>
          </div>
          <div>
            <div>Email icon</div>
            <div>info@sunriselink.com</div>
          </div>
        </div>
      </div>
      <div>Sunrise Link Pte Ltd. Licence Number: 25C3065</div>
    </div>
  )
}

export default App
