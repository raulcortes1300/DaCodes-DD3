import { fireEvent, render } from "@testing-library/react";
import AppIcon from "./AppIcon.component";

describe("AppIcon", () => {
  let mockOnClick: jest.Mock;
  const imgUrl = "testimg.com";

  beforeEach(() => {
    mockOnClick = jest.fn();
  });

  it("displays image with correct imgUrl prop for src attribute", () => {
    const { getByAltText } = render(
      <AppIcon onClick={mockOnClick} imgUrl={imgUrl} alt="testAlt" />
    );

    const appIconImage = getByAltText(/testAlt/i);

    expect(appIconImage).toHaveAttribute("src", imgUrl);

    //   render(<AppIcon />);
  });

  it("calls onClick prop when container is clicked", () => {
    const { getByTestId } = render(
      <AppIcon onClick={mockOnClick} imgUrl={imgUrl} alt="testAlt" />
    );
    const iconContainer = getByTestId(/iconContainer/i);

    fireEvent.click(iconContainer);
    expect(mockOnClick).toHaveBeenCalled();
    // expect(iconContainer).toBeInTheDocument();
  });
});
