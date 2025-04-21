<script>
    // import mixpanel from "mixpanel-browser/src/loaders/loader-module-core";
    import { track } from "@minimal-analytics/ga4";
    import { Meteor } from "meteor/meteor";
    import { Route, router } from "tinro";
    import Lazy from "/imports/ui/components/Lazy.svelte";
    import StoreSubscriber from "/imports/ui/components/Store/StoreSubscriber.svelte";


    let userId = Meteor.userId();
    $m: {
        userId = Meteor.userId();
    }

    router.subscribe((r) => {
        track("G-xxx");
    });
</script>

<Route>
    <Route path="/h/*" firstmatch>
        <Route path="/ai-list" breadcrumb="AI List">
            <Lazy component={import("./AppStore/AppStore.svelte")} />
        </Route>
    </Route>

    <Route path="/app/:appId" breadcrumb="App">
        <Lazy component={import("./App/AppPage.svelte")} />
    </Route>

    <Route path="/?loginToken=:loginToken&selector=:selector"></Route>

    <Route fallback redirect="/h/ai-list" />
</Route>

<StoreSubscriber />