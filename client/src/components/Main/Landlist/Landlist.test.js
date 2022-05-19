import React from "react";
import { shallow } from "enzyme";
import Landlist from "./Landlist";

describe("Landlist", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Landlist />);
    expect(wrapper).toMatchSnapshot();
  });
});
