// import {R,G,B,P,Y,W} from "../../src/lib/tools/common/clr";

const gray = "\u001b[01;30m";
const red = "\u001b[01;31m";
const green = "\u001b[01;32m";
const blue = "\u001b[01;34m";
const yellow = "\u001b[01;33m";
const purple = "\u001b[01;35m";
const blue2 = "\u001b[01;36m";
const white = "\u001b[01;37m";
const endl = "\u001b[0m";

// const R = (...args: any) => (chalk.red(...args));

const R = (value: any) => `${red}${value}${endl}`;
const G = (value: any) => `${green}${value}${endl}`;
const B = (value: any) => `${blue}${value}${endl}`;
const P = (value: any) => `${purple}${value}${endl}`;
const Y = (value: any) => `${yellow}${value}${endl}`;
const W = (value: any) => `${white}${value}${endl}`;
const B2 = (value: any) => `${blue2}${value}${endl}`;

export { R, G, B, P, Y, W, B2 };
