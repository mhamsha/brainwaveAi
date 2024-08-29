const MenuSvg = ({ openNavigation }) => {
  return (
    <svg className="overflow-visible" width="20" height="12" viewBox="0 0 20 12">
      <rect
        className="transition-all origin-center duration-300 "
        y={openNavigation ? "5" : "0"}
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${openNavigation ? "135" : "0"})`}
      />
      <rect
        className="transition-all origin-center duration-300 "
        y={openNavigation ? "5" : "10"}
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${openNavigation ? "-135" : "0"})`}
      />
    </svg>
  );
};

export default MenuSvg;
