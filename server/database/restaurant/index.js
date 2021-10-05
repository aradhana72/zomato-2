import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  name: {type: String, required: true},
  city: {type: String, required: true},
  address: {type: String, required: true},
  mapLocation: {type: String, required: true},
  cuisine: [String],
  restaurantTimings: String,
  contactNumber: Number,
  website: String,
  popularDishes: [String],
  averageCost: Number,
  amenities: [String],
  menuImages: {
    type: mongoose.Types.ObjectId,
    ref: "Images"
  },
  menu: {
    type: mongoose.Types.ObjectId,
    ref: "Menus"
  },
  reviews: [{type: mongoose.Types.ObjectId, ref: "Reviews"}],
  photos: {type:mongoose.Types.ObjectId, ref: "Images"}
},
{
  timestamps: true
});

export const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);
