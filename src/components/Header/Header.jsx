import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.scss';

export default function Header(props) {
  return (
    <header className={s.header}>
      <div className="fixed-container">
        <div className={s.header__body}>
          <nav>
            <ul className={s.header__list}>
              <li className={s.header__item}><NavLink to="/today" className={s.header__link}>Сегодня</NavLink></li>
              <li className={s.header__item}><NavLink to="/animals" className={s.header__link}>Животные</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}