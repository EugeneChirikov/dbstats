/**
 * Created by developer_09 on 4/20/2015.
 */
Ext.define("DBStats.view.login.LoginForm", {
    extend: 'Ext.window.Window',
    xtype: 'widget.login',

    requires: [
        'DBStats.controller.Login',
        'Ext.form.Panel'
    ],

    controller: 'login',
    autoShow: true,
    height: 170,
    width: 360,
    layout: {
        type: 'fit'
    },
    title: 'Connect to DB',
    closable: false,
    resizable: false,
    draggable: false,

    items: [{
        xtype: 'form',
        frame: false,
        bodyPadding: 15,
        reference: 'form',
        width:300,
        layout: 'anchor',
        defaults: {
            labelWidth: 60,
            anchor: '100%',
            labelAlign: 'left'
        },
        items: [
            {
                xtype: 'textfield',
                name: 'username',
                fieldLabel: 'Username',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: 'Password',
                allowBlank: false
            }
            //,
            //{
            //    xtype: 'displayfield',
            //    hideEmptyLabel: false,
            //    value: 'Enter any non-blank password'
            //}
        ]
        //,
        //buttons: [
        //    {
        //        text: 'Connect',
        //        formBind: true,
        //        listeners: {
        //            click: 'onLoginClick'
        //        }
        //    }
        //]
    }]
});