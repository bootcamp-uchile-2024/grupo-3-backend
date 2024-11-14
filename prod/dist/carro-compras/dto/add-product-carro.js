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
exports.AddProductCarro = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AddProductCarro {
}
exports.AddProductCarro = AddProductCarro;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsInt)({ message: 'El ID de producto debe ser un número entero' }),
    (0, class_validator_1.IsPositive)({ message: 'El ID de producto debe ser un número positivo' }),
    __metadata("design:type", Number)
], AddProductCarro.prototype, "productoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    (0, class_validator_1.IsInt)({ message: 'La cantidad debe ser un número entero' }),
    (0, class_validator_1.IsPositive)({ message: 'La cantidad debe ser un número positivo' }),
    __metadata("design:type", Number)
], AddProductCarro.prototype, "cantidadProducto", void 0);
//# sourceMappingURL=add-product-carro.js.map