import Yoga from "../assets/yoga.png";
import Swiming from "../assets/swiming.png";
import Bike from "../assets/bike.png";
import Lift from "../assets/lift.png";

function Menu() {
  return (
    <div className="flex p-4 bg-black flex-col max-w-[118px] grow gap-5">
      <ul className="flex flex-col self-center text-xl font-medium justify-evenly">
        <li className="p-4">
          <img className="" src={Yoga} />
        </li>
        <li className="p-4">
          <img src={Swiming} />
        </li>
        <li className="p-4">
          <img src={Bike} />
        </li>
        <li className="p-4">
          <img src={Lift} />
        </li>
      </ul>
      <div className="flex items-center justify-center">
        <span
          style={{ writingMode: "vertical-rl" }}
          className="text-xs text-white rotate-180">
          Copyright, SportSee 2020
        </span>
      </div>
    </div>
  );
}

export default Menu;
