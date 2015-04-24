
Ext.Loader.setConfig({enabled:true, disableCache:true});

Ext.application({
    name:'DBStats',
    appFolder:"app",
    autoCreateViewport:false,

    //models:['DBObject', 'DBScheme'],
    //stores:['DBObjects', 'DBSchemes'],
    //controllers:['DBObjects', 'DBSchemes', 'Main'],

    //views: [
    //    'DBStats.view.login.LoginPanel',
    //    'DBStats.view.login.LoginForm',
    //    'DBStats.view.Main'
    //],

    launch:function ()
    {
        console.log("App launch function called!");
        var supportsLocalStorage = Ext.supports.LocalStorage, isUserLoggedIn;
        if (!supportsLocalStorage) {
            Ext.Msg.alert('Your Browser Does Not Support Local Storage');
            return;
        }
        isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
        console.log(isUserLoggedIn ? "User is logged in" : "User is NOT logged in");

        //this.viewport =
        //isUserLoggedIn ? 'app-main' :
        //    Ext.widget('widget.login');

        //    Ext.create('DBStats.view.Main', {
        //    application:this
        //});

        var loginPanel = Ext.create('Ext.form.Panel', {
            title: 'Simple Form',
            bodyPadding: 5,
            width: 350,
            autoShow: false,

            // The form will submit an AJAX request to this URL when submitted
            //url: 'save-form.php',

            // Fields will be arranged vertically, stretched to full width
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },

            // The fields
            defaultType: 'textfield',
            items: [{
                fieldLabel: 'First Name',
                name: 'first',
                allowBlank: false
            },{
                fieldLabel: 'Last Name',
                name: 'last',
                allowBlank: false
            }],

            // Reset and Submit buttons
            buttons: [{
                text: 'Reset',
                handler: function() {
                    this.up('form').getForm().reset();
                }
            }, {
                text: 'Submit',
                formBind: true, //only enabled once the form is valid
                disabled: true,
                handler: function() {
                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                        form.submit({
                            success: function(form, action) {
                                Ext.Msg.alert('Success', action.result.msg);
                            },
                            failure: function(form, action) {
                                Ext.Msg.alert('Failed', action.result.msg);
                            }
                        });
                    }
                }
            }]
        });

        var childPanel1 = Ext.create('Ext.panel.Panel', {
            title: 'Child Panel 1',
            html: 'A Panel'
        });

        Ext.create('Ext.container.Viewport', {
            items: [ loginPanel ]
        });
    }
});