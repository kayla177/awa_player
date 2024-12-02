import { useEffect, useState } from 'react';

function useDebounce<T>(value: T, delay?: number): T { //delay -optional number
    const [debouncedValue, setDebouncedValue] = useState<T>(value); // State for debounced value

    // Set a timeout to update the value
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay || 500);

        // Clear the timeout on cleanup
        return () => {
            clearTimeout(timer);
        }
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;