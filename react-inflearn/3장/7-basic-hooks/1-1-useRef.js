import React, { useState, useRef, useEffect } from 'react';

export default function App() {
    const timerIdRef = useRef(-1);
    useEffect(() => {
        timerIdRef.current = setTimeout(() => {}, 1200);
    });
    //...
    useEffect(() => {
        if (timerIdRef.current >= 0) {
            clearTimeout(timerIdRef.current);
        }
    });
    //...
}