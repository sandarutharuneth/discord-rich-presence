"use strict";
(() => {
var exports = {};
exports.id = 432;
exports.ids = [432];
exports.modules = {

/***/ 147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ data)
});

;// CONCATENATED MODULE: external "discord-rpc"
const external_discord_rpc_namespaceObject = require("discord-rpc");
var external_discord_rpc_default = /*#__PURE__*/__webpack_require__.n(external_discord_rpc_namespaceObject);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
;// CONCATENATED MODULE: ./scripts/bot.js


function startBot(db) {
    const rpc = new (external_discord_rpc_default()).Client({
        transport: "ipc"
    });
    rpc.on("ready", ()=>{
        rpc.setActivity({
            details: db.title,
            state: db.s_title,
            startTimestamp: new Date(),
            largeImageKey: db.l_img_name,
            largeImageText: db.l_img_text,
            smallImageKey: db.s_img_name,
            smallImageText: db.s_img_text,
            partyMax: parseInt(db.p_max),
            partySize: 1,
            instance: true,
            buttons: [
                {
                    label: db.btn_1_lbl,
                    url: db.btn_1_link
                },
                {
                    label: db.btn_2_lbl,
                    url: db.btn_2_link
                }
            ]
        });
        console.log("Your RPC is Now Ready");
    });
    rpc.login({
        clientId: db.client_id
    });
}
;
function getdb() {
    external_fs_default().readFile("./datastore/db.json", "utf-8", (err, db)=>{
        if (err) {
            throw err;
        } else {
            let data = JSON.parse(db);
            startBot(data);
        }
    });
}
function start() {
    getdb();
}

;// CONCATENATED MODULE: ./pages/api/data.js
const { log  } = console;
const fs = __webpack_require__(147);

async function data(req, res) {
    if (req.method === "POST") {
        const reqPayload = req?.body;
        const resdata = JSON.stringify(reqPayload, null, 2);
        fs.writeFile("./datastore/db.json", resdata, (err)=>{
            if (err) throw err;
        });
        setTimeout(()=>{
            start();
        }, 5000);
        return res.status(200).json({});
    }
    return res.status(405).json({
        message: "Method not allowed"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(695));
module.exports = __webpack_exports__;

})();