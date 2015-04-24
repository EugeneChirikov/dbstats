Ext.define('DBStats.view.Main', {
    extend:'Ext.container.Viewport',
    layout:'fit',
    xtype: 'app-main',

    requires:[
        'DBStats.view.dbscheme.List',
        'DBStats.controller.Main'
    ],

    initComponent:function ()
    {
        this.items = {items: [
            {
                xtype: 'panel',
                bind: {
                    title: '{name}'
                },
                region: 'west',
                html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
                width: 250,
                split: true,
                tbar: [{
                    text: 'Button',
                    handler: 'onClickButton'
                }]
            },
            {
                xtype: 'component',
                html:'<div>Double-Click to open objects list</div>',
                style: {
                    padding: '10px',
                    font: '1.2em'
                }
            },
            {
                region: 'center',
                xtype:'schemeslist',
                style: {
                    padding: '10px'
                }
            }
        ]};

        this.callParent();
    }
});