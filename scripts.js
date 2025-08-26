// Custom Loading Process & Animations
const loadingEle = document.querySelector( '.custom-loading-ele' );

/*================================================================================= */
// Typing Proccess & Animations
const speed = 250;
const myName = "عبد المنعم إبراهيم عبد المنعم عثمان";
const myNameArr = myName.split( '' );
let typingArr = []
let typingName = '';
const h1Ele = document.getElementsByTagName( "h1" )[ 0 ]

myNameArr.forEach( ( l, i ) =>
{
    setTimeout( () =>
    {
        typingArr.push( l );
        typingName = typingArr.join( "" );
        if ( i < typingArr.length ) typingName = "|" + typingName
        if ( i == myNameArr.length - 1 )
        {
            typingName = typingName.replace( '|', ' ' )
            loadingEle.style.setProperty( 'display', 'none' )
        }
        h1Ele.innerHTML = typingName
    }, speed * i );
} );

/* ===================================================================================== */
const form = document.querySelector( 'form' );
const submitBtn = document.querySelector( '#btn' );
const inputs = form.children;
const messageViewer = document.querySelector( '#formMessage' );

submitBtn.addEventListener( 'click', () =>
{
    if ( !form.checkValidity() ) return alert( 'يجب مللأ بيانات النموذج.' )
    let formValue = {}
    for ( let i = 0; i < inputs.length; i++ )
    {
        if ( inputs[ i ].tagName == 'input'.toUpperCase() || inputs[ i ].tagName == 'textarea'.toUpperCase() )
            formValue[ inputs[ i ].id ] = inputs[ i ].value;
    }
    messageViewer.innerHTML = `&nbsp; &nbsp; ${ formValue[ 'User Message' ] } &nbsp; &nbsp;`
    console.log( formValue );
} )



