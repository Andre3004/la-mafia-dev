package br.com.projeto.portal.domain.entity;

import java.time.LocalDate;
import java.util.Arrays;

import br.com.projeto.portal.domain.entity.franquia.Franquia;
import br.com.projeto.portal.domain.entity.pagamento.CondicaoPagamento;
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

    private Long codigo;

    private String cliente;

    private String cpf;

    private String sexo;

    private String telefone;

    private String celular;

    private String email;

    private String endereco;

    private String bairro;

    private Integer numero;

    private String complemento;

    private LocalDate dataNascimento;

    private Boolean situacao;

    private Boolean isEstrangeiro;

    private Cidade cidade;

    private Estado estado;

    private Pais pais;

    private Long franquiaId;

    private Long condicaoPagamentoId;

    //@Transient
    private CondicaoPagamento condicaoPagamento;

    //@Transient
    private Franquia franquia;

    //@Transient
    private Integer cidadeId;

    //@Transient
    private Integer estadoId;

    //@Transient
    private Integer paisId;




    /*-------------------------------------------------------------------
     * 		 					CONSTRUCTORS
     *-------------------------------------------------------------------*/

    public Cliente(){}


    /*-------------------------------------------------------------------
     *							BEHAVIORS
     *-------------------------------------------------------------------*/

    
    public String toString()
    {
        return "Cliente{" +
                "codigo=" + codigo +
                ", cliente='" + cliente + '\'' +
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
