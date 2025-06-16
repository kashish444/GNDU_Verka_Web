import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      match: [
        /^[A-Za-z]+([-' ][A-Za-z]+)*$/,
        "Please enter a valid first name.",
      ],
    },
    admin: {
      type: Boolean,
      default: false,
    },
    lastname: {
      type: String,
      required: false,
      match: [
        /^[A-Za-z]+([-' ][A-Za-z]+)*$/,
        "Please enter a valid last name.",
      ],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address.",
      ],
    },
    employeeId: {
      type: String,
      required: false,
      unique: true,
    },
    department: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
