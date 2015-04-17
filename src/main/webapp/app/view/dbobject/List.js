/**
 * Created by developer_09 on 4/17/2015.
 */
Ext.define('DBStats.view.dbobject.List', {
    extend:'Ext.grid.Panel',
    alias:'widget.objectslist',
    title:'All object in a scheme', //TODO add scheme name here
    store:'DBObjects',

    initComponent:function ()
    {
        console.log("{DBStats.view.dbobject.List} init dbobject.List view");
        this.columns = [
            {header:'Name', dataIndex:'name', flex:1},
            {header:'Size', dataIndex:'size', flex:1}
        ];
        this.callParent(arguments);
    }
});