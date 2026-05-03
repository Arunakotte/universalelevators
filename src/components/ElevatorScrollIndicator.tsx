import { useEffect, useRef, useState } from "react";

const FLOORS = [
  { id: "hero", label: "1F" },
  { id: "services", label: "2F" },
  { id: "about", label: "3F" },
  { id: "testimonials", label: "4F" },
  { id: "contact", label: "5F" }
];

export function ElevatorScrollIndicator() {
  const shaftRef = useRef<HTMLDivElement>(null);
  const elevatorRef = useRef<HTMLDivElement>(null);
  const [activeFloor, setActiveFloor] = useState(0);
  const activeFloorRef = useRef(0);

  useEffect(() => {
    // Determine which section is currently active
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = FLOORS.findIndex(f => f.id === entry.target.id);
            if (index !== -1) {
              activeFloorRef.current = index;
              setActiveFloor(index);
            }
          }
        });
      },
      { rootMargin: "-30% 0px -40% 0px", threshold: 0 }
    );

    const timeout = setTimeout(() => {
      FLOORS.forEach(floor => {
        const el = document.getElementById(floor.id);
        if (el) observer.observe(el);
      });
    }, 100);

    let animationFrameId: number;
    let currentY = 0;
    
    // Cache dimensions to prevent layout thrashing inside requestAnimationFrame
    let maxMove = 0;
    
    const updateDimensions = () => {
      if (shaftRef.current && elevatorRef.current) {
        const shaftHeight = shaftRef.current.clientHeight;
        const elevatorHeight = elevatorRef.current.clientHeight;
        maxMove = shaftHeight - elevatorHeight;
      }
    };
    
    const ro = new ResizeObserver(updateDimensions);
    if (shaftRef.current) {
      ro.observe(shaftRef.current);
    }
    updateDimensions();

    const animate = () => {
      // Calculate target Y position based on active floor and cached maxMove
      const targetY = (activeFloorRef.current / (FLOORS.length - 1)) * maxMove;

      // Smooth easing (lerp)
      currentY += (targetY - currentY) * 0.08;
      
      if (elevatorRef.current) {
        // 60fps hardware accelerated movement
        elevatorRef.current.style.transform = `translate(-50%, ${currentY}px)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
      ro.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToFloor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-5 top-[120px] h-[70vh] w-[80px] z-[999] hidden md:block elevator-track">
      <div 
        ref={shaftRef} 
        className="relative h-full w-[6px] bg-gradient-to-b from-[#e5e7eb] to-[#cbd5e1] mx-auto rounded-[4px] shadow-inner shaft"
      >
        {/* Floor markings & Labels */}
        {FLOORS.map((floor, i) => {
          const isActive = activeFloor === i;
          return (
            <div 
              key={floor.id}
              className="absolute left-1/2 -translate-x-1/2 flex items-center"
              style={{ top: `${(i / (FLOORS.length - 1)) * 100}%` }}
            >
              {/* Horizontal line marker */}
              <div className="absolute left-1/2 -translate-x-1/2 w-[16px] h-[1px] bg-[#cbd5e1]" />
              
              {/* Floor Label */}
              <button
                onClick={() => scrollToFloor(floor.id)}
                className={`absolute left-[16px] -mt-2 text-xs transition-colors whitespace-nowrap cursor-pointer hover:text-primary ${
                  isActive ? "text-primary font-bold" : "text-slate-400 font-medium"
                }`}
              >
                {floor.label}
              </button>
            </div>
          );
        })}

        {/* The Elevator Cabin */}
        <div 
          ref={elevatorRef}
          className="absolute top-0 left-1/2 w-[26px] h-[26px] rounded-[6px] -translate-x-1/2 cabin flex items-center justify-center overflow-hidden z-10 transition-shadow hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
          style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.8), rgba(220,230,240,0.6))",
            boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.4)"
          }}
        >
          {/* Subtle highlight reflection for premium glass touch */}
          <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-t-[5px]" />
          
          {/* Elevator split doors detail */}
          <div className="w-[1px] h-full bg-slate-300/50 shadow-[0_0_2px_rgba(255,255,255,0.8)]" />
        </div>
      </div>
    </div>
  );
}
