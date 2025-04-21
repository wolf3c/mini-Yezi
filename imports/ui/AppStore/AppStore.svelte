<script>
    import { Meteor } from "meteor/meteor";
    import { Apps } from "/imports/api/apps.js";
    import { appsSubscribeIds } from "/imports/ui/components/Store/SubsStore.js";

    $m: Meteor.subscribe("apps.getRecommend");

    let apps = null;
    $m: {
        apps = Apps.find({ permission: "public" }).fetch();
        if (apps?.length) {
            appsSubscribeIds.add(apps.map((app) => app._id));
        }
    }
</script>