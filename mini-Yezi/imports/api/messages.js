import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { jsonToMarkdownList } from "/imports/api/functions/converters/format.js";

export const Messages = new Mongo.Collection("messages")

if (Meteor.isServer) {
    Meteor.publish('messages.getByIds', function (ids) {
        return Messages.find({
            _id: { $in: ids }, $or: [
                { uid: this.userId },
            ]
        });
    });
    Meteor.publish('messages.getAll', function () {
        if (this.userId) {
            return Messages.find({ uid: this.userId });
        } else {
            return null;
        }
    });
    Meteor.publish('messages.getByAppIds', function (ids) {
        return Messages.find({
            from: { $in: ids.map(id => 'app/' + id) },
            uid: this.userId
        });
    });

    Meteor.methods({
        // ...
    })
}