import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export function TextAnimation() {
    const textRef = useRef(null);
    const words = ['webDevelopment', 'UI/UX', 'Mobile Apps', 'Branding'];
    const chars = '!<>-_\\/[]{}—=+*^?#________';

    useEffect(() => {
        let currentIndex = 0;
        const element = textRef.current;

        function scrambleText(newText) {
            const oldText = element.textContent;
            const length = Math.max(oldText.length, newText.length);
            const queue = [];

            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                queue.push({ from, to, start, end });
            }

            gsap.to({}, {
                duration: 1.5,
                onUpdate: function () {
                    let output = '';
                    const t = this.progress() * queue.length;

                    queue.forEach(({ from, to, start, end }, i) => {
                        const d = t - i;
                        const randomChar = chars[Math.floor(Math.random() * chars.length)];
                        output += d >= 0 ? to : (d > -0.5 ? randomChar : from);
                    });

                    element.textContent = output;
                },
                onComplete: () => {
                    // After scramble, wait for 2 seconds before moving to the next word
                    gsap.delayedCall(2, nextWord);
                }
            });
        }

        function nextWord() {
            currentIndex = (currentIndex + 1) % words.length;
            scrambleText(words[currentIndex]);
        }

        // Initial animation
        gsap.to(element, {
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
                scrambleText(words[0]); // Start with the first word
            }
        });

        // Cleanup animation on unmount
        return () => {
            gsap.killTweensOf(element); // Stop all GSAP animations
        };
    }, []);

    return (
        <p>            
            <span
                ref={textRef}
                className="font-semibold opacity-0"
                style={{ display: 'inline-block', minWidth: '200px' }}
            >
                {/* Initial text will be replaced by animation */}
            </span>
        </p>
    );
}