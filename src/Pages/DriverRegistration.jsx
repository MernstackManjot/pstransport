import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LabeledInput = ({ type, placeholder, name, value, onChange, error }) => {
    return (
        <label className="block mb-4">
            <h6 className='text-gray-700 text-md mb-2'>{placeholder}</h6>
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

export const DriverRegistration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        DateofBirth: '',
        AadharCardNumber: '',
        LicenseNumber: '',
        DateofIssue: '',
        ExpiryDate: '',
        drivingexperience: '',
        Typesofvehicles: '',
        Pastwork: '',
        RecentPhotograph: '',
        CopyofDrivingLicense: '',
        IDProof: '',
        necessarydocuments: '',
        visiontest:'',
        fitnesscertificate:'',
    });

    const [errors, setErrors] = useState({});
    const [responseMessage, setResponseMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value,
        }));
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
        if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone number must be 10 digits";
        if (!formData.message) newErrors.message = "Permanent Address is required";
        if (!formData.DateofBirth) newErrors.DateofBirth = "Date of Birth is required";
        if (!formData.AadharCardNumber) newErrors.AadharCardNumber = "Aadhar Card Number is required";
        if (!formData.LicenseNumber) newErrors.LicenseNumber = "License Number is required";
        if (!formData.DateofIssue) newErrors.DateofIssue = "Date of Issue is required";
        if (!formData.ExpiryDate) newErrors.ExpiryDate = "Expiry Date is required";
        if (!formData.drivingexperience) newErrors.drivingexperience = "Driving experience is required";
        if (!formData.Typesofvehicles) newErrors.Typesofvehicles = "Types of vehicles previously driven is required";
        if (!formData.Pastwork) newErrors.Pastwork = "Past work experience is required";
        if (!formData.RecentPhotograph) newErrors.RecentPhotograph = "Recent Photograph is required";
        if (!formData.CopyofDrivingLicense) newErrors.CopyofDrivingLicense = "Copy of Driving License is required";
        if (!formData.IDProof) newErrors.IDProof = "ID Proof is required";
        if (!formData.necessarydocuments) newErrors.necessarydocuments = "Necessary documents are required";

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const validationErrors = validateForm();
        setErrors(validationErrors);
        setResponseMessage(''); 

        if (Object.keys(validationErrors).length > 0) {
            setIsSubmitting(false);
            return;
        }

        try {
            const formDataToSend = new FormData();
            for (const key in formData) {
                if (formData.hasOwnProperty(key)) {
                    formDataToSend.append(key, formData[key]);
                }
            }

            const response = await axios.post(import.meta.env.VITE_DRIVER_URL, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setResponseMessage(response.data.message);
            alert('Driver Registration sent successfully!');
            navigate("/")
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
                DateofBirth: '',
                AadharCardNumber: '',
                LicenseNumber: '',
                DateofIssue: '',
                ExpiryDate: '',
                drivingexperience: '',
                Typesofvehicles: '',
                Pastwork: '',
                RecentPhotograph: '',
                CopyofDrivingLicense: '',
                IDProof: '',
                necessarydocuments: '',
                visiontest:'',
                fitnesscertificate:'',
            });
        } catch (error) {
            setResponseMessage('An error occurred while sending the message.');
            alert(`Error: ${error.response ? error.response.data.error : error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='flex justify-center items-center mt-4'>
            <div className="max-w-5xl md:max-w-5xl mx-auto p-4">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">Driver Registration Form</h1>
                <p className="text-lg md:text-lg mb-6">
                    At PS Transport, we prioritize safety, reliability, and professionalism in all our operations. To maintain 
                    our high standards of service, we have a streamlined Driver and Vehicle Registration process, 
                    designed to onboard skilled drivers and well-maintained vehicles into our fleet.
                </p>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div>
                        <h4 className='text-lg font-bold'>Driver Registration</h4>
                        <p>To register as a driver with PS Transport, applicants must complete the following steps:</p>
                        <ul className='list-decimal mt-5'>
                            <div className='md:flex justify-evenly gap-16'>
                                <li className='md:w-80'>
                                    <span className="text-lg font-bold"> Personal Details:</span>
                                    <LabeledInput
                                        type="text"
                                        placeholder="Full Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        error={errors.name}
                                    />
                                    <LabeledInput
                                        type="tel"
                                        placeholder="Phone Number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        error={errors.phone}
                                    />
                                    <LabeledInput
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        error={errors.email}
                                    />
                                    <label className="block mb-4">
                                        <h6 className='text-gray-700 text-sm font-bold mb-2'>Permanent Address</h6>
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
                                    <LabeledInput
                                        type="date"
                                        placeholder="Date of Birth"
                                        name="DateofBirth"
                                        value={formData.DateofBirth}
                                        onChange={handleChange}
                                        error={errors.DateofBirth}
                                    />
                                    <LabeledInput
                                        type="number"
                                        placeholder="Aadhar Card Number"
                                        name="AadharCardNumber"
                                        value={formData.AadharCardNumber}
                                        onChange={handleChange}
                                        error={errors.AadharCardNumber}
                                    />
                                </li>
                                <li className=''>
                                    <span className="text-lg font-bold">Driving License Information:</span>
                                    <LabeledInput
                                        type="text"
                                        placeholder="License Number"
                                        name="LicenseNumber"
                                        value={formData.LicenseNumber}
                                        onChange={handleChange}
                                        error={errors.LicenseNumber}
                                    />
                                    <LabeledInput
                                        type="date"
                                        placeholder="Date of Issue"
                                        name="DateofIssue"
                                        value={formData.DateofIssue}
                                        onChange={handleChange}
                                        error={errors.DateofIssue}
                                    />
                                    <LabeledInput
                                        type="date"
                                        placeholder="Expiry Date"
                                        name="ExpiryDate"
                                        value={formData.ExpiryDate}
                                        onChange={handleChange}
                                        error={errors.ExpiryDate}
                                    />
                                    <li>
                                        <span className="text-lg font-bold">Experience:</span>
                                        <LabeledInput
                                            type="number"
                                            placeholder="Number of years driving experience"
                                            name="drivingexperience"
                                            value={formData.drivingexperience}
                                            onChange={handleChange}
                                            error={errors.drivingexperience}
                                        />
                                        <LabeledInput
                                            type="text"
                                            placeholder="Types of vehicles previously driven"
                                            name="Typesofvehicles"
                                            value={formData.Typesofvehicles}
                                            onChange={handleChange}
                                            error={errors.Typesofvehicles}
                                        />
                                        <label className="block mb-4">
                                            <h6 className='text-gray-700 text-sm font-bold mb-2'>Past work experience or companies associated with</h6>
                                            <textarea
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                name="Pastwork"
                                                rows="4"
                                                value={formData.Pastwork}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                            {errors.Pastwork && <span className='text-red-500 text-xs italic'>{errors.Pastwork}</span>}
                                        </label>
                                    </li>
                                </li>

                                <li>
                                    <span className="text-lg font-bold">Medical & Fitness Certification:</span>
                                    <LabeledInput
                                        type="file"
                                        placeholder="Submission of a recent medical fitness certificate"
                                        name="fitnesscertificate"
                                        // value={formData.fitnesscertificate}
                                        onChange={handleChange}
                                    />
                                    <LabeledInput
                                        type="file"
                                        placeholder="Vision test (optional but recommended for better safety standards)"
                                        name="visiontest"
                                        // value={formData.visiontest}
                                        onChange={handleChange}
                                    />
                                    <li>
                                        <span className="text-lg font-bold">Documents Upload:</span>
                                        <LabeledInput
                                            type="file"
                                            placeholder="Recent Photograph"
                                            name="RecentPhotograph"
                                            onChange={handleChange}
                                            error={errors.RecentPhotograph}
                                        />
                                        <LabeledInput
                                            type="file"
                                            placeholder="Copy of Driving License"
                                            name="CopyofDrivingLicense"
                                            onChange={handleChange}
                                            error={errors.CopyofDrivingLicense}
                                        />
                                        <LabeledInput
                                            type="file"
                                            placeholder="ID Proof (Aadhar, Voter ID, etc.)"
                                            name="IDProof"
                                            onChange={handleChange}
                                            error={errors.IDProof}
                                        />
                                        <LabeledInput
                                            type="file"
                                            placeholder="Any other necessary documents"
                                            name="necessarydocuments"
                                            onChange={handleChange}
                                            error={errors.necessarydocuments}
                                        />
                                    </li>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <button
                         className={`w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  ${isSubmitting ? 'bg-red-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-700'} `}
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                    {responseMessage && <p className="mt-4 text-green-500">{responseMessage}</p>}
                </form>
            </div>
        </div>
    );
};
