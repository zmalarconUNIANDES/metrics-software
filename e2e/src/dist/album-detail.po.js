"use strict";
exports.__esModule = true;
exports.AlbumDetailPage = void 0;
var protractor_1 = require("protractor");
var AlbumDetailPage = /** @class */ (function () {
    function AlbumDetailPage() {
    }
    // tslint:disable-next-line: typedef
    AlbumDetailPage.prototype.navigateTo = function () {
        return protractor_1.browser.get(protractor_1.browser.baseUrl + '/albums/detail/100');
    };
    // tslint:disable-next-line: typedef
    AlbumDetailPage.prototype.showAlbumDetail = function () {
        return protractor_1.element(protractor_1.by.css('app-album-detail .container h4')).getText();
    };
    return AlbumDetailPage;
}());
exports.AlbumDetailPage = AlbumDetailPage;
