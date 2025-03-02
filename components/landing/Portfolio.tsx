"use client"

import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "motion/react";
import useMeasure from "react-use-measure";
import { Card } from "../ui/card";
import { section } from "motion/react-client";

// Array of image paths for the carousel
const images = [
    "/restaurant_steakhouse.jpg",
    '/daycare.jpg',
    "/restaurant_steakhouse.jpg",
    '/daycare.jpg',
    "/restaurant_steakhouse.jpg",
    '/daycare.jpg',
    '/daycare.jpg',
    "/restaurant_steakhouse.jpg",
];

// Constants for animation speed
const FAST_DURATION = 50;
const SLOW_DURATION = 100;

export default function Portfolio() {
    // State to toggle overlay visibility
    const [showOverlay, setShowOverlay] = useState(false);
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
        <section className="wrapper relative">
            <div className="">
                <div className="overflow-hidden w-full py-4 relative">
                    {/* <div className="left-buffer absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r
            from-background via-transparent to-transparent" />
                    <div className="right-buffer absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l
            from-background via-transparent to-transparent" /> */}
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
                        {/* Duplicate the images to create an infinite looping effect */}
                        {[...images, ...images].map((src, index) => (
                            <Card key={index} className="relative w-96 h-80 overflow-hidden">
                                {/* Overlay for possible additional UI effects */}
                                {showOverlay && (
                                    <div className="overlay absolute top-0 left-0 w-full h-full z-10"></div>
                                )}
                                <motion.img
                                    src={src}
                                    alt="carousel item"
                                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                                />
                            </Card>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
