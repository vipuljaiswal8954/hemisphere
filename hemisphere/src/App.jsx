import React, { useState } from "react";

import Hemisphere from "./Hemisphere";

function App() {
  const [currentLatitude, setLatitude] = useState(null);
  navigator.geolocation.getCurrentPosition((position) =>
    setLatitude(position.coords.latitude)
  );
if(currentLatitude>0){
  return (
    <div className="Northern">
      <Hemisphere latitude={currentLatitude}></Hemisphere>
    </div>
  );
}
else{
  return (
    <div className="Southern">
      <Hemisphere latitude={currentLatitude}></Hemisphere>
    </div>
  );
}
  
}

export default App;
