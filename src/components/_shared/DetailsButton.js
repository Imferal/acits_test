import { React } from "react";
import s from './DetailsButton.module.scss';

export const DetailsButton = (props) => {
    return (
        <button
            className={s.detailsButton}
            onClick={() => props.openModal(props.e)}>подробнее...
        </button>)
}