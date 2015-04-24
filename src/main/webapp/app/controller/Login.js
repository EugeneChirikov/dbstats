/**
 * Created by developer_09 on 4/20/2015.
 */
Ext.define('DBStats.controller.Login', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function(){

        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        localStorage.setItem("isUserLoggedIn", true);

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.widget('app-main');
    }
});