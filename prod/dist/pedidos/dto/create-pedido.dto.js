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
exports.CreatePedidoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const carro_compra_entity_1 = require("../../carro-compras/entities/carro-compra.entity");
const despacho_enum_1 = require("../entities/despacho.enum");
const pago_enum_1 = require("../entities/pago.enum");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreatePedidoDto {
}
exports.CreatePedidoDto = CreatePedidoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePedidoDto.prototype, "idusuario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: despacho_enum_1.tipoDespacho.RETIRO }),
    (0, class_validator_1.IsEnum)(despacho_enum_1.tipoDespacho, { message: 'El tipo de despacho es incorrecto' }),
    __metadata("design:type", String)
], CreatePedidoDto.prototype, "tipoDespacho", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: pago_enum_1.tipoPago.MERCADOPAGO }),
    (0, class_validator_1.IsEnum)(pago_enum_1.tipoPago, { message: 'El tipo de pago es incorrecto' }),
    __metadata("design:type", String)
], CreatePedidoDto.prototype, "tipoPago", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => carro_compra_entity_1.CarroCompra),
    __metadata("design:type", carro_compra_entity_1.CarroCompra)
], CreatePedidoDto.prototype, "carrito", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: new Date() }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreatePedidoDto.prototype, "fechaEntrega", void 0);
//# sourceMappingURL=create-pedido.dto.js.map