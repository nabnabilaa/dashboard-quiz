import React from 'react';

interface WelcomeScreenProps {
    onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
    return (
        <div id="screen-welcome" className="app-screen active">
            <div className="hero-icon">🚀</div>
            <h1 className="hero-title">UML Mastery</h1>
            <p className="hero-subtitle">
                Interactive learning platform for Vocational High School students.<br />
                Understand Business Processes, Master UML, and Build your own Diagrams.
            </p>
            <button className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }} onClick={onStart}>
                Start Learning Adventure
            </button>
        </div>
    );
}
