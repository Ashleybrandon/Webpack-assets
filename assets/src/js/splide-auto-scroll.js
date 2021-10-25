 
      document.addEventListener( 'DOMContentLoaded', function () {
        // Create the AutoScroll extension.
      const AutoScroll = function ( Splide, Components ) {
        const Track      = Components.Track;
        const pxPerFrame = 2;
    
        let paused = true;
        let page   = 0;
    
        return {
          mount() {
            this.update = this.update.bind( this );
    
            Splide.on( 'mouseenter', () => {
              this.pause();
            }, Splide.root );
    
            Splide.on( 'mouseleave', () => {
              this.play();
            }, Splide.root );
          },
    
          // Start scroll after load.
          mounted() {
            setTimeout( this.play.bind( this ), 1000 );
          },
    
          // Start scroll.
          play() {
            if ( paused ) {
              paused = false;
              Components.Elements.list.style.transition = '';
              requestAnimationFrame( this.update );
            }
          },
    
          // Pause scroll.
          pause() {
            paused = true;
          },
    
          // Update the slider position on every frame.
          update() {
            Track.translate( Track.position - pxPerFrame );
            Track.shift();
    
            const currentPage = Track.toIndex( Track.position );
    
            if ( page !== currentPage ) {
              this.onPageChanged( currentPage, page );
              page = currentPage;
            }
    
            if ( ! paused ) {
              requestAnimationFrame( this.update );
            }
          },
    
          // Called when the page is changed.
          onPageChanged( newPage, prevPage ) {
            console.log( prevPage + '->' + newPage );
          }
        };
      };
    
      new Splide( '.splide.splide-auto-scroll' ).mount( { AutoScroll } );
    } );