export interface Brand {
  id: string;
  name: string;
  url: string;
  settings?: BrandSettings;
}

export interface BrandSettings {
  brandId: string;
  logistics: {
    directShipping: boolean;
    requiresProcessing: boolean;
    processingDetails?: string;
  };
  shipping: {
    homePickup: boolean;
    blueExpress: boolean;
  };
  payment: {
    creditVoucher: boolean;
    creditVoucherPercentage?: number;
    bankTransfer: boolean;
    bankTransferPercentage?: number;
  };
  additionalCharges: {
    hasFixedCharge: boolean;
    fixedChargeAmount?: number;
    hasVariableCharge: boolean;
    variableChargeDetails?: string;
  };
  faq: {
    shippingAnswer: string;
    paymentAnswer: string;
    additionalChargesAnswer: string;
    showCouponPolicy: boolean;
  };
}