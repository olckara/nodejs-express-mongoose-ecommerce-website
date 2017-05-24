/**
 * Created by karaduman on 24.05.2017.
 */
var mongoose = require('./../database');

ButikSchema = mongoose.Schema(
    {
        _id: String,
        category_id: String,
        name: String,
        picture: String,
        close_date: Date
    },
    {collection: 'butiks'});

Butik = mongoose.model('Butik', ButikSchema);
ButikSchema.index({_id: 1}, {unique: true});
module.exports = Butik;