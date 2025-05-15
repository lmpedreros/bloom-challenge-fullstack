
export type BrandSettings = {
  brandId: string;
  logistics: {
    directShipping: boolean;       // Si el producto se envía directo al comprador
    requiresProcessing: boolean;   // Si necesita pasar por taller/lavado
    processingDetails?: string;    // Detalles del procesamiento (si aplica)
  };
  shipping: {
    homePickup: boolean;           // Si permite retiro a domicilio
    blueExpress: boolean;          // Si permite envío por Blue Express
  };
  payment: {
    creditVoucher: boolean;        // Si permite pago con cupón de descuento
    creditVoucherPercentage?: number; // Porcentaje del pago con cupón
    bankTransfer: boolean;         // Si permite transferencia bancaria
    bankTransferPercentage?: number;  // Porcentaje del pago por transferencia
  };
  additionalCharges: {
    hasFixedCharge: boolean;       // Si tiene cargo fijo
    fixedChargeAmount?: number;    // Monto del cargo fijo
    hasVariableCharge: boolean;    // Si tiene cargo variable
    variableChargeDetails?: string; // Detalles del cargo variable
  };
  faq: {
    shippingAnswer: string;        // Respuesta para la pregunta de envío
    paymentAnswer: string;         // Respuesta para la pregunta de pago
    additionalChargesAnswer: string; // Respuesta para la pregunta de cargos adicionales
    showCouponPolicy: boolean;     // Si se debe mostrar la política de cupones
  };
};