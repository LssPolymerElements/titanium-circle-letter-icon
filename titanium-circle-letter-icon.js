var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let TitaniumCircleLetterIcon = class TitaniumCircleLetterIcon extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.size = 40;
        this.text = "A";
    }
    divideByTwo(size) {
        return size / 2;
    }
    getFirstLetter(value) {
        if (value == null)
            return "";
        return value.substring(0, 1);
    }
    getStyle(text, size) {
        return `background-color:${this.stringToColor(this.text)};width:${this.size}px;height:${this.size}px;font-size:${this.divideByTwo(this.size)}px;line-height:${this.size}px;`;
    }
    stringToColor(str) {
        if (!str)
            return;
        const colors = {};
        colors[0] = "#EF5350";
        colors[1] = "#FDD835";
        colors[2] = "#F06292";
        colors[3] = "#EF6C00";
        colors[4] = "#BA68C8";
        colors[5] = "#263238";
        colors[6] = "#9575CD";
        colors[7] = "#F57F17";
        colors[8] = "#7986CB";
        colors[9] = "#1A237E";
        colors[10] = "#3E2723";
        colors[11] = "#0D47A1";
        colors[12] = "#039BE5";
        colors[13] = "#01579B";
        colors[14] = "#0097A7";
        colors[15] = "#0097A7";
        colors[16] = "#009688";
        colors[17] = "#004D40";
        colors[18] = "#43A047";
        colors[19] = "#1B5E20";
        colors[20] = "#689F38";
        colors[21] = "#33691E";
        colors[22] = "#880E4F";
        colors[23] = "#E65100";
        colors[24] = "#B71C1C";
        colors[25] = "#BF360C";
        colors[26] = "#A1887F";
        colors[27] = "#2196F3";
        colors[28] = "#3E2723";
        colors[29] = "#4A148C";
        colors[30] = "#FFA000";
        colors[31] = "#FF6F00";
        colors[32] = "#FF5722";
        colors[33] = "#311B92";
        colors[34] = "#827717";
        colors[35] = "#AFB42B";
        colors[36] = "#3F51B5";
        colors[37] = "#283593";
        var firstChar = str.toUpperCase().substring(0, 1);
        if (!isNaN(parseInt(firstChar))) {
            return colors[parseInt(firstChar)];
        }
        else {
            return colors[firstChar.charCodeAt(0) - 55];
        }
    }
};
__decorate([
    property(),
    __metadata("design:type", Number)
], TitaniumCircleLetterIcon.prototype, "size", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], TitaniumCircleLetterIcon.prototype, "text", void 0);
TitaniumCircleLetterIcon = __decorate([
    customElement("titanium-circle-letter-icon")
], TitaniumCircleLetterIcon);
