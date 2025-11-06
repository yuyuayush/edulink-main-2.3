"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, BookOpen, GraduationCap } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const WhyChooseHat = () => {
    const hatRefs = useRef<(HTMLDivElement | null)[]>([]);
    const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
    const textRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
          if (!hatRefs.current || !textRef.current || !containerRef.current) return;

        // 🎓 Animate all hats differently
        hatRefs.current.forEach((hat, index) => {
            const delay = index * 0.3;
            const throwTl = gsap.timeline({
                scrollTrigger: { trigger: hat, start: "top 60%" },
                delay,
            });

            throwTl 
                .to(hat, {
                    y:-180,
                    x: 0,
                    rotation: 180 + index * 60,
                    duration: 1.8,
                    ease: "easeInOut",
                    onComplete: () => {
                        const floatTl = gsap.timeline({ repeat: -1, yoyo: true });
                        floatTl
                            .to(hat, {
                                y: -140,
                                rotation: "+=10",
                                duration: 1.5 + index * 0.3,
                                ease: "sine.inOut",
                            })
                            .to(hat, {
                                y: -150,
                                rotation: "-=10",
                                duration: 1.5 + index * 0.3,
                                ease: "sine.inOut",
                            });
                    },
                });
        });

        // ✨ Text Reveal Animation
        const lines = textRef.current.querySelectorAll(".split-line");
        lines.forEach((line) => {
            const words = line.innerHTML.split(" ");
            line.innerHTML = words
                .map(
                    (word) => `
          <span class="word-wrapper overflow-hidden inline-block">
            <span class="word inline-block">${word}&nbsp;</span>
          </span>`
                )
                .join("");
        });

        const wordElements = textRef.current.querySelectorAll(".word");
        gsap.from(wordElements, {
            scrollTrigger: { trigger: textRef.current, start: "top 80%" },
            yPercent: 100,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.03,
        });

        // 📦 Cards Animation
        const boxes = boxRefs.current;
        const stackTl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
            },
        });

        stackTl
            .from(boxes, {
                y: -80,
                rotation: -8,
                duration: 0.5,
                stagger: 0.15,
                ease: "power2.out",
            })
            .to(boxes, {
                y: 0,
                rotation: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "bounce.out",
            });

        // Floating motion
        gsap.to(boxes, {
            y: -6,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.3,
        });
    }, []);

    const features = [
        {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "Expert Guidance",
            description:
                "From student to post-study visas, our experienced consultants ensure a smooth application process.",
            label: "Guidance",
        },
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Study Pathways",
            description:
                "Choose the right course and university that aligns with your career goals for real success.",
            label: "Expertise",
        },
        {
          icon: <Award className="w-8 h-8" />,
          title: "95% Success Rate",
          description:
            "Our proven track record speaks for itself with excellent results.",
          label: "Results",
          stats: { number: "95%", label: "Visa Success Rate" },
        },
    ];

    return (
        <section className="py-20 sm:py-32 relative w-full bg-gradient-to-b from-white to-blue-50  px-6 md:px-12 lg:px-16 overflow-hidden">
            <div className="mx-auto grid lg:grid-cols-2 gap-20 items-start relative z-10">
                {/* LEFT SIDE */}
                <div className="flex items-end relative h-full  ">
                    <div className=" relative w-[550px] h-[300px] md:w-full md:h-100">
                        <Image
                            src="/whyChoose/graduate.png"
                            alt="group throwing hat"
                            fill
                            className="object-cover drop-shadow-2xl "
                        />
                    </div>


                    {/* Multiple Hats */}
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            ref={(el) => {
                                hatRefs.current[i] = el;
                            }}
                            className={`absolute left-0 w-22 h-20 md:w-32 md:h-32 ${i === 0
                                ? "left-[46%] top-20"
                                : i === 1
                                    ? "left-[30%] top-20"
                                    : i === 2 ? "left-[70%] top-20"
                                        : "left-[10%] top-20"
                                } z-20`}
                        >
                            <Image
                                src="/whyChoose/graduate-hat.png"
                                alt={`Flying hat ${i + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* RIGHT SIDE */}
                <div
                    ref={textRef}
                    className="space-y-10 text-center lg:text-left relative"
                >
                    {/* Heading */}
                    <div className="mb-14">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-momo text-[var(--secondary)] mb-3 tracking-tight">
                            Why Choose{" "}
                            <span className="bg-gradient-to-r from-[var(--primary)] to-teal-600 bg-clip-text font-momo text-transparent">
                                EduLink
                            </span>
                            ?
                        </h2>
                        <p className="text-base md:text-lg text-secondary/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Discover why thousands of students and parents trust EduLink for
                            guidance and success.{" "}
                            <span className="text-primary font-semibold">
                                Your success is our mission.
                            </span>
                        </p>
                    </div>

                    {/* Feature Boxes */}
                    <div
                        ref={containerRef}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 md:pt-6"
                    >
                        {features.map((feature, i) => (
                            <div
                                key={i}
                                ref={(el) => {
                                    boxRefs.current[i] = el;
                                }}
                                className="group relative flex flex-col justify-between bg-white/90 backdrop-blur-xl 
                border border-transparent rounded-2xl p-5 shadow-sm transition-all duration-500 
                hover:-translate-y-3 hover:shadow-[0_12px_30px_rgba(0,150,255,0.15)] 
                hover:border-blue-300 hover:bg-white"
                            >
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-50 via-teal-50 to-purple-50 blur-xl transition-all duration-700"></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Top section: Icon + Label */}
                                    <div className="flex justify-center md:justify-between items-center mb-4">
                                        <div className="p-2 rounded-xl bg-gradient-to-br from-[var(--primary)] to-teal-500 text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                            {feature.icon}
                                        </div>
                                        <span className="hidden md:inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 group-hover:bg-blue-200 transition-colors duration-300">
                                            {feature.label}
                                        </span>
                                    </div>

                                    {feature.stats && (
                                        <div className="text-center mb-4">
                                            <div className="text-4xl font-bold text-secondary mb-1">
                                                {feature.stats.number}
                                            </div>
                                            <div className="font-medium text-secondary/70">
                                                {feature.stats.label}
                                            </div>
                                        </div>
                                    )}

                                    <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-secondary/70 leading-relaxed flex-1">
                                        {feature.description}
                                    </p>

                                    <div className="flex justify-end mt-5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
                                        <button className="flex items-center text-[var(--primary)] text-sm font-semibold">
                                            Learn More
                                            <svg
                                                className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Soft Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -z-10" />
        </section>
    );
};

export default WhyChooseHat;
