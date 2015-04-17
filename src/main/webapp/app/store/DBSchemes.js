/**
 * Created by developer_09 on 4/17/2015.
 */
Ext.define('DBStats.store.DBSchemes', {
    extend:'Ext.data.Store',
    model:'DBStats.model.DBScheme',
    autoLoad:true,

    proxy:{
        type:'ajax',
        url:'services/dbstats/scheme/list.json',
        reader:{
            type:'json',
            root:'DBSchemeList'
        }
    }
});