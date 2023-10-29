public with sharing class  soqler_Main {
	
    @AuraEnabled(cacheable=true)
    public static String getSObjects() {
        Map<String, String> objectMap = new Map<String, String>();
        for (Schema.SObjectType sObjectType : Schema.getGlobalDescribe().values()) {
            Schema.DescribeSObjectResult objResult = sObjectType.getDescribe();
            objectMap.put(objResult.getName(), objResult.getLabel());
        }
        System.debug(JSON.serialize(objectMap));
        return JSON.serialize(objectMap);
    }

    @AuraEnabled(cacheable=true)
    public static String getSFields(String objName) {
        if (objName == null){
            objName = 'Account';
        }
        Map <String,Schema.SObjectType> gd = Schema.getGlobalDescribe();
        Schema.SObjectType sobjType = gd.get(objName);
        Schema.DescribeSObjectResult r = sobjType.getDescribe();
        Map<String, Schema.SObjectField> MapofField = r.fields.getMap();
        Map<String, String> fieldsMap = new Map<String, String>();
        for(String fieldName : MapofField.keySet()) 
        {
            Schema.SObjectField field = MapofField.get(fieldName);
            Schema.DescribeFieldResult F = field.getDescribe();
            fieldsMap.put(F.getName(), F.getLabel());
        }
        System.debug(JSON.serialize(fieldsMap));
        return JSON.serialize(fieldsMap);
    }
    /*
    @AuraEnabled(cacheable=true)
    public static Map<Map<String, String>, Map<String, String>> getSObjects() {
        Map<Map<String, String>, Map<String, String>> sObjectsMap = new Map<Map<String, String>, Map<String, String>>();
        for ( Schema.SObjectType o : Schema.getGlobalDescribe().values() )
        {
            Map<String, String> objectMap = new Map<String, String>();
            Map<String, String> fieldMap = new Map<String, String>();
            
            Schema.DescribeSObjectResult objResult = o.getDescribe();
            
            Map<String, SObjectField> fieldsMap = objResult.fields.getMap();
            objectMap.put(objResult.getName(), objResult.getLabel());
            
            for (String fieldName : fieldsMap.keySet()) {
                SObjectField field = fieldsMap.get(fieldName);
                DescribeFieldResult fieldDescribe = field.getDescribe();
                
                String apiName = fieldDescribe.getName();
                String label = fieldDescribe.getLabel();
                fieldMap.put(apiName, label);
            }
            
            sObjectsMap.put(objectMap, fieldMap);
        }
        System.debug(JSON.Serialize(sObjectsMap));
       
        return sObjectsMap;
    }
	*/

}