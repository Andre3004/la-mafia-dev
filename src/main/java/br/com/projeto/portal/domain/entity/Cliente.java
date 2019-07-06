package br.com.projeto.portal.domain.entity;

import java.util.Arrays;

import br.com.projeto.portal.infrastructure.AbstractEntity.AbstractEntity;
import org.directwebremoting.annotations.DataTransferObject;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.directwebremoting.io.FileTransfer;

/**
 *
 */
@Data
@EqualsAndHashCode
@DataTransferObject(javascript = "Cliente")
public class Cliente extends AbstractEntity
{

    /*-------------------------------------------------------------------
     *				 		     ATTRIBUTES
     *-------------------------------------------------------------------*/

    private int idCliente;

    private String cliente;

    private String apelido;

    private String cpf;

    private String sexo;

    private String telefone;

    private String celular;

    private String email;

    private String endereco;

    private Boolean situacao;

    private Cidade cidade;

    private Estado estado;

    private Pais pais;

    //@Transient
    private int cidadeId;

    //@Transient
    private int estadoId;

    //@Transient
    private int paisId;




    /*-------------------------------------------------------------------
     * 		 					CONSTRUCTORS
     *-------------------------------------------------------------------*/

    public Cliente(){}


    /*-------------------------------------------------------------------
     *							BEHAVIORS
     *-------------------------------------------------------------------*/

    @Override
    public String toString()
    {
        return "Cliente{" +
                "idCliente=" + idCliente +
                ", cliente='" + cliente + '\'' +
                ", apelido='" + apelido + '\'' +
                ", cpf='" + cpf + '\'' +
                ", sexo='" + sexo + '\'' +
                ", telefone='" + telefone + '\'' +
                ", celular=" + celular +
                ", email='" + email + '\'' +
                ", cidade=" + cidade +
                ", estado='" + estado + '\'' +
                ", pais='" + pais + '\'' +
                ", created=" + created +
                ", updated=" + updated +
                '}';
    }
}
