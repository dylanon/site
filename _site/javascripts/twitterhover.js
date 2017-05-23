/* Transition home page styling to Twitter colors */
$( document ).ready(function() {
 
  // Home page animation on load
    $( ".hi" ).delay( 750 ).fadeTo( 750, 1 );
    $( ".mynameis" ).delay( 2000 ).fadeTo( 750, 1 );
    $( ".hometext" ).delay( 3500 ).fadeTo( 750, 1 );

    // Hover Twitter link - change background color, text color, link color
    $( "a.twitter").hover( 
      function() {
        $( "body" ).css( "background-color", "#1da1f2" );
        $( "body" ).css( "color" , "#ffffff" );
        $( "a" ).css( "color" , "#ffffff" );
        $( "hr" ).css( "border-top-color", "#ffffff" );
      },
      function () {
        $( "body" ).css( "background-color", "#f7f7f7" );
        $( "body" ).css( "color" , "#333333" );
        $( "a" ).css( "color" , "#458c24" );
        $( "hr" ).css( "border-top-color", "#bdbfbf" );
      }
    );
 
});