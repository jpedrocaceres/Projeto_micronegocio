import React, { useState, useEffect, useMemo } from 'react';
import { 
  FiScissors, 
  FiClock, 
  FiMapPin, 
  FiPhone, 
  FiStar,
  FiCalendar,
  FiUser,
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiCheck,
  FiDollarSign,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiAlertCircle
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

// Constants for better organization
const BUSINESS_INFO = {
  name: "Elite Cuts",
  phone: "(555) 123-CUTS",
  email: "info@elitecuts.com",
  address: "123 Main Street\nDowntown City, ST 12345",
  hours: {
    weekdays: "Monday - Friday: 9:00 AM - 7:00 PM",
    saturday: "Saturday: 8:00 AM - 6:00 PM",
    sunday: "Sunday: 10:00 AM - 4:00 PM"
  },
  socialMedia: {
    instagram: "https://instagram.com/elitecuts",
    facebook: "https://facebook.com/elitecuts",
    twitter: "https://twitter.com/elitecuts",
    whatsapp: "https://wa.me/15551234567"
  }
};

const BarberShopApp = () => {
  // State management
  const [darkMode, setDarkMode] = useState(() => {
    // Check user's preferred color scheme
    return localStorage.getItem('darkMode') === 'true' || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<'home' | 'services' | 'barbers' | 'booking' | 'contact'>('home');
  const [bookingForm, setBookingForm] = useState<{
    name: string;
    phone: string;
    service: string;
    date: string;
    time: string;
    barber: string;
  }>({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    barber: ''
  });
  const [formErrors, setFormErrors] = useState<{
    name?: string | null;
    phone?: string | null;
    service?: string | null;
    date?: string | null;
    time?: string | null;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  // Services data
  const services = useMemo(() => [
    {
      id: 1,
      name: 'Classic Haircut',
      price: 25,
      duration: '30 min',
      description: 'Traditional scissor cut with styling',
      image: '✂️',
      popular: true
    },
    {
      id: 2,
      name: 'Beard Trim',
      price: 15,
      duration: '20 min',
      description: 'Professional beard shaping and trimming',
      image: '🧔'
    },
    {
      id: 3,
      name: 'Hot Shave',
      price: 30,
      duration: '45 min',
      description: 'Traditional straight razor shave with hot towel',
      image: '🪒',
      popular: true
    },
    {
      id: 4,
      name: 'Hair Wash',
      price: 12,
      duration: '15 min',
      description: 'Premium shampoo and conditioning treatment',
      image: '🧴'
    },
    {
      id: 5,
      name: 'The Full Service',
      price: 55,
      duration: '75 min',
      description: 'Haircut, beard trim, and hot shave combo',
      image: '👑',
      popular: true
    },
    {
      id: 6,
      name: 'Kids Cut',
      price: 20,
      duration: '25 min',
      description: 'Special haircut service for children',
      image: '👶'
    }
  ], []);

  // Barbers data
  const barbers = useMemo(() => [
    {
      id: 1,
      name: 'Mike Rodriguez',
      specialty: 'Classic Cuts',
      experience: '8 years',
      rating: 4.9,
      image: '👨‍🦲',
      bio: 'Specializes in traditional men\'s haircuts with a modern twist.'
    },
    {
      id: 2,
      name: 'James Wilson',
      specialty: 'Beard Styling',
      experience: '6 years',
      rating: 4.8,
      image: '👨‍🦳',
      bio: 'Beard grooming expert with an eye for detail and symmetry.'
    },
    {
      id: 3,
      name: 'Carlos Santos',
      specialty: 'Modern Styles',
      experience: '10 years',
      rating: 5.0,
      image: '👨',
      bio: 'Master of contemporary styles and creative hair designs.'
    }
  ], []);

  // Generate time slots
  const timeSlots = useMemo(() => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      if (hour === 12) continue; // Skip lunch hour
      slots.push(`${hour}:00 ${hour < 12 ? 'AM' : 'PM'}`);
      if (hour < 17) {
        slots.push(`${hour}:30 ${hour < 12 ? 'AM' : 'PM'}`);
      }
    }
    return slots;
  }, []);

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  // Form validation
  const validateForm = () => {
    const errors: { [key: string]: string | null } = {};
    if (!bookingForm.name.trim()) errors.name = 'Name is required';
    if (!bookingForm.phone.trim()) errors.phone = 'Phone is required';
    if (!bookingForm.service) errors.service = 'Service is required';
    if (!bookingForm.date) errors.date = 'Date is required';
    if (!bookingForm.time) errors.time = 'Time is required';
    return errors;
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is filled
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  // Handle form submission
  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      const bookingFormElem = document.getElementById('booking-form');
      if (bookingFormElem) {
        window.scrollTo({
          top: bookingFormElem.offsetTop - 100,
          behavior: 'smooth'
        });
      }
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setBookingSuccess(true);
      setBookingForm({
        name: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        barber: ''
      });
      
      // Scroll to success message
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } catch (error) {
      console.error('Booking error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Navigation menu component
  const NavigationMenu = () => (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#001057] to-blue-600 rounded-lg flex items-center justify-center">
              <FiScissors className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">{BUSINESS_INFO.name}</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Barber Shop</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {['home', 'services', 'barbers', 'booking', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section as 'home' | 'services' | 'barbers' | 'booking' | 'contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                  activeSection === section
                    ? 'bg-[#001057] text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:text-[#001057] dark:hover:text-blue-400'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-2">
              {['home', 'services', 'barbers', 'booking', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section as 'home' | 'services' | 'barbers' | 'booking' | 'contact');
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors capitalize text-left ${
                    activeSection === section
                      ? 'bg-[#001057] text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  // Home section component
  const HomeSection = () => (
    <div className="bg-gradient-to-br from-[#001057] via-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-20">
        {bookingSuccess && (
          <div className="mb-8 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg">
            <p className="font-medium">Your booking request has been submitted! We'll confirm your appointment soon.</p>
          </div>
        )}
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
              Premium Barber Experience
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-blue-100">
              Step into {BUSINESS_INFO.name} where tradition meets modern style. Our master barbers deliver precision cuts and classic grooming services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  setActiveSection('booking');
                  const bookingFormElem = document.getElementById('booking-form');
                  if (bookingFormElem) {
                    window.scrollTo({
                      top: bookingFormElem.offsetTop - 100,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="bg-white text-[#001057] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Appointment
              </button>
              <button
                onClick={() => setActiveSection('services')}
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#001057] transition-colors"
              >
                View Services
              </button>
            </div>
          </div>
          <div className="text-center">
            <div className="text-8xl sm:text-9xl">✂️</div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-blue-200">Years</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-blue-200">Clients</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-sm text-blue-200">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Services section component
  const ServicesSection = () => (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From classic cuts to modern styling, we offer a full range of professional grooming services
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border ${
                service.popular 
                  ? 'border-[#001057] dark:border-blue-600 ring-2 ring-[#001057]/10 dark:ring-blue-600/10' 
                  : 'border-gray-200 dark:border-gray-700'
              } overflow-hidden relative`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-[#001057] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Popular
                </div>
              )}
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{service.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {service.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-[#001057] dark:text-blue-400">
                    <FiDollarSign className="w-4 h-4" />
                    <span className="font-bold text-lg">{service.price}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <FiClock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setActiveSection('booking');
                    setBookingForm(prev => ({ ...prev, service: service.name }));
                    const bookingFormElem = document.getElementById('booking-form');
                    if (bookingFormElem) {
                      window.scrollTo({
                        top: bookingFormElem.offsetTop - 100,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="w-full bg-[#001057] text-white py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Barbers section component
  const BarbersSection = () => (
    <div className="bg-white dark:bg-gray-800 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Barbers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our skilled professionals bring years of experience and passion for the craft
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {barbers.map((barber) => (
            <div
              key={barber.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="text-6xl mb-4">{barber.image}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {barber.name}
              </h3>
              <p className="text-[#001057] dark:text-blue-400 font-medium mb-2">
                {barber.specialty}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                {barber.experience} experience
              </p>
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(barber.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  {barber.rating}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {barber.bio}
              </p>
              <button
                onClick={() => {
                  setActiveSection('booking');
                  setBookingForm(prev => ({ ...prev, barber: barber.name }));
                  const bookingFormElem = document.getElementById('booking-form');
                  if (bookingFormElem) {
                    window.scrollTo({
                      top: bookingFormElem.offsetTop - 100,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="bg-[#001057] text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                Book with {barber.name.split(' ')[0]}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Booking section component
  const BookingSection = () => (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Book Your Appointment
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Schedule your visit with our professional barbers
          </p>
        </div>

        <div 
          id="booking-form"
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700"
        >
          <form onSubmit={handleBookingSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={bookingForm.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      formErrors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-[#001057] focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-colors`}
                    placeholder="Enter your name"
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                      <FiAlertCircle className="mr-1" /> {formErrors.name}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={bookingForm.phone}
                    onChange={handleInputChange}
                    required
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      formErrors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-[#001057] focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-colors`}
                    placeholder="(555) 123-4567"
                  />
                  {formErrors.phone && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                      <FiAlertCircle className="mr-1" /> {formErrors.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Service
              </label>
              <select
                name="service"
                value={bookingForm.service}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 rounded-lg border ${
                  formErrors.service ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-[#001057] focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-colors`}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.name}>
                    {service.name} - ${service.price} ({service.duration})
                  </option>
                ))}
              </select>
              {formErrors.service && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                  <FiAlertCircle className="mr-1" /> {formErrors.service}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Preferred Barber
              </label>
              <select
                name="barber"
                value={bookingForm.barber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-[#001057] focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-colors"
              >
                <option value="">Any available barber</option>
                {barbers.map((barber) => (
                  <option key={barber.id} value={barber.name}>
                    {barber.name} - {barber.specialty}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Date
                </label>
                <div className="relative">
                  <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    name="date"
                    value={bookingForm.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      formErrors.date ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-[#001057] focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-colors`}
                  />
                  {formErrors.date && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                      <FiAlertCircle className="mr-1" /> {formErrors.date}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Time
                </label>
                <select
                  name="time"
                  value={bookingForm.time}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    formErrors.time ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-[#001057] focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-colors`}
                >
                  <option value="">Select time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {formErrors.time && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <FiAlertCircle className="mr-1" /> {formErrors.time}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#001057] to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-800 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <FiCheck className="w-5 h-5" />
                  <span>Book Appointment</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  // Contact section component
  const ContactSection = () => (
    <div className="bg-white dark:bg-gray-800 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Visit Our Shop
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Located in the heart of downtown, easy to find and plenty of parking
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#001057] rounded-lg flex items-center justify-center flex-shrink-0">
                <FiMapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Address
                </h3>
                <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                  {BUSINESS_INFO.address}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#001057] rounded-lg flex items-center justify-center flex-shrink-0">
                <FiClock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Hours
                </h3>
                <div className="text-gray-600 dark:text-gray-400 space-y-1">
                  <p>{BUSINESS_INFO.hours.weekdays}</p>
                  <p>{BUSINESS_INFO.hours.saturday}</p>
                  <p>{BUSINESS_INFO.hours.sunday}</p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#001057] rounded-lg flex items-center justify-center flex-shrink-0">
                <FiPhone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Contact
                </h3>
                <div className="text-gray-600 dark:text-gray-400 space-y-1">
                  <p>{BUSINESS_INFO.phone}</p>
                  <p>{BUSINESS_INFO.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Follow Us
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <a
                href={BUSINESS_INFO.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#001057] hover:text-[#001057] dark:hover:text-blue-400 transition-colors group"
              >
                <FiInstagram className="w-6 h-6 mb-2" />
                <span className="text-sm font-medium">Instagram</span>
              </a>
              <a
                href={BUSINESS_INFO.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#001057] hover:text-[#001057] dark:hover:text-blue-400 transition-colors group"
              >
                <FiFacebook className="w-6 h-6 mb-2" />
                <span className="text-sm font-medium">Facebook</span>
              </a>
              <a
                href={BUSINESS_INFO.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#001057] hover:text-[#001057] dark:hover:text-blue-400 transition-colors group"
              >
                <FiTwitter className="w-6 h-6 mb-2" />
                <span className="text-sm font-medium">Twitter</span>
              </a>
              <a
                href={BUSINESS_INFO.socialMedia.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#001057] hover:text-[#001057] dark:hover:text-blue-400 transition-colors group"
              >
                <FaWhatsapp className="w-6 h-6 mb-2" />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🏪</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Walk-ins welcome, but appointments are recommended for the best experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render the appropriate section
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'services':
        return <ServicesSection />;
      case 'barbers':
        return <BarbersSection />;
      case 'booking':
        return <BookingSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <NavigationMenu />
      {renderSection()}
      
      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-[#001057] to-blue-600 rounded-lg flex items-center justify-center">
              <FiScissors className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold">{BUSINESS_INFO.name}</span>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            {['home', 'services', 'barbers', 'booking', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section as 'home' | 'services' | 'barbers' | 'booking' | 'contact')}
                className="text-gray-400 hover:text-white transition-colors capitalize"
              >
                {section}
              </button>
            ))}
          </div>
          
          <div className="flex justify-center space-x-4 mb-6">
            <a href={BUSINESS_INFO.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FiInstagram className="w-5 h-5" />
            </a>
            <a href={BUSINESS_INFO.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FiFacebook className="w-5 h-5" />
            </a>
            <a href={BUSINESS_INFO.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FiTwitter className="w-5 h-5" />
            </a>
            <a href={BUSINESS_INFO.socialMedia.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BarberShopApp;