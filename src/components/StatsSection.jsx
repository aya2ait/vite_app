import React, { useRef, useEffect, useState } from 'react';

const StatCard = ({ target, label }) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000; // 2 seconds
          const increment = target / (duration / 40); // Calculate increment based on duration and interval
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              start = target;
              clearInterval(timer);
            }
            setCurrent(Math.floor(start));
          }, 40); // 40ms interval for smoother animation
          observer.disconnect(); // Stop observing once animated
        }
      },
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target]);

  return (
    <div ref={ref} className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-medium hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-primary/10">
      <div className="text-5xl font-bold bg-gradient-to-r from-orange-primary to-orange-400 bg-clip-text text-transparent mb-4">
        {current}{label === "Kilomètres parcourus" ? "K+" : ""}
      </div>
      <div className="text-gray-700 text-lg">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-gray-medium">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard target={500} label="Kilomètres parcourus" />
          <StatCard target={250} label="Clients satisfaits" />
          <StatCard target={15} label="Destinations desservies" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;