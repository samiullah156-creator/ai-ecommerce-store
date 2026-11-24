import React from 'react';
import Hero from '../components/Home/Hero';
import FeaturedProducts from '../components/Product/FeaturedProducts';

const Home: React.FC = () => {
  return (
    <main className="flex-grow">
      <Hero />
      <FeaturedProducts />
      
      {/* Newsletter / Extra Section (Bonus for aesthetics) */}
      <section className="py-20 bg-aura-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
           <h2 className="text-3xl font-heading font-bold mb-6">Join the Revolution</h2>
           <p className="mb-8 text-gray-300 max-w-xl mx-auto">
             Subscribe to our newsletter to get the latest updates on new tech drops and exclusive offers.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
             <input 
               type="email" 
               placeholder="Enter your email" 
               className="px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-aura-blue flex-grow"
             />
             <button className="bg-aura-blue hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-colors">
               Subscribe
             </button>
           </div>
        </div>
      </section>
    </main>
  );
};

export default Home;