

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ReviewSection = () => {
    const stickySectionRef = useRef(null);
    const stickyHeaderRef = useRef(null);
    const cardsRef = useRef([]);

    const reviewArray = [
        {
            img: "./img1.PNG",
            stars: 5,
            text: "This product has truly exceeded my expectations. The quality and performance are top-notch, and it has made a significant positive impact on my daily routine. I highly recommend it!"
        },
        {
            img: "./img2.PNG",
            stars: 4,
            text: "I’m very satisfied with this product. While it performs well and delivers on most aspects, there's a minor feature that could use improvement. Nonetheless, it’s still worth every penny!"
        },
        {
            img: "./img3.PNG",
            stars: 3,
            text: "The product is okay but not as great as I had hoped. It meets the basic needs, but I feel there are better alternatives in the market. It could use a few improvements to be more competitive."
        },
        {
            img: "./img4.PNG",
            stars: 5,
            text: "Absolutely love this product! It’s easy to use, reliable, and works exactly as advertised. It has become an essential part of my daily life, and I would not hesitate to purchase it again."
        },
        {
            img: "./img5.PNG",
            stars: 4,
            text: "This product is good overall. It’s reliable and works efficiently, though I believe some aspects could be made even better. Still, I’m happy with my purchase and would recommend it to others."
        }
    ];


    useEffect(() => {
        if (!stickySectionRef.current || !stickyHeaderRef.current || cardsRef.current.length === 0) return;

        const transforms = [
            [
                [0, 50, 100, 150, 200],
                [0, 5, 10, 15, 20]
            ],
            [
                [0, 80, 120, 160, 200],
                [0, -5, -10, -15, -20]
            ],
            [
                [0, 40, 80, 120, 160],
                [0, 8, 12, 16, 20]
            ],
            [
                [0, 60, 100, 140, 180],
                [0, -8, -12, -16, -20]
            ],
            [
                [0, 70, 140, 210, 280],
                [0, 10, 15, 20, 25]
            ],
        ];





        const stickyHeight = window.innerHeight * 8; // Increased scroll distance

        ScrollTrigger.create({
            trigger: stickySectionRef.current,
            start: "top top",
            end: `+=${stickyHeight}px`,
            pin: true,
            pinSpacing: true,
            onUpdate: (self) => {
                const progress = self.progress;
                const maxTranslate = stickyHeaderRef.current.offsetWidth - window.innerWidth;
                const translateX = -progress * maxTranslate;

                gsap.set(stickyHeaderRef.current, { x: translateX });

                cardsRef.current.forEach((card, index) => {
                    const delay = index * 0.2; // Increased delay
                    const cardProgress = Math.max(0, Math.min(1, (progress - delay) * 2));

                    if (cardProgress > 0) {
                        const cardStartX = 25;
                        const cardEndX = -window.innerWidth * 1.5; // Adjusted end position
                        const yPos = transforms[index][0];
                        const rotations = transforms[index][1];

                        const cardX = gsap.utils.interpolate(cardStartX, cardEndX, cardProgress);
                        const yProgress = cardProgress * 4;
                        const yIndex = Math.min(Math.floor(yProgress), yPos.length - 2);
                        const yInterpolation = yProgress - yIndex;

                        const cardY = gsap.utils.interpolate(yPos[yIndex], yPos[yIndex + 1], yInterpolation);
                        const cardRotation = gsap.utils.interpolate(rotations[yIndex], rotations[yIndex + 1], yInterpolation);

                        gsap.set(card, {
                            x: cardX,
                            y: cardY,
                            rotation: cardRotation,
                            opacity: 1
                        });
                    } else {
                        gsap.set(card, { opacity: 0 });
                    }
                });
            }
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <div className=" w-fill h-full  p-4 bg-amber-950">
            <section ref={stickySectionRef} className="relative rounded-2xl bg-orange-200 h-screen overflow-hidden">
                <div
                    ref={stickyHeaderRef}
                    className="absolute top-0 left-0 w-[250vw] h-full flex justify-center items-center will-change-transform"
                >
                    <h1 className="text-amber-950 text-[350px] font-light whitespace-nowrap leading-none m-0 ">
                        Our customer testimonials
                    </h1>
                </div>
                {reviewArray.map((review, i) => (
                    <div
                        key={i}
                        ref={el => cardsRef.current[i] = el}
                        className="card absolute top-[10%] left-full w-[350px] h-[500px] bg-red-950 rounded-xl p-2 will-change-transform z-10 opacity-0"
                    >
                        <div className="w-full h-[200px] rounded-lg overflow-hidden">
                            <img src={review.img} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="h-[275px] flex flex-col justify-between text-orange-200 p-2">
                            <h2 className="text-2xl font-light">{`Rating: ${review.stars} stars`}</h2>
                            <p className="text-xl font-light">
                                {review.text}
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ReviewSection;