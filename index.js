function toggleDropdown(menu, dropdownButton, type) {
  // Capture the initial display style
  const initialDisplay =
    menu.style.display === "" ? "block" : menu.style.display;

  // Hide the menu initially
  menu.style.display = "none";

  const handleClick = () => {
    if (menu.style.display === "none") {
      menu.style.display = initialDisplay;
    } else {
      menu.style.display = "none";
    }
  };

  const handleMouseOver = () => {
    menu.style.display = initialDisplay;
  };

  const handleMouseOut = () => {
    menu.style.display = "none";
  };

  // Remove previous event listeners
  dropdownButton.removeEventListener("click", handleClick);
  dropdownButton.removeEventListener("mouseover", handleMouseOver);
  dropdownButton.removeEventListener("mouseout", handleMouseOut);

  switch (type) {
    case "click":
      dropdownButton.addEventListener(type, () => handleClick());
      break;
    case "mouseover":
      dropdownButton.addEventListener(type, () => handleMouseOver());
      dropdownButton.addEventListener("mouseout", () => handleMouseOut());
      break;
  }
}

module.exports = toggleDropdown;
