import React, { useState } from 'react';
import '../css/LoanApplication.css';
import axios from 'axios';

const LoanApplication = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        email: '',
        mobileNumber: '',
        gender: '',
        occupation: '',
        idType: '',
        idNumber: '',
        typeOfLoan: '',
        purposeOfLoan: '',
        uploadIdProof: null,
        uploadPhoto: null,
        addressType: '',
        nationality: '',
        state: '',
        district: '',
        blockNumber: '',
        wardNumber: '',
        fatherName: '',
        motherName: '',
        grandfatherName: '',
        spouseName: '',
        numberOfSiblings: '',
        uploadCollateralProof:null
    });
    
    const [step, setStep] = useState(1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: files[0] // Handle file uploads
        });
    };

    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="abc">
            <div className="corn">
                <header>Loan Application</header>
                <form onSubmit={handleSubmit}>
                    {step === 1 && (
                        <div className="details active">
                            <span className="title">Personal and Identity Details</span>
                            <div className="foods">
                                <div className="input-food">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="input-food">
                                    <label>DOB</label>
                                    <input
                                        type="date"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-food">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your Email"
                                        required
                                    />
                                </div>
                                <div className="input-food">
                                    <label>Mobile Number</label>
                                    <input
                                        type="number"
                                        name="mobileNumber"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                        placeholder="Enter your Mobile Number"
                                        required
                                    />
                                </div>
                                <div className="input-food">
                                    <label>Gender</label>
                                    <input
                                        type="text"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        placeholder="Enter your Gender"
                                        required
                                    />
                                </div>
                                <div className="input-food">
                                    <label>Occupation</label>
                                    <input
                                        type="text"
                                        name="occupation"
                                        value={formData.occupation}
                                        onChange={handleChange}
                                        placeholder="Enter your Occupation"
                                        required
                                    />
                                </div>
                                
                                <div className="input-food">
                                    <label>ID Type</label>
                                    <select
                                        name="idType"
                                        value={formData.idType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Type</option>
                                        <option value="Home Improvement">Home Improvement</option>
                                        <option value="Education">Education</option>
                                        <option value="Medical">Medical</option>
                                        <option value="Travel">Travel</option>
                                        <option value="Business">Business</option>
                                        <option value="Debt Consolidation">Debt Consolidation</option>
                                    </select>
                                </div>
                                <div className="input-food">
                                    <label>ID Number</label>
                                    <input
                                        type="number"
                                        name="idNumber"
                                        value={formData.idNumber}
                                        onChange={handleChange}
                                        placeholder="Enter your ID Number"
                                        required
                                    />
                                </div>
                                
                                <div className="input-food">
                                    <label>Type of Loan</label>
                                    <select
                                        name="purposeOfLoan"
                                        value={formData.typeOfLoan}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Type</option>
                                        <option value="Home Improvement">Home Improvement</option>
                                        <option value="Education">Education</option>
                                        <option value="Medical">Medical</option>
                                        <option value="Travel">Travel</option>
                                        <option value="Business">Business</option>
                                        <option value="Debt Consolidation">Debt Consolidation</option>
                                    </select>
                                </div>
                                <div className="input-food">
                                    <label>Purpose of Loan</label>
                                    <select
                                        name="purposeOfLoan"
                                        value={formData.purposeOfLoan}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Purpose</option>
                                        <option value="Home Improvement">Home Improvement</option>
                                        <option value="Education">Education</option>
                                        <option value="Medical">Medical</option>
                                        <option value="Travel">Travel</option>
                                        <option value="Business">Business</option>
                                        <option value="Debt Consolidation">Debt Consolidation</option>
                                    </select>
                                </div>
                                <div className="input-food">
                                    <label>Upload ID Proof</label>
                                    <input
                                        type="file"
                                        name="uploadIdProof"
                                        onChange={handleFileChange}
                                        required
                                    />
                                </div>
                                <div className="input-food">
                                    <label>Upload Photo</label>
                                    <input
                                        type="file"
                                        name="uploadPhoto"
                                        onChange={handleFileChange}
                                        required
                                    />
                                </div>
                            </div>
                            <button type="button" onClick={handleNext}>
                                Next
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="details active">
                            <span className="title">Address and Family Details</span>
                            <div className="foods">
                                <div className="input-food">
                                    <label>Residentital Address</label>
                                    <input
                                        type="text"
                                        name="residentialAddress"
                                        value={formData.residentialAddress}
                                        onChange={handleChange}
                                        placeholder="Enter your Address"
                                        required
                                    />
                                </div>
                                <div className="input-food">
                                    <label>Permanent Address</label>
                                    <input
                                        type="text"
                                        name="permanentAddress"
                                        value={formData.permanentAddress}
                                        onChange={handleChange}
                                        placeholder="Enter your Address"
                                        required
                                    />
                                </div>
                                <div className="input-food">
                                    <label>State</label>
                                    <input
                                        type="text"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        placeholder="Enter your State"
                                        required
                                    />
                                </div>
                                <div className="input-food">
                                    <label>District</label>
                                    <input
                                        type="text"
                                        name="district"
                                        value={formData.district}
                                        onChange={handleChange}
                                        placeholder="Enter your District"
                                        required
                                    />
                                </div>
                                <div className="input-food">
                                    <label>Block Number</label>
                                    <input
                                        type="text"
                                        name="blockNumber"
                                        value={formData.blockNumber}
                                        onChange={handleChange}
                                        placeholder="Enter your Block Number"
                                        required
                                    />
                                </div>
                                <div className="input-food">
                                    <label>Ward Number</label>
                                    <input
                                        type="text"
                                        name="wardNumber"
                                        value={formData.wardNumber}
                                        onChange={handleChange}
                                        placeholder="Enter your Ward Number"
                                        required
                                    />
                                </div>
                                <div className="input-food">
                                    <label>Loan Amount</label>
                                    <input
                                        type="number"
                                        name="loanAmount"
                                        value={formData.loanAmount}
                                        onChange={handleChange}
                                        placeholder="Enter amounte"
                                        required
                                    />
                                </div>
                                
                                <div className="input-food">
                                    <label>Type of Collateral</label>
                                    <select
                                        name="typeOfCollateral"
                                        value={formData.typeOfCollateral}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Type</option>
                                        <option value="Home Improvement">Home Improvement</option>
                                        <option value="Education">Education</option>
                                        <option value="Medical">Medical</option>
                                        <option value="Travel">Travel</option>
                                        <option value="Business">Business</option>
                                        <option value="Debt Consolidation">Debt Consolidation</option>
                                    </select>
                                </div>
                                <div className="input-food">
                                    <label>Collateral value</label>
                                    <input
                                        type="number"
                                        name="collateralValue"
                                        value={formData.collateralValue}
                                        onChange={handleChange}
                                        placeholder="Enter amount"
                                        required
                                    />
                                </div>
                                <div className="input-food">
                                    <label>Spouse's Name</label>
                                    <input
                                        type="text"
                                        name="spouseName"
                                        value={formData.spouseName}
                                        onChange={handleChange}
                                        placeholder="Enter your Spouse's Name"
                                    />
                                </div>
                                <div className="input-food">
                                    <label>Number of Siblings</label>
                                    <input
                                        type="number"
                                        name="numberOfSiblings"
                                        value={formData.numberOfSiblings}
                                        onChange={handleChange}
                                        placeholder="Enter number of siblings"
                                        required
                                    />
                                </div>
                                <div className="input-food">
                                    <label>Upload Collateral Proof</label>
                                    <input
                                        type="file"
                                        name="uploadCollateralProof" // Updated field name
                                        onChange={handleFileChange}
                                        required
                                    />
                                </div>
                                
                            </div>
                            <div className="buttons">
                                <button type="button" className="backBtn" onClick={handleBack}>
                                    Back
                                </button>
                                <button type="submit">
                                    Submit
                                </button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default LoanApplication;
