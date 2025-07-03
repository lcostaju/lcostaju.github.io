import { Fragment, useEffect } from "react";
import ScrollReveal from 'scrollreveal';

const animations = {
    scale: { duration: 700, scale: 0.1, easing: 'ease-in', reset: true },
    fade: { duration: 700, opacity: 0, easing: 'ease-in', reset: true },
    slideLeft: { duration: 700, distance: '100px', origin: 'left', easing: 'ease-in', reset: true },
    slideRight: { duration: 700, distance: '100px', origin: 'right', easing: 'ease-in', reset: true },
    // Adicione outras animações conforme necessário
};

export default function Animacao({ css_identifier, type = "scale" }) {
    useEffect(() => {
        const config = animations[type] || animations.scale;
        ScrollReveal().reveal(css_identifier, config);
    }, [css_identifier, type]);

    return <Fragment />;
}