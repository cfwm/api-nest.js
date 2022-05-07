import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  age: Number,
  address: {
    cep: String,
    state: String,
    city: String,
    district: String,
    street: String,
    number: String,
    complement: String,
    ibge: String,
  },
});
