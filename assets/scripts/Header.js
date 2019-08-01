import { TweenLite, TweenMax } from "gsap";

const Header = () => {
  const box = document.querySelector(".box");
  TweenLite.to(box, 2, {
    left: 100,
    top: 75,
    backgroundColor: "#000",
    ease: Power4.easeIn
  });
  box.classList.add("123123213");

  return Header;
};

export default Header;
