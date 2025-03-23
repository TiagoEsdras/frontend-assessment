const Form = () => {
  return (
    <section id="form" className="lg:py-23">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="bg-light-gray shadow-lg rounded-lg p-6 lg:p-10">
          <h2 className="text-2xl text-dark-blue font-bold mb-6">Contact Us</h2>
          <form id="contact-form" className="space-y-4 text-dark-gray">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                className="bg-off-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-dark-gray"
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                className="bg-off-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-dark-gray"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                className="bg-off-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-dark-gray"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Message</label>
              <textarea
                className="bg-off-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-dark-gray"
                placeholder="Enter your message"
                rows={5}
              ></textarea>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-gold font-semibold py-3 rounded-lg"
              >
                Contact Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
