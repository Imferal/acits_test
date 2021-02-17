const SAVE_ANIMALS_DATA = 'SAVE_ANIMALS_DATA';
const SAVE_TODAY_DATA = 'SAVE_TODAY_DATA';

const initialState = {
  results: {
    today: [],
    animals: [],
  },
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {

    // Данные о питомцах получены, перемещаем их в стейт
    case SAVE_ANIMALS_DATA: {
      state.results.animals = action.animalsData.slice(0);
      return {...state};
    }

    // Данные о назначениях на сегодня получены, перемещаем их в стейт
    case SAVE_TODAY_DATA: {
      state.results.today = action.todayData.slice(0);
      return {...state};
    }

    default:
      return {...state};
  }
}

export const saveAnimalsData = animalsData => ({
  type: SAVE_ANIMALS_DATA,
  animalsData,
});

export const saveTodayData = todayData => ({
  type: SAVE_TODAY_DATA,
  todayData,
});