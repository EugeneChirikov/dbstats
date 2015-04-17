/**
 * Created by developer_09 on 4/17/2015.
 */
Ext.define('DBStats.store.DBObjects', {
    extend:'Ext.data.Store',
    model:'DBStats.model.DBObject',
    autoLoad:true,

    proxy:{
        type:'ajax',
        url:'services/dbstats/object/list.json',
        reader:{
            type:'json',
            root:'DBObjectList'
        }
    }
});