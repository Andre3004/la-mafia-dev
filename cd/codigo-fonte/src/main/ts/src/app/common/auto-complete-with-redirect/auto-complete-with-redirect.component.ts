import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

interface listForRender<T>
{
    values: T[];
}

interface selectedForRender<T>
{
    selected: T;
}

@Component({
    selector: 'auto-complete-with-redirect',
    templateUrl: './auto-complete-with-redirect.component.html',
    styleUrls: ['./auto-complete-with-redirect.component.scss']
})
export class AutoCompleteWithRedirectComponent<T> implements OnInit
{
    /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/

    @Input()
    public title: string;

    @Input()
    public isDisable: boolean = false;

    @Input()
    public displayKey: string;

    @Input()
    public key: string = "codigo";

    @Input()
    public link: string = "usuario";

    @Input()
    public isDetail: boolean = false;

    @Input()
    public displayId: boolean = false;

    @Output()
    public onFilterChange: EventEmitter<string> = new EventEmitter();

    @Output()
    public onDelete: EventEmitter<T> = new EventEmitter();

    @Output()
    public onSelect: EventEmitter<T> = new EventEmitter();

    @Input()
    public itemSelected: selectedForRender<T> = { selected: {} as T };

    @Input()
    public list: listForRender<T> = { values: [] };

    @Input()
    public isNotRequired = false;

    @Input()
    public classes = "";
    /*-------------------------------------------------------------------
    *                           BEHAVIORs
    *-------------------------------------------------------------------*/
    /**
     *
     */
    constructor() { }

    /**
     *
     */
    ngOnInit()
    {
    }

    // 

    public displayFn(entity?: T)
    {
        if(this.displayId)
        {
            return entity && entity[this.key] ? entity[this.key] + " - " + entity[this.displayKey] : '';
        }
        else
        {
            return entity && entity[this.key] ? entity[this.displayKey] : '';
        }
    }

    public addRequired(){
        var elementInput = document.getElementsByClassName(this.classes)[0];
        var elementLabel = document.getElementsByClassName(this.classes+"1")[0] as any;
        var classes = ["ng-pristine", "ng-invalid", "mat-form-field-invalid", "mat-form-field-hide-placeholder", "ng-touched"]
        if((!this.itemSelected.selected) || (this.itemSelected.selected && !this.itemSelected.selected[this.key]) ){
            classes.forEach( c => {if(elementInput) elementInput.classList.add(c)})
            if(!this.isNotRequired && elementInput)
                elementLabel.style.color = "#e53935";
        }
        else{
            classes.forEach( c => {if(elementInput) elementInput.classList.remove(c)})
            if(!this.isNotRequired && elementInput)
                elementLabel.style.color = "rgba(0, 0, 0, 0.6)";
        }
    }


    public filterChange(filter: string)
    {
        this.onFilterChange.emit(filter);
    }

    public onSelectEntity(entity?: T)
    {
        this.itemSelected.selected = entity;
        this.onSelect.emit(entity);
        this.addRequired();
    }

    public onDeleteEntity(event)
    {
        this.itemSelected.selected = null;
        this.onDelete.emit();
        this.filterChange('');
        this.addRequired();
    }

    public redirect()
    {
        var win = window.open(`http://localhost:4200/#/${this.link}`, '_blank');
        win.focus();
    }
}
