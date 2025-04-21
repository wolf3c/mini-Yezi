<script>
    import { router } from "tinro";
    import { Messages } from "/imports/api/messages";
    import { Apps } from "/imports/api/apps";
    import {
        appsSubscribeIds,
    } from "/imports/ui/components/Store/SubsStore.js";

    let appId = router.params($router).appId;
    appsSubscribeIds.add([appId]);
    let app = null;
    $m: {
        app = Apps.findOne(appId) || null;
    }

    let message = null;
    $m: message = Messages.findOne({ from: `app/${appId}` }, { sort: { created: -1 } }) || null;
</script>