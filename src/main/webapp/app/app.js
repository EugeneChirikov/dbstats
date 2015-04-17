Ext.Loader.setConfig({enabled:true, disableCache:true});

Ext.application({
    name:'DBStats',
    appFolder:"app",
    autoCreateViewport:false,

    models:['DBObject', 'DBScheme'],
    stores:['DBObjects', 'DBSchemes'],
    controllers:['DBObjects', 'DBSchemes'],

    launch:function ()
    {
        console.log("App launch function called!");
        this.viewport = Ext.create('DBStats.view.Main', {
            application:this
        });
    }
});