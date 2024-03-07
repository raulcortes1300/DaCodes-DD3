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
      {/* <div>
        <AppIcon
          onClick={() => "bye"}
          imgUrl="https://cdn0.iconfinder.com/data/icons/art-designing-glyph/2048/1871_-_Magnifier-512.png"
          width="60px"
          height="60px"
          alt="Search Event Icon"
        />
      </div> */}
      {/* <div
        style={{ width: "50px" }}
        className="border border-green-500 !important"
      >
        Hi there
      </div>
      <div className="border border-pink-500">Hi there</div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </div>
  );
};

export default NavBar;
