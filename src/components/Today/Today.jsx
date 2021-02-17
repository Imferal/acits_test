// import axios from "axios";
import React from "react";
import s from "./../Animals/Animals.module.scss";
import {withRouter} from "react-router-dom";
import Modal from "../Modal/Modal";
import {getServerData} from "../../api/api";
import {DetailsButton} from "../_shared/DetailsButton";

class Today extends React.Component {

  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e) {
    this.setState({
      modalIsOpen: true,
      name: e.animal.name,
      spec_parent_name: e.animal.spec_parent_name,
      spec_name: e.animal.spec_name
    });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    // Если нет токена - переадресация на форму авторизации
    if (localStorage.getItem('bearerToken') === null) {
      this.props.history.push('/login')
    }

    // Получение данных о назначениях на сегодня
    getServerData('today')
      .then((results) => {
        this.props.saveTodayData(results)
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
        <div className="fixed-container">
          <div className={s.animals__container}>
            <h1>Назначения на сегодня</h1>
            {this.props.results.map((e, i) => (
              <article key={i} className={s.animals__item}>
                <div className={s.animals__description}>
                  <h2>{e.animal.name}</h2>
                  <p>Назначение: {e.my_type}</p>
                </div>
                <DetailsButton e={e} openModal={this.openModal}/>
              </article>
            ))}
          </div>
        </div>
        <Modal
          name={this.state.name}
          type={this.state.spec_parent_name}
          subtype={this.state.spec_name}
          closeModal={this.closeModal}
          openModal={this.openModal}
          modalIsOpen={this.state.modalIsOpen}
        />
      </main>
    )
  }
}

export default withRouter(Today)