import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Code2,
  Layout,
  Mail,
  Globe,
  Smartphone,
  Palette,
  Database,
  Server,
  Cpu,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Layers,
  Zap,
  Menu,
  X
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  console.log("form data-------------->", formData)
  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full Name must be at least 3 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = 'Full Name can only contain letters and spaces';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Service validation
    if (!formData.service.trim()) {
      newErrors.service = 'Please select a service';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);
      setApiMessage('');

      const res = await axios.post(
        'https://sainicollection-controller-be.onrender.com/sainicollection/v1/api/message',
        formData
      );

      if (res?.data?.success) {
        setSubmitted(true);
        setApiMessage(res.data.message || 'Message sent successfully');

        // Reset form
        setFormData({
          fullName: '',
          email: '',
          service: '',
          message: ''
        });

      } else {
        setApiMessage(res.data.message || 'Something went wrong');
      }

    } catch (error) {
      console.error('API Error:', error);
      setApiMessage('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const techStack = [
    { category: "Frontend & Design", items: ["HTML/CSS/SCSS", "React.js", "Email Templates", "UI/UX: Figma", "Photoshop", "Adobe Illustrator"] },
    { category: "Backend & CMS", items: ["Node.js", ".Net", "Python", "WordPress", "Shopify"] },
    { category: "Databases", items: ["MySQL", "MongoDB", "PostgreSQL"] }
  ];

  const services = [
    {
      title: "Website Design",
      desc: "Creating visually stunning, user-friendly, and high-converting websites tailored to your brand identity.",
      icon: <Layout className="w-8 h-8 text-blue-600" />,
      tags: ["Responsive", "Modern UI", "UX Research"]
    },
    {
      title: "Frontend Development",
      desc: "Pixel-perfect implementation using React.js and modern SCSS for robust, scalable web applications.",
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      tags: ["React.js", "Tailwind", "Performance"]
    },
    {
      title: "Backend Solutions",
      desc: "Secure and scalable server-side logic using Node.js, .NET, and Python for complex business needs.",
      icon: <Server className="w-8 h-8 text-blue-600" />,
      tags: ["Node.js", ".NET", "APIs"]
    },
    {
      title: "E-Commerce",
      desc: "Full-scale online stores built on Shopify or custom WordPress solutions to drive your sales.",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      tags: ["Shopify", "WordPress", "Payment Integration"]
    },
    {
      title: "Database Management",
      desc: "Efficient data architecture using MySQL, MongoDB, and PostgreSQL for reliable data handling.",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      tags: ["SQL", "NoSQL", "Optimization"]
    },
    {
      title: "UI/UX & Branding",
      desc: "Crafting unique identities with Figma, Photoshop, and Illustrator for posters and digital assets.",
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      tags: ["Figma", "Branding", "Visual Design"]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl font-bold tracking-tight whitespace-nowrap">SAINI <span className="text-blue-600">COLLECTION</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#tech" className="hover:text-blue-600 transition-colors">Our Tech</a>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md shadow-blue-200 cursor-pointer inline-block">
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="font-medium text-lg">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-medium text-lg">About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="font-medium text-lg">Services</a>
            <a href="#tech" onClick={() => setMobileMenuOpen(false)} className="font-medium text-lg">Our Tech</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold block text-center cursor-pointer">Get Started</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative w-full pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[80vh]">
        <div className="absolute top-0 right-0 -z-10 w-full lg:w-3/4 h-full bg-gradient-to-l from-blue-50/50 to-transparent rounded-bl-[100px] lg:rounded-bl-[200px]" />

        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
              <Zap className="w-4 h-4" /> Innovate • Transform
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
              We Build <span className="text-blue-600">Websites & Digital Tools</span> That Grow Your Business
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Elevate your online presence with high-end tech solutions. From custom websites to robust backend systems, we deliver excellence at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#services" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-100 cursor-pointer">
                Our Services <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="w-full sm:w-auto border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all bg-white text-center cursor-pointer">
                Contact Our Team
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
            <div className="bg-white p-3 sm:p-5 rounded-[2rem] sm:rounded-[3rem] shadow-2xl border border-slate-100 relative z-10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
                alt="Development Workspace"
                className="rounded-2xl sm:rounded-[2rem] w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -left-4 sm:bottom-8 sm:left-8 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-slate-50 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">99% Client Success</p>
                    <p className="text-xs sm:text-sm text-slate-500">Industry-leading solutions</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200 rounded-full blur-[80px] sm:blur-[120px] opacity-30 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-200 rounded-full blur-[80px] sm:blur-[120px] opacity-30 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 lg:py-32 bg-slate-50">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">About <span className="text-blue-600">SAINI COLLECTION</span></h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
            <p className="max-w-3xl mx-auto text-slate-600 text-base sm:text-lg leading-relaxed px-4">
              Empowering businesses through cutting-edge technology and creative digital craftsmanship since our inception. We bridge the gap between complex ideas and seamless user experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-600 italic">Our Journey</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                  Saini Collection is a young startup built on a foundation of decades of expertise. Led by a senior developer with 9+ years of industry experience, we're transforming bold ideas into powerful digital solutions. Every project we undertake reflects our commitment to excellence and innovation.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-8">
                <div>
                  <h4 className="text-blue-600 font-bold text-4xl mb-1">9+</h4>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Years Expertise</p>
                </div>
                <div>
                  <h4 className="text-blue-600 font-bold text-4xl mb-1">2</h4>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Live Projects</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 p-8 sm:p-12 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">Our Mission</h3>
              <p className="leading-relaxed opacity-90 text-lg sm:text-xl mb-12">
                "Our mission is to provide superior, world-class website design and digital solutions that empower businesses. We focus on clear communication, affordable pricing, and delivering high-quality work every single time."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <p className="font-bold text-xl mb-1">Young Team</p>
                  <p className="text-sm opacity-80">Fresh perspectives and agility</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <p className="font-bold text-xl mb-1">Quality First</p>
                  <p className="text-sm opacity-80">No compromises on standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-20 lg:py-32">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 space-y-4 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Our IT <span className="text-blue-600">Services & Tools</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg font-medium">Comprehensive solutions designed to define your business vision and drive growth.</p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 sm:p-10 rounded-[2rem] border border-slate-100 bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-50/50 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-100/50 group-hover:scale-110 transition-all duration-300">
                  <div className="transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed mb-8 min-h-[80px]">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50">
                  {service.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg group-hover:bg-blue-100 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="w-full py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500 rounded-full blur-[180px]" />
        </div>
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Our Tech <span className="text-blue-400">Mastery</span></h2>
              <p className="text-slate-400 max-w-xl text-lg lg:text-xl">We leverage the most powerful modern technologies to build stable, scalable, and beautiful digital products that stand the test of time.</p>
            </div>
            <div className="flex gap-2">
              <div className="w-16 h-2 bg-blue-500 rounded-full" />
              <div className="w-4 h-2 bg-slate-700 rounded-full" />
              <div className="w-4 h-2 bg-slate-700 rounded-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((stack, idx) => (
              <div key={idx} className="bg-slate-800/40 backdrop-blur-md p-8 sm:p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-blue-400 font-bold text-xl mb-8 flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Monitor className="w-6 h-6" />
                  </div>
                  {stack.category}
                </h3>
                <ul className="space-y-5">
                  {stack.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-center gap-4 text-slate-300 text-lg">
                      <div className="shrink-0 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 lg:py-32 bg-slate-50">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Voices of <span className="text-blue-600">Our Clients</span></h2>
            <p className="text-slate-600 text-lg mt-6 max-w-2xl mx-auto">Hear from people who trust us with their vision and digital transformation.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 sm:p-16 rounded-[2.5rem] shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex text-yellow-400 mb-8 gap-1">
                {[...Array(5)].map((_, i) => <span key={i} className="text-2xl">★</span>)}
              </div>
              <p className="text-slate-600 text-xl sm:text-2xl italic leading-relaxed mb-12">
                "Saini Collection built our inventory management portal that perfectly streamlines our car accessories and parts operations. The system is intuitive, reliable, and has significantly improved our internal workflow. Highly impressed with their technical expertise!"
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center font-bold text-blue-600 text-2xl shrink-0">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-xl sm:text-2xl">Aman Sharma</h4>
                  <p className="text-base text-slate-500 font-medium">Founder, Jai Durge Traders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 lg:py-32">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-white rounded-[3rem] lg:rounded-[4rem] shadow-2xl shadow-blue-100/50 border border-slate-100 overflow-hidden grid lg:grid-cols-5 min-h-[700px]">
            <div className="lg:col-span-2 bg-blue-600 p-8 sm:p-12 lg:p-16 text-white relative">
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">Let's Connect</h2>
                <p className="mb-12 text-lg lg:text-xl opacity-80 leading-relaxed">Ready to start your next big digital project? Fill out the form or reach out directly.</p>

                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm opacity-60 font-bold uppercase tracking-widest mb-1">Email Us</p>
                      <a href="mailto:connect@sainicollection.com" className="text-lg sm:text-xl font-semibold break-all hover:text-blue-400 transition-colors">connect@sainicollection.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm opacity-60 font-bold uppercase tracking-widest mb-1">Call Us</p>
                      <p className="text-lg sm:text-xl font-semibold">+91 78383 07318</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm opacity-60 font-bold uppercase tracking-widest mb-1">Location</p>
                      <p className="text-lg sm:text-xl font-semibold">Gurgaon, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/10">
                  <p className="text-sm opacity-60 font-bold uppercase tracking-widest mb-4">Business Hours</p>
                  <p className="text-lg font-medium opacity-90">Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
                </div>
              </div>
              {/* Background Shapes */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-32 -mt-32 blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400 rounded-full -ml-32 -mb-32 blur-[100px] opacity-20" />
            </div>

            <div className="lg:col-span-3 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-10">Send us a Message</h3>
              {apiMessage && (
                <div className="bg-green-50 border-2 border-green-500 text-green-700 p-4 rounded-2xl mb-8 font-semibold">
                  {apiMessage}
                </div>
              )}
              <form className="space-y-8" onSubmit={handleFormSubmit}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleFormChange}
                      placeholder="John Doe"
                      className={`w-full bg-slate-50 border-2 rounded-2xl p-5 focus:bg-white focus:ring-0 outline-none transition-all text-lg ${errors.fullName ? 'border-red-500' : 'border-transparent focus:border-blue-600'
                        }`}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm font-semibold">{errors.fullName}</p>}
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="connect@sainicollection.com"
                      className={`w-full bg-slate-50 border-2 rounded-2xl p-5 focus:bg-white focus:ring-0 outline-none transition-all text-lg ${errors.email ? 'border-red-500' : 'border-transparent focus:border-blue-600'
                        }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm font-semibold">{errors.email}</p>}
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Service Needed</label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleFormChange}
                      className={`w-full bg-slate-50 border-2 rounded-2xl p-5 focus:bg-white focus:ring-0 outline-none transition-all appearance-none cursor-pointer text-lg ${errors.service ? 'border-red-500' : 'border-transparent focus:border-blue-600'
                        }`}
                    >
                      <option value="">-- Select a Service --</option>
                      <option value="Web Design & UX">Web Design & UX</option>
                      <option value="Frontend Development (React)">Frontend Development (React)</option>
                      <option value="Full Stack Systems">Full Stack Systems</option>
                      <option value="E-commerce Solution">E-commerce Solution</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                      <ArrowRight className="rotate-90 w-5 h-5" />
                    </div>
                  </div>
                  {errors.service && <p className="text-red-500 text-sm font-semibold">{errors.service}</p>}
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows="5"
                    placeholder="Tell us about your project requirements..."
                    className={`w-full bg-slate-50 border-2 rounded-2xl p-5 focus:bg-white focus:ring-0 outline-none transition-all resize-none text-lg ${errors.message ? 'border-red-500' : 'border-transparent focus:border-blue-600'
                      }`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm font-semibold">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full font-bold py-6 rounded-2xl transition-all flex items-center justify-center gap-3 text-lg 
    ${loading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-100 cursor-pointer text-white'
                    }`}
                >
                  {loading ? 'Sending...' : 'Submit Proposal'}
                  {!loading && <Mail className="w-6 h-6" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-slate-950 text-white pt-24 pb-12">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-24">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-2xl">S</span>
                </div>
                <span className="text-2xl font-bold tracking-tight">SAINI COLLECTION</span>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">
                Your global partner in digital excellence. We create high-performance software and designs that drive tangible growth.
              </p>
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-all"><Globe className="w-5 h-5" /></div>
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-all"><Mail className="w-5 h-5" /></div>
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-all"><Smartphone className="w-5 h-5" /></div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-8">Services</h4>
              <ul className="space-y-5 text-slate-400 text-lg">
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Web Development</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">UI/UX Strategy</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Enterprise Apps</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">E-commerce Engines</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-8">Expertise</h4>
              <ul className="space-y-5 text-slate-400 text-lg">
                <li className="hover:text-blue-400 cursor-pointer transition-colors">React & Modern JS</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Cloud & Databases</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Creative Branding</li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">Digital Automation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-8">Connect</h4>
              <ul className="space-y-5 text-slate-400 text-lg">
                <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-blue-500" /> <a href="mailto:connect@sainicollection.com" className="hover:text-blue-400 transition-colors">connect@sainicollection.com</a></li>
                <li className="flex items-center gap-3"><Smartphone className="w-5 h-5 text-blue-500" /> +91 78383 07318</li>
                <li className="flex items-center gap-3 text-blue-500 font-semibold tracking-wide">GURGAON, INDIA</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-10 text-center text-sm text-slate-500">
            <p className="font-medium tracking-wide">© 2024 SAINI COLLECTION. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;