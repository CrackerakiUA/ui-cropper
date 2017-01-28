## uiCropper

[![Build Status](https://travis-ci.org/CrackerakiUA/ui-cropper.svg?branch=master)](https://travis-ci.org/CrackerakiUA/ui-cropper)
[![GitHub release](https://img.shields.io/github/release/CrackerakiUA/ui-cropper.svg)](https://github.com/CrackerakiUA/ui-cropper) [![Join the chat at https://gitter.im/CrackerakiUA/ui-cropper](https://badges.gitter.im/CrackerakiUA/ui-cropper.svg)](https://gitter.im/CrackerakiUA/ui-cropper?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Simple Image Crop directive for AngularJS. Enables to crop a circle, square or rectangle from of an image.


## Live demo

**Test it yourself, upload or choose an image from url in our amazing** [Online test suite](http://crackerakiua.github.io/ui-cropper)<br><br>
or pick a Codepen to play around with it<br>
[Codepen: Circle + Chargement Crop](http://codepen.io/Crackeraki/pen/avYNKP)<br>
[Codepen: Square + Init Url Crop + Maximum rendered image](http://codepen.io/Crackeraki/pen/QjmNVM)<br>
[Codepen: Rectangle Crop](http://codepen.io/Crackeraki/pen/XmEdPx)<br>
[Codepen: Rectangle Crop + Crop info](http://codepen.io/Crackeraki/pen/YqKwzZ)<br>
[Codepen: Rectangle With Aspect Crop and Max Init](http://codepen.io/Crackeraki/pen/zvWqJM)<br>
[Codepen: Rectangle + Aspect + Array Crop](http://codepen.io/Crackeraki/pen/jWgmYB)<br>
[Codepen: Rectangle + CSS Crop](https://codepen.io/Crackeraki/pen/YNExrw)<br>
[Codepen: Different sizes](http://codepen.io/Crackeraki/pen/RKjZLR)<br>

## News

We just moved this lib to new name, before you add it to your please do tests.


## Contribution

If you want to contribute, please join our [gitter chat](https://gitter.im/CrackerakiUA/ui-cropper).

## Installing

#### Download directly
[Download ui-cropper](https://github.com/CrackerakiUA/ui-cropper/archive/master.zip) files from GitHub

#### Bower
	bower install ui-cropper

#### NPM
	npm install ui-cropper

#### Meteor
	meteor npm install --save ui-cropper

## How to Use

``` javascript
angular.module('app', ['uiCropper'])
.controller(function($scope){
	$scope.myImage = 'https://raw.githubusercontent.com/CrackerakiUA/ui-cropper/master/screenshots/live.jpg';
	$scope.myCroppedImage = ''; // in this variable you will have dataUrl of cropped area.
});
```
``` html
<ui-cropper image="myImage" result-image="myCroppedImage"></ui-cropper>
```

## Documentation

You can checkout all options under [our wiki page](https://github.com/CrackerakiUA/ui-cropper/wiki/Options)

## License

See the [LICENSE](https://github.com/CrackerakiUA/ui-cropper/blob/master/LICENSE) file
