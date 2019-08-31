package br.com.projeto.portal.domain.service;

import java.time.LocalDateTime;

import br.com.projeto.portal.domain.dao.EstoqueDAO;
import br.com.projeto.portal.domain.dao.ProdutoDAO;
import br.com.projeto.portal.domain.entity.produto.Produto;
import br.com.projeto.portal.domain.repository.IProdutoRepository;
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
public class ProdutoService implements IProdutoRepository
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

	@Override
	public Page<Produto> listProdutosByFilters( String nome, PageRequest pageable )
	{
		return this.produtoDao.listProdutosByFilters( nome, pageable );
	}

	@Override
	public Produto findProdutoById( long id )
	{
		Produto produto = this.produtoDao.findProdutoById( id );
		if ( produto.getAnexoUuid() != null )
		{
			produto.setAnexo( this.arquivoService.downloadArquivoByUuid( produto.getAnexoUuid() ) );
		}

		return produto;
	}

	@Override
	public void insertProduto( Produto produto )
	{
		if(produto.getAnexo() != null)
			this.insertArquivo( produto );

		if(produto.getCurrentEstoque().getCreated() == null)
			this.estoqueDAO.insertEstoque( produto.getCurrentEstoque() );
		else
			this.estoqueDAO.updateEstoque( produto.getCurrentEstoque() );


		produto.setSituacao( true );

		this.produtoDao.insertProduto( produto );
	}

	@Override
	public void updateProduto( Produto produto )
	{
		if(produto.getAnexoUuid() == null && produto.getAnexo() != null)
			this.insertArquivo( produto );

		if(produto.getCurrentEstoque().getCreated() == null)
			this.estoqueDAO.insertEstoque( produto.getCurrentEstoque() );
		else
			this.estoqueDAO.updateEstoque( produto.getCurrentEstoque() );

		produto.setUpdated( LocalDateTime.now() );

		this.produtoDao.updateProduto( produto );
	}

	@Override
	public void updateSituacaoProduto( long id, boolean situacao )
	{
		this.produtoDao.updateSituacaoProduto( id, situacao );
	}

	@Override
	public void deleteProduto( long id )
	{
		//TODO validar se existe registros relacionados, se existe só desativa
		Produto produto = this.findProdutoById( id );
		if(produto.getAnexoUuid() != null) this.removeArquivo( produto.getAnexoUuid() );

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
