import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService
{

  constructor() { }

  /** PAGINATION SERVICE */
  /**
 * Cria um pageRequest com as informações passadas
 * @param sortProperty Atributo que irá ordenar a grid por padrão
 * @param sortDirection Ordem por ASC ou DESC
 * @param size Quantidade de dados exibidos na tela (Ex: 5, 10, 15, 20, etc.)
 */
  public pageRequest(sortProperty: string, sortDirection: string, size: number = 5): any
  {
    let pageRequest = {
      content: [],
      totalPages: 0,
      pageable: {
        page: 0,
        size: size, // Ex: 5, 10, 15, 20, etc.
        sort: {
          orders: [{
            direction: sortDirection, // Ex: ASC
            property: sortProperty, // Ex: prazoLimite
            nullHandlingHint: "NATIVE"
          }]
        }
      }
    };

    return pageRequest;
  }

  /**
   * Configura o objeto de sort
   * @param sortEvent
   */
  public sort(sortEvent): any
  {
    /*this.model.pageRequest.pageable.sort*/
    let sort = {
      orders: [{
        direction: sortEvent.order.toString() == 'ASC' ? 'ASC' : 'DESC',
        property: sortEvent.name,
        nullHandlingHint: "NATIVE"
      }]
    };

    return sort;
  }

  /**
   *
   * @param result
   * @param pageRequest
   */
  public fixPageRequest(result, pageRequest): any
  {
    let pages = Math.ceil(result.totalElements / result.size);

    let fixedPageRequest = {
      content: result.content ? result.content : result,
      totalElements: result.totalElements,
      numberOfElements: result.numberOfElements,
      totalPages: pages,
      pageable: {
        page: result.number,
        size: result.size,
        sort: {
          orders: [{
            direction: pageRequest.pageable.sort.orders[0].direction,
            property: pageRequest.pageable.sort.orders[0].property,
            nullHandlingHint: "NATIVE"
          }]
        }
      }
    };

    return fixedPageRequest;
  }

}
