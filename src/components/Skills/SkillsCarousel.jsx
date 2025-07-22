import React, { useState, useEffect } from 'react';
import SkillDisplay from './SkillDisplay';

const skillCategories = [
  { name: 'Frontend', id: 'frontend' },
  { name: 'Backend', id: 'backend' },
  { name: 'Database', id: 'database' },
  { name: 'Others', id: 'others' },
];

function SkillsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalCards = skillCategories.length; //4

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const nextIndex = (newIndex + totalCards) % totalCards;
    setCurrentIndex(nextIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 800); // Match this with your CSS transition duration
  };

  const goToNext = () => {
    updateCarousel(currentIndex + 1);
  };

  const goToPrevious = () => {
    updateCarousel(currentIndex - 1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, isAnimating]);


  return (
    <section id="skills" className="skills-carousel-section">
      <div className="carousel-wrapper-3d">
        <div className="carousel-inner-3d">
          {skillCategories.map((category, i) => {
            let offset = (i - currentIndex + totalCards) % totalCards;

            // Adjust offset to handle wrapping for left/right visibility for 4 cards
            if (offset === totalCards - 1) { // e.g., for 4 cards, if offset is 3, it means left-1
                offset = -1;
            } else if (offset === totalCards - 2) { // e.g., for 4 cards, if offset is 2, it means left-2 (which maps to hidden)
                offset = -2;
            }

            let cardClass = '';
            // Assign classes based on the adjusted offset
            if (offset === 0) {
              cardClass = 'center';
            } else if (offset === 1) {
              cardClass = 'right-1';
            } else if (offset === -1) {
              cardClass = 'left-1';
            } else {
              cardClass = 'hidden'; // For the card that's not in the visible -1, 0, or 1 position
            }
            
            return (
              <div
                key={category.id}
                className={`carousel-card-3d ${cardClass}`}
              >
                <h2 className="carousel-card-heading">{category.name}</h2>
                <SkillDisplay name={category.name} />
              </div>
            );
          })}
        </div>

        <button onClick={goToPrevious} className="nav-arrow left">&#10094;</button>
        <button onClick={goToNext} className="nav-arrow right">&#10095;</button>
      </div>

    </section>
  );
}

export default SkillsCarousel;