import React from 'react';
function About() {
  return (
    <div style={styles.container}>
      <h1>About Page</h1>
      <p>This is the about page of our React Router demo.</p>
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
    backgroundColor: '#801313',
  },
};  
export default About;