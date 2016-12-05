
function bp_thumbnail_resize(image_url, post_title) {
    var image_width = 317;
    var image_height = 210;
    image_tag = '<img width="' + image_width + '" height="' + image_height + '" src="' + image_url.replace('/s72-c/', '/w' + image_width + '-h' + image_height + '-c/') + '" alt="' + post_title.replace(/"/g, "") + '" title="' + post_title.replace(/"/g, "") + '"/>';
    if (post_title != "")
        return image_tag;
    else
        return""
}

function authorshow(data) {
    for (var i = 0; i < 1; i++) {
      var entry = data.feed.entry[i];
      var avtr = entry.author[0].gd$image.src;
      document.write('<img width="40" height="40" src="' + avtr + '"/>');
    }
}

/* SCRIP elcomercio */
popup = function(t, e) {
    e.preventDefault();
    var $t = t, _href = "";

    if ($t.getAttribute('href')) _href = $t.getAttribute('href');
    else _href = $t.getAttribute('href');
    window.open(_href,'gec_popup','width=500,height=450,menubar=no,status=no,location=no,toolbar=no,scrollbars=yes,directories=no');
}
