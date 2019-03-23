/*
 * timeout-dialog.js v1.0.1, 01-03-2012
 * 
 * @author: Rodrigo Neri (@rigoneri)
 * 
 * (The MIT License)
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE. 
 */


/* String formatting, you might want to remove this if you already use it.
 * Example:
 * 
 * var location = 'World';
 * alert('Hello {0}'.format(location));
 */
String.prototype.format = function() {
  var s = this,
      i = arguments.length;

  while (i--) {
    s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
  }
  return s;
};

!function($) {
  $.timeoutDialog = function(options) {

    var settings = {
      timeout: 1800,
      countdown: 300,
      title : 'Detectado inatividade no sistema',
      message : 'Sua sessão irá expirar em {0} segundos.',
      question: 'Continuar utilizando o sistema?',
      keep_alive_button_text: 'Sim, renovar sessão',
      sign_out_button_text: 'Não, sair do sistema',
      keep_alive_url: '/administracao/keep-alive',
      logout_url: null,
      logout_redirect_url: './logout',
      restart_on_yes: true,
      dialog_width: 350
    };    
    
    var countdownSession = null;

    $.extend(settings, options);
    
    var TimeoutDialog = {
      init: function () {
        this.setupDialogTimer();
      }, 

      setupDialogTimer: function() {
        var self = this;
        countdownSession = window.setTimeout(function() { 
           self.setupDialog();
        }, (settings.timeout - settings.countdown) * 1000);
      },

      setupDialog: function() {
        var self = this;
        self.destroyDialog();

        if ( confirm("Sua sessão irá expirar em 5 minutos.\nContinuar utilizando o sistema?\nClique em:\nOK para renovar sessão ou CANCELAR para sair do sistema") )
    	{
        	self.keepAlive();
        }
        else
    	{
        	self.signOut(true);
        }
        self.startCountdown();
      },

      destroyDialog: function() {
        if ($("#timeout-dialog").length) {
//          $(this).dialog("close");
          $('#timeout-dialog').remove();
        }
      },

      startCountdown: function() {
        var self = this,
            counter = settings.countdown;

        this.countdown = window.setInterval(function() {
          counter -= 1;
          $("#timeout-countdown").html(counter);
          if (counter <= 0) {
            window.clearInterval(self.countdown);
            self.signOut(false);
          }

        }, 1000);
      },

      keepAlive: function() {
        var self = this;
        this.destroyDialog();
        window.clearInterval(this.countdown);

        $.get(settings.keep_alive_url, function(data) {
          if (data == "OK") {
            if (settings.restart_on_yes) {
              self.setupDialogTimer();
            }
          }
          else {
            self.signOut(false);
          }
        });
      },

      keepAliveFromRequest: function() {
    	  var self = this;
    	  
    	  window.clearInterval( this.countdown );
    	  window.clearInterval( countdownSession );
    	  self.setupDialogTimer();
      },
      
      signOut: function(is_forced) {
        var self = this;
        this.destroyDialog();

        if (settings.logout_url != null) {
            $.post(settings.logout_url, function(data){
                self.redirectLogout(is_forced);
            });
        }
        else {
            self.redirectLogout(is_forced);
        }
      }, 

      redirectLogout: function(is_forced){
        //var target = settings.logout_redirect_url + '?next=' + encodeURIComponent(window.location.pathname + window.location.search);
        var target = settings.logout_redirect_url;
//        if (!is_forced)
//          target += '&timeout=t';
        window.location = './logout';
      }
    };

   	TimeoutDialog.init();    	
   	return TimeoutDialog;
};
  
}(window.jQuery);

function init() {
    map = new OpenLayers.Map("basicMap");
    var mapnik         = new OpenLayers.Layer.OSM();
    var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
    var toProjection   = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
    var position       = new OpenLayers.LonLat(13.41,52.52).transform( fromProjection, toProjection);
    var zoom           = 15;

    map.addLayer(mapnik);
    map.setCenter(position, zoom );
}