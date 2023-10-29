import { LightningElement, api, wire, track } from 'lwc';
//import getValuesFromTable from '@salesforce/apex/soqler_Main.getObjects';



export default class textFinder extends LightningElement {
    @api pickFinderLabel;
    @api pickFinderArray;
    
    picklistOrdered;
    searchResults;
    selectedSearchResult;
  
    get selectedValue() {
      return this.selectedSearchResult ? this.selectedSearchResult.label : null;
    }

    connectedCallback() {
      this.picklistOrdered = this.pickFinderArray;
      console.log('textFinder')
    }

    search(event) {
      const input = event.detail.value.toLowerCase();
      const result = this.picklistOrdered.filter((picklistOption) =>
        picklistOption.label.toLowerCase().includes(input)
      );
      this.searchResults = result;
    }
  
    selectSearchResult(event) {
      console.log('selectSearchResult')
      const selectedValue = event.currentTarget.dataset.value;
      const selectedLabel = event.currentTarget.dataset.label;

      console.log('select value : '+selectedValue)
      console.log('select value : '+selectedLabel)
      this.selectedSearchResult = this.picklistOrdered.find(
        (picklistOption) => picklistOption.value === selectedValue
      );
      this.clearSearchResults();
      this.returnSearchResult();
    }

    returnSearchResult(){
      const searchEvent = new CustomEvent("getsearchvalue", {
        detail: this.selectedValue
      });
      this.dispatchEvent(searchEvent);
    }
  
    clearSearchResults() {
      this.searchResults = null;
    }
  
    showPicklistOptions() {
      if (!this.searchResults) {
        this.searchResults = this.picklistOrdered;
      }
    }
  }