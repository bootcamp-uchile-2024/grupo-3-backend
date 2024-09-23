"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const productos_module_1 = require("./productos/productos.module");
const carro_compras_module_1 = require("./carro-compras/carro-compras.module");
const pedidos_module_1 = require("./pedidos/pedidos.module");
const catalogo_module_1 = require("./catalogo/catalogo.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const equipo_module_1 = require("./commons/modelse3/equipo/equipo.module");
const auth_module_1 = require("./auth/auth.module");
const global_middleware_1 = require("./commons/middleware/global.middleware");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(global_middleware_1.GlobalMiddleware)
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `.env.${process.env.AMBIENTE}` || `.env.dev`,
            }),
            productos_module_1.ProductosModule,
            carro_compras_module_1.CarroComprasModule,
            pedidos_module_1.PedidosModule,
            catalogo_module_1.CatalogoModule,
            usuarios_module_1.UsuariosModule,
            equipo_module_1.EquipoModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map