"use client";

import React, { useState, useCallback } from 'react';
import Chatbot from 'react-simple-chatbot';

const ChatbotComponent = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const steps = [
    {
      id: '1',
      message: 'Welcome to our website! How can I assist you today?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 'products', label: 'Tell me about your products', trigger: 'products' },
        { value: 'order', label: 'I want to place an order', trigger: 'order' },
        { value: 'support', label: 'I need support', trigger: 'support' },
      ],
    },
    {
      id: 'products',
      message: 'We offer a wide range of products including electronics, clothing, and home goods. What specific product are you interested in?',
      trigger: 'product-details',
    },
    {
      id: 'product-details',
      user: true,
      trigger: 'product-response',
    },
    {
      id: 'product-response',
      message: 'Thank you for your interest! You can find more details on our products page. Is there anything else I can help you with?',
      trigger: 'anything-else',
    },
    {
      id: 'order',
      message: 'To place an order, please visit our shop page or contact our sales team at sales@example.com. Do you need help with anything else?',
      trigger: 'anything-else',
    },
    {
      id: 'support',
      message: 'I’m here to help! Please describe the issue you are facing.',
      trigger: 'support-details',
    },
    {
      id: 'support-details',
      user: true,
      trigger: 'support-response',
    },
    {
      id: 'support-response',
      message: 'Thank you for providing the details. Our support team will get back to you shortly. Is there anything else I can help you with?',
      trigger: 'anything-else',
    },
    {
      id: 'anything-else',
      options: [
        { value: 'yes', label: 'Yes', trigger: '2' },
        { value: 'no', label: 'No', trigger: 'end-message' },
      ],
    },
    {
      id: 'end-message',
      message: 'Thank you for using our chatbot! Have a great day!',
      end: true,
    },
  ];

  const toggleChatbot = useCallback(() => {
    setShowChatbot(prevShowChatbot => !prevShowChatbot);
  }, []);

  return (
    <div>
      <button className='chatbot-button  zindex={1}' onClick={toggleChatbot}>
        {showChatbot ? 'Close Chat' : 'Chat with us'}
      </button>
      {showChatbot && (
        <div className='chatbot-container'>
          <Chatbot steps={steps} />
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
