import { useSlide } from "./SlideContext";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SlideNavigation = () => {
  const { currentSlide, totalSlides, goToSlide, goToNextSlide, goToPrevSlide } = useSlide();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevSlide();
      } else if (e.key === "ArrowRight") {
        goToNextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToNextSlide, goToPrevSlide]);

  return (
    <div className="fixed bottom-8 left-0 right-0 flex justify-center z-10">
      <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-lg">
        <button
          onClick={goToPrevSlide}
          className="text-primary mr-2 hover:text-opacity-80 transition p-2"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex items-center">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full mx-1 transition-all duration-300 ${
                currentSlide === index + 1
                  ? "bg-primary scale-125"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => goToSlide(index + 1)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNextSlide}
          className="text-primary ml-2 hover:text-opacity-80 transition p-2"
          aria-label="Next slide"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default SlideNavigation;
