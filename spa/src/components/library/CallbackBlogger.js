export default function(json) { 
    console.log("hello! CallbackBlogger json ", json);
}

// export default function(json){
//     var items = [];
//     json.feed.entry.forEach( function(element, index) {
//         if ( index < 5) {
//             var listHTML = "<li><a href="+ element.link[element.link.length - 1].href +">";
//             var dateStr = new Date(element.published["$t"]);
//             listHTML += '<h3>' + element.title["$t"] + '</h3>';
//             listHTML += '<p>' + dateStr.toLocaleDateString("es-PE") + '</p>';
//             listHTML += "</a></li>"
//             items.push( listHTML );
//         }
//     });

//     if ( items.length > 0 ) {
//         document.querySelector( '#blogger-content' ).innerHTML = '<ul>' + items.join("") + '</ul>';
//     } else {
//         document.querySelector( '#blogger-content' ).innerHTML = 'No se encontrar&oacuten resultados.'
//     }
// }
