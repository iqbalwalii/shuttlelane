import { useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Link from "next/link";

import styles from "../styles/Navbar.module.css";

export default function ClickAway({ heading, routes }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div
        style={{
          position: "relative",
          display: "inline-block",
          background: "transparent",
        }}
      >
        <button
          className={styles.dropdownToggle}
          type="button"
          onClick={handleClick}
        >
          {heading}{" "}
          <span style={{ color: "#E2B442", fontSize: "12px" }}>▼</span>
        </button>
        {open ? (
          <div className={styles.dropdown}>
            {routes &&
              Object.entries(routes).map((entry, idx) => {
                return (
                  <Link key={idx} href={entry[1]}>
                    <a
                      style={{
                        width: "100%",
                        display: "block",
                      }}
                    >
                      {entry[0]}
                    </a>
                  </Link>
                );
              })}
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
