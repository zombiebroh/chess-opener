import '../css/OpeningDetails.css'
import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from 'react-router-dom';


function OpeningDetails() {
  const [opening, setOpening] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false);

  const { id } = useParams();


  useEffect(() => {
    fetch(`http://localhost:3000/openings/${id}`)
      .then((r) => r.json())
      .then((opening) => {
        setOpening(opening);
        setIsLoaded(true);
      });
  }, [id]);

  if (!isLoaded) return <h2>Loading...</h2>;

  console.log(opening)

  return (
    <div>
      <div class="infoDiv">
        <h2>{opening.name}</h2>
        <h4>difficulty: {opening.difficulty}</h4>
        <h4>color: {opening.color}</h4>
        <h4>Moves: {opening.moves}</h4>
      </div>
      <div>
        <div>
          <img class="img" src={opening.image} />
        </div>
        <div>
          <iframe class="iframe" width="1000" height="666"
            src={opening.link}>
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default OpeningDetails; 