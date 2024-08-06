import { useState } from "react";
import { validateEmail } from "../utils/functions";

export default function Form() {
    const [formName, setFormName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const [nameTouched, setNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [messageTouched, setMessageTouched] = useState(false);

    const [errors, setErrors] = useState({
        formName: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        
        
        switch (name) {
            case 'formName':
                setFormName(value);
                setErrors(prev => ({ ...prev, formName: '' }))
                break;
            case 'email':
                setEmail(value);
                setErrors(prev => ({ ...prev, email: '' }))
                break;
            case 'message':
                setMessage(value);
                setErrors(prev => ({ ...prev, message: '' }))
                break;
            default:
                break;
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        let error = '';
    
        switch (name) {
            case 'formName':
                if (!formName) error = 'Name is required';
                setErrors(prev => ({ ...prev, formName: error }));
                setNameTouched(true);
                break;
            case 'email':
                if (!email) error = 'Email is required';
                else if (!validateEmail(email)) error = 'Invalid email';
                setErrors(prev => ({ ...prev, email: error }));
                setEmailTouched(true);
                break;
            case 'message':
                if (!message) error = 'Message is required';
                setErrors(prev => ({ ...prev, message: error }));
                setMessageTouched(true);
                break;
            default:
                break;
        }
    };
    

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Trigger blur on all fields to ensure validation
        setNameTouched(true);
        setEmailTouched(true);
        setMessageTouched(true);
        
        if (!formName || !email || !message || errors.email) {
            alert('Please fill out all fields correctly.');
            return;
        }
        
        // alert(`Name: ${formName}\nEmail: ${email}\nMessage: ${message}`);
        alert(`Thanks for submitting a form, ${formName}!`)

        // Clear form
        setFormName('');
        setEmail('');
        setMessage('');
        setErrors({
            formName: '',
            email: '',
            message: ''
        });
        setNameTouched(false);
        setEmailTouched(false);
        setMessageTouched(false);
    };

    return (
        <section className="hidden">
            <div className="container">
                <h3>Contact Form</h3>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input
                            className="reset-style"
                            name="formName"
                            value={formName}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Your Name"
                        />
                        <p className={nameTouched && errors.formName ? 'hideError error': 'hideError'}>
                            {nameTouched && errors.formName}
                        </p>
                    </div>
                    <div>
                        <input
                            className="reset-style"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            type="email"
                            placeholder="Your Email"
                        />
                        <p className={emailTouched && errors.email ? 'hideError error': 'hideError'}>
                            {emailTouched && errors.email}
                        </p>
                    </div>
                    <div>
                        <textarea 
                            className="reset-style"
                            name="message"
                            value={message}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            placeholder="Enter your message..."
                        />
                        <p className={messageTouched && errors.message ? 'hideError error': 'hideError'}>
                            {messageTouched && errors.message}
                        </p>
                    </div>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
