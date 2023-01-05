const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport: 'ipc'
});

rpc.on('ready', () => {
    rpc.setActivity({
        details: 'Call Of Duty Mobile', //Your activity Title here
        state: 'Battle Royal', //Your secondary activity Title here
        startTimestamp: new Date(),
        largeImageKey: 'large',//Large image name goes here
        largeImageText: 'Call Of Duty',//Large image hover Text goes here
        smallImageKey: 'small',//small image name goes here
        smallImageText: 'Activision',//Small image hove Text goes here
        partyId: 'randomparty',//Name this whatever you want
        partyMax: 8,//Adjust party max size
        partySize: 1,//Adjust current party members size        
        joinSecret: 'net',//dont change this unless if you know what you're doing
        instance: true,
        buttons: [{
            label: 'Button 1',//Your first button Name goes here
            url: 'https://youtube.com/rickroll'//Your first button Link goes here
        }, {
            label: 'Button 2',//Your second button Name goes here
            url: 'https://mywebsite.com'//Your second button Link goes here
        }]
    });
    console.log('Your RPC is Running');
})

rpc.login(
    {
        clientId: '1060448522148786237' // Put your rpc client ID here
    }
)


