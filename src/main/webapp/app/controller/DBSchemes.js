/**
 * Created by developer_09 on 4/17/2015.
 */
Ext.define("DBStats.controller.DBSchemes", {
    extend:'Ext.app.Controller',

    stores:['DBSchemes'],
    models:['DBScheme'],
    views:['dbscheme.List'],

    init:function ()
    {
        console.log("Controller initialized DBSchemes!");

        this.control({
            'schemeslist':{
                itemdblclick:this.showObjectsList
            }
            //'userlist button[action=sync]':{
            //    click:this.syncUser
            //},
            //'useredit button[action=save]':{
            //    click:this.updateUser
            //}
        });
    },

    showObjectsList:function(button) {
        console.log("Show objects list!");
    }

    //syncUser:function (button)
    //{
    //    console.log('{MyApp.controller.Users} clicked the SYNC button');
    //
    //    this.getUsersStore().sync();
    //}
});