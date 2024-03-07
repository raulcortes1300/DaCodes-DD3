interface AppIconProps {
  onClick: () => void;
  imgUrl: string;
  className?: string;
  width?: string;
  height?: string;
  alt: string;
}

const AppIcon = ({ onClick, imgUrl, width, height, alt }: AppIconProps) => {
  return (
    <div
      data-testid="iconContainer"
      onClick={onClick}
      style={{ width, height }}
      className="relative overflow-hidden"
    >
      <img
        src={imgUrl}
        alt={alt}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
};
export default AppIcon;
