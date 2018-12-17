## uiCropper

[![Build Status](https://travis-ci.org/CrackerakiUA/ui-cropper.svg?branch=master)](https://travis-ci.org/CrackerakiUA/ui-cropper)
[![GitHub release](https://img.shields.io/github/release/CrackerakiUA/ui-cropper.svg)](https://github.com/CrackerakiUA/ui-cropper) [![Join the chat at https://gitter.im/CrackerakiUA/ui-cropper](https://badges.gitter.im/CrackerakiUA/ui-cropper.svg)](https://gitter.im/CrackerakiUA/ui-cropper?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Backers on Open Collective](https://opencollective.com/ui-cropper/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/ui-cropper/sponsors/badge.svg)](#sponsors)

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

## Contributors

This project exists thanks to all the people who contribute. 
<a href="https://github.com/CrackerakiUA/ui-cropper/graphs/contributors"><img src="https://opencollective.com/ui-cropper/contributors.svg?width=890&button=false" /></a>


## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/ui-cropper#backer)]

<a href="https://opencollective.com/ui-cropper#backers" target="_blank"><img src="https://opencollective.com/ui-cropper/backers.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/ui-cropper#sponsor)]

<a href="https://opencollective.com/ui-cropper/sponsor/0/website" target="_blank"><img src="https://opencollective.com/ui-cropper/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/ui-cropper/sponsor/1/website" target="_blank"><img src="https://opencollective.com/ui-cropper/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/ui-cropper/sponsor/2/website" target="_blank"><img src="https://opencollective.com/ui-cropper/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/ui-cropper/sponsor/3/website" target="_blank"><img src="https://opencollective.com/ui-cropper/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/ui-cropper/sponsor/4/website" target="_blank"><img src="https://opencollective.com/ui-cropper/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/ui-cropper/sponsor/5/website" target="_blank"><img src="https://opencollective.com/ui-cropper/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/ui-cropper/sponsor/6/website" target="_blank"><img src="https://opencollective.com/ui-cropper/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/ui-cropper/sponsor/7/website" target="_blank"><img src="https://opencollective.com/ui-cropper/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/ui-cropper/sponsor/8/website" target="_blank"><img src="https://opencollective.com/ui-cropper/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/ui-cropper/sponsor/9/website" target="_blank"><img src="https://opencollective.com/ui-cropper/sponsor/9/avatar.svg"></a>



## License

See the [LICENSE](https://github.com/CrackerakiUA/ui-cropper/blob/master/LICENSE) file
