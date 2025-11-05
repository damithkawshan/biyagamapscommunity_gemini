export interface IssueCategory {
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
  icon: string;
  color: string;
  departmentId: string;
}

export interface IssueType {
  id: string;
  categoryId: string;
  name: {
    en: string;
    si: string;
    tm: string;
  };
}

export interface Issue {
  id: string;
  referenceNumber: string;
  categoryId: string;
  typeId: string;
  title: string;
  description: string;
  location: {
    wardId: string;
    gnDivisionId?: string;
    address: string;
    landmark?: string;
    coordinates?: {
      lat: number;
      lng: number;
      accuracy?: number;
    };
    identifiers?: {
      poleBNumber?: string;
      binNumber?: string;
      buildingNumber?: string;
      plotNumber?: string;
      other?: string;
    };
  };
  reporter: {
    name: string;
    phone: string;
    email?: string;
    isAnonymous?: boolean;
  };
  status: 'submitted' | 'acknowledged' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  submittedDate: Date;
  updatedDate: Date;
  resolvedDate?: Date;
  assignedTo?: string;
  attachments?: string[];
  updates?: IssueUpdate[];
  isPublic?: boolean;
}

export interface IssueUpdate {
  id: string;
  date: Date;
  status: Issue['status'];
  comment: string;
  updatedBy: string;
}
