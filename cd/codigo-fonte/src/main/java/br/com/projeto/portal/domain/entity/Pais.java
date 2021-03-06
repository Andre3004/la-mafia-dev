package br.com.projeto.portal.domain.entity;

import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.directwebremoting.annotations.DataTransferObject;



@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "Pais")
public class Pais extends AbstractEntity
{

    /*-------------------------------------------------------------------
     *				 		     ATTRIBUTES
     *-------------------------------------------------------------------*/

    private Integer codigo;

    private String pais;

    private String sigla;

    private String ddi;

    private Boolean situacao;


    /*-------------------------------------------------------------------
     * 		 					CONSTRUCTORS
     *-------------------------------------------------------------------*/

    public Pais(){}


    /*-------------------------------------------------------------------
     *							BEHAVIORS
     *-------------------------------------------------------------------*/

    
    public String toString()
    {
        return "Pais{" +
                "codigo=" + codigo +
                ", pais='" + pais + '\'' +
                ", sigla='" + sigla + '\'' +
                ", ddi='" + ddi + '\'' +
                ", created=" + created +
                ", updated=" + updated +
                '}';
    }
}

