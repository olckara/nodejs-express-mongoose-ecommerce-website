/**
 * Created by karaduman on 24.05.2017.
 */
var mongoose = require('./../database');

CategorySchema = mongoose.Schema(
    {
        _id: String,
        name: String
    },
    {collection: 'category'});

Category = mongoose.model('Category', CategorySchema);
CategorySchema.index({_id: 1}, {unique: true});
module.exports = Category;
