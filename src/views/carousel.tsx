import React, { FC, useEffect } from "react";

interface CarouselIn {
  urls: string[];
}

const Carousel = (props: CarouselIn) => {
  useEffect(() => {
    /**
     */
  }, []);
  return (
    <View>
      {props.urls.map((e) => {
        return <Image key={`img-${e}`}></Image>;
      })}
    </View>
  );
};

export default Carousel;
