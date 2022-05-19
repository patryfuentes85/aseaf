import React from "react";
import { shallow } from "enzyme";
import Cardnea from "./Cardnea";

describe("Cardnea", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Cardnea />);
    expect(wrapper).toMatchSnapshot();
  });
});
