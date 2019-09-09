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


    public filterChange(filter: string)
    {
        this.onFilterChange.emit(filter);
    }

    public onSelectEntity(entity?: T)
    {
        this.itemSelected.selected = entity;
        this.onSelect.emit(entity);
    }

    public onDeleteEntity(event)
    {
        this.itemSelected.selected = null;
        this.onDelete.emit();
        this.filterChange('');
    }

    public redirect()
    {
        var win = window.open(`http://localhost:4200/#/${this.link}`, '_blank');
        win.focus();
    }
}
