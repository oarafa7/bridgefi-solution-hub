
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedElementProps {
  children: React.ReactNode;
  animation: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'float' | 'pulse-subtle';
  delay?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation,
  delay = 0,
  threshold = 0.2,
  className = '',
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [once, threshold]);

  return (
    <div
      ref={elementRef}
      className={cn(
        className,
        isVisible ? `animate-${animation}` : 'opacity-0',
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationPlayState: isVisible ? 'running' : 'paused',
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
