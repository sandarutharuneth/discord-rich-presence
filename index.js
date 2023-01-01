const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport: 'ipc'
});

rpc.on('ready', () => {
    rpc.setActivity({
        details: 'Call Of Duty Mobile',
        state: 'Battle Royal',
        startTimestamp: new Date(),
        largeImageKey: 'large_Image',
        largeImageText: 'Call Of Duty',
        smallImageKey: 'small_Image',
        smallImageText: 'Activision',
        partyId: 'randomparty',
        partyMax: 8,
        partySize: 1,        
        joinSecret: 'net',
        instance: true,
        buttons: [{
            label: 'Button 1',
            url: 'https://youtube.com/rickroll'
        }, {
            label: 'Button 2',
            url: 'https://mywebsite.com'
        }]
    });
    console.log('Your RPC is Running');
})

rpc.login(
    {
        clientId: '8563535768137802' // Put your rpc client ID here
    }
)
