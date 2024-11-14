"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCarroComprasDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetCarroComprasDto {
}
exports.GetCarroComprasDto = GetCarroComprasDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'id',
        description: 'Identificador del carro de compras',
        example: 1,
    }),
    __metadata("design:type", Number)
], GetCarroComprasDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'idUsuario',
        description: 'Identificador del usuario',
        example: 1,
    }),
    __metadata("design:type", Number)
], GetCarroComprasDto.prototype, "idUsuario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'precioTotal',
        description: 'Precio total del carro de compras',
        example: 55000,
    }),
    __metadata("design:type", Number)
], GetCarroComprasDto.prototype, "precioTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], GetCarroComprasDto.prototype, "carroProductos", void 0);
//# sourceMappingURL=get-carro-compras.dto.js.map