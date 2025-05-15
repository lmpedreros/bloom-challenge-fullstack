/** 
* Debes completar este archivo como consideres adecuado
*/

import { BrandSettings } from "../models/brand-setting";

export default [
  {
    brandId: "karyn_coo",
    logistics: {
      directShipping: true,        // El producto se envía directamente al comprador
      requiresProcessing: false,
      processingDetails: ""
    },
    shipping: {
      homePickup: true,            // Permite retiro a domicilio
      blueExpress: true            // Permite envío por Blue Express
    },
    payment: {
      creditVoucher: true,         // Puede recibir 100% en cupón
      creditVoucherPercentage: 100,
      bankTransfer: true,          // Puede recibir 80% por transferencia
      bankTransferPercentage: 80
    },
    additionalCharges: {
      hasFixedCharge: false,
      fixedChargeAmount: 0,
      hasVariableCharge: false,
      variableChargeDetails: ""
    },
    faq: {
      shippingAnswer: "Después de que tu producto se venda, recibirás un correo electrónico con instrucciones para enviarlo. Puedes elegir entre retiro a domicilio (coordinamos la recogida) o envío por Blue Express (imprimes la etiqueta y llevas el paquete a un punto de entrega).",
      paymentAnswer: "Una vez que el comprador reciba y confirme que el producto está en buenas condiciones, recibirás tu pago. Puedes elegir entre recibir el 100% del monto en un cupón de descuento para usar en Karyn Coo, o el 80% mediante transferencia bancaria.",
      additionalChargesAnswer: "No hay cargos adicionales por vender tu producto en Karyn Coo. Solo debes tener en cuenta que si eliges recibir el pago por transferencia bancaria, recibirás el 80% del valor de venta.",
      showCouponPolicy: true      // Se muestra la política de cupones
    }
  },
  {
    brandId: "andesgear",
    logistics: {
      directShipping: true,        // El producto se envía directamente al comprador
      requiresProcessing: false,
      processingDetails: ""
    },
    shipping: {
      homePickup: true,            // Permite retiro a domicilio
      blueExpress: true            // Permite envío por Blue Express
    },
    payment: {
      creditVoucher: false,        // NO permite cupón de descuento
      creditVoucherPercentage: 0,
      bankTransfer: true,          // Solo permite transferencia bancaria
      bankTransferPercentage: 100
    },
    additionalCharges: {
      hasFixedCharge: false,
      fixedChargeAmount: 0,
      hasVariableCharge: false,
      variableChargeDetails: ""
    },
    faq: {
      shippingAnswer: "Después de que tu producto se venda, recibirás un correo electrónico con instrucciones para enviarlo. Puedes elegir entre retiro a domicilio (coordinamos la recogida) o envío por Blue Express (imprimes la etiqueta y llevas el paquete a un punto de entrega).",
      paymentAnswer: "Una vez que el comprador reciba y confirme que el producto está en buenas condiciones, recibirás tu pago mediante transferencia bancaria.",
      additionalChargesAnswer: "No hay cargos adicionales por vender tu producto en Andesgear.",
      showCouponPolicy: false      // NO se muestra la política de cupones
    }
  },
  {
    brandId: "milu_rugs",
    logistics: {
      directShipping: false,       // NO se envía directamente al comprador
      requiresProcessing: true,    // Pasa por lugar de lavado
      processingDetails: "Tu alfombra pasará por nuestro proceso de lavado y sanitizado antes de ser enviada al comprador."
    },
    shipping: {
      homePickup: true,            // Solo permite retiro a domicilio
      blueExpress: false           // NO permite Blue Express
    },
    payment: {
      creditVoucher: true,         // Puede recibir 100% en cupón
      creditVoucherPercentage: 100,
      bankTransfer: true,          // Puede recibir 80% por transferencia
      bankTransferPercentage: 80
    },
    additionalCharges: {
      hasFixedCharge: true,        // Tiene cargo fijo por lavado
      fixedChargeAmount: 10000,    // $10.000 por lavado
      hasVariableCharge: false,
      variableChargeDetails: ""
    },
    faq: {
      shippingAnswer: "Después de que tu alfombra se venda, coordinaremos el retiro a domicilio. Tu alfombra pasará por nuestro proceso de lavado y sanitización antes de ser enviada al comprador.",
      paymentAnswer: "Una vez que el comprador reciba y confirme que la alfombra está en buenas condiciones, recibirás tu pago. Puedes elegir entre recibir el 100% del monto en un cupón de descuento para usar en Milú Rugs, o el 80% mediante transferencia bancaria.",
      additionalChargesAnswer: "Por cada venta, se descuenta un monto fijo de $10.000 por el lavado y sanitizado de la alfombra. Este monto se resta del total a pagar.",
      showCouponPolicy: true       // Se muestra la política de cupones
    }
  },
  {
    brandId: "kokoro",
    logistics: {
      directShipping: false,       // NO se envía directamente al comprador
      requiresProcessing: true,    // Pasa por taller para revisión
      processingDetails: "Tu prenda pasará por nuestro taller para revisión. Si no está limpia, se enviará a tintorería."
    },
    shipping: {
      homePickup: true,            // Permite retiro a domicilio
      blueExpress: true            // Permite envío por Blue Express
    },
    payment: {
      creditVoucher: true,         // Puede recibir 100% en cupón
      creditVoucherPercentage: 100,
      bankTransfer: true,          // Puede recibir 80% por transferencia
      bankTransferPercentage: 80
    },
    additionalCharges: {
      hasFixedCharge: false,
      fixedChargeAmount: 0,
      hasVariableCharge: true,     // Tiene cargo variable (tintorería si necesario)
      variableChargeDetails: "Si la prenda no está limpia, el costo de la tintorería se descuenta del pago al vendedor."
    },
    faq: {
      shippingAnswer: "Después de que tu producto se venda, recibirás un correo electrónico con instrucciones para enviarlo. Tu prenda pasará por el taller de Kokoro para su revisión. Puedes elegir entre retiro a domicilio (coordinamos la recogida) o envío por Blue Express (imprimes la etiqueta y llevas el paquete a un punto de entrega).",
      paymentAnswer: "Una vez que el comprador reciba y confirme que el producto está en buenas condiciones, recibirás tu pago. Puedes elegir entre recibir el 100% del monto en un cupón de descuento para usar en Kokoro, o el 80% mediante transferencia bancaria.",
      additionalChargesAnswer: "Si tu prenda requiere limpieza, el costo de la tintorería se descontará del pago final que recibirás.",
      showCouponPolicy: true       // Se muestra la política de cupones
    }
  }
] as BrandSettings[];
