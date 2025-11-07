'use client'
import React, { useEffect, useRef } from "react";
import {
  GraduationCap,
  Users,
  Award,
  HeartHandshake,
  TrendingUp,
  Globe,
} from "lucide-react";

const WhyChooseUS = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef(null);

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "10+ Years Experience",
      description: "A decade of expertise in international education",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "Experienced consultants ensure smooth application process",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "High Success Rate",
      description: "Proven track record with excellent results",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "50+ Universities",
      description: "Connected to universities worldwide",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Career Support",
      description: "Employment advice and work opportunities worldwide",
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Settlement Assistance",
      description: "Support for accommodation and cultural adaptation",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    if (imageRef.current) observer.observe(imageRef.current);
    if (headerRef.current) observer.observe(headerRef.current);
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(78,205,196,0.15) 0%, rgba(78,205,196,0.08) 25%, rgba(78,205,196,0.05) 50%, rgba(240,249,255,0.8) 75%, rgba(255,255,255,0.95) 100%)",
      }}
    >
      {/* Animation Style */}
      <style jsx>{`
        @keyframes cardFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .auto-motion {
          animation: cardFloat 5s ease-in-out infinite;
        }
      `}</style>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--primary)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[var(--secondary)] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div
            ref={imageRef}
            className="relative opacity-0 transition-all duration-1000 ease-out"
            style={{ transform: "translateX(-50px)" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ">
              <img
                src={"/whyChoose/stock.png"}
                alt="Professional"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div
              ref={headerRef}
              className="opacity-0 transition-all duration-1000 ease-out"
              style={{ transform: "translateY(30px)" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-6">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-[var(--primary)] to-teal-600 bg-clip-text text-transparent">
                  EduLink
                </span>
                ?
              </h2>

              <p className="text-lg text-[var(--secondary)]/70 leading-relaxed mb-12">
                Discover why thousands of students and parents trust EduLink for guidance and success.{" "}
                <span className="text-[var(--primary)] font-semibold">
                  Your success is our mission.
                </span>
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className="group relative opacity-0 transition-all duration-700 ease-out auto-motion"
                  style={{
                    transform: "translateY(30px)",
                    transitionDelay: `${index * 100}ms`,
                    animationDelay: `${index * 0.5}s`, // staggered motion
                  }}
                >
                  <div className="flex gap-4 items-start">
                    {/* Icon Box */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-white border-2 border-[var(--primary)] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:scale-110 group-hover:shadow-lg">
                        <div className="text-[var(--secondary)] transition-colors duration-300 group-hover:text-white">
                          {feature.icon}
                        </div>
                      </div>
                      {/* Bottom border accent */}
                      <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[var(--secondary)] mb-2 transition-colors duration-300 group-hover:text-[var(--primary)]">
                        {feature.title}
                      </h3>
                      <p className="text-[var(--secondary)]/70 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUS;