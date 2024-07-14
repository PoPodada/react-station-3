function App() {

  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="email">email</label>
        <input type="text" id="email" className="border border-black" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">password</label>
        <input type="text" id="password" className="border border-black" />
      </div>
    </>
  )
}

export default App
