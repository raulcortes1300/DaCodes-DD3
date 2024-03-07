import { render } from "@testing-library/react";
import NavBar from "./NavBar.component";

describe("NavBar", () => {
  it("Displays component container", () => {
    const { getByTestId } = render(<NavBar />);
    const navBarContainer = getByTestId(/navBarContainer/i);
    expect(navBarContainer).toBeInTheDocument();
  });
  it("Displays left App Logo AppIcon", () => {
    const { getByTestId } = render(<NavBar />);
    const navBarComponent = getByTestId("iconContainer");
    expect(navBarComponent).toBeInTheDocument();
  });
});
