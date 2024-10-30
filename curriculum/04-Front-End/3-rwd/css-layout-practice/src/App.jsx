import './App.css'

function App() {
  

  return (
    <>
      <div className="container">
        <div className="box box-1">Box 1</div>
        <div className="box">Box 2</div>
        <div className="box">Box 3</div>
        <div className="box">Box 4</div>
        <div className="box">Box 5</div>
      </div>
      <div className="clear-box">
        <div className="float-box">Floating Box</div>
        <div className="text">This is some text that should not overlap the floating box.</div>
      </div>

      <a id='anchor-practice' href='#'>Amazon</a>
      <input id='input-practice' type='text'required pattern="[A-Za-z]{3,}" />
    </>
  )
}

export default App
