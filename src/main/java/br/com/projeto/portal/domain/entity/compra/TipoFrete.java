package br.com.projeto.portal.domain.entity.compra;

import org.directwebremoting.annotations.DataTransferObject;

@DataTransferObject(type = "enum")
public enum TipoFrete
{
	PAGO_PELO_DESTINATARIO,
	PAGO_PELO_FORNECEDOR;
}
