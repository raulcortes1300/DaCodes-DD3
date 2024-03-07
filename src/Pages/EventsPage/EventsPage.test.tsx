import { render } from "@testing-library/react";
import EventsPage from "./EventsPage";

describe("EventsPage", () => {
  it("display componenent container", () => {
    const { getByTestId } = render(<EventsPage />);
    const eventsPageContainer = getByTestId(/eventsPageContainer/i);
    expect(eventsPageContainer).toBeInTheDocument();
  });
  it("display NavBar component", () => {
    const { getByTestId } = render(<EventsPage />);
    const navBarContainer = getByTestId(/navBarContainer/i);
    expect(navBarContainer).toBeInTheDocument();
  });
});
