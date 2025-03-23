import { useState } from "react";
import FormErrors from "../interfaces/FormErrors";
import FormData from "../interfaces/FormData";
import { ValidateContactForm } from "../utils/ValidateContactForm";
import SuccessModal from "./SuccessModal";

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = ValidateContactForm(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
      (e.target as HTMLFormElement).reset();
    }
  };

  const handleCloseModal = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="form" className="lg:py-23">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="bg-light-gray shadow-lg rounded-lg p-6 lg:p-10">
          <h2 className="text-2xl text-dark-blue font-bold mb-6">Contact Us</h2>
          <form id="contact-form" className="space-y-4 text-dark-gray" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Full Name</label>
              <input
                name="fullName"
                onChange={handleChange}
                type="text"
                className={`bg-off-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.fullName ? "ring-2 ring-red-500" : "focus:ring-dark-gray"
                  }`}
                placeholder="Enter your full name"
                autoComplete="off"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Email</label>
              <input
                name="email"
                onChange={handleChange}
                type="email"
                className={`bg-off-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.email ? "ring-2 ring-red-500" : "focus:ring-dark-gray"
                  }`}
                placeholder="Enter your email"
                autoComplete="off"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Phone Number</label>
              <input
                name="phone"
                type="tel"
                onChange={handleChange}
                className={`bg-off-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.phone ? "ring-2 ring-red-500" : "focus:ring-dark-gray"
                  }`}
                placeholder="Enter your phone number"
                autoComplete="off"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                onChange={handleChange}
                className={`bg-off-white rounded-lg p-3 focus:outline-none focus:ring-2 ${errors.message ? "ring-2 ring-red-500" : "focus:ring-dark-gray"
                  }`}
                placeholder="Enter your message"
                rows={5}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full bg-gold font-semibold py-3 rounded-lg">
                Contact Now
              </button>
            </div>
          </form>
        </div>
      </div>
      {isSubmitted && (
        <SuccessModal
          message="Message sent successfully!"
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default Form;
