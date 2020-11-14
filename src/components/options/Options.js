import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styles from "./options.module.css";
import cx from "classnames";

function OptionButton({ childUrl, text, icon }) {
  const { url } = useRouteMatch();
  return (
    <div className={styles.option}>
      <Link
        to={`${url}${childUrl}`}
        className={cx(
          styles.option__button,
          "waves-effect",
          "waves-green",
          "btn-large"
        )}
      >
        {icon}
        <p>{text}</p>
      </Link>
    </div>
  );
}

function Options() {
  const options = [
    {
      text: "Stats",
      url: "/stats",
      icon: <i className="fas fa-chart-line"></i>,
    },
    {
      text: "Records",
      url: "",
      icon: <i className="fas fa-table"></i>,
    },
    {
      text: "Note",
      url: "/notation",
      icon: <i className="fas fa-pencil-alt"></i>,
    },
    {
      text: "Progress",
      url: "/add-a-record",
      icon: <i className="far fa-plus-square"></i>,
    },
    {
      text: "Start",
      url: "/start-a-read",
      icon: <i className="fas fa-book"></i>,
    },
  ];

  return (
    <div className={cx(styles.options, "hide-on-small-and-down")}>
      {options.map((btn) => {
        return (
          <OptionButton
            childUrl={btn.url}
            text={btn.text}
            icon={btn.icon}
            key={Math.random()}
          />
        );
      })}
    </div>
  );
}

export default Options;
