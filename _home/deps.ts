export * as ReactDOM from "https://jspm.dev/react-dom@17.0.1";

import * as React from "https://jspm.dev/react@17.0.1";

const { default: any, ...rest } = React;
const react = React.default;

export { react as React };
export { rest as react };
