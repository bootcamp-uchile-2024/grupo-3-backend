'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.CatalogoModule = void 0;
const common_1 = require('@nestjs/common');
const catalogo_service_1 = require('./service/catalogo.service');
const productos_module_1 = require('../productos/productos.module');
const catalogo_controller_1 = require('./controller/catalogo.controller');
let CatalogoModule = class CatalogoModule {};
exports.CatalogoModule = CatalogoModule;
exports.CatalogoModule = CatalogoModule = __decorate(
  [
    (0, common_1.Module)({
      controllers: [catalogo_controller_1.CatalogoController],
      providers: [catalogo_service_1.CatalogoService],
      imports: [productos_module_1.ProductosModule],
    }),
  ],
  CatalogoModule,
);
//# sourceMappingURL=catalogo.module.js.map
