$(document).ready(function() {
    var showPhotos = function(photos) {
        var photos = [];
        $.ajax({
            url: "https://api.imgur.com/3/account/harishv/album/lMXdg",
            headers: { "Authorization": "Client-ID 15c2f7712f1356c" },
            success: function(data) {
                // data is the object from imgur
                // console.log(data);
                var images = data.data.images;

                for (var i = 0; i < images.length; i++) {
                    photos.push({
                        src: images[i].link,
                        width: images[i].width,
                        height: images[i].height
                    });
                }

                $('.image-container').empty().justifiedImages({
                    images: photos,
                    rowHeight: 200,
                    maxRowHeight: 350,
                    thumbnailPath: function(photo, width, height) {
                        var purl = photo.url_s;
                        //				if( photo.url_n && (width > photo.width_s * 1.2 || height > photo.height_s * 1.2) ) purl = photo.url_n;
                        //				if( photo.url_m && (width > photo.width_n * 1.2 || height > photo.height_n * 1.2) ) purl = photo.url_m;
                        //				if( photo.url_z && (width > photo.width_m * 1.2 || height > photo.height_m * 1.2) ) purl = photo.url_z;
                        //				if( photo.url_l && (width > photo.width_z * 1.2 || height > photo.height_z * 1.2) ) purl = photo.url_l;
                        return purl;
                    },
                    getSize: function(photo) {
                        return { width: photo.width, height: photo.height };
                    },
                    margin: 5
                });
            },
            type: 'GET'
        });
        //		var photos = [{
        //			src: "http://placehold.it/350x150",
        //			width_s: 350,
        //			height_s: 150
        //		},{
        //			src: "http://placehold.it/550x650",
        //			width_s: 550,
        //			height_s: 650
        //		}];
    }
    showPhotos();
});