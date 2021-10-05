import joi from "joi";

export const ValidateRestaurantId = (resId) => {

const Schema = joi.object({
  _id: joi.string().required()
});
return Schema.validateAsync(resId);
};

export const ValidateCategory= (category) => {

const Schema = joi.object({
  category: joi.string().required()
});
return Schema.validateAsync(category);
};
