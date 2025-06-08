'use client'

import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Marketing Director",
    quote: "This solution has completely transformed how we work. The results have been nothing short of extraordinary. We've seen unprecedented growth and efficiency in our operations.",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Product Manager",
    quote: "Incredible impact on our team's productivity. We've seen a 200% increase in output since implementing this. The interface is intuitive and our team adopted it immediately.",
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Senior Developer",
    quote: "The best decision we made this year. The simplicity and power of this tool is unmatched in the market. Our development cycle has been reduced by half.",
  }
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section className="testimonial-section">
      <div className={`testimonial ${isAnimating ? 'fade' : ''}`}>
        <div className="content-wrapper">
          <div className="quote-mark">"</div>
          <div className="quote-container">
            <div className="fixed-height-container">
              <div className={`quote-content ${isAnimating ? 'sliding' : ''}`}>
                <p className="quote">{testimonials[current].quote}</p>
                <div className="author">
                  <h4>{testimonials[current].name}</h4>
                  <p>{testimonials[current].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation">
          <button onClick={handlePrev} className="nav-button">
            <span className="arrow">←</span>
          </button>
          <div className="progress-bar">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`progress-item ${index === current ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
              >
                <div className="progress-line"></div>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="nav-button">
            <span className="arrow">→</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .testimonial-section {
          width: 100%;
          padding: 4rem 2rem;
          background: #f7fafc;
        }

        .testimonial {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: opacity 0.5s ease;
          position: relative;
          overflow: hidden;
        }

        .content-wrapper {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        .fixed-height-container {
          height: 300px; /* Adjust this value based on your needs */
          position: relative;
          overflow: hidden;
        }

        .quote-content {
          position: absolute;
          width: 100%;
          transition: opacity 0.5s ease;
        }

        .quote-content.sliding {
          opacity: 0;
        }

        .quote-mark {
          font-size: 160px;
          position: absolute;
          top: -80px;
          left: -20px;
          color: rgba(0, 0, 0, 0.03);
          font-family: Georgia, serif;
          user-select: none;
        }

        .quote-container {
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .quote {
          font-size: 1.75rem;
          line-height: 1.5;
          color: #2d3748;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: -0.5px;
        }

        .author {
          margin-bottom: 2.5rem;
        }

        .author h4 {
          margin: 0;
          color: #1a202c;
          font-size: 1.3rem;
          font-weight: 600;
        }

        .author p {
          margin: 0.5rem 0 0;
          color: #718096;
          font-size: 1.1rem;
        }

        .navigation {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
        }

        .nav-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 1rem;
          transition: all 0.3s ease;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-button:hover {
          background: #f7fafc;
          transform: scale(1.1);
        }

        .arrow {
          font-size: 1.5rem;
          color: #4a5568;
        }

        .progress-bar {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .progress-item {
          cursor: pointer;
          width: 40px;
          height: 4px;
          position: relative;
        }

        .progress-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #E2E8F0;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .progress-item.active .progress-line {
          background: #4A5568;
          transform: scaleX(1.2);
        }

        @media (max-width: 1024px) {
          .testimonial {
            padding: 3rem 2rem;
          }

          .fixed-height-container {
            height: 350px; /* Adjust for tablet */
          }

          .quote {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .testimonial-section {
            padding: 2rem 1rem;
          }

          .fixed-height-container {
            height: 400px; /* Adjust for mobile */
          }

          .testimonial {
            padding: 2rem 1.5rem;
          }

          .quote {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonial;