export interface ZellerCustomer {
  id: string;
  name: string;
  email: string;
  role: string;
}

export type GetZellerCustomerData = {
  getZellerCustomer: ZellerCustomer;
};

export type GetZellerCustomerVars = {
  id: string;
};
