import react from 'react';
function Home() {
  return (
    <div style={styles.container}>
      <h1>Home Page</h1>
      <p>Welcome to the home page of our React Router demo.</p> 
        <p>Use the navigation links to explore different pages.</p> 
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
export default Home;