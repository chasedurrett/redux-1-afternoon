import { createStore } from "redux";

export const actions = {
  UPDATE_NAME: "UPDATE_NAME",
  UPDATE_CATEGORY: "UPDATE_CATEGORY",
  FIRST_NAME: "FIRST_NAME",
  LAST_NAME: "LAST_NAME",
  INGREDIENTS: "INGREDIENTS",
  INSTRUCTIONS: "INSTRUCTIONS",
  RECIPES: "RECIPES"
};

const initialState = {
  name: "",
  category: "",
  firstName: "",
  lastName: "",
  ingredients: [],
  instructions: [], 
  recipes: []
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.UPDATE_NAME:
      return { ...state, name: payload };
    case actions.UPDATE_CATEGORY:
      return { ...state, category: payload };
    case actions.FIRST_NAME:
      return { ...state, firstName: payload };
    case actions.LAST_NAME:
      return { ...state, lastName: payload };
    case actions.INGREDIENTS:
      const newIngredients = [...state.ingredients, payload];
      return { ...state, ingredients: newIngredients };
    case actions.INSTRUCTIONS:
        const newInstructions = [...state.instructions, payload]
        return {...state, instructions: newInstructions}
    case actions.recipes:
        const {name, category, firstName, lastName, ingredients, instructions} = state
        const recipe = {name, category, firstName, lastName, ingredients, instructions}
        const newRecipes = [...state.recipes, recipe]
        return {...state, recipes: newRecipes}
    default:
      return state;
  }
}

export default createStore(reducer);
