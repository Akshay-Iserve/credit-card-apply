import React, { useState, useLayoutEffect } from 'react';
import { useLocation } from "react-router-dom";

export const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

export const usePlatformFinder = () => {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size > 450 ? 'desktop' : 'mobile';
}