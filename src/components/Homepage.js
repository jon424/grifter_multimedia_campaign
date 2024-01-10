import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Homepage = () => {
  return (
    <>
      <header>
        <h1>Music Review Site</h1>
      </header>

      <nav>
        <Link to="/typing">Home</Link>
        <a href="#">Reviews</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      <div className="main-section">
        <div className="featured-review">
          <Link to="/review">
            <h2>Featured Review</h2>
          </Link>
          <img
            src="assets\grifterTFOD.JPG"
            alt="Album artwork of The Forgiveness of Distance by Grifter"
          />
          <p>
            '"The Forgiveness of Distance" is not just an album; it's an
            exploration, an invitation to embark on a sonic odyssey.'
          </p>
          <Link to="/review"><p>Read Full Review</p></Link>
        </div>
        <div className="main-section-text-content">
          <h2>Test Text Content</h2>
          <p>
            Lorem Ipsum blah blah blah text test text test Lorem Ipsum blah blah
            blah text test text test Lorem Ipsum blah blah blah text test text
            test Lorem Ipsum blah blah blah text test text test Lorem Ipsum blah
            blah blah text test text test Lorem Ipsum blah blah blah text test
            text test Lorem Ipsum blah blah blah text test text test Lorem Ipsum
            blah blah blah text test text test Lorem Ipsum blah blah blah text
            test text test
          </p>
        </div>
      </div>

      <div className="related-reviews">
        <h2>Other Reviews</h2>
        <div className="related-container">
          <div className="related-album">
            <img
              src="assets\Andre-3000-New-Blue-Sun.webp"
              alt="Album artwork of New Blue Sun by Andre 3000"
            />
            <h4>
              <Link to="/box">New Blue Sun</Link>
            </h4>
            <p>Andre 3000</p>
          </div>

          <div className="related-album">
            <img
              src="assets\Derek Bailey _ Paul Motian - Duo in Concert.webp"
              alt="Album artwork of Duo in Concert by Derek Bailey / Paul Motian"
            />
            <h4>
              <a href="#">Duo in Concert</a>
            </h4>
            <p>Derek Bailey / Paul Motian</p>
          </div>

          <div className="related-album">
            <img
              src="assets\Daft-Punk.webp"
              alt="Album artwork of Random Access Memories (Drumless Edition) by Daft Punk"
            />
            <h4>
              <a href="#">Random Access Memories (Drumless Edition)</a>
            </h4>
            <p>Daft Punk</p>
          </div>

          <div className="related-album">
            <img
              src="assets\Tyvek-Overground.webp"
              alt="Album artwork of Overground by Tyvek"
            />
            <h4>
              <a href="#">Overground</a>
            </h4>
            <p>Tyvek</p>
          </div>
        </div>
      </div>

      <div className="hero-container">
        <img
          className="hero-image"
          src="https://picsum.photos/1200/600"
          alt="Hero Image"
        />
        <div className="image-overlay"></div>
        <div className="hero-text">
          <h1>Your Headline Text</h1>
          <p>
            Subheadline or additional text Subheadline or additional text
            Subheadline or additional text
          </p>
        </div>
      </div>

      <div className="squares-section">
        {/* Square 1 */ }
        <div className="square">
          <img src="https://via.placeholder.com/800x600" alt="Square 1" />
          <div className="square-content">
            <h2>Heading 1</h2>
            <p>Truncated teaser text for Square 1.</p>
          </div>
        </div>

        {/* Square 2 */ }
        <div className="square">
          <img src="https://via.placeholder.com/800x600" alt="Square 2" />
          <div className="square-content">
            <h2>Heading 2</h2>
            <p>Truncated teaser text for Square 2.</p>
          </div>
        </div>

        {/* Square 3 */ }
        <div className="square">
          <img src="https://via.placeholder.com/800x600" alt="Square 3" />
          <div className="square-content">
            <h2>Heading 3</h2>
            <p>Truncated teaser text for Square 3.</p>
          </div>
        </div>

        {/* Square 4 */ }
        <div className="square">
          <img src="https://via.placeholder.com/800x600" alt="Square 4" />
          <div className="square-content">
            <h2>Heading 4</h2>
            <p>Truncated teaser text for Square 4.</p>
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; 2024 Music Review Site. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Homepage;
