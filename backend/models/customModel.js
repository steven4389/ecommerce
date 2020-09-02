import mongoose from 'mongoose';

const customSchema = {
    colorTheme: { type: String, required: true },
    storeName : {type: String, required: true },
    logotipo: { type: String, required: true },
    width: { type: String, required: true },
    height: { type: String, required: true },
};

const customModel = mongoose.model("Custom", customSchema);
export default customModel;