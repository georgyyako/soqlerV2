import { LightningElement, api, wire, track  } from 'lwc';
//import getSObjects from '@salesforce/apex/soqler_Main.getSObjects';
import getSFields from '@salesforce/apex/soqler_Main.getSFields';

export default class SoqlerV2 extends LightningElement {
  
  @track finderObjLabel = 'test';
  @track finderObjArray = [];
  @track finderFieldArray = [];
  @track sObjValue;
/*
  connectedCallback() {
    getSObjects()
      .then(result => {
        const jsonArray = JSON.parse(result);
        for(let key in jsonArray) {
          this.finderObjArray.push({ value: key, label: jsonArray[key] });
      }
      })
      .catch(error => {
          console.error(JSON.stringify(error));
      });
  }
  
  */
  connectedCallback() {
    const data = this.getSObjects();
    for (let key in data) {
        this.finderObjArray.push({ value: key, label: data[key] });
    }

    console.log(this.finderObjArray);
  }
  getSObjects() {
      const data = { "one__c": "one", "two__c": "two" };
      return data;
  }
  /*
  handleObjValue(event){
    this.sObjValue = event.detail;
    if (this.sObjValue){
      getSFields()
      .then(result => {
        const jsonArray = JSON.parse(result);
        for(let key in jsonArray) {
          this.finderFieldArray.push({ value: key, label: jsonArray[key] });
      }
      })
      .catch(error => {
          console.error(JSON.stringify(error));
      });
    }
  }
  */
  handleObjValue(event){
    this.sObjValue = event.detail;
    const data = this.getSFields();
    for (let key in data) {
        this.finderFieldArray.push({ value: key, label: data[key] });
    }

    console.log(this.finderObjArray);
  }
  getSFields() {
    const data = { "Fieldone_c": "fieldOne", "fieldtwo__c": "fieldtwo", "fieldthree__c": "fieldthree", "fieldfour__c":"fieldfour" };
    return data;
}
}