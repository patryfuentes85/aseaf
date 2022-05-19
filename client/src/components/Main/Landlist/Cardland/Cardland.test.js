import React from "react";
import { shallow } from "enzyme";
import Cardland from "./Cardland";

describe("Cardland", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Cardland />);
    expect(wrapper).toMatchSnapshot();
  });
});
