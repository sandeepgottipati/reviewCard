import peopleData from "./data";
import { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = peopleData[index];
  const getPrevious = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      if (newIndex < 0) {
        return peopleData.length - 1;
      }
      return newIndex;
    });
  };
  const getNext = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      if (newIndex > peopleData.length - 1) {
        return 0;
      }
      return newIndex;
    });
  };
  const getRandom = () => {
    setIndex((currentIndex) => {
      const randomIndex = Math.floor(Math.random() * peopleData.length);
      if (randomIndex === currentIndex) {
        return (randomIndex + 1) % peopleData.length;
      }
      return randomIndex;
    });
  };
  return (
    <main className="main">
      <section className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <div className="quote-icon">
            <FaQuoteLeft />
          </div>
        </div>
        <div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
        </div>
        <div className="btn-container">
          <button className="prev-btn" onClick={getPrevious}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={getNext}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn" onClick={getRandom}>
          Random
        </button>
      </section>
    </main>
  );
};
export default App;
