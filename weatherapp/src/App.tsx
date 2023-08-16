const App = () => {
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400  h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-zinc-700">
        <h1 className="text-4xl">Weather Forecast</h1>
        <p>Search for a place to know the Weather</p>
      </section>
    </main>
  );
};

export default App;
