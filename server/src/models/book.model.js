import { Schema, model } from "mongoose";
// const { ObjectId } = Schema.Types;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
  },
  copies: Number,
  userReview: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      review: {
        type: String,
        required: true,
      },
    },
  ],
});

const Book = model("Book", bookSchema);
export default Book;
