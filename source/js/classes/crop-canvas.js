'use strict';

angular.module('uiCropper').factory('cropCanvas', [function() {
    // Shape = Array of [x,y]; [0, 0] - center
    var shapeArrowNW = [
        [-0.5, -2],
        [-3, -4.5],
        [-0.5, -7],
        [-7, -7],
        [-7, -0.5],
        [-4.5, -3],
        [-2, -0.5]
    ];
    var shapeArrowNE = [
        [0.5, -2],
        [3, -4.5],
        [0.5, -7],
        [7, -7],
        [7, -0.5],
        [4.5, -3],
        [2, -0.5]
    ];
    var shapeArrowSW = [
        [-0.5, 2],
        [-3, 4.5],
        [-0.5, 7],
        [-7, 7],
        [-7, 0.5],
        [-4.5, 3],
        [-2, 0.5]
    ];
    var shapeArrowSE = [
        [0.5, 2],
        [3, 4.5],
        [0.5, 7],
        [7, 7],
        [7, 0.5],
        [4.5, 3],
        [2, 0.5]
    ];
    var shapeArrowN = [
        [-1.5, -2.5],
        [-1.5, -6],
        [-5, -6],
        [0, -11],
        [5, -6],
        [1.5, -6],
        [1.5, -2.5]
    ];
    var shapeArrowW = [
        [-2.5, -1.5],
        [-6, -1.5],
        [-6, -5],
        [-11, 0],
        [-6, 5],
        [-6, 1.5],
        [-2.5, 1.5]
    ];
    var shapeArrowS = [
        [-1.5, 2.5],
        [-1.5, 6],
        [-5, 6],
        [0, 11],
        [5, 6],
        [1.5, 6],
        [1.5, 2.5]
    ];
    var shapeArrowE = [
        [2.5, -1.5],
        [6, -1.5],
        [6, -5],
        [11, 0],
        [6, 5],
        [6, 1.5],
        [2.5, 1.5]
    ];

    // Colors
    var colors = {
        areaOutline: '#fff',
        resizeBoxStroke: '#bababa',
        resizeBoxFill: '#444',
        resizeBoxArrowFill: '#fff',
        resizeCircleStroke: '#bababa',
        resizeCircleFill: '#444',
        moveIconFill: '#fff'
    };

    var cropper = {
        strokeWidth: 1
    };

    return function(ctx, disable) {

        /* Base functions */

        // Calculate Point
        var calcPoint = function(point, offset, scale) {
            return [scale * point[0] + offset[0], scale * point[1] + offset[1]];
        };

        // Draw Filled Polygon
        var drawFilledPolygon = function(shape, fillStyle, centerCoords, scale) {
            if(disable) {
                return;
            }

            ctx.save();
            ctx.fillStyle = fillStyle;
            ctx.beginPath();
            var pc, pc0 = calcPoint(shape[0], centerCoords, scale);
            ctx.moveTo(pc0[0], pc0[1]);

            for (var p in shape) {
                if (p > 0) {
                    pc = calcPoint(shape[p], centerCoords, scale);
                    ctx.lineTo(pc[0], pc[1]);
                }
            }

            ctx.lineTo(pc0[0], pc0[1]);
            ctx.fill();
            ctx.closePath();
            ctx.restore();
        };


        /* Icons */

        this.drawIconMove = function(centerCoords, scale) {
            if(disable) {
                return;
            }

            drawFilledPolygon(shapeArrowN, colors.moveIconFill, centerCoords, scale);
            drawFilledPolygon(shapeArrowW, colors.moveIconFill, centerCoords, scale);
            drawFilledPolygon(shapeArrowS, colors.moveIconFill, centerCoords, scale);
            drawFilledPolygon(shapeArrowE, colors.moveIconFill, centerCoords, scale);
        };

        this.drawIconResizeCircle = function(centerCoords, circleRadius, scale) {
            if(disable) {
                return;
            }

            var scaledCircleRadius = circleRadius * scale;
            ctx.save();
            ctx.strokeStyle = colors.resizeCircleStroke;
            ctx.lineWidth = cropper.strokeWidth;
            ctx.fillStyle = colors.resizeCircleFill;
            ctx.beginPath();
            ctx.arc(centerCoords[0], centerCoords[1], scaledCircleRadius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        };

        this.drawIconResizeBoxBase = function(centerCoords, boxSize, scale) {
            if(disable) {
                return;
            }

            var scaledBoxSize = boxSize * scale;
            ctx.save();
            ctx.strokeStyle = colors.resizeBoxStroke;
            ctx.lineWidth = cropper.strokeWidth;
            ctx.fillStyle = colors.resizeBoxFill;
            ctx.fillRect(centerCoords[0] - scaledBoxSize / 2, centerCoords[1] - scaledBoxSize / 2, scaledBoxSize, scaledBoxSize);
            ctx.strokeRect(centerCoords[0] - scaledBoxSize / 2, centerCoords[1] - scaledBoxSize / 2, scaledBoxSize, scaledBoxSize);
            ctx.restore();
        };
        this.drawIconResizeBoxNESW = function(centerCoords, boxSize, scale) {
            if(disable) {
                return;
            }

            this.drawIconResizeBoxBase(centerCoords, boxSize, scale);
            drawFilledPolygon(shapeArrowNE, colors.resizeBoxArrowFill, centerCoords, scale);
            drawFilledPolygon(shapeArrowSW, colors.resizeBoxArrowFill, centerCoords, scale);
        };
        this.drawIconResizeBoxNWSE = function(centerCoords, boxSize, scale) {
            if(disable) {
                return;
            }

            this.drawIconResizeBoxBase(centerCoords, boxSize, scale);
            drawFilledPolygon(shapeArrowNW, colors.resizeBoxArrowFill, centerCoords, scale);
            drawFilledPolygon(shapeArrowSE, colors.resizeBoxArrowFill, centerCoords, scale);
        };

        /* Crop Area */

        this.drawCropArea = function(image, centerCoords, size, fnDrawClipPath, transparentColor) {
            if(disable) {
                return;
            }

            var xRatio = Math.abs(image.width / ctx.canvas.width),
                yRatio = Math.abs(image.height / ctx.canvas.height),
                xLeft = Math.abs(centerCoords.x - size.w / 2),
                yTop = Math.abs(centerCoords.y - size.h / 2);

            ctx.save();
            ctx.strokeStyle = colors.areaOutline;
            ctx.lineWidth = cropper.strokeWidth;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            fnDrawClipPath(ctx, centerCoords, size);
            ctx.stroke();
            ctx.clip();

            // draw part of original image
            if (size.w > 0) {
                ctx.clearRect(xLeft, yTop, Math.abs(size.w), Math.abs(size.h));
                if(transparentColor)
                {
                    ctx.save();
                    ctx.fillStyle = transparentColor;
                    ctx.fillRect(xLeft, yTop, Math.abs(size.w), Math.abs(size.h));
                    ctx.restore();
                }
                ctx.drawImage(image, xLeft * xRatio, yTop * yRatio, Math.abs(size.w * xRatio), Math.abs(size.h * yRatio), xLeft, yTop, Math.abs(size.w), Math.abs(size.h));
            }

            ctx.beginPath();
            fnDrawClipPath(ctx, centerCoords, size);
            ctx.stroke();
            ctx.clip();

            ctx.restore();
        };
    };
}]);
