import DOMPurify from "dompurify";
import shapeColors from "./shapeColors";

export default function Shapes({ id, shape, color }) {
  const colors = shapeColors.filter((colors) => colors.name === color.name);
  let color1 = colors[0].color1;
  let color2 = colors[0].color2;

  const svgShapes = [
    `<svg
  class=""
  style="z-index: 0"
  id="sw-js-blob-svg"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="sw-gradient-${id}" x1="0" x2="1" y1="1" y2="0">
      <stop
        id="stop1"
        stop-color="${color1}"
        offset="0%"
      ></stop>
      <stop 
        id="stop2"
        stop-color="${color2}"
        offset="100%"
      ></stop>
    </linearGradient>
  </defs>
  <path
    fill="url(#sw-gradient-${id})"
    d="M16.6,-17.6C21.7,-15.4,26.3,-10.4,27.6,-4.6C29,1.2,27.1,7.9,24.7,16.4C22.3,24.9,19.5,35.3,13.1,38.8C6.8,42.3,-3,38.8,-10.1,33.7C-17.2,28.6,-21.5,21.8,-24.8,14.9C-28.1,8.1,-30.3,1.2,-29.6,-5.6C-28.8,-12.3,-25.1,-19,-19.7,-21.1C-14.3,-23.3,-7.2,-20.9,-0.7,-20.1C5.7,-19.2,11.4,-19.8,16.6,-17.6Z"
    width="100%"
    height="100%"
    transform="translate(50 50)"
    stroke-width="0"
    style="transition: all 0.3s ease 0s"
  ></path>
</svg>`,
    `<svg
  id="sw-js-blob-svg"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="sw-gradient-${id}" x1="0" x2="1" y1="1" y2="0">
    <stop
    id="stop1"
    stop-color="${color1}"
    offset="0%"
  ></stop>
  <stop 
    id="stop2"
    stop-color="${color2}"
    offset="100%"
  ></stop>
    </linearGradient>
  </defs>
  <path
    fill="url(#sw-gradient-${id})"
    d="M25.3,-25.8C32,-18.6,36,-9.3,33.8,-2.1C31.7,5.1,23.5,10.1,16.8,16.7C10.1,23.2,5.1,31.2,-0.4,31.5C-5.8,31.9,-11.6,24.7,-17.3,18.1C-23.1,11.6,-28.7,5.8,-30.5,-1.7C-32.2,-9.3,-30,-18.6,-24.3,-25.8C-18.6,-33,-9.3,-38.1,0,-38.2C9.3,-38.2,18.6,-33.1,25.3,-25.8Z"
    width="100%"
    height="100%"
    transform="translate(50 50)"
    stroke-width="0"
    style="transition: all 0.3s ease 0s"
  ></path>
</svg>`,
    `<svg
  id="sw-js-blob-svg"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="sw-gradient-${id}" x1="0" x2="1" y1="1" y2="0">
    <stop
    id="stop1"
    stop-color="${color1}"
    offset="0%"
  ></stop>
  <stop 
    id="stop2"
    stop-color="${color2}"
    offset="100%"
  ></stop>
    </linearGradient>
  </defs>
  <path
    fill="url(#sw-gradient-${id})"
    d="M18,-17.3C23.9,-12.1,29.8,-6,30.2,0.4C30.7,6.9,25.7,13.8,19.7,20.1C13.8,26.3,6.9,32,1.4,30.6C-4.1,29.3,-8.3,20.8,-15.8,14.6C-23.3,8.3,-34.2,4.1,-36.8,-2.7C-39.5,-9.5,-34,-19,-26.5,-24.2C-19,-29.5,-9.5,-30.6,-1.7,-28.9C6,-27.1,12.1,-22.6,18,-17.3Z"
    width="100%"
    height="100%"
    transform="translate(50 50)"
    stroke-width="0"
    style="transition: all 0.3s ease 0s"
  ></path>
</svg>`,
    `<svg
  id="sw-js-blob-svg"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="sw-gradient-${id}" x1="0" x2="1" y1="1" y2="0">
    <stop
    id="stop1"
    stop-color="${color1}"
    offset="0%"
  ></stop>
  <stop 
    id="stop2"
    stop-color="${color2}"
    offset="100%"
  ></stop>
    </linearGradient>
  </defs>
  <path
    fill="url(#sw-gradient-${id})"
    d="M21.2,-31.6C26.6,-25.2,29.6,-17.9,32.9,-10.1C36.3,-2.3,40.1,6,38.3,12.8C36.6,19.6,29.3,25,22,26.6C14.7,28.3,7.3,26.4,1.9,23.7C-3.5,21.1,-7,17.8,-9.4,14.5C-11.9,11.2,-13.2,8,-17.4,3.6C-21.6,-0.7,-28.7,-6.2,-27.5,-8.6C-26.3,-11.1,-16.8,-10.6,-10.8,-16.8C-4.9,-23,-2.4,-35.9,2.7,-39.6C7.9,-43.4,15.8,-38,21.2,-31.6Z"
    width="100%"
    height="100%"
    transform="translate(50 50)"
    stroke-width="0"
    style="transition: all 0.3s ease 0s"
  ></path>
</svg>`,
    `<svg
  id="sw-js-blob-svg"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="sw-gradient-${id}" x1="0" x2="1" y1="1" y2="0">
    <stop
    id="stop1"
    stop-color="${color1}"
    offset="0%"
  ></stop>
  <stop 
    id="stop2"
    stop-color="${color2}"
    offset="100%"
  ></stop>
    </linearGradient>
  </defs>
  <path
    fill="url(#sw-gradient-${id})"
    d="M13.1,-17.4C17.6,-11.7,22.4,-8.3,24.6,-3.3C26.7,1.7,26.2,8.3,24.1,15.9C22.1,23.5,18.5,32.1,12.7,33.7C7,35.3,-0.9,29.8,-10.4,27C-19.8,24.2,-30.8,24.2,-34.1,19.3C-37.5,14.4,-33.1,4.7,-30.7,-4.7C-28.2,-14.1,-27.6,-23.1,-22.8,-28.7C-18,-34.3,-9,-36.6,-2.4,-33.7C4.3,-30.9,8.5,-23.1,13.1,-17.4Z"
    width="100%"
    height="100%"
    transform="translate(50 50)"
    stroke-width="0"
    style="transition: all 0.3s ease 0s"
  ></path>
</svg>`,
  ];

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(svgShapes[shape]),
      }}
    ></div>
  );
}
