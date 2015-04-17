/**
 * Created by developer_09 on 4/17/2015.
 */
Ext.define('DBStats.view.dbscheme.List', {
    extend:'Ext.grid.Panel',
    alias:'widget.schemeslist',
    title:'All schemes in DB',
    store:'DBSchemes',
    selType:'rowmodel',
    maxWidth:400,
    maxHeight:600,

    initComponent:function ()
    {
        console.log("{DBStats.view.dbscheme.List} init dbscheme.List view");
        this.columns = [
            {header:'Name', dataIndex:'name', flex:1},
            {header:'Size', dataIndex:'size', flex:1}
        ];
        this.callParent(arguments);
    }
});