import { useEffect } from "react";

function useEvent(eventName, callback) {
    useEffect(() => {
        console.log('add');
        window.addEventListener(eventName, callback);

        return () => {
            console.log('remove');
            window.removeEventListener(eventName, callback);
        };
    }, [eventName, callback]);
}

export default useEvent;
