import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Button = ({ variant = 'simple', href, onClick, children, className = '' }) => {
    const buttonRef = useRef(null);
    const tl = useRef();

    const variants = {
        cta: 'px-8 py-4 rounded-full font-bold bg-red-950 text-orange-200 hover:bg-red-900 hover:text-orange-300 shadow-lg',
        normal: 'px-8 py-4 rounded-full font-bold  text-red-950 border-1 border-red-950 hover:bg-orange-300 shadow-lg',
        simple: 'px-6 py-3 rounded-lg font-medium bg-red-950 text-orange-200 hover:bg-orange-500',
        link: 'text-red-950 hover:text-red-900 underline underline-offset-4 decoration-orange-200',
    };

  
    const commonProps = {
        ref: buttonRef,
        className: `transition-all duration-200 cursor-pointer ${variants[variant]} ${className}`,
        role: 'button',
        tabIndex: 0,
    };

    return variant === 'link' && href ? (
        <a href={href} {...commonProps}>
            {children}
        </a>
    ) : (
        <button type="button" {...commonProps}>
            {children}
        </button>
    );
};

export default Button;