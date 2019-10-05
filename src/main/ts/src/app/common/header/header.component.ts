import { ChangeDetectorRef, Component, OnInit, ViewChild, ElementRef, Renderer, AfterViewInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router, ActivationStart } from '@angular/router';
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
 
  public title = "";

  public menus : any[] = [
    {title: "Usuários", icon: 'account_circle', router: 'usuario'},
    {title: "Compra", icon: 'shopping_cart', router: 'compra'},
    {title: "Contas á pagar", icon: 'work', router: 'contas-a-pagar'},
    {title: "Franquias", icon: 'business', router: 'franquia'},
    {title: "Grupo de produtos", icon: 'style', router: 'grupo-produto'},
    {title: "Mesas", icon: 'local_bar', router: 'mesa'},
    {title: "Produtos", icon: 'assignment_turned_in', router: 'produto'},
    {title: "Ambientes", icon: 'event_seat', router: 'ambiente'},
    {title: "Formas de pagamentos", icon: 'payment', router: 'forma-pagamento'},
    {title: "Condições de pagamentos", icon: 'attach_money', router: 'condicao-pagamento'},
    {title: "Clientes", icon: 'people', router: 'cliente'},
    {title: "Fornecedores", icon: 'people_outline', router: 'fornecedor'},
    {title: "Cidade", icon: 'location_on', router: 'cidade'},
    {title: "Estado", icon: 'location_on', router: 'estado'},
    {title: "País", icon: 'location_on', router: 'pais'}
  ]

  /*-------------------------------------------------------------------
  *                           CONSTRUCTOR
  *-------------------------------------------------------------------*/
  /**
   * 
   * @param pessoaService 
   */
  constructor(public activatedRoute: ActivatedRoute,
    public detectionRef: ChangeDetectorRef,
    public router: Router)
  {
    router.events.subscribe( e => {
      if(e instanceof ActivationStart)
      {
        this.title = e.snapshot.data.title;
      }
    })

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
