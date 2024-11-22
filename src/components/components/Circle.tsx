import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Circle.scss";

type Props = {
  themes: { name: string }[];
  onClick: (index: number) => void;
  themeIndex: number;
};

const Circle = ({ themes, onClick, themeIndex }: Props) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const dotsRefs = useRef<HTMLDivElement[]>([]);
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  useEffect(() => {
    if (dotsRefs.current.length > 0) {
      const timeline = gsap.timeline();
      dotsRefs.current.forEach((dot, index) => {
        const angle = (index * Math.PI * 2) / themes.length;
        timeline.to(
          dot,
          {
            x: Math.cos(angle) * 265,
            y: Math.sin(angle) * 265,
          },
          0
        );
      });
      activateDot(0);
    }
  }, [themes]);

  useEffect(() => {
    activateDot(themeIndex);
  }, [themeIndex]);

  const activateDot = (index: number) => {
    dotsRefs.current.forEach((dot) =>
      dot.classList.remove("circle__dot--active")
    );
    const circleName = document.querySelector(".circle__name");
    if (circleName) {
      circleName.classList.remove("circle__name--active");
      setTimeout(() => {
        circleName.classList.add("circle__name--active");
        dotsRefs.current[index].classList.add("circle__dot--active");
      }, 200);
    }
    if (dotsRefs.current.length > 0) {
      onClick(index);
      const angleOffset = (360 * index) / themes.length;
      const radius = 265;
      const targetRotation = 330;

      dotsRefs.current.forEach((dot, i) => {
        const currentRotation = (400 * i) / themes.length;
        const adjustedRotation =
          (currentRotation + (targetRotation - angleOffset)) % 360;
        const x = radius * Math.cos((adjustedRotation * Math.PI) / 180);
        const y = radius * Math.sin((adjustedRotation * Math.PI) / 180);
        const rotationAngle = (Math.atan2(y, x) * 180) / Math.PI;

        gsap.to(circleRef.current, {
          x: 0,
          y: 0,
          rotation: rotationAngle,
          duration: 0.9,
        });

        gsap.to(dot, {
          rotation: angleOffset + 55,
        });
      });
    }
  };

  return (
    <div className="circle">
      <div ref={circleRef} className="circle__container">
        <div className="circle__border"></div>
        {themes.map((theme, index) => (
          <div
            key={index}
            ref={(el) => (dotsRefs.current[index] = el!)}
            className="circle__dot"
            onClick={() => activateDot(index)}
            onMouseOver={() => {
              if (index !== themeIndex) {
                setHoveredDot(index);
                dotsRefs.current[index].classList.add("circle__dot--active");
              }
            }}
            onMouseOut={() => {
              if (index !== themeIndex) {
                setHoveredDot(null);
                dotsRefs.current[index].classList.remove("circle__dot--active");
              }
            }}
          >
            {(index === themeIndex || hoveredDot === index) && (
              <span>{index + 1}</span>
            )}
          </div>
        ))}
      </div>
      <span className="circle__name">{themes[themeIndex]?.name}</span>
    </div>
  );
};

export default Circle;
