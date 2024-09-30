import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LabeledInput = ({ type, placeholder, name, value, onChange, error }) => {
    return (
        <label className="block mb-4">
            <h6 className='text-gray-700 text-lg font-bold mb-2'>{placeholder}</h6>
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

const LabeledSelect = ({ name, value, onChange, options, error }) => {
    return (
        <label className="block mb-4">
            <h6 className='text-gray-700 text-lg font-bold mb-2'>Permit Type</h6>
            <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name={name}
                value={value}
                onChange={onChange}
            >
                <option value="">Select Permit Type</option>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
            {error && <span className='text-red-500 text-xs italic'>{error}</span>}
        </label>
    );
};

export const VehicleRegistration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        VehicleType: '',
        IDProofNumber: '',
        VehicleRegistration: '',
        YearofManufacture: '',
        ChassisNumber: '',
        EngineNumber: '',
        VehicleLiftingCapacity: '',
        InsuranceDetails: null,
        PermitType: '',
        PermitExpiry: null,
        FitnessCertificate: null,
        PollutionUnder: null,
        FrontSide: null,
        BackSide: null,
        SideViews: null,
    });

    const [errors, setErrors] = useState({});
    const [responseMessage, setResponseMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
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
        if (!formData.VehicleType) newErrors.VehicleType = "Vehicle Type is required";
        if (!formData.IDProofNumber) newErrors.IDProofNumber = "ID Proof Number is required";
        if (!formData.VehicleRegistration) newErrors.VehicleRegistration = "Vehicle Registration Number is required";
        if (!formData.YearofManufacture) newErrors.YearofManufacture = "Year of Manufacture is required";
        if (!formData.ChassisNumber) newErrors.ChassisNumber = "Chassis Number is required";
        if (!formData.EngineNumber) newErrors.EngineNumber = "Engine Number is required";
        if (!formData.VehicleLiftingCapacity) newErrors.VehicleLiftingCapacity = "Vehicle's Lifting Capacity is required";
        if (!formData.InsuranceDetails) newErrors.InsuranceDetails = "Insurance Details are required";
        if (!formData.PermitType) newErrors.PermitType = "Permit Type is required";
        if (!formData.PermitExpiry) newErrors.PermitExpiry = "Permit Expiry is required";
        if (!formData.FitnessCertificate) newErrors.FitnessCertificate = "Fitness Certificate is required";
        if (!formData.PollutionUnder) newErrors.PollutionUnder = "PUC Certificate is required";
        if (!formData.FrontSide) newErrors.FrontSide = "Upload front side photo is required";
        if (!formData.BackSide) newErrors.BackSide = "Upload back side photo is required";
        if (!formData.SideViews) newErrors.SideViews = "Upload side view photos is required";

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
            const formDataToSend = new FormData();
            for (const key in formData) {
                if (formData.hasOwnProperty(key)) {
                    formDataToSend.append(key, formData[key]);
                }
            }
    
            const response = await axios.post(import.meta.env.VITE_VEHICLE_URL, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
        
            if (response.status === 200) {
                setResponseMessage(response.data.message);
                alert('Message sent successfully!');
                navigate('/')
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    VehicleType: '',
                    IDProofNumber: '',
                    VehicleRegistration: '',
                    YearofManufacture: '',
                    ChassisNumber: '',
                    EngineNumber: '',
                    VehicleLiftingCapacity: '',
                    InsuranceDetails: null,
                    PermitType: '',
                    PermitExpiry: null,
                    FitnessCertificate: null,
                    PollutionUnder: null,
                    FrontSide: null,
                    BackSide: null,
                    SideViews: null,
                });
            } else {
                setResponseMessage(response.data.error || 'Failed to send message');
                alert(`Failed to send message: ${response.data.error || 'Unknown error'}`);
            }
        } catch (error) {
            setResponseMessage('An error occurred while sending the message.');
            alert(`Error: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };
    

    return (
        <div className='flex justify-center items-center mt-4'>
            <div className="max-w-4xl md:max-w-5xl mx-auto p-4">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">Vehicle Registration Form</h1>
                <p className="text-lg md:text-lg mb-6">
                At PS Transport, we prioritize safety, reliability, and professionalism in all our operations. To maintain 
                    our high standards of service, we have a streamlined Driver and Vehicle Registration process, 
                    designed to onboard skilled drivers and well-maintained vehicles into our fleet.
                </p>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div>
                        <h4 className='text-lg font-bold'>Vehicle Registration Form</h4>
                        <ul className='list-decimal mt-5'>
                            <div className='md:flex justify-evenly gap-16'>
                                <div>
                                    <li>
                                        <LabeledInput
                                            type="text"
                                            placeholder="Vehicle Owner's Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            error={errors.name}
                                        />
                                    </li>
                                    <li>
                                        <LabeledInput
                                            type="tel"
                                            placeholder="Contact Information"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            error={errors.phone}
                                        />
                                    </li>
                                    <li>
                                        <LabeledInput
                                            type="email"
                                            placeholder="Email Address"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            error={errors.email}
                                        />
                                    </li>
                                    <li>
                                        <LabeledInput
                                            type="text"
                                            placeholder="Vehicle Type"
                                            name="VehicleType"
                                            value={formData.VehicleType}
                                            onChange={handleChange}
                                            error={errors.VehicleType}
                                        />
                                    </li>
                                    <li>
                                        <LabeledInput
                                            type="text"
                                            placeholder="ID Proof Number"
                                            name="IDProofNumber"
                                            value={formData.IDProofNumber}
                                            onChange={handleChange}
                                            error={errors.IDProofNumber}
                                        />
                                    </li>
                                    <li>
                                        <LabeledInput
                                            type="file"
                                            placeholder="Vehicle Registration Number (Upload Scanned Copy)"
                                            name="VehicleRegistration"
                                            // value={formData.VehicleRegistration}
                                            onChange={handleChange}
                                            error={errors.VehicleRegistration}
                                        />
                                    </li>
                                    <li>
                                        <LabeledInput
                                            type="date"
                                            placeholder="Year of Manufacture"
                                            name="YearofManufacture"
                                            value={formData.YearofManufacture}
                                            onChange={handleChange}
                                            error={errors.YearofManufacture}
                                        />
                                    </li>
                                    <li>
                                        <LabeledInput
                                            type="number"
                                            placeholder="Chassis Number"
                                            name="ChassisNumber"
                                            value={formData.ChassisNumber}
                                            onChange={handleChange}
                                            error={errors.ChassisNumber}
                                        />
                                    </li>
                                    <li>
                                        <LabeledInput
                                            type="number"
                                            placeholder="Engine Number"
                                            name="EngineNumber"
                                            value={formData.EngineNumber}
                                            onChange={handleChange}
                                            error={errors.EngineNumber}
                                        />
                                    </li>
                                    <li>
                                        <LabeledInput
                                            type="text"
                                            placeholder="Vehicle's Lifting Capacity"
                                            name="VehicleLiftingCapacity"
                                            value={formData.VehicleLiftingCapacity}
                                            onChange={handleChange}
                                            error={errors.VehicleLiftingCapacity}
                                        />
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <LabeledInput
                                            type="file"
                                            placeholder="Insurance Details (Upload Scanned Copy)"
                                            name="InsuranceDetails"
                                            onChange={handleChange}
                                            error={errors.InsuranceDetails}
                                        />
                                    </li>
                                    <li>
                                        <LabeledSelect
                                            name="PermitType"
                                            value={formData.PermitType}
                                            onChange={handleChange}
                                            options={["State Permit", "National Permit"]}
                                            error={errors.PermitType}
                                        />
                                        <LabeledInput
                                            type="file"
                                            placeholder="Permit Expiry Date (Upload Scanned Copy)"
                                            name="PermitExpiry"
                                            onChange={handleChange}
                                            error={errors.PermitExpiry}
                                        />
                                    </li>
                                    <li>
                                        <LabeledInput
                                            type="file"
                                            placeholder="Fitness Certificate (Upload Scanned Copy)"
                                            name="FitnessCertificate"
                                            onChange={handleChange}
                                            error={errors.FitnessCertificate}
                                        />
                                    </li>
                                    <li>
                                        <LabeledInput
                                            type="file"
                                            placeholder="Pollution Under Control (PUC) Certificate (Upload Scanned Copy)"
                                            name="PollutionUnder"
                                            onChange={handleChange}
                                            error={errors.PollutionUnder}
                                        />
                                    </li>
                                    <li>
                                        <span className='font-bold text-lg'>Upload Photos of Vehicle</span>
                                        <LabeledInput
                                            type="file"
                                            placeholder="Front Side"
                                            name="FrontSide"
                                            onChange={handleChange}
                                            error={errors.FrontSide}
                                        />
                                        <LabeledInput
                                            type="file"
                                            placeholder="Back Side"
                                            name="BackSide"
                                            onChange={handleChange}
                                            error={errors.BackSide}
                                        />
                                        <LabeledInput
                                            type="file"
                                            placeholder="Side Views"
                                            name="SideViews"
                                            onChange={handleChange}
                                            error={errors.SideViews}
                                        />
                                    </li>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <button
                        className={`bg-red-500 hover:bg-red-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  ${isSubmitting ? 'bg-red-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-500'} `}
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit '}
                    </button>
                    {responseMessage && <p className="mt-4 text-green-500">{responseMessage}</p>}

                </form>
            </div>
        </div>
    );
};
