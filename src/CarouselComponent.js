import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import React, { useEffect } from "react";
import CardComponent from "./CardComponent";
import { subscribe, unsubscribe } from "./utils/event";

const CarouselComponent = ({ length = 40, CI }) => {
  const randomArray = Array.from({ length }, (_, index) => index);

  //   useEffect(() => {
  //     const interval = setInterval((i) => {
  //       if (CI === 0) {
  //         ref.current.querySelector("#jpl-next").click();
  //       }
  //     }, 100);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, []);

  //   useEffect(() => {
  //     ref.current.querySelector("#jpl-next").addEventListener("click", () => {});
  //   }, []);

  //   const [pressHoldDown, setpressHoldDown] = useState(false);

  useEffect(() => {
    const jumpListener = (e) => {
      if (e?.detail?.dir === "down") {
        // console.log("e.detail", e.detail);
        // console.log("scrollable" + CI);
        // setpressHoldDown(true);
      } else if (e?.detail?.dir === "up") {
        // setpressHoldDown(false);
      }
    };

    // const timeout = setTimeout(() => {
    //   setpressHoldDown((prev) => !prev);
    // }, 5000);

    subscribe("scrollable" + CI, jumpListener);

    return () => {
      //   clearTimeout(timeout);
      unsubscribe("scrollable" + CI, jumpListener);
    };
  }, [CI]);

  const { ref, focusKey, hasFocusedChild } = useFocusable({
    trackChildren: true,
    focusKey: "scrollable" + CI,
  });

  return (
    <FocusContext.Provider value={focusKey}>
      <jpl-carousel
        ref={ref}
        class={`jpl-carousel ${hasFocusedChild ? "focusedCarousal" : ""}`}
        slidesperscroll="1"
        mode="standard"
        scrollMode="manual"
        isMobile="false"
      >
        <div class="jpl-carousel-arrow jpl-arrow-left">
          <button id="jpl-previous">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-chevron-left"
              viewBox="0 0 16 16"
              id="prev-btn"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>
        </div>
        <div class="jpl-carousel-arrow jpl-arrow-right">
          <button id="jpl-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
              id="next-btn"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
        <div class={`jpl-slider-wrapper`}>
          <div class="jpl-slider">
            {randomArray.map((item, index) => {
              const isFirstCard = index === 0;
              const isLastCard = length - 1 === index;
              //   const isFocusable = pressHoldDown ? index % 3 === 0 || isLastCard : true;
              const isFocusable = true;
              const props = { CI, isFirstCard, isLastCard, isFocusable, item };
              return <CardComponent key={item} {...props}></CardComponent>;
            })}
          </div>
        </div>
      </jpl-carousel>
    </FocusContext.Provider>
  );
};

export default CarouselComponent;
