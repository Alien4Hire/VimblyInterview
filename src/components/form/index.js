import React, { useState, useEffect } from 'react';
import './form.css'

const Form = () => {
    const [select, setSelect] = useState('');
    const [focus, setFocus] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('')
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        contact: '',
    })

    const support = [
        'Select',
        'General Support',
        'Report an Issue',
        'Billing & Payments'
    ]

    const billing = [
        'Billing Discrepancy',
        'Request Invoice',
        'Confirm Payment Status'

    ]
    const handleFocus = (e) => {
        setFocus(e.target.name);
    };

    const handleFirstNameChange = (e) => {
        const { name, value } = e.target;
        setFirstName(value);
    };

    const handleLastNameChange = (e) => {
        const { name, value } = e.target;
        setLastName(value);
    };

    const handleEmailChange = (e) => {
        const { name, value } = e.target;
        setEmail(value);
    };

    const handlePhoneChange = (e) => {
        const { name, value } = e.target;
        setPhone(value);
    };

    const handleDescriptionChange = (e) => {
        const { name, value } = e.target;
        setDescription(value);
    };

    const updateSelection = (item) => {
        setSelect(item)
    }

    return (
        <React.Fragment>
        <div className="box">
            <form>
            <div>
                <input type="name" placeholder="first name" value={firstName} onFocus={handleFocus} onChange={handleFirstNameChange}/>
            </div>
            <div>
                <input type="name"  placeholder="last name" value={lastName} onFocus={handleFocus} onChange={handleLastNameChange}/>
            </div>
            <div>
                <input type="email" placeholder="email" value={email} onFocus={handleFocus} onChange={handleEmailChange}/>
            </div>
            <div>
                <input type="phone" placeholder="phone" value={phone} onFocus={handleFocus} onChange={handlePhoneChange}/>
            </div>
            <div>
                <select value={select} onChange={e => setSelect(e.target.value)}>
                    {support.map((item, index) => (
                        <option value={item} key={index} >{item}</option>
                    ))}
                </select>
            </div>
            {select === 'General Support' &&
                <div>
                    <input type="date" placeholder="Date Issue Occurred" />
                </div>
            }
            <div>
                <textarea placeholder="Describe your issue..." value={description} onFocus={handleFocus} onChange={handleDescriptionChange} />
            </div>
            <button type="submit">
                Submit
            </button>
            </form>
        </div>
        </React.Fragment>
    )
}

export default Form;