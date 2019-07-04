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

    private int idCidade;

    private String cidade;

    private String ddd;

    private Estado estado;

    private Boolean situacao;


    /*-------------------------------------------------------------------
     * 		 					CONSTRUCTORS
     *-------------------------------------------------------------------*/

    public Cidade(){}


    /*-------------------------------------------------------------------
     *							BEHAVIORS
     *-------------------------------------------------------------------*/

    @Override
    public String toString()
    {
        return "Cidade{" +
                "idCidade=" + idCidade +
                ", cidade='" + cidade + '\'' +
                ", ddd='" + ddd + '\'' +
                ", idEstado='" + estado.getIdEstado() + '\'' +
                ", created=" + created +
                ", updated=" + updated +
                '}';
    }
}

