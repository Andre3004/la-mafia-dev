package br.com.projeto.portal.domain.entity;

import java.util.Arrays;

import br.com.projeto.portal.domain.entity.pagamento.CondicaoPagamento;
import br.com.projeto.portal.domain.entity.pagamento.FormaPagamento;
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
@DataTransferObject(javascript = "Fornecedor")
public class Fornecedor extends AbstractEntity
{

    /*-------------------------------------------------------------------
     *				 		     ATTRIBUTES
     *-------------------------------------------------------------------*/

    private int idFornecedor;

    private String razaoSocial;

    private String cnpj;

    private String telefone;

    private String celular;

    private String endereco;

    private String numero;

    private String bairro;

    private String email;

    private String inscricaoEstadual;

    private String cep;

    private Boolean situacao;

    private Cidade cidade;

    private Estado estado;

    private Pais pais;

    private CondicaoPagamento condicaoPagamento;

    //@Transient
    private int cidadeId;

    //@Transient
    private int estadoId;

    //@Transient
    private int paisId;

    //@Transient
    private int condicaoPagamentoId;


    /*-------------------------------------------------------------------
     * 		 					CONSTRUCTORS
     *-------------------------------------------------------------------*/

    public Fornecedor(){}


    /*-------------------------------------------------------------------
     *							BEHAVIORS
     *-------------------------------------------------------------------*/

    @Override
    public String toString()
    {
        return "Fornecedor{" +
                "idFornecedor=" + idFornecedor +
                ", razaoSocial='" + razaoSocial + '\'' +
                ", cnpj='" + cnpj + '\'' +

                ", telefone='" + telefone + '\'' +
                ", celular=" + celular +
                ", endereco='" + endereco + '\'' +
                ", numero='" + numero + '\'' +
                ", bairro='" + bairro + '\'' +
                ", email='" + email + '\'' +
                ", cidade=" + cidade +
                ", estado='" + estado + '\'' +
                ", pais='" + pais + '\'' +
                ", cep='" + cep + '\'' +

                ", created=" + created +
                ", updated=" + updated +
                '}';
    }
}
