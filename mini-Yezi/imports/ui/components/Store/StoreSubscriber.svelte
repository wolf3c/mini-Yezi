<script>
    import { Meteor } from "meteor/meteor";
    // import { Apps } from "/imports/api/apps";
    // import { Messages } from "/imports/api/messages";
    import {
        appsSubscribeIds,
        knowledgeBaseSubscribeByAppIds,
        knowledgeIds
    } from "./SubsStore.js";


    $m: Meteor.subscribe("apps.getByIds", $appsSubscribeIds);
    $m: Meteor.subscribe("messages.getByAppIds", $appsSubscribeIds);
    $m: Meteor.subscribe("knowledge_base.getByAppIds", $knowledgeBaseSubscribeByAppIds);
    $m: Meteor.subscribe("knowledge_base.getByIds", $knowledgeIds);
</script>