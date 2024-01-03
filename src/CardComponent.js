import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import React from "react";

const CardComponent = ({ isFirstCard, isLastCard, item, CI, isFocusable }) => {
  console.log({ item });
  const { ref, focused, setFocus, getCurrentFocusKey } = useFocusable({
    focusable: isFocusable,
    focusKey: "scrollable" + CI + "#" + item,
    onFocus: (layout, props, details) => {
      // ref?.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "start" });
      //   ref?.current?.scrollIntoView({ block: "center", inline: "start" });
    },
    onBlur: () => {},
    onEnterPress: () => {},
    onArrowPress: (dir, props, details) => {
      if (isLastCard && dir === "right") {
        return false;
      }
      if (isFirstCard && dir === "left") {
        return false;
      }
      if (dir === "right") {
        document.querySelector(".focusedCarousal")?.querySelector("#jpl-next").click();
      } else if (dir === "left") {
        document.querySelector(".focusedCarousal")?.querySelector("#jpl-previous").click();
      }
    },
  });

  return (
    <div ref={ref} class={`jpl-carousel-item content ${isFirstCard ? "m-l-0" : ""} ${isLastCard ? "m-r-10" : ""} ${focused ? "focused" : ""}`}>
      <img src={`https://source.unsplash.com/random/250x250/?${item + 1}${CI}`} alt={"random" + item + 1} />
    </div>
  );
};

export default CardComponent;
