import "@testing-library/jest-dom";
import ShallowRenderer from "react-test-renderer/shallow";
import Header from "../components/Header";

describe("Header", () => {
  test("should show a h1 with the text 'Video Sharing'", () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<Header />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
