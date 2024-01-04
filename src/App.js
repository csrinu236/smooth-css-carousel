import { useEffect, useRef, useState } from "react";
import Home from "./Home";
import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { publish } from "./utils/event";

function App() {
  const getFPS = () => new Promise((resolve) => requestAnimationFrame((t1) => requestAnimationFrame((t2) => resolve(1000 / (t2 - t1)))));

  // Calling the function to get the FPS

  const [frameRate, setframeRate] = useState(0);

  useEffect(() => {
    getFPS().then((fps) => setframeRate(fps));
  }, []);

  const { ref, setFocus, focusKey, getCurrentFocusKey } = useFocusable({});

  useEffect(() => {
    setFocus("scrollable0#0");
    console.log("getCurrentFocusKey()", getCurrentFocusKey());
  }, [setFocus, getCurrentFocusKey]);

  // Jumping cards logic start ==================
  const myTimeout = useRef(null);

  useEffect(() => {
    const keyDownEventListener = () => {
      if (!myTimeout.current) {
        myTimeout.current = setTimeout(() => {
          const match = getCurrentFocusKey().split("#");
          publish(`${match[0]}`, { dir: "down" });
          console.log("press and hold", getCurrentFocusKey());
        }, 200);
      }
    };
    const keyUpEventListener = () => {
      // console.log(new Date().getTime(), "TIME 4");
      if (getCurrentFocusKey()?.startsWith("Continue")) {
        console.timeEnd("timing");
      }

      if (myTimeout.current) {
        clearTimeout(myTimeout.current);
        // const match = getCurrentFocusKey().match(/^[^\d]+/);
        const match = getCurrentFocusKey().split("#");
        match[0] !== "Carousal" && publish(match[0], { dir: "up" });
        myTimeout.current = null;
      }
    };

    document.addEventListener("keydown", keyDownEventListener);
    document.addEventListener("keyup", keyUpEventListener);

    return () => {
      document.removeEventListener("keydown", keyDownEventListener);
      document.removeEventListener("keyup", keyUpEventListener);
    };
  }, [getCurrentFocusKey]);
  // Jumping cards logic END ==================

  return (
    <FocusContext.Provider value={focusKey}>
      <section ref={ref} className="section">
        <div className="section-center">
          <h1>{frameRate}</h1>
          <Home></Home>
        </div>
      </section>
    </FocusContext.Provider>
  );
}

export default App;
