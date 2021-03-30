import React from 'react';
import '../Contact.css';

function Contact() {
    return element
  }
  
  const pseudo = 'Bidule';
  const avatar = 'https://image.ausha.co/4zlo69kdXav6jcGEwjpm8I71fYRNMBp0vAn47f2w_1400x1400.jpeg?t=1587206719';
  const online = true;
  
  const element = (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="Icônes Avatar"/>
      <div>
       <h3 className="name">{pseudo}</h3>
        <div className="status">
          <div className={online ? 'status-online' : 'status-offline'}></div>
            <p className="status-text">{online ? 'online' : 'offline'}</p>
        </div>
      </div>
    </div>
  );
  
  export default Contact;