import React from "react";
import s from "./../Animals/Animals.module.scss";
import { withRouter } from "react-router-dom";
import Modal from "../Modal/Modal";
import { getServerData } from "../../api/api";
import { findAnimalAttr } from "../../helpers/helpers";
import { DetailsButton } from "../_shared/DetailsButton";

class Animals extends React.Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(e) {

        let height = findAnimalAttr(e.animal_attributes, 'height')
        let weight = findAnimalAttr(e.animal_attributes, 'weight')


        this.setState({
            modalIsOpen: true,
            name: e.name,
            spec_parent_name: e.spec_parent_name,
            spec_name: e.spec_name,
            height: height,
            weight: weight,
            age: e.birth_date,
        });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    componentDidMount() {
        // Если нет токена - переадресация на форму авторизации
        if (localStorage.getItem('bearerToken') === null) {
            this.props.history.push('/login')
        }

        // Получение данных о животных
        getServerData('animals')
            .then((results) => {
                this.props.saveAnimalsData(results)
            })
            .catch((error) => {
                if (error.response.status && error.response.status === 403) {
                    this.props.history.push('/login')
                } else {
                    console.log('Ошибка' + error)
                }
            })
    }

    render() {

        return (
            <main className={s.animals}>
                <div className="fixed-container" >
                    <div className={s.animals__container}>
                        <h1>Наши питомцы</h1>
                        {this.props.results.map((e, i) => (
                            <article key={i} className={s.animals__item}>
                                <div className={s.animals__description}>
                                    <h2>{e.name}</h2>
                                    <p>Тип: {e.spec_parent_name}</p>
                                    <p>Подтип: {e.spec_name}</p>
                                </div>

                                <DetailsButton e={e} openModal={this.openModal} />
                            </article>
                        ))}
                    </div>
                </div>
                <Modal
                    name={this.state.name}
                    type={this.state.spec_parent_name}
                    subtype={this.state.spec_name}
                    height={this.state.height}
                    weight={this.state.weight}
                    closeModal={this.closeModal}
                    openModal={this.openModal}
                    modalIsOpen={this.state.modalIsOpen}
                />
            </main>
        )
    }
}

export default withRouter(Animals)