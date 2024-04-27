import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Accordion from './Accordion';
import { accordionData } from '../utils/Data';
import Page3 from './newPage';

const Home = () => {
  const scrollToSectionThree = () => {
    const sectionThree = document.getElementById('sectionThree');
    sectionThree.scrollIntoView({ behavior: 'smooth' });
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 250; // Adjust this value according to your card width

  const handlePrevClick = () => {
    setScrollPosition(Math.max(scrollPosition - cardWidth * 3, 0));
  };

  const handleNextClick = () => {
    const containerWidth = document.querySelector('.photoContainer').offsetWidth;
    const maxScroll = Math.max(document.querySelector('.photoContainer').scrollWidth - containerWidth, 0);
    setScrollPosition(Math.min(scrollPosition + cardWidth * 3, maxScroll));
  };

const data = [
  {
    "image": "https://wallpapercave.com/wp/wp8268520.jpg",
    "rating": 5,
    "reviews": 392,
    "description": "How to work with prototype design with adobe xd featuring tools",
    "watched": 1025
  },
  {
    "image": "https://www.wallpaperflare.com/static/303/426/359/startup-start-up-notebooks-creative-wallpaper.jpg",
    "rating": 4.2,
    "reviews": 290,
    "description": "Create multiple artboards by using Figma prototyping tools development",
    "watched": 125
  },
  {
    "image": "https://th.bing.com/th/id/OIP.060aCuDU0phCNUBpDdhoqwHaEK?rs=1&pid=ImgDetMain",
    "rating": 4.4,
    "reviews": 292,
    "description": "Convert your web layout theming easily with sketch zeplin extension method",
    "watched": 1005
  },
  
  {
    "image": "https://th.bing.com/th/id/OIP.jafxgNBSjL1dLbjcYZN4FwHaE8?w=246&h=180&c=7&r=0&o=5&pid=1.7",
    "rating": 4,
    "reviews": 992,
    "description": "How to work with prototype design with adobe xd featuring tools",
    "watched": 810
  },
  {
    "image": "https://th.bing.com/th/id/OIP.rqRWYPaod5WpmKV2vNYH6QHaEK?rs=1&pid=ImgDetMain",
    "rating": 4.1,
    "reviews": 302,
    "description": "Create multiple artboards by using Figma prototyping tools development",
    "watched": 925
  },
  {
    "image": "https://th.bing.com/th/id/OIP.Zr6cBHlCBzBCJt6s_lWjswHaE8?w=625&h=417&rs=1&pid=ImgDetMain",
    "rating": 3.3,
    "reviews": 702,
    "description": "Convert your web layout theming easily with sketch zeplin extension method",
    "watched": 1100
  }
];

  return (
    <div>

           {/* Section One */}
           <div className="home">
           <div className="sectionOne">
            {/* Left side */}
            <div className="leftSide">
            <div className="photoContainer">
          <div className="card">
            <div className="cardContent">
              <img src="https://th.bing.com/th/id/OIP.jafxgNBSjL1dLbjcYZN4FwHaE8?w=246&h=180&c=7&r=0&o=5&pid=1.7" alt="Photo 1" />
              <div className="overlay">
                <img className="playIcon" src="https://www.freeiconspng.com/uploads/play-button-icon-png-15.png" alt="Play Icon" />
              </div>
              <div className="rating">
                {/* Star ratings */}
                <span className="star" role="img" aria-label="Star">&#9733;</span>
                <span className="star" role="img" aria-label="Star">&#9733;</span>
                <span className="star" role="img" aria-label="Star">&#9733;</span>
                <span className="star" role="img" aria-label="Star">&#9733;</span>
                <span className="star" role="img" aria-label="Star">&#9734;</span>
                <span className="reviews">(5.0, 392 reviews)</span>
              </div>
              <p className="para">Create multiple artboards by using Figma prototyping tools development</p>
              <div className="views">
                <span>&#128065;</span> {/* Eye icon */}
                <span className="watched">1025 students watched</span>
              </div>
            </div>
          </div>
        </div>
              <div className="photoContainer">
                <div className="card">
                  <div className="cardContent">
                    <img src="https://th.bing.com/th/id/OIP.jafxgNBSjL1dLbjcYZN4FwHaE8?w=246&h=180&c=7&r=0&o=5&pid=1.7" alt="Photo 2" />
                    <div className="overlay">
                      <img className="playIcon" src="https://www.freeiconspng.com/uploads/play-button-icon-png-15.png" alt="playIcon" />
                    </div>
                    <div className="rating">
                      {/* Star ratings */}
                      <span className="star" role="img" aria-label="Star">&#9733;</span>
                      <span className="star" role="img" aria-label="Star">&#9733;</span>
                      <span className="star" role="img" aria-label="Star">&#9734;</span>
                      <span className="star" role="img" aria-label="Star">&#9734;</span>
                      <span className="star" role="img" aria-label="Star">&#9734;</span>
                      <span className="reviews">(4.0, 250 reviews)</span>
                    </div>
                    <p className="para">Convert your web layout theming easily with sketch zeplin extension</p>
                    <div className="views">
                      <span>&#128065;</span> {/* Eye icon */}
                      <span className="watched">1025 students watched</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right side */}
            <div className="rightSide">
              <button className="tutorialButton">FREE TUTORIAL</button>
              <h2>More than thousand of free tutorial upload every week</h2>
              <p>Get your tests deliverd at let home collect sample from the victory of the managements and supplies best design system guidelines ever.Get your tests delivered at let home collect sample.</p>
              <button className="exploreButton">Explore Details</button>
            </div>
          </div>
        </div>
    
             {/* Section Two */}
        <div className="sectionContainer">
          {/* Left side */}
          <div className="leftSide2">
            <div className="sectionTwo">
              <div className="box">
                <div className="boxContent">
                  <span className="span1">80K+</span>
                  <p>We have more than students</p>
                </div>
              </div>
              <div className="box">
                <div className="boxContent">
                  <span className="span2">150+</span>
                  <p>Free online tutorials videos available</p>
                </div>
              </div>
              <div className="box">
                <div className="boxContent">
                  <span className="span3">90+</span>
                  <p>Daily updated blog post maintain</p>
                </div>
              </div>
              <div className="box">
                <div className="boxContent">
                  <span className="span4">& 3M</span>
                  <p>Job posted everyday with qualification</p>
                </div>
    
              </div>
              {/* Down arrow icon */}
     <div className="downArrow">
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
          </div>
    
          {/* Right side */}
          <div className="rightSide2">
            <button className="tutorialButton">FREE TUTORIAL</button>
            <h2>More than thousand of free tutorial upload every week</h2>
            <p>Get your tests deliverd at let home collect sample from the victory of the managements and supplies best design system guidelines ever.Get your tests delivered at let home collect sample.</p>
            <button className="exploreButton">Explore Details</button>
          </div>
        </div>
    
            {/* Section Three */}
          <div id="sectionThree">
            <Page3/>
          </div>
    
          {/* Down arrow icon */}
          <div className="downArrow" onClick={scrollToSectionThree}>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>

          {/*Section four*/}
     {/* Section Four */}
      <div>
        <span className="quality">QUALITY FEATURES</span>
        <p className="tutorials">Tutorials that people love most</p>
        <div className="cardss2">
          <button className="sliderButton prevButton" onClick={handlePrevClick}>
            &lt;
          </button>
          <div className="photoContainer" style={{ transform: `translateX(-${scrollPosition}px)` }}>
            {data.slice(0, 3).map((item, index) => (
              <div className="card" key={index}>
                <div className="cardContent">
                  <img src={item.image} alt={`Photo ${index + 1}`} />
                  <div className="overlay">
                    <img className="playIcon" src="https://www.freeiconspng.com/uploads/play-button-icon-png-15.png" alt="Play Icon" />
                  </div>
                  <div className="rating">
                    {/* Star ratings */}
                    {[...Array(Math.floor(item.rating)).keys()].map((_, i) => (
                      <span className="star" key={i} role="img" aria-label="Star">&#9733;</span>
                    ))}
                    {[...Array(5 - Math.floor(item.rating)).keys()].map((_, i) => (
                      <span className="star" key={i + Math.floor(item.rating)} role="img" aria-label="Star">&#9734;</span>
                    ))}
                    <span className="reviews">({item.rating}, {item.reviews} reviews)</span>
                  </div>
                  <p className="para">{item.description}</p>
                  <div className="views">
                    <span>&#128065;</span>
                    <span className="watched">{item.watched} students watched</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="sliderButton nextButton" onClick={handleNextClick}>
            &gt;
          </button>
        </div>
      </div>
      <div style={{marginTop:100}}>
      <h1>Do you have any question</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}   
      </div>
    </div>
         
         
          
    </div>
      );
    };
    
    export default Home;
  
