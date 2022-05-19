import React from "react";
import { shallow } from "enzyme";
import CreaLand from "./CreaLand";

describe("CreaLand", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CreaLand />);
    expect(wrapper).toMatchSnapshot();
  });
});
