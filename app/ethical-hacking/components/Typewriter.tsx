"use client";

import React, { useState, useEffect } from "react";

export default function Typewriter() {
    const words = ["Digital.", "Network.", "Privacy.", "Server."];
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentWord = words[wordIndex];
        let timer: NodeJS.Timeout;

        if (isDeleting) {
            timer = setTimeout(() => {
                setCharIndex((prev) => prev - 1);
                setText(currentWord.substring(0, charIndex - 1));
            }, 50);
        } else {
            timer = setTimeout(() => {
                setCharIndex((prev) => prev + 1);
                setText(currentWord.substring(0, charIndex + 1));
            }, 100);
        }

        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        }

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, wordIndex, words]);

    return (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400 cursor">
            {text}
        </span>
    );
}
