import PageWrapper from "../components/PageWrapper";
import { images } from "../constants/images";

export default function Contact() {
  return (
    <PageWrapper>
      <section className="w-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left - Form */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center lg:text-left leading-tight">
                Contact Us
              </h2>

              <form
                action="https://formsubmit.co/contact@icfrontiercapital.com"
                method="POST"
                className="max-w-md sm:max-w-lg lg:max-w-xl mx-auto lg:mx-0 space-y-4"
              >
                {/* FormSubmit settings */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Contact Message – IC Frontier Capital" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_next"
                  value={`${import.meta.env.VITE_SITE_URL}/thank-you`}
                />

                <input
                  name="name"
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your Name"
                />

                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your Email"
                />

                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical"
                  placeholder="Your Message"
                />

                <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-100 transition-all font-medium shadow-lg hover:shadow-xl">
                  Send Message
                </button>
              </form>
            </div>

            {/* Right - Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl group">
                <img
                  src={images.contact}
                  alt="Contact Us"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl lg:rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                />
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-30 lg:opacity-20 blur-sm"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-20 blur-sm"></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
