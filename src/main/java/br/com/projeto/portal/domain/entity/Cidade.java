package br.com.projeto.portal.domain.entity;

import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;
import br.com.projeto.portal.domain.entity.Estado;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.directwebremoting.annotations.DataTransferObject;



@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "Cidade")
public class Cidade extends AbstractEntity
{

    /*-------------------------------------------------------------------
     *				 		     ATTRIBUTES
     *-------------------------------------------------------------------*/

    private Integer codigo;

    private String cidade;

    private String ddd;

    private Estado estado;

    private Boolean situacao;

    private Integer estadoId;


    /*-------------------------------------------------------------------
     * 		 					CONSTRUCTORS
     *-------------------------------------------------------------------*/

    public Cidade(){}


    /*-------------------------------------------------------------------
     *							BEHAVIORS
     *-------------------------------------------------------------------*/

    
    public String toString()
    {
        return "Cidade{" +
                "codigo=" + codigo +
                ", cidade='" + cidade + '\'' +
                ", ddd='" + ddd + '\'' +
                ", codigo='" + estado.getCodigo() + '\'' +
                ", created=" + created +
                ", updated=" + updated +
                '}';
    }
}

