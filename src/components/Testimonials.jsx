// UI component: animated 3-slot testimonial carousel (left/center/right).
import { useEffect, useRef, useState } from "react";
import "./Testimonials.css";

export default function Testimonials({ items, intervalMs = 3000 }) {
    const data = items ?? [];
    const [index, setIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [noTrans, setNoTrans] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        if (!data.length) return;

        if (timerRef.current) window.clearInterval(timerRef.current);

        timerRef.current = window.setInterval(() => {
            setAnimating(true);
        }, intervalMs);

        return () => {
            if (timerRef.current) window.clearInterval(timerRef.current);
        };
    }, [data.length, intervalMs]);

    if (!data.length) return null;

    const left = data[(index - 1 + data.length) % data.length];
    const center = data[index];
    const right = data[(index + 1) % data.length];
    const incoming = data[(index + 2) % data.length];

    const handleAnimEnd = (e) => {
        if (!animating) return;
        if (e.propertyName !== "transform") return;

        // 1) Commit new index
        setIndex((i) => (i + 1) % data.length);

        // 2) Turn off the animation state
        setAnimating(false);

        // 3) Disable transitions for 1 frame so roles snap without sliding back
        setNoTrans(true);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setNoTrans(false));
        });
    };

    return (
        <div
            className={`t-stage ${animating ? "t-anim" : ""} ${noTrans ? "t-notrans" : ""}`}
            aria-label="Testimonials carousel"
        >
            {/* leaving (left) */}
            <Card item={left} className="t-card t-left" onTransitionEnd={handleAnimEnd} />

            {/* center */}
            <Card item={center} className="t-card t-center" />

            {/* right */}
            <Card item={right} className="t-card t-right" />

            {/* incoming */}
            <Card item={incoming} className="t-card t-incoming" />
        </div>
    );
}

function Card({ item, className, onTransitionEnd }) {
    return (
        <div className={className} onTransitionEnd={onTransitionEnd}>
            <div className="t-quote">“{item.quote}”</div>
            <div className="t-author">{item.author}</div>
            <div className="t-meta">{item.meta}</div>
        </div>
    );
}
