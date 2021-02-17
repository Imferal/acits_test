import Header from './../Header/Header';
import {Route, BrowserRouter} from 'react-router-dom';
import LoginContainer from '../Login/LoginContainer';
import TodayContainer from '../Today/TodayContainer';
import AnimalsContainer from '../Animals/AnimalsContainer';
import Auth from '../Auth/Auth';

const App = () => {
  return (
    <BrowserRouter basename="/acits">
      <Header/>
      <Route exact path="/" component={Auth}/>
      <Route exact path="/animals" component={AnimalsContainer}/>
      <Route exact path="/today" component={TodayContainer}/>
      <Route path="/login" component={LoginContainer}/>
    </BrowserRouter>
  );
};

export default App;
