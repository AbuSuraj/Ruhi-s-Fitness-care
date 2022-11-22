import React from "react";

const FAQ = () => {
  return (
    <div className="mt-4">
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-400">
            These are the most commonly asked Questions from my customers
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Why aren’t Programs and Challenges free since the videos are free?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              I professionally-created Programs and Challenges target specific goals and/or training styles to provide the type of guidance you would receive from a personal trainer, at a fraction of the cost. In addition, Workout Program and Workout Challenge sales make it possible for me to keep producing free videos and to continue adding free features and content to the Ruhi's Fitness website{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What is the return policy?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Calendar-based Workout Programs and Workout Challenges have a 5 day return/refund policy. Meal Plans are a non-refundable purchase.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Where can I get help with my new Program, Challenge?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              The community here at fitnessblender.com is a great place to start. Many of our members know the site inside and out, and can help with many site-usage or technical questions.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Can I use my older eBook or PDF program with the new calendar?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              If you own an old eBook/PDF program, thank you for being such a long-time customer. Unfortunately, these older programs do not crossover to the new calendar.{" "}
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
