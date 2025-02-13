import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
    const history = useHistory();

    const handleGetStarted = () => {
        history.push('/products');
    };

    return (
        <div className="text-center mt-5">
            <h1>Welcome to SimpleApp</h1>
            <p>Manage your products with ease.</p>
            <Button variant="primary" onClick={handleGetStarted}>Get Started</Button>
        </div>
    );
};

export default LandingPage;