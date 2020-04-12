package br.com.projeto.portal.infrastructure.imageHandler;

import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

import javax.imageio.ImageIO;

import org.apache.commons.io.IOUtils;
import org.directwebremoting.io.FileTransfer;

/**
 * 
 * @author wagner
 *
 */
public class ImageResize 
{
	/**
	 * 
	 */
	static private int maxSizeByteArray = 616005;
	
	/**
	 * 
	 * @return
	 */
	public static byte[] resizeImage(FileTransfer fileTransfer)
	{
			try 
			{
				BufferedImage bigImage = ImageIO.read(new ByteArrayInputStream(IOUtils.toByteArray( fileTransfer.getInputStream())));	
	
				int newWidth = bigImage.getWidth();
				int newHeight = bigImage.getHeight();
				
				ByteArrayOutputStream img = ImageResize.resizeImageByDimensions(bigImage, newWidth, newHeight); 
				
				while (img.size() > ImageResize.maxSizeByteArray) //25000 é o size aproximado para 5MB
				{
					newWidth -= newWidth / 10; //tira 10 porcento do tamanho
					newHeight -= newHeight / 10; //tira 10 porcento do tamanho
					
					img.close();
					img = ImageResize.resizeImageByDimensions(bigImage, newWidth, newHeight);
				}
				
				img.close();
				byte[] imageInByte = img.toByteArray();
				return imageInByte;
	
			} catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			return null;
	}
	
	private static ByteArrayOutputStream resizeImageByDimensions(final BufferedImage bigImage, final int newWidth, final int newHeight) throws IOException {
		
		BufferedImage resizedImage = new BufferedImage(newWidth, newHeight, bigImage.getType());
		Graphics2D g = resizedImage.createGraphics();
		
		g.drawImage(bigImage, 0, 0, newWidth, newHeight, null);
		g.dispose();
		
		ByteArrayOutputStream outputImg = new ByteArrayOutputStream();
		ImageIO.write( resizedImage, "jpg", outputImg );
		
		return outputImg;
	}

}
