import React, { useState } from "react";

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? (
        <h1>Bem-vindo de volta!</h1>
      ) : (
        <button
        className="text-3xl font-mono border-2 border-black p-4 rounded bg-indigo-600 text-white "
        onClick={() => setLoggedIn(true)}>Entrar</button>
      )}
    </div>
  );
}
export default Home;
