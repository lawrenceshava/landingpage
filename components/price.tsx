"use client"
import { useEffect } from 'react';

declare global {
  interface Window {
    paypal: any; // Extend the Window interface to include paypal
  }
}

export default function PricingPage() {
  useEffect(() => {
    // Load PayPal SDK
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=Aa8I5jZ4KHm1FR-IXa160KBKXHHEdVAvv75jaqjT8watKxZbZi_0NYZbYirESMXfzYitDDlHEzVime5-&vault=true&intent=subscription";
    script.async = true;
    script.onload = () => {
      // Render PayPal buttons after SDK is loaded
      renderPayPalButtons();
    };
    document.body.appendChild(script);
    
    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  const renderPayPalButtons = () => {
    const plans = [
      { containerId: '#paypal-button-container-P-0DT03938HA878011UM2TERLY', planId: 'P-0DT03938HA878011UM2TERLY' },
      { containerId: '#paypal-button-container-P-7E564080PX182180JM2TETOQ', planId: 'P-7E564080PX182180JM2TETOQ' },
      { containerId: '#paypal-button-container-P-3C4826479K3123809M2TEXWI', planId: 'P-3C4826479K3123809M2TEXWI' },
      { containerId: '#paypal-button-container-P-2KS715473P469860YM2TE4LI', planId: 'P-2KS715473P469860YM2TE4LI' },
    ];

    plans.forEach(({ containerId, planId }) => {
      window.paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'subscribe'
        },
        createSubscription: function(data: { subscriptionID: string }, actions: { subscription: { create: (options: { plan_id: string }) => Promise<{ id: string }> } }) {
          return actions.subscription.create({
            plan_id: planId
          });
        },
        onApprove: function(data: { subscriptionID: string }, actions: { subscription: { create: (options: { plan_id: string }) => Promise<{ id: string }> } }) {
          alert(`Thank you for subscribing! To activate your service, please send the following information to subscription@shieldsightai.com:
            CCTV Feed URL
            WhatsApp Number for Notifications`); // Optional success message
      }
      }).render(containerId); // Renders the PayPal button
    });
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our Pricing Plans</h2>
            {/* <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
          </div>
          
        {/* Items */}
        <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

          {/* 1st item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            {/* <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
              <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
              <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
            </svg> */}
         
            <h4 className="h4 mb-2">Basic Plan</h4>
            <p className="text-lg text-gray-400 text-center pb-10">1 - 7 Cameras</p>
            <div id="paypal-button-container-P-0DT03938HA878011UM2TERLY"></div>
          </div>

          {/* 2nd item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            {/* <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
              <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
              <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
            </svg> */}
              
            <h4 className="h4 mb-2">Standard Plan</h4>
            <p className="text-lg text-gray-400 text-center pb-10">8 - 15 cameras</p>
            <div id="paypal-button-container-P-7E564080PX182180JM2TETOQ"></div>
          </div>

          {/* 3rd item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            {/* <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
              <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11" />
                <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
                <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11" />
              </g>
            </svg> */}
          
            <h4 className="h4 mb-2">Premium Plan</h4>
            <p className="text-lg text-gray-400 text-center pb-10">16 - 22 cameras</p>
            <div id="paypal-button-container-P-3C4826479K3123809M2TEXWI"></div>
          </div>

          {/* 4th item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
            {/* <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
              <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                <path className="stroke-current text-purple-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3" />
              </g>
            </svg> */}
           
            <h4 className="h4 mb-2">Enterprise Plan</h4>
            <p className="text-lg text-gray-400 text-center pb-10">more than 20 cameras</p>
            <div id="paypal-button-container-P-2KS715473P469860YM2TE4LI"></div>
          </div>

        </div>

        </div>
      </div>
    </section>
  )
}
