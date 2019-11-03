package br.com.projeto.portal.domain.service;

import java.time.LocalDateTime;
import java.util.List;

import br.com.projeto.portal.application.security.ContextHolder;
import br.com.projeto.portal.domain.dao.EstoqueDAO;
import br.com.projeto.portal.domain.dao.ProdutoDAO;
import br.com.projeto.portal.domain.entity.produto.Estoque;
import br.com.projeto.portal.domain.entity.produto.Produto;
import br.com.projeto.portal.domain.entity.usuario.PerfilUsuario;
import br.com.projeto.portal.infrastructure.arquivo.Arquivo;
import br.com.projeto.portal.infrastructure.arquivo.ArquivoService;
import br.com.projeto.portal.infrastructure.arquivo.IArquivoRepository;
import org.directwebremoting.annotations.RemoteProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RemoteProxy
@Transactional
public class ProdutoService
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/

	@Autowired
	private ProdutoDAO produtoDao;

	@Autowired
	private EstoqueDAO estoqueDAO;

	@Autowired
	private IArquivoRepository arquivoRepository;

	@Autowired
	private ArquivoService arquivoService;

	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/

	
	public Page<Produto> listProdutosByFilters( String nome, Long codigo, PageRequest pageable )
	{
		return this.produtoDao.listProdutosByFilters( nome, codigo, pageable );
	}

	public Page<Produto> listProdutosByFiltersToAssociation( String nome, Long codigo, PageRequest pageable )
	{
		return this.produtoDao.listProdutosByFiltersToAssociation( nome, codigo, pageable );
	}



	public Produto findProdutoById( long id )
	{
		Produto produto = this.produtoDao.findProdutoById( id );
		if ( produto.getAnexoUuid() != null )
		{
			produto.setAnexo( this.arquivoService.downloadArquivoByUuid( produto.getAnexoUuid() ) );
		}

		return produto;
	}

	
	public void insertProduto( Produto produto )
	{
		if(produto.getAnexo() != null)
			this.insertArquivo( produto );

		produto.setSituacao( true );

		Long idProduto = this.produtoDao.insertProduto( produto );

		produto.setCodigo( idProduto );
		produto.getCurrentEstoque().setProduto( produto );
		produto.getCurrentEstoque().setFranquia( ContextHolder.getAuthenticatedUser().getFranquia() );

		if(ContextHolder.getAuthenticatedUser().getPerfilUsuario().equals( PerfilUsuario.FRANQUIADO ))
			if(produto.getCurrentEstoque().getCreated() == null)
			{
				this.estoqueDAO.insertEstoque( produto.getCurrentEstoque() );
			}
			else
			{
				this.estoqueDAO.updateEstoque( produto.getCurrentEstoque() );
			}
	}

	
	public void updateProduto( Produto produto )
	{
		if(produto.getAnexoUuid() == null && produto.getAnexo() != null)
			this.insertArquivo( produto );

		if(ContextHolder.getAuthenticatedUser().getPerfilUsuario().equals( PerfilUsuario.FRANQUIADO ))
			if(produto.getCurrentEstoque().getCreated() == null)
				this.estoqueDAO.insertEstoque( produto.getCurrentEstoque() );
			else
				this.estoqueDAO.updateEstoque( produto.getCurrentEstoque() );

		produto.setUpdated( LocalDateTime.now() );

		this.produtoDao.updateProduto( produto );
	}

	
	public void updateSituacaoProduto( long id, boolean situacao )
	{
		this.produtoDao.updateSituacaoProduto( id, situacao );
	}

	
	public void deleteProduto( long id )
	{
		Produto produto = this.findProdutoById( id );
		if(produto.getAnexoUuid() != null) this.removeArquivo( produto.getAnexoUuid() );

		List<Estoque> estoques = this.estoqueDAO.listEstoquesByCodigoProduto( id );

		if(estoques != null && estoques.size() > 0)
		{
			for ( Estoque estoque : estoques )
			{
				this.estoqueDAO.deleteEstoque( estoque.getProdutoId() );
			}
		}

		this.produtoDao.deleteProduto( id );
	}

	/*-------------------------------------------------------------------
	 *				 		     ARQUIVO
	 *-------------------------------------------------------------------*/


	public void insertArquivo(Produto produto)
	{
		Arquivo arquivo = this.arquivoRepository.insert( produto.getAnexo() );
		produto.setAnexoUuid( arquivo.getUuid() );
		produto.setNomeArquivo( arquivo.getNomeOriginal() );
	}

	public void removeArquivo(String uuid)
	{
		this.arquivoService.deleteArquivo( uuid );
	}

}
