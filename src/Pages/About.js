const About = ({scroll}) => {
  return (
    <div ref={scroll} style={{height: '100vh', padding: '5em', background: 'orange'}}>
      <h1>Hello this is About</h1>
    </div>
  );
};
export default About;