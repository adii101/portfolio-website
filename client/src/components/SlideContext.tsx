import { createContext, useState, useContext, ReactNode } from "react";

type SlideContextType = {
  currentSlide: number;
  totalSlides: number;
  goToSlide: (slideNumber: number) => void;
  goToNextSlide: () => void;
  goToPrevSlide: () => void;
};

const SlideContext = createContext<SlideContextType | undefined>(undefined);

export function SlideProvider({ children }: { children: ReactNode }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 7; // Total number of slides in the presentation

  const goToSlide = (slideNumber: number) => {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
      setCurrentSlide(slideNumber);
    }
  };

  const goToNextSlide = () => {
    const nextSlide = currentSlide + 1;
    if (nextSlide <= totalSlides) {
      setCurrentSlide(nextSlide);
    } else {
      setCurrentSlide(1); // Loop back to the first slide
    }
  };

  const goToPrevSlide = () => {
    const prevSlide = currentSlide - 1;
    if (prevSlide >= 1) {
      setCurrentSlide(prevSlide);
    } else {
      setCurrentSlide(totalSlides); // Loop to the last slide
    }
  };

  return (
    <SlideContext.Provider
      value={{
        currentSlide,
        totalSlides,
        goToSlide,
        goToNextSlide,
        goToPrevSlide,
      }}
    >
      {children}
    </SlideContext.Provider>
  );
}

export function useSlide() {
  const context = useContext(SlideContext);
  if (context === undefined) {
    throw new Error("useSlide must be used within a SlideProvider");
  }
  return context;
}
