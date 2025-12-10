import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 10); // For mobile devices
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <div className="flex  flex-col  justify-center items-center h-screen p-4 bg-slate-200">
      <h1 className="text-black text-4xl p-4">Password Manager</h1>
      <div className="flex flex-col justify-center shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-red-400 w-full py-5 px-6 cursor-pointer   border-e-black"
          placeholder="Your Secure Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="p-2 m-1 bg-sky-500 text-white 
             active:bg-blue-700 active:scale-95 
           transition-all duration-150"
        >
          copy
        </button>

        <div className="flex justify-center items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label> Length:{length}</label>
        </div>
        <div className="flex justify-center items-center gap-x-1">
          <input
            type="checkbox"
            id="numberInput"
            defaultChecked={numberAllowed}
            onChange={() => {
              setnumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex justify-center items-center gap-x-1">
          <input
            type="checkbox"
            id="characterInput"
            defaultChecked={charAllowed}
            onChange={() => {
              setcharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
