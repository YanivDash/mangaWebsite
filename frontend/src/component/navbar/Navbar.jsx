import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import "./navbar.css";
import { RiLightbulbFlashLine, RiLightbulbFlashFill } from "react-icons/ri";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [light, setLight] = useState(false);

  return (
    <div className='navbar_container'>
      {" "}
      <div className='navbar_links_Container'>
        <div className='navbar_manga'>
          <ul className='navbar_manga_lists'>
            <li className='navbar_manga_item'>Home</li>
            <li className='navbar_manga_item'>Most-Viewed</li>
            <li className='navbar_manga_item'>Latest</li>
          </ul>
        </div>
        <div className='navbar_right'>
          <div>
            <p onClick={() => setSearch(!search)}>
              <IoSearchSharp />
            </p>
          </div>
          <p
            className={light ? "navbar_light" : undefined}
            onClick={() => setLight(!light)}
          >
            {" "}
            {light ? (
              <RiLightbulbFlashFill className='navbar_none navbar_glowing' />
            ) : (
              <RiLightbulbFlashLine className='navbar_none' />
            )}
          </p>
        </div>
      </div>
      {search ? (
        <input
          className='navbar_search_input'
          type='text'
          placeholder='enter manga...'
        />
      ) : undefined}
    </div>
  );
};

export default Navbar;
