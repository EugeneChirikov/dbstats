/**
 * Created by developer_09 on 4/20/2015.
 */
Ext.define('DBStats.controller.Main', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    views: ['Main'],

    onClickButton: function () {

        // Remove the localStorage key/value
        localStorage.removeItem("isUserLoggedIn");

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.widget('login');
    }
});