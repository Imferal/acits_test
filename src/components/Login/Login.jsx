import React from "react";
import {withRouter} from "react-router-dom";
import {getToken} from "../../api/api";
import s from './Login.module.scss';

const Login = (props) => {

  let loginText = React.createRef();
  let passwordText = React.createRef();

  // Текст ошибки для вывода на экран
  let errorMessage = props.errorMessage;

  const getFormData = () => {
    let login = loginText.current.value;
    let password = passwordText.current.value;

    if (props.tokenIsFetching === false) {
      // Убираем текст ошибки из стейта и устанавливаем флаг запроса токена
      props.removeErrorMessage();
      props.fetchBearerToken();

      getToken(login, password)
        .then((token) => {
          // Сохраняем токен и перенаправляем на страницу "Сегодня"
          props.setBearerToken(token);
          props.history.push('/today')
        })
        .catch((error) => {
          if (error.response) {
            // Сервер ответил с ошибкой
            errorMessage = error.response.data.detail;
          } else if (error.request) {
            // Сервер не отвечает
            errorMessage = error.request;
          } else {
            // Ошибка в процессе отправки запроса
            errorMessage = 'Error' + error.message;
          }
          props.removeBearerToken();
          props.setErrorMessage(errorMessage);
        });
    }
  }

  return (
    <div className={s.form}>
      <div className={s.form__fieldset}>
        <p className={s.form__title}>Авторизация</p>

        <label className={s.form__label} htmlFor="login">Логин:</label>
        <input className={s.form__input} id="login" type="text" name="login" ref={loginText}/>

        <label className={s.form__label} htmlFor="password">Пароль</label>
        <input className={s.form__input} id="password" type="password" name="password" ref={passwordText}/>

        <button className={s.form__button} onClick={getFormData}>Отправить</button>
      </div>
      <p className={s.form__error}>{errorMessage}</p>
    </div>
  )
}

export default withRouter(Login)