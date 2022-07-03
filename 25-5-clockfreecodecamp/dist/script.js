const { useState, useEffect } = React;

function App() {

  const [swap, setSwap] = useState(false);

  const [paused, setPaused] = useState(true);

  const [breakTimer, setBreakTimer] = useState(5);

  const [sessionTimer, setSessionTimer] = useState(25);

  const [seconds, setSeconds] = useState(0);

  const [minutes, setMinutes] = useState(sessionTimer);





  //   increment break timer
  const incrementBreakTimer = () => {
    if (breakTimer < 60 && paused === true) {
      setBreakTimer(breakTimer + 1);
      setSeconds(0);
    }
  };

  //   decrement break timer
  const decrementBreakTimer = () => {
    if (breakTimer > 1 && paused === true) {
      setBreakTimer(breakTimer - 1);
      setSeconds(0);
    }
  };


  //   increment session timer
  const incrementSessionTimer = () => {
    if (sessionTimer < 60 && paused === true) {
      setSessionTimer(sessionTimer + 1);
      setMinutes(sessionTimer + 1);
      setSeconds(0);

    }

  };

  //   decrement break timer
  const decrementSessionTimer = () => {
    if (sessionTimer > 1 && paused === true) {
      setSessionTimer(sessionTimer - 1);
      setMinutes(sessionTimer - 1);
      setSeconds(0);

    }

  };

  //   reset all timer
  const resetTime = () => {
    setBreakTimer(5);
    setSessionTimer(25);
    setMinutes(25);
    setSeconds(0);
    setPaused(true);
  };


  var timer;
  //   Toggle play-pause

  function toggle() {

    setPaused(!paused);
    clearInterval(timer);
  }

  // play - pause function

  const playPause = () => {
    if (!paused) {
      timer = setInterval(() => {

        setSeconds(seconds - 1);
        if (seconds === 0) {
          setMinutes(minutes - 1);
        }
        if (seconds < 1) {
          setSeconds(59);
        }



        if (minutes === 0 && seconds === 0) {

          const audio = document.getElementById('beep');
          audio.play();

          setSwap(!swap);
          if (!swap) {
            setMinutes(breakTimer - 1);
          } else
          {
            setMinutes(sessionTimer - 1);
          }



        }
      }, 1000);

    } else
    if (paused) {
      clearInterval(timer);
    }
  };



  useEffect(() => {


    playPause();


    return () => clearInterval(timer);

  });




  return /*#__PURE__*/(
    React.createElement("div", { class: "flex flex-col justify-center items-center  p-4 bg-gray-800 text-gray-300 w-1/3 h-auto rounded-lg shadow-2xl shadow-gray-900 drop-shadow-2xl sm:w-3/5 md:w-3/5 lg:w-2/5 xl:w-2/5" }, /*#__PURE__*/
    React.createElement("h1", { className: "text-4xl" }, "25 + 5 Clock"), /*#__PURE__*/



    React.createElement("div", { className: "flex flex-row gap-2 " }, /*#__PURE__*/


    React.createElement("div", { className: "flex flex-col justify-center items-center " }, /*#__PURE__*/
    React.createElement("h2", { id: "break-label", className: "text-xl p-4 text-center" }, "Break Length"), /*#__PURE__*/



    React.createElement("div", { className: "flex justify-center items-center text-3xl gap-2" }, /*#__PURE__*/
    React.createElement("button", { onClick: decrementBreakTimer, id: "break-decrement", className: "hover:text-gray-500" }, /*#__PURE__*/React.createElement("i", { class: "fa-solid fa-arrow-down" })), /*#__PURE__*/
    React.createElement("h3", { id: "break-length", className: "p-1" }, breakTimer), /*#__PURE__*/
    React.createElement("button", { onClick: incrementBreakTimer, id: "break-increment", className: "hover:text-gray-500" }, /*#__PURE__*/React.createElement("i", { class: "fa-solid fa-arrow-up" })))), /*#__PURE__*/





    React.createElement("div", { className: "flex flex-col justify-center items-center " }, /*#__PURE__*/
    React.createElement("h2", { id: "session-label", className: "text-xl p-4 text-center" }, "Session Length"), /*#__PURE__*/



    React.createElement("div", { className: "flex justify-center items-center text-3xl gap-2" }, /*#__PURE__*/
    React.createElement("button", { onClick: decrementSessionTimer, id: "session-decrement", className: "hover:text-gray-500" }, /*#__PURE__*/React.createElement("i", { class: "fa-solid fa-arrow-down" })), /*#__PURE__*/
    React.createElement("h3", { id: "session-length", className: "p-1" }, sessionTimer), /*#__PURE__*/
    React.createElement("button", { onClick: incrementSessionTimer, id: "session-increment", className: "hover:text-gray-500" }, /*#__PURE__*/React.createElement("i", { class: "fa-solid fa-arrow-up" }))))), /*#__PURE__*/





    React.createElement("div", { className: "flex flex-col gap-2 items-center border-4 rounded-lg border-gray-900 m-3 p-2 w-4/5" }, /*#__PURE__*/
    React.createElement("h1", { id: "timer-label", className: "text-xl p-2 text-center" }, !swap ? "Session" : "Break"), /*#__PURE__*/
    React.createElement("h1", { id: "time-left", className: "text-6xl p-4" }, minutes < 10 ? '0' + minutes : minutes, ":", seconds < 10 ? '0' + seconds : seconds)), /*#__PURE__*/


    React.createElement("div", { className: "flex justify-center items-center gap-4" }, /*#__PURE__*/


    React.createElement("button", { onClick: toggle, id: "start_stop", className: "hover:text-gray-500 flex gap-0" }, /*#__PURE__*/
    React.createElement("i", { class: "fa-solid fa-play" }), /*#__PURE__*/
    React.createElement("i", { class: "fa-solid fa-pause" })), /*#__PURE__*/



    React.createElement("button", { onClick: resetTime, id: "reset", className: "hover:text-gray-500 " }, /*#__PURE__*/
    React.createElement("i", { class: "fa-solid fa-clock-rotate-left" }))), /*#__PURE__*/



    React.createElement("p", { className: "mt-6 text-blue-500" }, "Designed & coded by"), /*#__PURE__*/
    React.createElement("p", { className: "text-green-600" }, "Mahdi Hasan Khan"), /*#__PURE__*/
    React.createElement("br", null), /*#__PURE__*/
    React.createElement("audio", {
      id: "beep",
      preload: "auto",

      src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" })));



}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));