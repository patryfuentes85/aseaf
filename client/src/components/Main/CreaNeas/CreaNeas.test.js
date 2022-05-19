import React from "react";
import { shallow } from "enzyme";
import CreaNeas from "./CreaNeas";

describe("CreaNeas", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CreaNeas />);
    expect(wrapper).toMatchSnapshot();
  });
});
