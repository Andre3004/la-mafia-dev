import { ChangeDetectorRef, Component, OnInit, ViewChild, ElementRef, Renderer, AfterViewInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router, ActivationStart } from '@angular/router';
import { TdLoadingService } from '@covalent/core';
import { OpenSnackBarService } from '../open-snackbar/open-snackbar.service';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';

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
    {title: "Ambientes", icon: 'event_seat', router: 'ambiente'},
    {title: "Cidade", icon: 'location_on', router: 'cidade', onlyFranquiador: true},
    {title: "Clientes", icon: 'people', router: 'cliente'},
    {title: "Compra", icon: 'shopping_cart', router: 'compra'},
    {title: "Condições de pagamentos", icon: 'attach_money', router: 'condicao-pagamento'},
    {title: "Contas á pagar", icon: 'work', router: 'contas-a-pagar'},
    {title: "Contas á receber", icon: 'card_giftcard', router: 'contas-a-receber'},
    {title: "Estado", icon: 'location_on', router: 'estado', onlyFranquiador: true},
    {title: "Formas de pagamentos", icon: 'payment', router: 'forma-pagamento'},
    {title: "Fornecedores", icon: 'people_outline', router: 'fornecedor', ambos: true},
    {title: "Franquias", icon: 'business', router: 'franquia', onlyFranquiador: true},
    {title: "Grupo de produtos", icon: 'style', router: 'grupo-produto', onlyFranquiador: true},
    {title: "Mesas", icon: 'local_bar', router: 'mesa'},
    {title: "País", icon: 'location_on', router: 'pais', onlyFranquiador: true},
    {title: "Produtos", icon: 'assignment_turned_in', router: 'produto', ambos: true},
    {title: "Usuários", icon: 'account_circle', router: 'usuario', onlyFranquiador: true},
    {title: "Venda", icon: 'gavel', router: 'venda'},
  ]

  
  public isFranquiado = false;

  
  /*-------------------------------------------------------------------
  *                           CONSTRUCTOR
  *-------------------------------------------------------------------*/
  /**
   * 
   * @param pessoaService 
   */
  constructor(
    private autenticacaoService: AutenticacaoService,
    public activatedRoute: ActivatedRoute,
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
    this.autenticacaoService.usuarioAutenticado().then( result => {
      this.isFranquiado = this.autenticacaoService.isFranquiado;
    });
  }

  logout(){
    window.location.href = '/logout';
  }

  /**
   * 
   */
  ngOnDestroy()
  {
   
  }

 
}
