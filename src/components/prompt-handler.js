import React, { useState } from 'react';

const promptContainerStyles = {
  color:'#fff',
  fontFamily: 'Poppins',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  fontSize:'12px',
  justiftContent: 'center'

}
// Add styles for the card component
const cardStyles = {
  margin: '1rem',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  borderRadius: '5px',
  padding: '1rem',
  flexDirection:'column',
display: 'inline-block' 
  
};
function InterestedInGoing(props) {
  const [place, setPlace] = useState('');
  const [activity, setActivity] = useState('');
  const [time, setTime] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');

  function handlePlaceChange(event) {
    setPlace(event.target.value);
  }

  function handleActivityChange(event) {
    setActivity(event.target.value);
  }

  function handleTimeChange(event) {
    setTime(event.target.value);
  }

  function handleSelectedMovieChange(event) {
    setSelectedMovie(event.target.value);
  }

  return (
    <div className="promptContainer" style={promptContainerStyles}>
    <span>I'm interested in going to</span>
            <span className="card" style={cardStyles} >
        <select onChange={handlePlaceChange}>
          <option value="">Select a place</option>
          <option value="wandsworth cinema">wandsworth cinema</option>
          <option value="the park">the park</option>
          <option value="the movies">the movies</option>
        </select>
      </span>
      to 
      <div className="card" style={cardStyles} >
        <div>
        <select onChange={handleActivityChange}>
          <option value="">Select an activity</option>
          <option value="relax">relax</option>
          <option value="exercise">exercise</option>
          <option value="watch a movie">watch a movie</option>
        </select>
        </div>
      
      {activity === 'watch a movie' && (
        <div>
          <select onChange={handleSelectedMovieChange}>
            <option value="">Select a movie</option>
            <option value="Black Panther">Black Panther</option>
            <option value="Avengers: Endgame">Avengers: Endgame</option>
            <option value="The Lion King">The Lion King</option>
          </select>
          </div>
         
      )}
      </div>
      <span>at </span>
      <span className="card" style={cardStyles} >
        
        <select onChange={handleTimeChange}>
          <option value="">Select a time</option>
          <option value="morning">morning</option>
          <option value="afternoon">afternoon</option>
          <option value="evening">evening</option>
        </select>
      </span>
      
    </div>
  );
}

export default InterestedInGoing;
