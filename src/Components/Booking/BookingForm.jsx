import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react'; // Import the new hooks
import './BookingForm.css';

const BookingForm = () => {
  const { serviceType } = useParams();
  
  // Use Formspree's useForm hook with your unique ID
  // It handles form submission, state, and errors for you!
  const [state, handleSubmit] = useForm("mldlwarq");

  // If the form was submitted successfully, show a message
  if (state.succeeded) {
    return (
      <div className="booking-container">
        <div className="section-content">
          <div className="alert success">
            Thank you! Your inquiry has been sent. Please follow the Zelle instructions below to finalize your booking.
          </div>
          <div className="zelle-instructions">
            <h3>Finalize Your Booking with Zelle</h3>
            <p>
              To secure your session, please send a deposit or full payment via Zelle to:
              <br />
              <strong>your-email@example.com</strong> or <strong>(555) 123-4567</strong>.
              <br />
              Please include your full name and the type of service in the memo.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // If the form hasn't been submitted yet, show the form itself
  return (
    <div className="booking-container">
      <div className="section-content">
        <h1>Book Your {serviceType.replace(/-/g, ' ').toUpperCase()} Session</h1>
        <p>Please fill out the form below, and we'll be in touch to confirm the details.</p>
        
        {/* The form now uses the handleSubmit function from the useForm hook */}
        <form onSubmit={handleSubmit} className="booking-form">
          <label htmlFor="name">Full Name:</label>
          <input 
            id="name"
            type="text" 
            name="name" 
            required 
          />
          {/* Formspree's error handling for the name field */}
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />

          <label htmlFor="email">Email Address:</label>
          <input 
            id="email"
            type="email" 
            name="email" 
            required 
          />
          {/* Formspree's error handling for the email field */}
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />

          <label htmlFor="phone">Phone Number:</label>
          <input 
            id="phone"
            type="tel" 
            name="phone"
          />

          <label htmlFor="message">Session Details:</label>
          <textarea 
            id="message"
            name="message" 
            rows="5" 
            placeholder="Date, location, and any special requests." 
            required 
          />
          {/* Formspree's error handling for the message field */}
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />

          <input type="hidden" name="Service Type" value={serviceType.replace(/-/g, ' ')} />
          
          <button type="submit" disabled={state.submitting} className="form-submit-button">
            Submit Booking Request
          </button>
        </form>

        <div className="zelle-instructions">
          <h3>Finalize Your Booking with Zelle</h3>
          <p>
            To secure your session, please send a deposit or full payment via Zelle to:
            <br />
            <strong>your-email@example.com</strong> or <strong>(555) 123-4567</strong>.
            <br />
            Please include your full name and the type of service in the memo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;