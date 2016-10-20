angular.module('app', ['uiCropper'])
    .controller('Ctrl', function ($scope) {
        $scope.blockingObject = {block: true};
        $scope.callTestFuntion = function () {
            $scope.blockingObject.render(function (dataURL) {
                console.log('via render');
                console.log(dataURL.length);
            });
        };
        $scope.blockingObject.callback = function (dataURL) {
            console.log('via function');
            console.log(dataURL.length);
        };
        $scope.size = 'small';
        $scope.type = 'circle';
        $scope.imageDataURI = '';
        $scope.resImageDataURI = '';
        $scope.resBlob = {};
        $scope.urlBlob = {};
        $scope.resImgFormat = 'image/jpeg';
        $scope.resImgQuality = 1;
        $scope.selMinSize = 100;
        $scope.selInitSize = [{w: 200, h: 80}];
        $scope.resImgSize = [{w: 200, h: 150}, {w: 400, h: 300}];
        //$scope.aspectRatio=1.2;
        $scope.onChange = function ($dataURI) {
            console.log('onChange fired');
        };
        $scope.onLoadBegin = function () {
            console.log('onLoadBegin fired');
        };
        $scope.onLoadDone = function () {
            console.log('onLoadDone fired');
        };
        $scope.onLoadError = function () {
            console.log('onLoadError fired');
        };
        $scope.getBlob = function () {
            console.log($scope.resBlob);
        };
        var handleFileSelect = function (evt) {
            var file = evt.currentTarget.files[0],
                reader = new FileReader();
            if (navigator.userAgent.match(/iP(hone|od|ad)/i)) {
                var canvas = document.createElement('canvas'),
                    mpImg = new MegaPixImage(file);

                canvas.width = mpImg.srcImage.width;
                canvas.height = mpImg.srcImage.height;

                EXIF.getData(file, function () {
                    var orientation = EXIF.getTag(this, 'Orientation');

                    mpImg.render(canvas, {
                        maxHeight: $scope.resImgSize,
                        orientation: orientation
                    });
                    setTimeout(function () {
                        var tt = canvas.toDataURL("image/jpeg", 1);
                        $scope.$apply(function ($scope) {
                            $scope.imageDataURI = tt;
                        });
                    }, 100);
                });
            } else {
                reader.onload = function (evt) {
                    $scope.$apply(function ($scope) {
                        console.log(evt.target.result);
                        $scope.imageDataURI = evt.target.result;
                    });
                };
                reader.readAsDataURL(file);
            }
        };
        angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);
        $scope.$watch('resImageDataURI', function () {
            //console.log('Res image', $scope.resImageDataURI);
        });
    });