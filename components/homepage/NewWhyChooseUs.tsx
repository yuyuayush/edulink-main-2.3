"use client";
import Image from "next/image";
import React from "react";

const NewWhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-momo text-[var(--secondary)] mb-6 tracking-tight">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-[var(--primary)] to-teal-600 bg-clip-text font-momo text-transparent">
            EduLink
          </span>
          ?
        </h2>
        <p className="text-lg md:text-xl text-secondary/70 max-w-4xl mx-auto leading-relaxed">
          Discover what makes us the preferred choice for thousands of
          students and parents worldwide.
          <br />
          <span className="text-primary font-semibold">
            Your success is our mission.
          </span>
        </p>
      </div>

      {/* Main Card Section */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between bg-slate-900/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-slate-700/30">
        {/* Background Image */}
        <Image
          src="/whyChoose/building.jpg"
          fill
          alt="Building background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        {/* Content Section */}
        <div className="relative z-10 flex-1 p-10 lg:p-16 text-white space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-cyan-300">
            Worried about finding
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            The Perfect Career?
          </h2>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
            <span>Thousands of students & professionals have </span>
            <span className="text-cyan-400 font-medium">
              found the perfect guidance here.
            </span>
          </p>
          <p className="text-base md:text-lg text-gray-400 max-w-lg">
            Avail fully interactive remote counselling from the comfort of your home.
          </p>

          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-[#51302E] to-[#6b3d3b] hover:from-[#6b3d3b] hover:to-[#7e4644] text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            Talk to an Expert Now!
          </button>
        </div>

        {/* Image Section */}
        <div className="relative flex-1 flex items-end justify-center lg:justify-end z-10">
          <div className="relative w-full h-[350px] lg:h-[450px]">
            {/* Student Image */}
            <Image
              src="/whyChoose/student.png"
              alt="Student"
              width={900}
              height={700}
              className="absolute top-0 left-0 w-auto h-full object-contain z-10"
            />

            {/* Airplane Image */}
            <Image
              src="/whyChoose/airplane.png"
              alt="Airplane"
              width={250}
              height={250}
              className="absolute -top-10 right-6 lg:right-16 w-32 sm:w-40 lg:w-48 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewWhyChooseUs;
