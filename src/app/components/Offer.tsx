'use client'
import React from 'react'


type Offer = {
  title: string;
  description: string;
}

const SpecialOffers: React.FC = () => {
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const offers: Offer[] = [
  {
    title: 'Happy Hour',
    description:'5PM to 7PM Get all drinks at 50% off'
  },
 
  {
    title: 'Family Meal Deals',
    description:'Order 2 Main Courses and get the family deals copoun code'
  },

  {
    title: 'Weekly Brunch',
    description:'Enjoy a free complimentary drink'
  },
] ;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleOfferClick = (description: string) => {
  alert(description);
}






return (
<section className='py-10'>
<div className='container mx-auto text-center'>
  <h2 className='text-4xl font-bold mb-6 text-white'>Special Offer's</h2>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
    {offers.map ((offer, index) => (
      <button key={index}
      onClick={() => handleOfferClick(offer.description)}
      className='bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105'>
<h3 className='text-2xl font-semibold text-yellow-700 underline'>{offer.title}</h3>
<p className='text-slate-900 mt-3'>{offer.description}</p>        
      </button>
    ))}

</div>
</div>
</section>
)
}

export default SpecialOffers



