import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import App from "./App";

describe("Render App", () => {
  let AppWrapper: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  beforeEach(() => (AppWrapper = shallow(<App />)));
  it("should render img", () => {
    expect(AppWrapper.find("img").length).toEqual(1);
  });
  it("should render MissionContainer", () => {
    expect(AppWrapper.find("MissionContainer").length).toEqual(1);
  });
});