import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Apps = new Mongo.Collection("apps");

if (Meteor.isServer) {
    Meteor.publish('apps.getRecommend', function () {
        return Apps.find({ permission: "public" });
    });
    Meteor.publish('apps.getOwned', function () {
        return Apps.find({ adminId: Meteor.userId() });
    });
    Meteor.publish('apps.getByIds', function (ids) {
        return Apps.find({ _id: { $in: ids } });
    });

    Meteor.methods({
        // ...
    })
}

