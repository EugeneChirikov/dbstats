
Ext.Loader.setConfig({enabled:true, disableCache:true});

Ext.application({
    name:'DBStats',
    appFolder:"app",

    models:['DBObject', 'DBScheme'],
    stores:['DBObjects', 'DBSchemes'],
    controllers:['DBObjects', 'DBSchemes'],

    views: [
        'DBStats.view.login.LoginForm',
        'DBStats.view.Main'
    ],

    launch:function ()
    {
        console.log("App launch function called!");
        var supportsLocalStorage = Ext.supports.LocalStorage, isUserLoggedIn;
        if (!supportsLocalStorage) {
            Ext.Msg.alert('Your Browser Does Not Support Local Storage');
            return;
        }
        isUserLoggedIn = false; // localStorage.getItem("isUserLoggedIn");
        console.log(isUserLoggedIn ? "User is logged in" : "User is NOT logged in");

        Ext.widget(isUserLoggedIn ? 'app-main' : 'widget.login');
    }
});