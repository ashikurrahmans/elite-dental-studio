import React from "react";

const Faq = () => {
  return (
    <>
      <section className="dark:bg-gray-800 dark:text-gray-100  my-12">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold">
                Why should I use Elite Dental Studio?
              </h3>
              <p className="mt-1 dark:text-gray-400">
                Elite Dental Studio USA is among the leading Dental labs in the
                USA. When you need to find a quick-turnaround dental restoration
                near you, we’ve got you covered with our emergency services.
                Over the years, we have collaborated with several renowned
                dentists and offer the best dental esthetic restorations. With
                us, you can expect quality services, customer support, and the
                latest technology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">What are your turnaround times?</h3>
              <p className="mt-1 dark:text-gray-400">
                12 days for the majority of restorative work. 15 days for
                implants. Please contact us for complex matters. We can expedite
                emergency jobs in 3 to 6 days.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                What shipping methods do you use?
              </h3>
              <p className="mt-1 dark:text-gray-400">
                For all out-of-state and non-local dental practices, UPS is our
                preferred courier. We are happy to offer USPS and FedEx as
                additional delivery options.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">What are your payment terms?</h3>
              <p className="mt-1 dark:text-gray-400">
                With the proper bank and credit referrals, open account periods
                may be extended to dentistry clients. Terms are net 30 days
                based on the date of the invoice. Accounts that are past due
                incur a 1.8% interest charge. In addition, we now accept payment
                using Discover®, American Express® and ®Visa® Cards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
