import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LabeledInput = ({ type, placeholder, name, value, onChange, error }) => {
  return (
    <label className="block mb-4">
      <h6 className='text-gray-700 text-sm font-bold mb-2'>{placeholder}</h6>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <span className='text-red-500 text-xs italic'>{error}</span>}
    </label>
  );
};

// const apikey=process.env.REACT_APP_API_URL;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage(result.message);
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setResponseMessage(result.error || 'Failed to send message');
        alert(`Failed to send message: ${result.error || 'Unknown error'}`);
      }
    } catch (error) {
      setResponseMessage('An error occurred while sending the message.');
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(()=>{
    window.scroll(0,0)
  })

  return (
    <>
    <div className='flex justify-center items-center mt-4 '>
    <div className=''>
      <div
        className="relative w-full  h-[100px] md:h-[150px] lg:h-[150px] object-cover overflow-hidden font-thin bg-cover bg-center rounded-lg"
        style={{ backgroundImage: "url('https://www.ashokleyland.com/backend/wp-content/uploads/2024/09/backend_wp-content_uploads_2024_09_Truck-Range-with-Partner_May-2023_1_Banner-Desktop-1440x620px-1.jpg')" }}
      >
        <div className="absolute inset-0 flex items-center  bg-black bg-opacity-30 text-white text-center p-4">
          <div className="border-l-8 border-red-500 pl-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Contact Us</h1>
          </div>
        </div>
        
      </div>
      
      {/* <div className="bg-gradient-to-l from-cyan-50 to-blue-50">
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto p-6">
          <div className="w-full md:w-1/2 p-4 flex flex-col lg:mt-10">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <p className="mb-4">
              <span className='text-5xl'>Have any questions? Feel free to contact us.</span> <br />
              We are here to help you with your needs and ensure you get the best service.
            </p>
          </div> */}

          <div className="max-w-4xl mx-auto   p-4">
          <p className="text-lg md:text-xl mb-6 ">
        Please fill the form below to contact us if you have any queries.

        </p>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " onSubmit={handleSubmit}>
              <LabeledInput
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              <LabeledInput
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <LabeledInput
                type="tel"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />
         
              <label className="block mb-4">
                <h6 className='text-gray-700 text-sm font-bold mb-2'>Message</h6>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.message && <span className='text-red-500 text-xs italic'>{errors.message}</span>}
              </label>
              <button
                   className={`bg-red-500 hover:bg-red-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  ${isSubmitting ? 'bg-red-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-500'} `}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request!'}
              </button>
            </form>
          </div>
          </div>
          </div>
    </>
  );
};
