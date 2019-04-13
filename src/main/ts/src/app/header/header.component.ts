import { ChangeDetectorRef, Component, OnInit, ViewChild, ElementRef, Renderer, AfterViewInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { TdLoadingService } from '@covalent/core';
import { OpenSnackBarService } from '../open-snackbar/open-snackbar.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit
{
  /*-------------------------------------------------------------------
  *                           ATRIBUTES
  *-------------------------------------------------------------------*/
 
  public menus : any[] = [
    {title: "Dashboard", icon: 'dashboard', router: 'dashboard'},
    {title: "Usuários", icon: 'account_circle', router: 'usuario'},
  ]

  /*-------------------------------------------------------------------
  *                           CONSTRUCTOR
  *-------------------------------------------------------------------*/
  /**
   * 
   * @param pessoaService 
   */
  constructor(public activatedRoute: ActivatedRoute,
    public detectionRef: ChangeDetectorRef,)
  {
    

  }
  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/
  ngOnInit()
  {


  }


  /**
   * 
   */
  ngOnDestroy()
  {
   
  }

 
}
