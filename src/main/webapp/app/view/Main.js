Ext.define('DBStats.view.Main', {
    extend:'Ext.container.Viewport',
    layout:'fit',

    requires:[
        'DBStats.view.dbscheme.List'
    ],

    initComponent:function ()
    {
        this.items = {items: [
            {
                xtype: 'container'
                , html:'<div>Double-Click to open objects list</div>'
                , style: {
                    padding: '10px',
                    font: '1.2em'
                }
            },
            {
                xtype:'schemeslist',
                style: {
                    padding: '10px'
                }
            }
        ]};

        this.callParent();
    }
});