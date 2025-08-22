export interface Report {
  customerCode: string;
  customerName: string;
  tpin: string;
  pastelInvoiceNo: string;
  createdOn: string;
  smartInvoiceNo: string;
  description: string;
  exclusive: string;
  region: string;
  status: string;
  amount: string;
  currency: string;
  reference: string;
  salesRep: string;
}

export const reports: Report[] = [
  { customerCode: "PL001", customerName: "PUBLIX", tpin: "1001698019", pastelInvoiceNo: "IN013433", createdOn: "16/04/2025", smartInvoiceNo: "INV0030001863/429", description: "sales", exclusive: "11077", region: "East", status: "Completed", amount: "1200", currency: "USD", reference: "REF001", salesRep: "John Doe" },
  { customerCode: "PL002", customerName: "WALMART", tpin: "1001698020", pastelInvoiceNo: "IN013434", createdOn: "17/04/2025", smartInvoiceNo: "INV0030001864/430", description: "sales", exclusive: "11078", region: "West", status: "Pending", amount: "1500", currency: "USD", reference: "REF002", salesRep: "Jane Smith" },
  { customerCode: "PL003", customerName: "TARGET", tpin: "1001698021", pastelInvoiceNo: "IN013435", createdOn: "18/04/2025", smartInvoiceNo: "INV0030001865/431", description: "sales", exclusive: "11079", region: "North", status: "Completed", amount: "1100", currency: "USD", reference: "REF003", salesRep: "Alice Lee" },
  { customerCode: "PL004", customerName: "KROGER", tpin: "1001698022", pastelInvoiceNo: "IN013436", createdOn: "19/04/2025", smartInvoiceNo: "INV0030001866/432", description: "sales", exclusive: "11080", region: "South", status: "Completed", amount: "900", currency: "USD", reference: "REF004", salesRep: "Bob Ray" },
  { customerCode: "PL005", customerName: "ALBERTSONS", tpin: "1001698023", pastelInvoiceNo: "IN013437", createdOn: "20/04/2025", smartInvoiceNo: "INV0030001867/433", description: "sales", exclusive: "11081", region: "East", status: "Pending", amount: "1300", currency: "USD", reference: "REF005", salesRep: "John Doe" },
  { customerCode: "PL006", customerName: "SAFEWAY", tpin: "1001698024", pastelInvoiceNo: "IN013438", createdOn: "21/04/2025", smartInvoiceNo: "INV0030001868/434", description: "sales", exclusive: "11082", region: "West", status: "Completed", amount: "1400", currency: "USD", reference: "REF006", salesRep: "Jane Smith" },
  { customerCode: "PL007", customerName: "COSTCO", tpin: "1001698025", pastelInvoiceNo: "IN013439", createdOn: "22/04/2025", smartInvoiceNo: "INV0030001869/435", description: "sales", exclusive: "11083", region: "North", status: "Completed", amount: "1600", currency: "USD", reference: "REF007", salesRep: "Alice Lee" },
  { customerCode: "PL008", customerName: "HEB", tpin: "1001698026", pastelInvoiceNo: "IN013440", createdOn: "23/04/2025", smartInvoiceNo: "INV0030001870/436", description: "sales", exclusive: "11084", region: "South", status: "Pending", amount: "1700", currency: "USD", reference: "REF008", salesRep: "Bob Ray" },
  { customerCode: "PL009", customerName: "WINCO", tpin: "1001698027", pastelInvoiceNo: "IN013441", createdOn: "24/04/2025", smartInvoiceNo: "INV0030001871/437", description: "sales", exclusive: "11085", region: "East", status: "Completed", amount: "1800", currency: "USD", reference: "REF009", salesRep: "John Doe" },
  { customerCode: "PL010", customerName: "FOOD LION", tpin: "1001698028", pastelInvoiceNo: "IN013442", createdOn: "25/04/2025", smartInvoiceNo: "INV0030001872/438", description: "sales", exclusive: "11086", region: "West", status: "Completed", amount: "1900", currency: "USD", reference: "REF010", salesRep: "Jane Smith" },
  { customerCode: "PL011", customerName: "MEIJER", tpin: "1001698029", pastelInvoiceNo: "IN013443", createdOn: "26/04/2025", smartInvoiceNo: "INV0030001873/439", description: "sales", exclusive: "11087", region: "North", status: "Pending", amount: "2000", currency: "USD", reference: "REF011", salesRep: "Alice Lee" },
  { customerCode: "PL012", customerName: "IGA", tpin: "1001698030", pastelInvoiceNo: "IN013444", createdOn: "27/04/2025", smartInvoiceNo: "INV0030001874/440", description: "sales", exclusive: "11088", region: "South", status: "Completed", amount: "2100", currency: "USD", reference: "REF012", salesRep: "Bob Ray" },
];