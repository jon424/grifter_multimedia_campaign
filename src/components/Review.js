import React from 'react';
import '../styles/styles.css';

const ReviewPage = () => {
    return (
        <>
            <div className="review-main">
                <div className="review-titles">
                    <h6 className="publication-date">12.02.02023</h6>
                    <h1 className="album-name"><em>The Forgiveness of Distance</em></h1>
                    <h2 className="artist-name">Grifter</h2>
                    <h6>Album review by <a href="#"><b>Serg&eacute; Sackton</b></a>, <a href="#"><b>Mr. D</b></a>, and <a href="#"><b>Pete Jenkoviak</b></a></h6>
                </div>
                <hr className="review-top-line" />
                <div className="review-body">
                    <div className="review-overview">
                        <img className="review-artwork" src="assets\grifterTFOD.JPG" alt="Album artwork of The Forgiveness of Distance by Grifter" />
                        <h3 className="review-overall-score">7.9<span id="tertiary-color">/10</span></h3>
                        <p className="review-summary">'"The Forgiveness of Distance" is not just an album; it's an exploration, an invitation to embark on a sonic odyssey.'</p>
                        <div className="essentials-favourites">
                            <h3 id="tertiary-color">Favourites</h3>
                            <p>"Over Under"</p>
                            <p>"Blue Napkins"</p>
                            <p>"Strange Ducklings"</p>
                        </div>
                    </div>
                    <div className="full-review">
                        <div className="review-card">
                            <h3 className="review-author">Serg&eacute;</h3>
                            <h6 className="author-twitter-handle"><a href="#">@andredack</a></h6>
                            <div className="author-summary">
                                <p><a href="#">Grifter</a>, the instrumental duo hailing from the vibrant musical scene of Detroit, has bestowed upon us a sonic gem with their latest album, <em>"The Forgiveness of Distance."</em> Comprising the dynamic duo of <a href="#">Evan Nistor</a> on guitar, keyboard, and samples, and <a href="#">Jon Jackson</a> on drums and marimba, Grifter delves into uncharted territories, melding psychedelic rock and jazz into a distinctive auditory journey.</p>
                                <p>The album opens with a captivating energy, immediately drawing the listener into the gravitational pull of Grifter's musical universe. Evan Nistor's prowess on guitar and keyboard is evident from the get-go, creating a rich tapestry of sounds that oscillate between dreamy and intense. The infusion of samples adds a layer of unpredictability, keeping the audience on the edge of their seats.</p>
                                <p>Jon Jackson's drumming serves as the heartbeat of the album, providing a rhythmic foundation that is both intricate and grounding. The chemistry between Nistor and Jackson is palpable, and their musical dialogue unfolds like a conversation between old friends who share a deep understanding of each other's artistic language.</p>
                                <p>One of the album's standout features is its commitment to improvisation. Grifter fearlessly explores uncharted territories within each track, allowing the music to breathe and evolve organically. The improvisational elements inject a sense of spontaneity and authenticity, making <em>"The Forgiveness of Distance"</em> a refreshing departure from more formulaic offerings.</p>
                                <p>The spacey and atmospheric elements embedded in the album contribute to its immersive quality. Grifter takes the listener on a cosmic journey, where each note and beat feels like a star in a vast musical constellation. The sonic landscapes created by the duo transport the audience to unexplored dimensions, making the album an engaging and thought-provoking experience.</p>
                                <p>Tracks like <em>"Over Under"</em> showcase Grifter's ability to seamlessly blend genres, transcending traditional boundaries. The fusion of psychedelic rock and jazz feels natural and effortless, a testament to the duo's musical prowess and innovation.</p>
                                <p><em>"The Forgiveness of Distance"</em> is not just an album; it's an exploration, an invitation to embark on a sonic odyssey. Grifter's ability to create a grooving sound that is both intricate and accessible makes this album a must-listen for enthusiasts of experimental and genre-defying music. With their unique musical fingerprint, Grifter proves that distance is not a barrier when it comes to forging a deep connection with their audience. This album is a testament to the boundless possibilities that arise when two talented musicians come together to push the boundaries of sonic exploration.</p>

                            </div>
                            <div className="author-score">
                                <h4>7.9<span className="no-bold">/10</span></h4>
                            </div>
                            <div className="author-fav-tracks">
                                <h4><b>Favourite tracks</b></h4>
                                <ol className="author-favs">
                                    <li>"Over Under"</li>
                                    <li>&nbsp;&nbsp;"Blue Napkins"</li>
                                    <li>&nbsp;&nbsp;&nbsp;&nbsp;"Strange Ducklings"</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="reviews-related-albums">
                <hr />
                <h3 className="section-heading">Other Reviews</h3>
                <hr />
                <div className="related-container">
                    <div className="related-album-1">
                        <img id="related-artwork-1" src="assets\Andre-3000-New-Blue-Sun.webp" />
                        <h4><a href="#"><em>New Blue Sun</em></a></h4>
                        <h4>Andre 3000</h4>
                    </div>
                    <div className="related-album-2">
                        <img id="related-artwork-2" src="assets\Derek Bailey _ Paul Motian - Duo in Concert.webp" />
                        <h4><a href="#"><em>Duo in Concert</em></a></h4>
                        <h4>Derek Bailey / Paul Motian</h4>
                    </div>
                    <div className="related-album-3">
                        <img id="related-artwork-3" src="assets\Daft-Punk.webp" />
                        <h4><a href="#"><em>Random Access Memories (Drumless Edition)</em></a></h4>
                        <h4>Daft Punk</h4>
                    </div>
                    <div className="related-album-4">
                        <img id="related-artwork-4" src="assets\Tyvek-Overground.webp" />
                        <h4><a href="#"><em>Overground</em></a></h4>
                        <h4>Tyvek</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewPage;
