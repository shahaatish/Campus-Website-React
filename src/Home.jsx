import { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaSearch, FaBars, FaTimes, FaChevronRight, FaUserGraduate, FaBook, FaChalkboardTeacher, FaAward } from 'react-icons/fa';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const slides = [
    {
      title: "Quality Education for Future Leaders",
      subtitle: "Join Nepal's Premier Educational Institution",
      bg: "bg-gradient-to-r from-indigo-900 to-blue-800"
    },
    {
      title: "Innovative Learning Environment",
      subtitle: "State-of-the-art Facilities and Expert Faculty",
      bg: "bg-gradient-to-r from-blue-800 to-indigo-900"
    },
    {
      title: "Your Journey Starts Here",
      subtitle: "Applications Open for 2024 Intake",
      bg: "bg-gradient-to-r from-indigo-800 to-blue-900"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="font-sans w-full overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm py-2 px-4 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2 md:mb-0 justify-center md:justify-start">
            <span className="flex items-center"><FaPhone className="mr-2" /> +977-1-XXXXXXX</span>
            <span className="flex items-center"><FaEnvelope className="mr-2" /> info@campus.edu.np</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-600 transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-red-600 transition"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-indigo-900 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="https://res.cloudinary.com/djawl4mki/image/upload/v1743701459/logo_lzvwyz.png" 
                alt=" Campus Logo" 
                className="h-10 md:h-12 mr-2 md:mr-4"
              />
              <h1 className="text-lg md:text-2xl font-bold text-white">
                <span className="text-blue-300">Yours</span> Campus
              </h1>
            </div>

            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              <a href="#" className={`font-medium ${isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-blue-300'} transition`}>Home</a>
              <a href="#" className={`font-medium ${isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-blue-300'} transition`}>About</a>
              <a href="#" className={`font-medium ${isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-blue-300'} transition`}>Programs</a>
              <a href="#" className={`font-medium ${isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-blue-300'} transition`}>Facilities</a>
              <a href="#" className={`font-medium ${isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-blue-300'} transition`}>Research</a>
              <a href="#" className={`font-medium ${isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-blue-300'} transition`}>Contact</a>
            </div>

            <div className="flex items-center space-x-3 md:space-x-4">
              <button className={`p-2 rounded-full ${isScrolled ? 'bg-gray-100 text-gray-800' : 'bg-white/20 text-white'}`}>
                <FaSearch className="text-sm md:text-base" />
              </button>
              <button 
                className="lg:hidden p-2"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <FaTimes className={`text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`} /> : <FaBars className={`text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`} />}
              </button>
              <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md font-medium transition text-sm md:text-base">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 right-0">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col space-y-3">
              <a href="#" className="py-2 border-b border-gray-100 font-medium text-gray-800 hover:text-indigo-600">Home</a>
              <a href="#" className="py-2 border-b border-gray-100 font-medium text-gray-800 hover:text-indigo-600">About</a>
              <a href="#" className="py-2 border-b border-gray-100 font-medium text-gray-800 hover:text-indigo-600">Programs</a>
              <a href="#" className="py-2 border-b border-gray-100 font-medium text-gray-800 hover:text-indigo-600">Facilities</a>
              <a href="#" className="py-2 border-b border-gray-100 font-medium text-gray-800 hover:text-indigo-600">Research</a>
              <a href="#" className="py-2 font-medium text-gray-800 hover:text-indigo-600">Contact</a>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium transition mt-2">
                Apply Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Slider */}
      <div className="relative h-80 sm:h-96 md:h-screen max-h-[800px] overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${slide.bg} ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="max-w-7xl mx-auto px-4 text-center text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto">{slide.subtitle}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <button className="bg-white text-indigo-800 hover:bg-gray-100 px-4 py-2 sm:px-6 sm:py-3 rounded-md font-bold transition text-sm sm:text-base">
                  Explore Programs
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white/20 px-4 py-2 sm:px-6 sm:py-3 rounded-md font-bold transition text-sm sm:text-base">
                  Virtual Tour
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition ${index === activeSlide ? 'bg-white w-4 sm:w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <section className="bg-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-indigo-50 p-4 sm:p-6 rounded-lg flex items-start hover:shadow-md transition">
              <div className="bg-indigo-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                <FaUserGraduate className="text-indigo-600 text-lg sm:text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Admissions</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3">Learn about admission process</p>
                <a href="#" className="text-indigo-600 font-medium flex items-center text-sm sm:text-base">
                  Learn more <FaChevronRight className="ml-1 text-xs sm:text-sm" />
                </a>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg flex items-start hover:shadow-md transition">
              <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                <FaBook className="text-blue-600 text-lg sm:text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Programs</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3">Discover academic programs</p>
                <a href="#" className="text-blue-600 font-medium flex items-center text-sm sm:text-base">
                  View programs <FaChevronRight className="ml-1 text-xs sm:text-sm" />
                </a>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 sm:p-6 rounded-lg flex items-start hover:shadow-md transition">
              <div className="bg-purple-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                <FaChalkboardTeacher className="text-purple-600 text-lg sm:text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Faculty</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3">Meet our faculty members</p>
                <a href="#" className="text-purple-600 font-medium flex items-center text-sm sm:text-base">
                  Faculty directory <FaChevronRight className="ml-1 text-xs sm:text-sm" />
                </a>
              </div>
            </div>
            
            <div className="bg-teal-50 p-4 sm:p-6 rounded-lg flex items-start hover:shadow-md transition">
              <div className="bg-teal-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                <FaAward className="text-teal-600 text-lg sm:text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Achievements</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3">Our accomplishments</p>
                <a href="#" className="text-teal-600 font-medium flex items-center text-sm sm:text-base">
                  Our achievements <FaChevronRight className="ml-1 text-xs sm:text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 xl:pr-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">About Your Campus</h2>
              <p className="text-gray-600 mb-6">
                Established in 1990, Your Campus has been a pioneer in providing quality education in Nepal. 
                We are committed to academic excellence, research innovation, and holistic student development.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-1.5 sm:p-2 rounded-full mr-3 sm:mr-4">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">50+ Academic Programs</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">From undergraduate to postgraduate studies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-1.5 sm:p-2 rounded-full mr-3 sm:mr-4">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">200+ Qualified Faculty</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Experts in their respective fields</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-1.5 sm:p-2 rounded-full mr-3 sm:mr-4">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">10,000+ Alumni</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Making an impact worldwide</p>
                  </div>
                </div>
              </div>
              <button className="mt-6 sm:mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md font-bold transition text-sm sm:text-base">
                Learn More About Us
              </button>
            </div>
            <div className="lg:w-1/2 relative w-full">
              <div className="bg-indigo-600 rounded-lg overflow-hidden shadow-xl aspect-video">
                <img 
                  src="https://res.cloudinary.com/djawl4mki/image/upload/v1743701362/campu_ahjzds.jpg" 
                  alt="Your Campus Building" 
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">Our Campus Tour</h3>
                  <p className="text-white/90 text-sm sm:text-base mb-2 sm:mb-4">Experience our world-class facilities</p>
                  <button className="flex items-center text-white font-medium text-sm sm:text-base">
                    Watch Video Tour <FaChevronRight className="ml-2 text-xs sm:text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">Our Academic Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              We offer a wide range of programs designed to meet the needs of today's students and tomorrow's leaders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Science & Technology", icon: "🔬", count: 12 },
              { title: "Business Studies", icon: "💼", count: 8 },
              { title: "Humanities & Social Sciences", icon: "📚", count: 10 },
              { title: "Education", icon: "✏️", count: 6 },
              { title: "Law", icon: "⚖️", count: 4 },
              { title: "Health Sciences", icon: "🏥", count: 7 }
            ].map((program, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 h-2"></div>
                <div className="p-4 sm:p-6">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{program.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{program.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">Explore our {program.count} programs in this faculty</p>
                  <a href="#" className="text-indigo-600 font-medium flex items-center text-sm sm:text-base">
                    View programs <FaChevronRight className="ml-1 sm:ml-2 text-xs sm:text-sm" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md font-bold transition text-sm sm:text-base">
              View All Programs
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="p-4 sm:p-6">
              <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">30+</div>
              <div className="text-indigo-300 font-medium text-sm sm:text-base">Years of Excellence</div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">5,000+</div>
              <div className="text-indigo-300 font-medium text-sm sm:text-base">Current Students</div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">200+</div>
              <div className="text-indigo-300 font-medium text-sm sm:text-base">Faculty Members</div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">50+</div>
              <div className="text-indigo-300 font-medium text-sm sm:text-base">Academic Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">News & Events</h2>
              <p className="text-gray-600 text-sm sm:text-base">Stay updated with the latest happenings at Your Campus</p>
            </div>
            <button className="mt-3 sm:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md font-bold transition text-sm sm:text-base">
              View All News
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { 
                title: "Annual Science Fair 2024", 
                date: "June 15, 2024", 
                excerpt: "Join us for our biggest science exhibition featuring student projects and guest lectures.",
                type: "Event"
              },
              { 
                title: "New Computer Lab Inauguration", 
                date: "May 28, 2024", 
                excerpt: "Our campus has added a state-of-the-art computer lab with latest technologies.",
                type: "News"
              },
              { 
                title: "Admission Open for Fall 2024", 
                date: "May 15, 2024", 
                excerpt: "Applications are now open for all undergraduate and postgraduate programs.",
                type: "Announcement"
              }
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="h-48 sm:h-56 bg-gray-200 relative">
                  <img 
                    src={`https://res.cloudinary.com/djawl4mki/image/upload/v1743701615/shutterstock_2314386007_jc3hdr.webp`} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-indigo-600 text-white px-2 py-1 rounded text-xs sm:text-sm font-medium">
                    {item.type}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">{item.date}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{item.excerpt}</p>
                  <a href="#" className="text-indigo-600 font-medium flex items-center text-sm sm:text-base">
                    Read more <FaChevronRight className="ml-1 sm:ml-2 text-xs sm:text-sm" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Hear from our students about their experiences at Your Campus.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                name: "Ramesh Shrestha",
                role: "BSc CSIT Graduate",
                quote: "The faculty and facilities at Your helped me secure a job at a top tech company right after graduation.",
                image: "https://res.cloudinary.com/djawl4mki/image/upload/v1743700795/stu_ycq1vu.jpg"              },
              {
                name: "Sita Gurung",
                role: "MBA Student",
                quote: "The practical approach to business education here gave me the confidence to start my own venture.",
                image: "https://res.cloudinary.com/djawl4mki/image/upload/v1743700795/stu_ycq1vu.jpg"              },
              {
                name: "Hari Basnet",
                role: "BBA Graduate",
                quote: "The campus life and extracurricular activities made my college experience truly memorable.",
                image: "https://res.cloudinary.com/djawl4mki/image/upload/v1743700795/stu_ycq1vu.jpg"              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="flex items-center mb-4 sm:mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-sm sm:text-base mb-4 sm:mb-6">"{testimonial.quote}"</p>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-indigo-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their lives through education at Your Campus.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="bg-white text-indigo-800 hover:bg-gray-100 px-6 py-2 sm:px-8 sm:py-3 rounded-md font-bold transition text-sm sm:text-base">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/20 px-6 py-2 sm:px-8 sm:py-3 rounded-md font-bold transition text-sm sm:text-base">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center">
                <span className="text-blue-400">Your</span> Campus
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                Providing quality education since 1990. Committed to academic excellence and student success.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-gray-700 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition">
                  <FaFacebookF className="text-xs sm:text-sm" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition">
                  <FaTwitter className="text-xs sm:text-sm" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition">
                  <FaInstagram className="text-xs sm:text-sm" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition">
                  <FaLinkedinIn className="text-xs sm:text-sm" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-6">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition text-sm sm:text-base">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition text-sm sm:text-base">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition text-sm sm:text-base">Academic Programs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition text-sm sm:text-base">Admissions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition text-sm sm:text-base">Research</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition text-sm sm:text-base">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-6">Contact Info</h4>
              <address className="not-italic text-gray-400 space-y-2 sm:space-y-3 text-sm sm:text-base">
                <p className="flex items-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Your Marg, Kathmandu, Nepal
                </p>
                <p className="flex items-center">
                  <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-blue-400" />
                  +977-1-XXXXXXX
                </p>
                <p className="flex items-center">
                  <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-blue-400" />
                  info@campus.edu.np
                </p>
              </address>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-6">Newsletter</h4>
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
                Subscribe to our newsletter for the latest updates and news.
              </p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm sm:text-base"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 px-3 py-2 sm:px-4 sm:py-3 rounded-r-md font-medium transition text-sm sm:text-base"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-0">
              © {new Date().getFullYear()} Your Campus. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition text-xs sm:text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition text-xs sm:text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white transition text-xs sm:text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;