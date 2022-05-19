import React from "react";
import { shallow } from "enzyme";
import Loguser from "./Loguser";

describe("Loguser", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Loguser />);
    expect(wrapper).toMatchSnapshot();
  });
});
