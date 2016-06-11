import mongoose from 'mongoose';

var SubCategory = new mongoose.Schema ({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

export default mongoose.model('SubCategory', SubCategory);
