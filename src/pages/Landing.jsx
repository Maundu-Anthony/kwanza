import React, { useState } from 'react';

export default function Landing() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleHostRegistration(e) {
    e.preventDefault();
    // Minimal stub: collect some values and log them
    const form = e.target;
    const data = new FormData(form);
    const obj = Object.fromEntries(data.entries());
    console.log('Host registration submitted', obj);
    alert('Host application submitted (demo). Check console for data.');
    form.reset();
  }

  function searchExperiences() {
    const q = document.getElementById('search-input')?.value || '';
    console.log('Searching experiences for', q);
    alert('Search (demo): ' + q);
  }

  function clearFilters() {
    (document.querySelectorAll('#location-filter, #culture-filter, #activity-filter, #duration-filter, #sort-filter') || []).forEach((el) => {
      if (el) el.value = '';
    });
    const input = document.getElementById('search-input');
    if (input) input.value = '';
    console.log('Filters cleared');
  }

  function quickFilter(activity, culture) {
    console.log('Quick filter', activity, culture);
    alert('Quick filter (demo): ' + activity + ' ' + culture);
  }

  // Removed unused helper functions to clear ESLint warnings

  // Import all images from src/images (webpack require.context)
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/)).slice(0, 10);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  function openLightbox(idx) {
    setLightboxIndex(idx);
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    setLightboxIndex(-1);
    document.body.style.overflow = '';
  }

  React.useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' && lightboxIndex > -1) setLightboxIndex((i) => Math.min(images.length - 1, i + 1));
      if (e.key === 'ArrowLeft' && lightboxIndex > -1) setLightboxIndex((i) => Math.max(0, i - 1));
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, images.length]);

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-red-600">🏠 Kwanza</div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="nav-link text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">Home</a>
                <a href="#about" className="nav-link text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">About</a>
                <a href="#services" className="nav-link text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">Services</a>
                <a href="#reviews" className="nav-link text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">Reviews</a>
                <a href="#gallery" className="nav-link text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">Gallery</a>
                <a href="#how-it-works" className="nav-link text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">How It Works</a>
                <a href="#blog" className="nav-link text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">Blog</a>
                <a href="#contact" className="nav-link text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">Contact</a>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gray-700 hover:text-red-600 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div id="mobile-menu" className={`${mobileOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform md:hidden fixed top-16 right-0 h-full w-64 bg-white shadow-lg`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600" onClick={() => setMobileOpen(false)}>Home</a>
            <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600" onClick={() => setMobileOpen(false)}>About</a>
            <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600" onClick={() => setMobileOpen(false)}>Services</a>
            <a href="#reviews" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600" onClick={() => setMobileOpen(false)}>Reviews</a>
            <a href="#gallery" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600" onClick={() => setMobileOpen(false)}>Gallery</a>
            <a href="#how-it-works" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600" onClick={() => setMobileOpen(false)}>How It Works</a>
            <a href="#blog" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600" onClick={() => setMobileOpen(false)}>Blog</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600" onClick={() => setMobileOpen(false)}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-full bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-red-500 rounded-full opacity-15 animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-green-400 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-orange-400 rounded-full opacity-10"></div>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up text-white">
              <div className="inline-flex items-center bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="mr-2">🌟</span>
                Authentic Cultural Experiences
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Discover the 
                <span className="text-yellow-400">Heart</span> of 
                <span className="text-red-400">Kenya</span>
              </h1>
              <div className="text-3xl md:text-4xl font-semibold text-emerald-200 mt-4">
                Through <span className="text-yellow-400">Local Eyes</span>
              </div>
              <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed">
                Connect with local families, discover diverse tribal traditions, and experience the warmth of Kenyan hospitality through authentic cultural exchanges.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center text-emerald-200">
                  <span className="text-yellow-400 mr-3 text-xl">🏠</span>
                  <span>Stay with Local Families</span>
                </div>
                <div className="flex items-center text-emerald-200">
                  <span className="text-red-400 mr-3 text-xl">🎨</span>
                  <span>Learn Traditional Crafts</span>
                </div>
                <div className="flex items-center text-emerald-200">
                  <span className="text-green-400 mr-3 text-xl">🍽️</span>
                  <span>Authentic Cooking Classes</span>
                </div>
                <div className="flex items-center text-emerald-200">
                  <span className="text-orange-400 mr-3 text-xl">🗣️</span>
                  <span>Language Exchange</span>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                <button onClick={() => scrollToSection('services')} className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:from-yellow-400 hover:to-orange-400 transition duration-300 transform hover:scale-105 shadow-lg">
                  🌍 Explore Experiences
                </button>
                <button onClick={() => scrollToSection('host-registration')} className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-900 transition duration-300 transform hover:scale-105">
                  🏡 Become a Host
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500">
                <div className="text-center">
                  <div className="flex justify-center space-x-2 mb-6">
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                    <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                    <div className="w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></div>
                  </div>

                  <div className="text-8xl mb-6">🇰🇪</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Karibu Kenya!</h3>
                  <p className="text-gray-700 mb-6">Join over 500+ travelers who've discovered authentic Kenya through our cultural homestays</p>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">40+</div>
                      <div className="text-sm text-gray-600">Tribes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">200+</div>
                      <div className="text-sm text-gray-600">Hosts</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-600">4.9★</div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 bg-yellow-400 text-black px-3 py-2 rounded-full text-sm font-bold transform -rotate-12 shadow-lg">
                Hakuna Matata! 🦁
              </div>
              <div className="absolute -bottom-4 -right-4 bg-red-500 text-white px-3 py-2 rounded-full text-sm font-bold transform rotate-12 shadow-lg">
                Asante Sana! 🙏
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Experience Kenyan Culture</h2>
              <h3 className="text-2xl text-red-600 mb-6">Embrace authentic cultural journeys</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Kwanza connects you with local hosts across Kenya for immersive cultural experiences. Our platform empowers Kenyan households, particularly women, to become cultural entrepreneurs, ensuring that tourism revenue benefits local communities directly.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Engage in authentic culinary sessions, artisan crafts, and language exchanges while supporting sustainable travel and preserving cultural heritage. Join us in redefining travel as a meaningful cultural exchange.
              </p>
              <button onClick={() => scrollToSection('contact')} className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">Get in Touch</button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-100 to-yellow-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🇰🇪</div>
                  <p className="text-xl font-semibold text-gray-800">Authentic Kenyan Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Gallery</h2>
            <p className="text-lg text-gray-600">A selection of moments from our hosts and experiences</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {images.map((src, idx) => (
              <div key={idx} className="w-full h-40 md:h-48 overflow-hidden rounded-lg bg-gray-100 cursor-pointer" onClick={() => openLightbox(idx)}>
                <img src={src} alt={`gallery-${idx + 1}`} className="w-full h-full object-cover transform hover:scale-105 transition duration-300" />
              </div>
            ))}
          </div>

          {/* Lightbox modal */}
          {lightboxIndex > -1 && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4" onClick={closeLightbox} role="dialog" aria-modal="true">
              <button aria-label="Close" className="absolute top-6 right-6 text-white text-2xl font-bold" onClick={closeLightbox}>×</button>
              <div className="max-w-[90%] max-h-[90%]">
                <img src={images[lightboxIndex]} alt={`gallery-large-${lightboxIndex + 1}`} className="w-full h-full object-contain rounded-md shadow-2xl" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Host Registration Section */}
      <section id="host-registration" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Become a Host</h2>
            <p className="text-xl text-gray-600">Join our community of cultural entrepreneurs and share your heritage</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Host with Kwanza?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><span className="text-green-600 mr-2">✓</span>Earn income by sharing your culture</li>
                  <li className="flex items-start"><span className="text-green-600 mr-2">✓</span>Empower women in your community</li>
                  <li className="flex items-start"><span className="text-green-600 mr-2">✓</span>Preserve and celebrate Kenyan heritage</li>
                  <li className="flex items-start"><span className="text-green-600 mr-2">✓</span>Connect with travelers from around the world</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl p-6 text-center">
                <div className="text-6xl mb-4">🏠</div>
                <p className="text-lg font-semibold text-gray-800">Share Your Home, Share Your Culture</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleHostRegistration}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="host-name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" id="host-name" name="host-name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="host-phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="host-phone" name="host-phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="host-email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="host-email" name="host-email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="host-location" className="block text-sm font-medium text-gray-700 mb-2">Location (County/Town)</label>
                  <input type="text" id="host-location" name="host-location" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
              </div>

              <div>
                <label htmlFor="host-experience" className="block text-sm font-medium text-gray-700 mb-2">What cultural experiences can you offer?</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <label className="flex items-center"><input type="checkbox" name="experiences" value="cooking" className="mr-2 text-green-600" />Traditional Cooking</label>
                  <label className="flex items-center"><input type="checkbox" name="experiences" value="crafts" className="mr-2 text-green-600" />Artisan Crafts</label>
                  <label className="flex items-center"><input type="checkbox" name="experiences" value="language" className="mr-2 text-green-600" />Language Exchange</label>
                  <label className="flex items-center"><input type="checkbox" name="experiences" value="farming" className="mr-2 text-green-600" />Traditional Farming</label>
                  <label className="flex items-center"><input type="checkbox" name="experiences" value="music" className="mr-2 text-green-600" />Music & Dance</label>
                  <label className="flex items-center"><input type="checkbox" name="experiences" value="storytelling" className="mr-2 text-green-600" />Storytelling</label>
                </div>
              </div>

              <div>
                <label htmlFor="host-description" className="block text-sm font-medium text-gray-700 mb-2">Tell us about yourself and your home</label>
                <textarea id="host-description" name="host-description" rows="4" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Describe your family, your home, and what makes your cultural experience unique..."></textarea>
              </div>

              <button type="submit" className="w-full bg-green-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300">Submit Host Application</button>
            </form>
          </div>
        </div>
      </section>

      {/* Advanced Search & Filter Section (partial - preserved markup) */}
      <section id="search-experiences" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Cultural Experience</h2>
            <p className="text-xl text-gray-600">Search and filter through authentic Kenyan experiences</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">📍 Location</label>
                <select id="location-filter" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">All Locations</option>
                  <option value="central">Central Kenya</option>
                  <option value="western">Western Kenya</option>
                  <option value="eastern">Eastern Kenya</option>
                  <option value="rift-valley">Rift Valley</option>
                  <option value="northern">Northern Kenya</option>
                  <option value="coastal">Coastal Kenya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">🏛️ Culture</label>
                <select id="culture-filter" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">All Cultures</option>
                  <option value="kikuyu">Kikuyu</option>
                  <option value="luo">Luo</option>
                  <option value="maasai">Maasai</option>
                  <option value="kalenjin">Kalenjin</option>
                  <option value="kamba">Kamba</option>
                  <option value="turkana">Turkana</option>
                  <option value="mijikenda">Mijikenda</option>
                  <option value="samburu">Samburu</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">🎯 Activity</label>
                <select id="activity-filter" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">All Activities</option>
                  <option value="cooking">Cooking</option>
                  <option value="crafts">Crafts</option>
                  <option value="language">Language</option>
                  <option value="farming">Farming</option>
                  <option value="music">Music & Dance</option>
                  <option value="spiritual">Spiritual</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">⏰ Duration</label>
                <select id="duration-filter" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Any Duration</option>
                  <option value="half-day">Half Day (4 hours)</option>
                  <option value="full-day">Full Day (8 hours)</option>
                  <option value="2-3-days">2-3 Days</option>
                  <option value="week">1 Week</option>
                  <option value="extended">Extended Stay</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input type="text" id="search-input" placeholder="Search experiences, hosts, or activities..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <button onClick={searchExperiences} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">🔍 Search Experiences</button>
              <button onClick={clearFilters} className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition duration-300">Clear Filters</button>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-3">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => quickFilter('cooking', 'maasai')} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm hover:bg-red-200 transition duration-300">Maasai Cooking</button>
                <button onClick={() => quickFilter('crafts', 'kikuyu')} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm hover:bg-green-200 transition duration-300">Kikuyu Crafts</button>
                <button onClick={() => quickFilter('music', 'luo')} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition duration-300">Luo Music</button>
                <button onClick={() => quickFilter('farming', 'kalenjin')} className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm hover:bg-yellow-200 transition duration-300">Kalenjin Farming</button>
                <button onClick={() => quickFilter('language', '')} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm hover:bg-purple-200 transition duration-300">Language Learning</button>
              </div>
            </div>
          </div>

          <div id="results-summary" className="bg-white rounded-lg p-4 mb-8 shadow-md">
            <div className="flex justify-between items-center">
              <span id="results-count" className="text-gray-700 font-medium">Showing all 24 experiences</span>
              <div className="flex items-center space-x-4">
                <label className="text-sm text-gray-600">Sort by:</label>
                <select id="sort-filter" className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500">
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="duration">Duration</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services section and the rest of the original markup would follow here; truncated to match provided content */}
    </div>
  );
}
