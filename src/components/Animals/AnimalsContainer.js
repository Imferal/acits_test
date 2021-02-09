import { connect } from "react-redux";
import Animals from "./Animals";
import { saveAnimalsData } from "../../redux/dataReducer";

const mapStateToProps = state => {
    return {
        results: state.data.results.animals,
        error: state.api.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveAnimalsData: (animalsData) => {
            dispatch(saveAnimalsData(animalsData))
        },
    };
};

const AnimalsContainer = connect(mapStateToProps, mapDispatchToProps)(
    Animals
);

export default AnimalsContainer;