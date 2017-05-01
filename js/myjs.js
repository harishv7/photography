$(document).ready(function() {
    var showPhotos = function(photos) {
        var photos = [];
        $.ajax({
            url: "https://api.imgur.com/3/account/harishv/album/lMXdg",
            headers: { "Authorization": "Client-ID 15c2f7712f1356c" },
            success: function(data) {
                // data is the object from imgur
                console.log(data);
                var images = data.data.images;

                for (var i = 0; i < images.length; i++) {
                    photos.push({
                        src: images[i].link.replace("http", "https"),
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
                    margin: 3
                });
            },
            type: 'GET'
        });
    }
    showPhotos();
});