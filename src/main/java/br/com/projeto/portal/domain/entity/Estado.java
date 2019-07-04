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

    private int idEstado;

    private String estado;

    private String uf;

    private Pais pais;

    private Boolean situacao;


    /*-------------------------------------------------------------------
     * 		 					CONSTRUCTORS
     *-------------------------------------------------------------------*/

    public Estado(){}


    /*-------------------------------------------------------------------
     *							BEHAVIORS
     *-------------------------------------------------------------------*/

    @Override
    public String toString()
    {
        return "Estado{" +
                "idEstado=" + idEstado +
                ", estado='" + estado + '\'' +
                ", uf='" + uf + '\'' +
                ", idPais='" + pais.getIdPais() + '\'' +
                ", created=" + created +
                ", updated=" + updated +
                '}';
    }
}
