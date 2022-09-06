import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId, ref: "Post",
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: "User",
        required: true,
    },
    comment: {type:String}
},{timestamps: true})

const Comment = mongoose.model("Comment", commentSchema)
export default Comment;
