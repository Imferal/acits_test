import {connect} from "react-redux";
import Today from "./Today";
import {saveTodayData} from "../../redux/dataReducer";

const mapStateToProps = state => {
  return {
    results: state.data.results.today,
    error: state.api.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveTodayData: (todayData) => {
      dispatch(saveTodayData(todayData))
    },
  };
};

const TodayContainer = connect(mapStateToProps, mapDispatchToProps)(Today);

export default TodayContainer;