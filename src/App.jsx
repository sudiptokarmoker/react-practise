const App = () => {
  const name = 'john';
  const x = 10;
  const y = 20;
  const names = ['Brad', 'Mary', 'Joe', 'Sara'];
  const loggedIn = false;
  const styles = {
    color: 'red',
    fontSize: '55px'
  }
  if(loggedIn){
    return <h1>Hello Member</h1>
  }

  return (
    <>
      <div classname="text-5xl">App</div>
      <p style={styles}>Hello {name}</p>
      <ul>
        {names.map((name, index) => {
          <li key={index}>{name}</li>
        })}
      </ul>
      {loggedIn && <h1>Hello Member</h1>}
    </>
  )
}

export default App;