export interface Officer {
  name: {
    en: string;
    si: string;
    tm: string;
  };
  position: {
    en: string;
    si: string;
    tm: string;
  };
  phone?: string;
  email?: string;
  photo?: string;
}

export interface Department {
  id: string;
  name: {
    en: string;
    si: string;
    tm: string;
  };
  description: {
    en: string;
    si: string;
    tm: string;
  };
  inCharge: Officer;
  team?: Officer[];
  color?: string;
}

export interface Step {
  title: {
    en: string;
    si: string;
    tm: string;
  };
  description: {
    en: string;
    si: string;
    tm: string;
  };
  note?: {
    en: string;
    si: string;
    tm: string;
  };
}

export interface RequiredDocument {
  name: {
    en: string;
    si: string;
    tm: string;
  };
  description?: {
    en: string;
    si: string;
    tm: string;
  };
  mandatory: boolean;
}

export interface Fee {
  description: {
    en: string;
    si: string;
    tm: string;
  };
  amount: string;
  note?: {
    en: string;
    si: string;
    tm: string;
  };
}

export interface Service {
  id: string;
  departmentId: string;
  name: {
    en: string;
    si: string;
    tm: string;
  };
  description: {
    en: string;
    si: string;
    tm: string;
  };
  category: {
    en: string;
    si: string;
    tm: string;
  };
  icon?: string;
  steps: Step[];
  requiredDocuments: RequiredDocument[];
  fees: Fee[];
  processingTime: {
    en: string;
    si: string;
    tm: string;
  };
  formUrl?: string;
  onlineAvailable: boolean;
  contactPerson?: Officer;
  importantNotes?: {
    en: string[];
    si: string[];
    tm: string[];
  };
}

export interface ServiceCategory {
  id: string;
  name: {
    en: string;
    si: string;
    tm: string;
  };
  icon?: string;
  services: string[]; // Service IDs
}
