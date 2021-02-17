import React from 'react';
import s from "./Modal.module.scss";

export default function Modal(props) {
  return (

    <div
      onClick={props.closeModal}
      className={props.modalIsOpen ? s.modal__overlay + ' ' + s.modal__active : s.modal__overlay}
    >
      <div className={props.modalIsOpen ? s.modal__body + ' ' + s.modal__active : s.modal__body}
           onClick={e => e.stopPropagation()}>
        <h2 className="modal__item">{props.name || 'Не говорит'}</h2>
        <ul>
          <li className="modal__item">Рост: {props.height || 'Пока не измеряли'}</li>
          <li className="modal__item">Вес: {props.weight || 'Давно не взвешивались'}</li>
          <li className="modal__item">Возраст: {props.age || 'Доподлинно неизвестно'}</li>
          <li className="modal__item">Вид: {props.type || 'Незвестный вид'}</li>
          <li className="modal__item">Порода: {props.subtype || 'Неопределённая порода'}</li>
        </ul>
        <button onClick={props.closeModal}>Закрыть</button>
      </div>
    </div>
  )
}