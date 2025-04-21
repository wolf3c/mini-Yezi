import { Meteor } from 'meteor/meteor';
// import { WebApp } from 'meteor/webapp';
// import { AccountsCommon } from "meteor/accounts-base";
// import * as ga from '@beyonk/svelte-google-analytics/src/functions';

import '../imports/api/Account'
import '../imports/api/openai'
import '../imports/api/messages'
// import "/imports/api/Coins.js"
// import "/imports/api/commands"
// import '/imports/api/RSS'
import '/imports/api/invites'
import '/imports/api/logs'
// import '/imports/api/news'
import './account_passwordless'
import './email'
import './scheduleTasks'
// import '/imports/api/subjects'
// import '/imports/api/search'
// import '/imports/api/fetchNews'
// import '/imports/api/comments'
// import '/imports/api/topics'
// import '/imports/api/financial-reports'
// import '/imports/api/methods/homePageMethods'
// import '/imports/api/methods/fetcher'
import '/imports/api/apps'
import '/imports/api/knowledge_base'
import '/imports/api/tools'
import '/imports/api/context_functions'
import '/imports/api/app_user_data'
import '/imports/api/methods/manager'
// import '/imports/api/stock/StockDailyPrice'
// import '/imports/api/stock/TickersOverview'
// import '/imports/api/stock/StockAdvices';


Meteor.startup(() => {
    // code to run on server at startup
    if (Meteor.isProduction) {
        // console.log = function () { };

        // cdn settings
        // const cdnUrl = Meteor.settings.public.AWS.cdnUrl;
        // WebAppInternals.setBundledJsCssUrlRewriteHook((url) => {
        //     return `${cdnUrl}${url}?_g_app_v_=${process.env.GALAXY_APP_VERSION_ID}`;
        // });
        // // WebAppInternals.setBundledJsCssPrefix(cdnUrl)
        // WebApp.rawConnectHandlers.use(function (req, res, next) {
        //     // 让字体、JSON 等所有的请求都支持跨域
        //     if (req._parsedUrl.pathname.match(/\.(ttf|ttc|otf|eot|woff|woff2|font\.css|css|json)$/)) {
        //         res.setHeader('Access-Control-Allow-Origin', '*');
        //     }

        //     next();
        // });

        // try {
        //     const accountsCommon = new AccountsCommon({});
        //     accountsCommon.onLogin(
        //         async () => {
        //             await Meteor.callAsync("sendSlackMessage", "用户登录成功： " + accountsCommon.userId());
        //         }
        //     );
        //     accountsCommon.onLoginFailure(
        //         async () => {
        //             await Meteor.callAsync("sendSlackMessage", "用户登录失败： " + accountsCommon.userId());
        //         }
        //     );
        //     accountsCommon.onLogout(
        //         async () => {
        //             await Meteor.callAsync("sendSlackMessage", "用户退出登录： " + accountsCommon.userId());
        //         }
        //     );
        // } catch (error) {
        //     console.log(error);
        //     throw error;
        // }
    }

});