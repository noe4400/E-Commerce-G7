import Axios from "axios";

import {
  CATEGORY_FAIL,
  CATEGORY_REQUEST,
  CREATE_CLOTHE,
  CATEGORY_SUCCESS,
  PRODUCT_FAIL,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_DETAIL,
  FILTER_PRODUCTS_BY_CATEGORY,
  EDIT_CLOTHE
} from "../constants/productConstants";

export const getProducts =
  (name = "", category = "", offset = 0) =>
  async (dispatch) => {
    dispatch({
      type: PRODUCT_REQUEST,
    });
    try {
      let response;
      console.log("name", name);
      const { data } = await (name === ""
        ? Axios.get(`/clothe/all-clothes?limit=10&offset=${offset}`)
        : Axios.get(`/clothe?name=${name}`));

      response = data;

      if (response.statusCode === 400) {
        console.log("response", response);
        dispatch({
          type: PRODUCT_FAIL,
          payload: response.data,
        });
      } else {
        dispatch({
          type: PRODUCT_SUCCESS,
          payload: response,
        });
      }
    } catch (error) {
      dispatch({
        type: PRODUCT_FAIL,
        payload: error.message,
      });
    }
  };

export function createClothe(form) {
  console.log(form);
  return async function (dispatch) {
    try {
      await Axios.post("/admin/create-clothe", form);
      return dispatch({
        type: CREATE_CLOTHE,
        payload: form,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export const getCategories = () => async (dispatch) => {
  dispatch({
    type: CATEGORY_REQUEST,
  });
  try {
    const { data } = await Axios.get("/clothe/all-categories");
    dispatch({
      type: CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_FAIL,
      payload: error.message,
    });
  }
};

export const filterProducts = (products, category) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_CATEGORY,
    payload: {
      products:
        category === "all"
          ? products.allClothes
          : products.allClothes.filter((product) =>
              product.categories.some((el) => el.name === category)
            ),
    },
  });
};

export const getProductDetail = (id) => async (dispatch) => {
  try {
    const { data } = await Axios.get(`/clothe/clothe-details/${id}`);
    dispatch({
      type: PRODUCT_DETAIL,
      payload: data.data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: error.message,
    });
  }
};

export function editClothe(form) {
  return async function (dispatch) {
    try {
      await Axios.post("/admin/edit-clothe", form);
      return dispatch({
        type: EDIT_CLOTHE,
        payload: form,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
