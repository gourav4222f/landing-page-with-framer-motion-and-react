import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const icons = ['🎉', '🏆', '✨', '🎊', '✌️'];

function IconComponent() {
    const iconRef = useRef(null);

    useEffect(() => {
        let iconIndex = 0;

        const animateIcons = () => {
            gsap.to(iconRef.current, {
                scale: 0, // Scale down to 0
                duration: 0.5,
                onComplete: () => {
                    // Change the icon
                    iconIndex = (iconIndex + 1) % icons.length;
                    iconRef.current.textContent = icons[iconIndex];

                    // Scale back up to 1
                    gsap.to(iconRef.current, {
                        scale: 1,
                        duration: 0.5,
                    });
                },
            });
        };

        // Start the animation loop
        const interval = setInterval(animateIcons, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div ref={iconRef} className=' inline-block text-4xl'>
            {icons[0]}
        </div>
    );
}

export default IconComponent;