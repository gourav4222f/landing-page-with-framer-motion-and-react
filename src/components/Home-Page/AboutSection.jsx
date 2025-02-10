import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import { BsEmojiDizzyFill, BsEmojiHeartEyesFill, BsEmojiSmileFill, BsFillEmojiExpressionlessFill, BsFillEmojiGrinFill, BsFillEmojiKissFill, BsFillEmojiWinkFill } from 'react-icons/bs';

function AboutSection() {
    const TextContainer = useRef(null);

    const textPeragraph = `At MSTY, we are passionate about providing comprehensive web development and digital marketing solutions that empower businesses to succeed in the digital age. Our team of skilled professionals works closely with you to understand your unique needs and goals, creating tailored strategies that drive measurable results. We specialize in building custom websites that are not only visually stunning but also optimized for performance, user experience, and conversion.

From responsive web design to seamless e-commerce platforms, we ensure your online presence is robust, scalable, and easy to navigate. Our digital marketing services, including SEO, SEM, social media management, content creation, and paid advertising campaigns, are designed to increase visibility, engage your target audience, and boost brand recognition.

We also believe in the power of data and analytics, using these insights to refine our strategies and maximize the effectiveness of every campaign. Whether you're looking to grow your online community, improve search engine rankings, or enhance your brand's overall digital footprint, we’re here to help you succeed. Our commitment to excellence and continuous innovation means that we don't just meet expectations—we exceed them. Partner with us, and let’s take your business to the next level in the ever-evolving digital landscape.`;

    const textPeragraphMobile = `At MSTY, we provide comprehensive web development and digital marketing solutions. Our team creates tailored strategies to drive results, specializing in custom websites optimized for performance and user experience. Our services include SEO, SEM, social media management, content creation, and paid advertising to boost visibility and brand recognition. We use data and analytics to refine strategies and maximize campaign effectiveness. Partner with us to elevate your business in the digital landscape.`;

    const newText = textPeragraph.split("").map((char, index) => <span key={index}>{char}</span>);
    const newtextPeragraphMobile = textPeragraphMobile.split("").map((char, index) => <span key={index}>{char}</span>);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const spans = TextContainer.current.querySelectorAll("span");

        // Initial color state (set it to white or transparent to start)
        gsap.set(spans, { color: "transparent" });

        const animation = gsap.fromTo(
            spans,
            { color: "transparent" }, // starting color
            {
                color: "#ffd7a8", // final color                
                stagger: 0.1,
                ease: 'circ.out',
                scrollTrigger: {
                    trigger: TextContainer.current,
                    end: 'top 0%',
                    start: 'top 30%',
                    scrub: true,
                    // markers: true, // Remove once done testing
                }
            }
        );

        return () => {
            animation.kill();
        };
    }, []);

    return (
        <div ref={TextContainer} className="md:h-screen bg-amber-950 text-white flex items-center mx-auto flex-col md:py-8 relative">
            <div className=' absolute w-full h-full z-0 text-7xl text-yellow-300/5 flex flex-wrap'>
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiHeartEyesFill />
                <BsFillEmojiKissFill />
                <BsFillEmojiGrinFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
                <BsEmojiDizzyFill />
                <BsEmojiSmileFill />
                <BsFillEmojiWinkFill />
                <BsFillEmojiExpressionlessFill />
            </div>
            <h1 className=' md:text-7xl text-5xl  uppercase  font-bold text-orange-200 my-10 z-10'>About US</h1>
            <p className=' md:text-3xl max-w-6xl  px-4 text-justify mb-6 z-10 hidden md:block'>{newText}</p>
            <p className=' text-xl px-4 text-center z-10 md:hidden'>{newtextPeragraphMobile}</p>
            <span style={{ fontFamily: "Cedarville Cursive" }} className=' md:text-7xl text-4xl text-nowrap mx-auto md:ml-auto z-10 mt-5 md:mr-40'>❤Gourav thakur</span>
        </div>
    );
}

export default AboutSection;
