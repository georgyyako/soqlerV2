import { LightningElement, api, track } from 'lwc';

export default class ExpressionBuilder extends LightningElement {
    @api expressionFieldsArray;
    @track expressionArray = [];

    connectedCallback() {
        this.expressionArray.push({ value: 'one', label: 'one'});
    }

    handleObjValue() {
        
    }

    changeField() {

    }

    addCondition() {
        this.expressionArray.push({ value: 'new', label: 'new2'});
    }

    deleteCondition(event) {
        console.log('deleteCondition');
        const selectedItem = event.target.dataset.id;
        console.log(selectedItem);
        
        // Найдем индекс элемента, который нужно удалить
        const index = this.expressionArray.findIndex(item => item.value === selectedItem);
        console.log(index);
        // Если элемент найден, удалим его из массива
        if (index !== -1) {
            this.expressionArray.splice(index, 1);
        }
        console.log([...this.expressionArray.values()]);
    }
}