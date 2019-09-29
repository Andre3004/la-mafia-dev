package br.com.projeto.portal.domain.entity;

import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;
import br.com.projeto.portal.domain.entity.Pais;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.directwebremoting.annotations.DataTransferObject;



@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "Estado")
public class Estado extends AbstractEntity
{

    /*-------------------------------------------------------------------
     *				 		     ATTRIBUTES
     *-------------------------------------------------------------------*/

    private Integer codigo;

    private String estado;

    private String uf;

    private Pais pais;

    private Boolean situacao;

    //@Transient
    private Integer paisId;


    /*-------------------------------------------------------------------
     * 		 					CONSTRUCTORS
     *-------------------------------------------------------------------*/

    public Estado(){}


    /*-------------------------------------------------------------------
     *							BEHAVIORS
     *-------------------------------------------------------------------*/

    
    public String toString()
    {
        return "Estado{" +
                "codigo=" + codigo +
                ", estado='" + estado + '\'' +
                ", uf='" + uf + '\'' +
                ", codigo='" + pais.getCodigo() + '\'' +
                ", created=" + created +
                ", updated=" + updated +
                '}';
    }
}

