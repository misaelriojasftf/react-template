/* eslint-disable react/no-find-dom-node */
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-dom/test-utils";
import App from "../src/components/App";

it("App is rendered", () => {
  // Render App in the document
  const appElement = TestUtils.renderIntoDocument(<App />);

  // eslint-disable-next-line react/no-find-dom-node
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const appNode = ReactDOM.findDOMNode(appElement as any);

  // Verify text content
  expect(appNode.textContent).toEqual("Hello World!Foo to the barz");
});
