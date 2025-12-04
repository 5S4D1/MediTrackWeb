import React from 'react'

/**
 * Hero component
 * Props:
 * - background: React node rendered as the absolute background
 * - children: foreground content
 * - heightClass: tailwind height classes (default provides tall hero on large screens)
 */
const Hero = ({
    background,
    children,
    heightClass = 'min-h-[600px] md:h-screen',
    overlay = true,
    overlayClass = 'bg-gradient-to-b from-black/60 via-black/30 to-transparent',
    allowBackgroundPointerEvents = false,
}) => {
    return (
        <section className={`relative w-full overflow-hidden ${heightClass}`}>
            {/* Background (absolute, z-0) */}
            <div
                className={`absolute inset-0 z-0 ${allowBackgroundPointerEvents ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                <div className="w-full h-full">
                    {background}
                </div>
            </div>

            {/* Overlay to darken / add depth */}
            {overlay && <div className={`absolute inset-0 z-5 ${overlayClass} pointer-events-none`}></div>}

            {/* Foreground (relative, z-10) */}
            <div className="relative z-10 w-full h-full flex items-center">
                <div className="container mx-auto px-4">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Hero
