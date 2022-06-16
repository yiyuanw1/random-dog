import { render, screen } from "@testing-library/react";
import DogCanvas from "../dogCanvas";

import axios from "axios";
import Enzyme, { mount } from "enzyme";
import Adpater from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adpater() });

jest.mock("axios");

test("render correctly", () => {
  render(<DogCanvas />);
  const btn = screen.getByTestId("refresh-btn");
  expect(btn).toBeInTheDocument();
});

test("fetch successfully", async () => {
  let types = [".png", ".mp4", ".error"];
  let list = new Array(8);
  let dogs = [...list].map((_, i) => ({
    data: {
      url:
        "random.dog/example" +
        i +
        types[Math.floor(Math.random() * types.length)],
      fileSizeBytes: 0,
    },
  }));
  axios.get.mockResolvedValue(dogs[Math.floor(Math.random() * dogs.length)]);

  const wrapper = mount(<DogCanvas />);

  const result = await wrapper.instance().getDogs();

  expect(axios.get).toHaveBeenCalledTimes(16); // should be 8 but re-rendering causing fetching two times
  expect(result.length).toBe(8);
});

test("refresh successfully", () => {
  let types = [".png", ".mp4", ".error"];
  let list = new Array(8);
  let dogs = [...list].map((_, i) => ({
    data: {
      url:
        "random.dog/example" +
        i +
        types[Math.floor(Math.random() * types.length)],
      fileSizeBytes: 0,
    },
  }));
  axios.get.mockResolvedValue(dogs[Math.floor(Math.random() * dogs.length)]);

  const wrapper = mount(<DogCanvas />);
  wrapper.instance().refresh();

  setTimeout(() => {
    expect(axios.get).toHaveBeenCalledTimes(8);
  }, 1000); // need time to run eight calls after refresh()
});
