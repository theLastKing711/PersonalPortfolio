import "./App.css";

function App() {
  return (
    <main>
      <div className="flex flex-col justify-center space-y-10 items-center py-32  md:flex-row-reverse h-screen">
        <div className="w-3/4 md:w-2/5 animate-fadeInRight">
          <img src="spiky.jpeg" alt="" className="w-full rounded-full" />
        </div>
        <div className="text-center  animate-fadeInLeft  md:w-3/5 md:text-left">
          <h1 className="text-3xl md:text-6xl mt-auto">
            Hello, I'm Bacher Jiroudi
          </h1>
          <p className="text-lg md:text-2xl mt-7">
            I'm a fullstack developer Living in Syria Aleppo.
            <br />
            IT Student, Graduated in 2019
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
