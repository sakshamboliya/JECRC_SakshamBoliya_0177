import React from "react";
function Contact() {
  return (
    <div style={styles.container


}





>
      <h1>Contact Page</h1>
      <p>This is the contact page of our React Router demo.</p>
      <p>Email : Contact@example.com</p>
      <p>Phone : +91 1234567890</p>
    </div>
  );
}
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px', 
    backgroundColor: '#f9f9f9',
  },
};
export default Contact;