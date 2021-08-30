import React, { useState } from 'react';
import styled from 'styled-components';

import { BREAKPOINTS } from 'global-constants';

import BandTitle from 'components/BandTitle';

const TextMessage = styled.p`
    font-size: 0.9rem;
    width: 70vw;
    margin: 10px auto;

    &:last-child {
        margin-bottom: 20vh;
    }

    @media(max-width: ${BREAKPOINTS.sm}) {
        width: 85vw;
    }
`;

const Form = styled.form`
    width: 450px;
    max-width: 95vw;
    margin: 30px auto;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 
                0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 1rem;
    box-sizing: border-box;
`;

const FormTitle = styled.h3`
    color: ${props => props.theme.colors.limeGreen};
    margin: 0 0 1rem;
    text-align: center;
`;

const FormRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

const Label = styled.label`
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.colors.limeGreen};

    @media(max-width: ${BREAKPOINTS.sm}) {
        font-size: 0.85rem;
    }
`;

const Input = styled.input`
    border-radius: 8px;
    height: 20px;
    width: 60%;
    border: 1px solid #000;
    padding: 3px;
    font-size: 1rem;
`;

const MessageInput = styled.textarea`
    border-radius: 8px;
    width: calc(100% - 6px);
    border: 1px solid #000;
    padding: 3px;
    font-size: 14px;
    margin-top: 10px;
    resize: none;
`;

const SubmitButton = styled.button`
    border-radius: 8px;
    background-color: ${props => props.theme.colors.limeGreen};
    color: #FFF;
    border: none;
    padding: 5px 40px;
    margin: 10px auto 0;
    display: block;
    cursor: pointer;
`;

enum Field {
    Name = 'name',
    Email = 'email',
    PhoneNumber = 'phoneNumber',
    StreetAddress = 'streetAddress',
    City = 'city',
    ZipCode = 'zipCode',
    Message = 'message'
}

type Form = Record<Field, string>;

const initialForm: Form = {
    name: '',
    email: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    zipCode: '',
    message: ''
}

const RequestPage = () => {
    const [values, setValues] = useState<Form>(initialForm);
    const [isEmailSent, setIsEmailSent] = useState<boolean>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(values)
        }).then(res => {
            setIsEmailSent(res.ok);
        });

        setValues(initialForm);
    }

    return (
        <>  
            <BandTitle>Book our services</BandTitle>
            <TextMessage>
                We request a 48-hour notice for cancellation (via phone text
                or email), to which we will reply with a confirmation response. 
                In case you need to add or remove extra services, please let us know 
                so that we can schedule the cleaning time accordingly.
            </TextMessage>
            {isEmailSent === undefined ?
                <Form onSubmit={handleSubmit}>
                    <FormTitle>Request a booking</FormTitle>
                    <FormRow>
                        <Label htmlFor={Field.Name}>Your name</Label>
                        <Input 
                        required
                        id={Field.Name} 
                        name={Field.Name}
                        value={values.name}
                        onChange={handleChange} />
                    </FormRow>
                    <FormRow>
                        <Label htmlFor={Field.Email}>Email</Label>
                        <Input 
                        required
                        id={Field.Email} 
                        name={Field.Email}
                        type="email"
                        value={values.email}
                        onChange={handleChange} />
                    </FormRow>
                    <FormRow>
                        <Label htmlFor={Field.PhoneNumber}>Phone number</Label>
                        <Input 
                        required
                        id={Field.PhoneNumber} 
                        name={Field.PhoneNumber}
                        type="tel"
                        value={values.phoneNumber}
                        onChange={handleChange} />
                    </FormRow>
                    <FormRow>
                        <Label htmlFor={Field.StreetAddress}>Street Address</Label>
                        <Input 
                        required
                        id={Field.StreetAddress} 
                        name={Field.StreetAddress}
                        value={values.streetAddress}
                        onChange={handleChange} />
                    </FormRow>
                    <FormRow>
                        <Label htmlFor={Field.City}>City</Label>
                        <Input 
                        required
                        id={Field.City} 
                        name={Field.City}
                        value={values.city}
                        onChange={handleChange} />
                    </FormRow>
                    <FormRow>
                        <Label htmlFor={Field.ZipCode}>ZIP code</Label>
                        <Input 
                        required
                        id={Field.ZipCode} 
                        name={Field.ZipCode}
                        value={values.zipCode}
                        onChange={handleChange} />
                    </FormRow>
                    <Label htmlFor={Field.Message}>Message</Label>
                    <MessageInput
                    id={Field.Message} 
                    name={Field.Message}
                    rows={10}
                    value={values.message}
                    onChange={handleChange} />
                    <SubmitButton type="submit">Submit</SubmitButton>
                </Form> :
                <TextMessage>
                    {isEmailSent ? 
                        'Thank you for your request, we will get back to you as soon as possible.' : 
                        'We could not submit your request, please call us.'}
                </TextMessage>}
        </>
    );
}

export default RequestPage;