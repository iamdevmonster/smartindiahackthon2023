// loginsingup.js

import React from "react";

const LoginSignupModal = ({ isOpen, onClose }) => {
  return (
    // Your modal content here
    <div>
      <p>This is your login/signup modal content.</p>
      <button onClick={onClose}>Close Modal</button>
    </div>
  );
};

export default LoginSignupModal;
