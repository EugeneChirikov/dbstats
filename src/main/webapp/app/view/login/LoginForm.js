Ext.define("DBStats.view.login.LoginForm",{
    extend: 'Ext.window.Window',
    xtype: 'widget.login',

    requires: [
        'DBStats.controller.Login',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Connect to DB',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Login',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});