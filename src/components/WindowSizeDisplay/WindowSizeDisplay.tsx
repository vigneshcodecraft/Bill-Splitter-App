import React, { useEffect } from "react";

export function WindowSizeDisplay() {
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Side effect - A task which is completely outside of react's rendering flow
  // such as a network request, a scroll event, window resize event and so on.
  useEffect(() => {
    const eventHandler = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", eventHandler);

    return () => {
      // If we return a clean up function, it will be called after
      // every call to the
      // this is cleanup function.
      window.removeEventListener("resize", eventHandler);
    };
  }, []); // second argument is a dependency array. If you don't supply, the effect
  // will be invoked after every render.
  // however, if we supply an empty array instead, then the effect will be called
  // only once after the component renders first.

  return (
    <div>
      <span>
        {dimensions.width}
        {`px`}
      </span>
      <span> {"X"} </span>
      <span>
        {dimensions.height}
        {`px`}
      </span>
    </div>
  );
}
