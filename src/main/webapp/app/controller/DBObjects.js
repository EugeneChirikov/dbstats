/**
 * Created by developer_09 on 4/17/2015.
 */
Ext.define("DBStats.controller.DBObjects", {
    extend:'Ext.app.Controller',

    stores:['DBObjects'],
    models:['DBObject'],
    views:['dbobject.List'],

    init:function ()
    {
        console.log("Controller initialized DBObjects!");

        this.control({
            'objectslist':{
                itemdbclick:this.showObjectsList
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