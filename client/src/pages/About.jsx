import React from 'react';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <section className='text-center mb-16'>
        <h1 className='text-4xl font-extrabold text-slate-800 mb-6'>Welcome to Dream Estate</h1>
        <p className='text-xl text-slate-600'>Your Trusted Partner in Real Estate</p>
      </section>

      {/* Hero Image or Video */}
      <div className='mb-12'>
        <img src='/images/real-estate-banner.jpg' alt='Dream Estate' className='w-full h-auto rounded-lg shadow-lg'/>
        {/* Optionally, replace with a short video that highlights the agency’s services */}
      </div>

      {/* Company Overview */}
      <section className='mb-16'>
        <h2 className='text-3xl font-semibold text-slate-800 mb-4'>About Us</h2>
        <p className='text-lg text-slate-700 leading-relaxed'>
          Dream Estate is a premier real estate agency committed to connecting people with their ideal properties. 
          Whether you're buying your first home, selling a property, or seeking a rental in a prime location, 
          our expert agents are here to guide you through the process with personalized service and local market expertise.
        </p>
      </section>

      {/* Core Values with Icons */}
      <section className='mb-16'>
        <h2 className='text-3xl font-semibold text-slate-800 mb-6'>Our Core Values</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {[
            { icon: 'integrity-icon.png', title: 'Integrity', description: 'Honesty and transparency in every transaction.' },
            { icon: 'excellence-icon.png', title: 'Excellence', description: 'We strive for perfection in all we do.' },
            { icon: 'client-icon.png', title: 'Client Focused', description: 'Your satisfaction is our top priority.' },
            { icon: 'local-icon.png', title: 'Local Expertise', description: 'Deep knowledge of the market and trends.' },
          ].map((value, index) => (
            <div key={index} className='text-center'>
              <img src={`/images/${value.icon}`} alt={value.title} className='w-16 h-16 mx-auto mb-4'/>
              <h3 className='text-xl font-bold text-slate-800'>{value.title}</h3>
              <p className='text-slate-600'>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Team Section */}
      <section className='mb-16'>
        <h2 className='text-3xl font-semibold text-slate-800 mb-6'>Meet Our Team</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[
            { name: 'John Smith', title: 'Senior Agent', image: 'john-smith.jpg' },
            { name: 'Emily Brown', title: 'Lead Agent', image: 'emily-brown.jpg' },
            { name: 'Michael Johnson', title: 'Agent', image: 'michael-johnson.jpg' },
          ].map((agent, index) => (
            <div key={index} className='text-center'>
              <img src={`/images/${agent.image}`} alt={agent.name} className='w-32 h-32 rounded-full mx-auto mb-4'/>
              <h3 className='text-xl font-bold text-slate-800'>{agent.name}</h3>
              <p className='text-slate-600'>{agent.title}</p>
              <a href={`/images/${agent.name.toLowerCase().replace(/ /g, '-')}`} ></a>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials Carousel */}
      <section className='mb-16'>
        <h2 className='text-3xl font-semibold text-slate-800 mb-6'>What Our Clients Say</h2>
        <div className='relative'>
          {/* Carousel controls */}
          <div className='carousel'>
            {[
              { quote: 'Dream Estate helped us find our perfect home quickly and with ease.', client: 'Jane Doe' },
              { quote: 'Their market knowledge is unparalleled. Highly recommend!', client: 'John Doe' },
              { quote: 'Amazing service from start to finish.', client: 'Emily Smith' },
            ].map((testimonial, index) => (
              <div key={index} className='carousel-item text-center'>
                <blockquote className='text-xl italic text-slate-700'>{`"${testimonial.quote}"`}</blockquote>
                <p className='text-slate-600 mt-2'>— {testimonial.client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      {/* Call to Action */}
      <section className='text-center mt-16'>
        <h2 className='text-3xl font-semibold text-slate-800 mb-4'>Ready to Get Started?</h2>
        <p className='text-xl text-slate-600 mt-10'>Contact us today to explore the best properties and opportunities tailored just for you.</p>
       
      </section>
    </div>
  );
}
