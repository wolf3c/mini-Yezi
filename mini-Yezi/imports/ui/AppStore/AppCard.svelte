<script>
    import { router } from "tinro";
    import { t } from "/imports/ui/i18n/i18n";
    export let apps;
</script>

<div class="row apps-list" style="gap: 1rem">
    {#each apps || [] as app}
        <div
            class="s12 m6 l4 card hoverable"
            on:click={() => router.goto(`/app/${app._id}`)}
        >
            <div class="card-content center">
                <img class="circle" src={app?.portrait || ""} />
                <span class="card-title">{app?.name || ""}</span>
                <small class="center-align">
                    {app?.introduction || ""}
                </small>
                <!-- <a
                                        tabindex="0"
                                        class="btn outlined rounded icon-right"
                                        ><i class="material-symbols-outlined right"
                                            >chevron_forward</i
                                        >try it now</a
                                    > -->
            </div>
        </div>
    {/each}
    <div class="s12 m6 l4 card valign-wrapper">
        <div class="card-content center-align" style="width: 100%;">
            <p>{$t("More AIs are coming soon")}</p>
            <br />
            <p>{$t("Create your own AI")}</p>
            <a
                tabindex="0"
                class="btn filled rounded icon-right waves-effect waves-light"
                href="/ai-creator"
                ><i class="material-symbols-outlined">chevron_forward</i>{$t(
                    "Create AI",
                )}</a
            >
        </div>
    </div>
</div>

<style>
    .card {
        & .card-content {
            & img {
                max-width: 40%;
                min-width: 100px;
            }
            & .card-title {
                margin-top: 1rem;
                margin-bottom: 1rem;
            }
            & .btn {
                margin-top: 1rem;
            }
        }
    }
</style>
