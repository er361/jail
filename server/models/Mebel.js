import mongoose from 'mongoose';

var mebelSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  subcategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    //required: true
  },
  title: {
    type: String,
    required: true
  },
  poroda: String,
  art: String,
  img: {
    type: String,
    //required: true
  },
  price: {
    type: String,
    required: true
  }
});

export default mongoose.model('Mebel', mebelSchema);
