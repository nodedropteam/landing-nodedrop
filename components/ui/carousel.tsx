"use client"

import React, { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "motion/react";
import useMeasure from "react-use-measure";

// Constants for animation speed
const FAST_DURATION = 50;
const SLOW_DURATION = 100;

export default function InfiniteCarousel(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) {
    // State to control animation speed
    const [speed, setSpeed] = useState(FAST_DURATION);
    // State to ensure animation completes before restarting
    const [mustFinish, setMustFinish] = useState(false);
    // State to force rerender when needed
    const [rerender, setRerender] = useState(false);

    // Hook to measure the width of the carousel container
    let [carouselRef, { width }] = useMeasure();

    // Motion value for controlling the x-axis translation
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let animationControls;
        // The final position for the animation (half the width, moving left)
        let finalPos = -width / 2 - 8;

        if (mustFinish) {
            // When mustFinish is true, complete the animation before stopping
            animationControls = animate(xTranslation, [xTranslation.get(), finalPos], {
                ease: 'linear',
                duration: speed * (1 - xTranslation.get() / finalPos),
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender); // Force re-render to restart animation
                },
            });
        } else {
            // Normal infinite looping animation
            animationControls = animate(xTranslation, [0, finalPos], {
                ease: 'linear',
                duration: speed,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0
            });
        }

        // Cleanup function to stop the animation when component unmounts or updates
        return animationControls.stop;
    }, [xTranslation, width, speed, rerender]);

    return (
        <div className="overflow-hidden py-4 relative">
            <div className="left-buffer absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r
            from-background via-transparent to-transparent" />
            <div className="right-buffer absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l
            from-background via-transparent to-transparent" />
            <motion.div
                style={{ x: xTranslation }} // Bind motion value to x-axis translation
                ref={carouselRef} // Assign reference for measuring width
                className="carousel flex w-max gap-2 relative"
                onHoverStart={() => {
                    setMustFinish(true); // Ensure the animation completes
                    setSpeed(SLOW_DURATION); // Slow down animation on hover
                }}
                onHoverEnd={() => {
                    setMustFinish(true); // Ensure the animation completes
                    setSpeed(FAST_DURATION); // Speed up animation when hover ends
                }}>
                {children}
                {children}
            </motion.div>
        </div>
    );
}
