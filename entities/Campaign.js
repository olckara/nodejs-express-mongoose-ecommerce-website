/**
 * Created by karaduman on 24.05.2017.
 */
var mongoose = require('./../database');

CampaignSchema = mongoose.Schema(
    {
        _id: String,
        name: String
    },
    {collection: 'campaign'});

Campaign = mongoose.model('Campaign', CampaignSchema);
CampaignSchema.index({_id: 1}, {unique: true});
module.exports = Campaign;

