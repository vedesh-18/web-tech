import React, { useState } from 'react';
import './UserForm.css';

const UserForm = () => {
    // Functional requirement: Manage form input fields using the useState Hook
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Functional requirement: Capture user input changes using the onChange event handler
    // Functional requirement: Bind input field values using controlled components
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: '',
            });
        }
    };

    // Functional requirement: Validate input fields using conditional logic
    const validate = () => {
        let newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email format is invalid';
        }
        
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        
        return newErrors;
    };

    // Functional requirement: Handle form submission using the onSubmit event
    // Functional requirement: Prevent form submission if validation fails
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsSubmitted(false);
        } else {
            console.log('Form Submitted successfully:', formData);
            setErrors({});
            setIsSubmitted(true);
            
            // Functional requirement: Reset form fields after successful submission
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                });
                setIsSubmitted(false);
            }, 3000);
        }
    };

    return (
        <div className="form-wrapper">
            <div className={`form-container ${isSubmitted ? 'success-pulse' : ''}`}>
                <h2 className="form-title">Join Our Community</h2>
                <p className="form-subtitle">Fill in your details below to get started</p>
                
                <form onSubmit={handleSubmit} noValidate>
                    <div className="input-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={errors.name ? 'input-error' : ''}
                        />
                        {/* Functional requirement: Display validation error messages dynamically */}
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={errors.email ? 'input-error' : ''}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className={errors.password ? 'input-error' : ''}
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>

                    <button type="submit" className="submit-btn">
                        {isSubmitted ? 'Successfully Joined!' : 'Create Account'}
                    </button>
                </form>

                {isSubmitted && (
                    <div className="submission-success">
                        Thank you for signing up! We've received your information.
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserForm;
