(function dsbuilder(attr) {
    var urlBuilder = "jdbc:trino://" + attr[connectionHelper.attributeServer] + ":" + attr[connectionHelper.attributePort] + "/" + attr[connectionHelper.attributeDatabase] + "?";

    return [urlBuilder];
})
