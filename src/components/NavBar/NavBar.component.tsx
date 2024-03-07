import AppIcon from "../AppIcon/AppIcon.component";

const NavBar = () => {
  return (
    <div
      data-testid="navBarContainer"
      className="flex flex-row justify-between content-between border border-red-500"
    >
      <div className="border border-red-500 h-14 w-14">Hi</div>
      <AppIcon
        onClick={() => "hi"}
        imgUrl="https://cdn-icons-png.flaticon.com/512/3123/3123153.png"
        width="60px"
        height="60px"
        alt="App Logo"
      />
    </div>
  );
};

export default NavBar;
