import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AIDEN from "../img/AIDEN.png"
import JAVIER from "../img/JAVIER.png"
import NEVEAH from "../img/NEVEAH.png"
import RAWIRI from "../img/RAWIRI.png"
import TOKIO from "../img/TOKIO.png"

function ImageAvatars(){
  return (
    <div>
      <Avatar alt="Aiden" src={AIDEN}/>
      <Avatar alt="Javier" src={JAVIER}/>
      <Avatar alt="Neveah" src={NEVEAH}/>
      <Avatar alt="Rawiri" src={RAWIRI}/>
      <Avatar alt="Tokio" src={TOKIO}/>

    </div>
  );
}
export default ImageAvatars;