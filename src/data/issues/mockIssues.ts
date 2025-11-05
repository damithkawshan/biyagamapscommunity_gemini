import { Issue } from './types';

// Mock issues for the public dashboard
export const mockIssues: Issue[] = [
  {
    id: '1',
    referenceNumber: 'BPS87654321',
    categoryId: 'roads',
    typeId: 'pothole',
    title: 'Large pothole on Main Street',
    description: 'There is a large pothole near the junction causing problems for vehicles.',
    location: {
      wardId: 'ward-1',
      gnDivisionId: 'gn-01-01',
      address: 'Main Street, near Post Office',
      landmark: 'Opposite Commercial Bank',
      coordinates: {
        lat: 6.9497,
        lng: 79.9779,
        accuracy: 10
      }
    },
    reporter: {
      name: 'A****** P******',
      phone: '+94 77 *** **67',
      isAnonymous: false
    },
    status: 'in-progress',
    priority: 'high',
    submittedDate: new Date('2024-01-15T09:30:00'),
    updatedDate: new Date('2024-01-18T14:20:00'),
    assignedTo: 'Eng. S.M. Silva',
    isPublic: true,
    updates: [
      {
        id: '1-1',
        date: new Date('2024-01-15T09:30:00'),
        status: 'submitted',
        comment: 'Issue reported and logged in the system',
        updatedBy: 'System'
      },
      {
        id: '1-2',
        date: new Date('2024-01-16T10:15:00'),
        status: 'acknowledged',
        comment: 'Issue acknowledged by Engineering Department',
        updatedBy: 'Eng. S.M. Silva'
      },
      {
        id: '1-3',
        date: new Date('2024-01-18T14:20:00'),
        status: 'in-progress',
        comment: 'Repair team assigned. Scheduled for January 22nd',
        updatedBy: 'Engineering Team'
      }
    ]
  },
  {
    id: '2',
    referenceNumber: 'BPS87654322',
    categoryId: 'waste',
    typeId: 'missed-collection',
    title: 'Garbage not collected for 3 days',
    description: 'Garbage has not been collected from our area for the past 3 days.',
    location: {
      wardId: 'ward-2',
      gnDivisionId: 'gn-02-01',
      address: 'Temple Road, Kochchikade',
      landmark: 'Near Buddhist Temple',
      coordinates: {
        lat: 6.9520,
        lng: 79.9800,
        accuracy: 15
      },
      identifiers: {
        binNumber: 'BIN-472-A-025'
      }
    },
    reporter: {
      name: 'Anonymous',
      phone: 'Hidden',
      isAnonymous: true
    },
    status: 'resolved',
    priority: 'medium',
    submittedDate: new Date('2024-01-17T08:00:00'),
    updatedDate: new Date('2024-01-18T16:30:00'),
    resolvedDate: new Date('2024-01-18T16:30:00'),
    assignedTo: 'Public Health Inspector',
    isPublic: true,
    updates: [
      {
        id: '2-1',
        date: new Date('2024-01-17T08:00:00'),
        status: 'submitted',
        comment: 'Issue reported',
        updatedBy: 'System'
      },
      {
        id: '2-2',
        date: new Date('2024-01-17T11:00:00'),
        status: 'acknowledged',
        comment: 'Acknowledged by Public Health Department',
        updatedBy: 'PHI Office'
      },
      {
        id: '2-3',
        date: new Date('2024-01-18T07:00:00'),
        status: 'in-progress',
        comment: 'Collection team dispatched',
        updatedBy: 'Waste Management'
      },
      {
        id: '2-4',
        date: new Date('2024-01-18T16:30:00'),
        status: 'resolved',
        comment: 'Garbage collected. Regular schedule resumed',
        updatedBy: 'Waste Management'
      }
    ]
  },
  {
    id: '3',
    referenceNumber: 'BPS87654323',
    categoryId: 'streetlights',
    typeId: 'light-not-working',
    title: 'Street light not working',
    description: 'Street light has been non-functional for over a week creating safety concerns.',
    location: {
      wardId: 'ward-3',
      gnDivisionId: 'gn-03-01',
      address: 'Station Road, Walgama',
      landmark: 'Near Railway Crossing',
      coordinates: {
        lat: 6.9545,
        lng: 79.9825,
        accuracy: 8
      },
      identifiers: {
        poleBNumber: 'SL-473-A-142'
      }
    },
    reporter: {
      name: 'K****** S******',
      phone: '+94 71 *** **34',
      email: 'k******@*****.com',
      isAnonymous: false
    },
    status: 'acknowledged',
    priority: 'medium',
    submittedDate: new Date('2024-01-19T19:45:00'),
    updatedDate: new Date('2024-01-20T09:00:00'),
    assignedTo: 'Electrical Team',
    isPublic: true,
    updates: [
      {
        id: '3-1',
        date: new Date('2024-01-19T19:45:00'),
        status: 'submitted',
        comment: 'Issue reported',
        updatedBy: 'System'
      },
      {
        id: '3-2',
        date: new Date('2024-01-20T09:00:00'),
        status: 'acknowledged',
        comment: 'Acknowledged. Inspection scheduled',
        updatedBy: 'Electrical Team'
      }
    ]
  },
  {
    id: '4',
    referenceNumber: 'BPS87654324',
    categoryId: 'water',
    typeId: 'water-leak',
    title: 'Water pipe leak on road',
    description: 'Large water leak from underground pipe causing road damage and water wastage.',
    location: {
      wardId: 'ward-4',
      gnDivisionId: 'gn-04-02',
      address: 'Church Road, Hunupitiya',
      landmark: 'Near Catholic Church',
      coordinates: {
        lat: 6.9490,
        lng: 79.9750,
        accuracy: 12
      }
    },
    reporter: {
      name: 'N****** F******',
      phone: '+94 76 *** **89',
      isAnonymous: false
    },
    status: 'in-progress',
    priority: 'urgent',
    submittedDate: new Date('2024-01-20T06:30:00'),
    updatedDate: new Date('2024-01-20T10:15:00'),
    assignedTo: 'Water Supply Unit',
    isPublic: true,
    updates: [
      {
        id: '4-1',
        date: new Date('2024-01-20T06:30:00'),
        status: 'submitted',
        comment: 'Urgent issue reported',
        updatedBy: 'System'
      },
      {
        id: '4-2',
        date: new Date('2024-01-20T07:45:00'),
        status: 'acknowledged',
        comment: 'Marked as urgent. Emergency team notified',
        updatedBy: 'Engineering Department'
      },
      {
        id: '4-3',
        date: new Date('2024-01-20T10:15:00'),
        status: 'in-progress',
        comment: 'Repair team on site. Water supply temporarily shut off',
        updatedBy: 'Water Supply Unit'
      }
    ]
  },
  {
    id: '5',
    referenceNumber: 'BPS87654325',
    categoryId: 'roads',
    typeId: 'drain-block',
    title: 'Blocked drainage causing flooding',
    description: 'Drain is completely blocked with debris causing water to overflow onto the road.',
    location: {
      wardId: 'ward-5',
      gnDivisionId: 'gn-05-01',
      address: 'Market Road, Udugampola',
      landmark: 'Near Municipal Market',
      coordinates: {
        lat: 6.9580,
        lng: 79.9850,
        accuracy: 10
      }
    },
    reporter: {
      name: 'P****** W******',
      phone: '+94 77 *** **12',
      email: 'p******@*****.com',
      isAnonymous: false
    },
    status: 'submitted',
    priority: 'high',
    submittedDate: new Date('2024-01-21T14:20:00'),
    updatedDate: new Date('2024-01-21T14:20:00'),
    isPublic: true,
    updates: [
      {
        id: '5-1',
        date: new Date('2024-01-21T14:20:00'),
        status: 'submitted',
        comment: 'Issue reported and awaiting review',
        updatedBy: 'System'
      }
    ]
  },
  {
    id: '6',
    referenceNumber: 'BPS87654326',
    categoryId: 'environment',
    typeId: 'illegal-dump',
    title: 'Illegal garbage dumping',
    description: 'Someone is illegally dumping construction waste in the vacant lot.',
    location: {
      wardId: 'ward-6',
      gnDivisionId: 'gn-06-01',
      address: 'School Lane, Malwana',
      landmark: 'Behind Primary School',
      coordinates: {
        lat: 6.9600,
        lng: 79.9870,
        accuracy: 15
      },
      identifiers: {
        plotNumber: 'Plot 25/3A'
      }
    },
    reporter: {
      name: 'Anonymous',
      phone: 'Hidden',
      isAnonymous: true
    },
    status: 'acknowledged',
    priority: 'medium',
    submittedDate: new Date('2024-01-19T16:00:00'),
    updatedDate: new Date('2024-01-20T11:30:00'),
    assignedTo: 'Environmental Officer',
    isPublic: true,
    updates: [
      {
        id: '6-1',
        date: new Date('2024-01-19T16:00:00'),
        status: 'submitted',
        comment: 'Issue reported',
        updatedBy: 'System'
      },
      {
        id: '6-2',
        date: new Date('2024-01-20T11:30:00'),
        status: 'acknowledged',
        comment: 'Site inspection scheduled',
        updatedBy: 'Environmental Officer'
      }
    ]
  },
  {
    id: '7',
    referenceNumber: 'BPS87654327',
    categoryId: 'community',
    typeId: 'playground-damage',
    title: 'Damaged playground equipment',
    description: 'Swing set is broken and poses safety risk to children.',
    location: {
      wardId: 'ward-7',
      gnDivisionId: 'gn-07-01',
      address: 'Community Park, Kirindiwela',
      landmark: 'Central Playground',
      coordinates: {
        lat: 6.9625,
        lng: 79.9890,
        accuracy: 5
      }
    },
    reporter: {
      name: 'S****** R******',
      phone: '+94 71 *** **56',
      isAnonymous: false
    },
    status: 'resolved',
    priority: 'high',
    submittedDate: new Date('2024-01-14T10:30:00'),
    updatedDate: new Date('2024-01-17T15:00:00'),
    resolvedDate: new Date('2024-01-17T15:00:00'),
    assignedTo: 'Community Development',
    isPublic: true,
    updates: [
      {
        id: '7-1',
        date: new Date('2024-01-14T10:30:00'),
        status: 'submitted',
        comment: 'Issue reported',
        updatedBy: 'System'
      },
      {
        id: '7-2',
        date: new Date('2024-01-14T14:00:00'),
        status: 'acknowledged',
        comment: 'Safety concern noted. High priority',
        updatedBy: 'Community Development'
      },
      {
        id: '7-3',
        date: new Date('2024-01-15T08:00:00'),
        status: 'in-progress',
        comment: 'Equipment removed for safety. Replacement ordered',
        updatedBy: 'Maintenance Team'
      },
      {
        id: '7-4',
        date: new Date('2024-01-17T15:00:00'),
        status: 'resolved',
        comment: 'New swing set installed and inspected',
        updatedBy: 'Maintenance Team'
      }
    ]
  },
  {
    id: '8',
    referenceNumber: 'BPS87654328',
    categoryId: 'buildings',
    typeId: 'illegal-construction',
    title: 'Unauthorized construction blocking drainage',
    description: 'New construction appears to be blocking public drainage system.',
    location: {
      wardId: 'ward-8',
      gnDivisionId: 'gn-08-01',
      address: 'Canal Road, Gonawala',
      landmark: 'Near Canal Bridge',
      coordinates: {
        lat: 6.9650,
        lng: 79.9910,
        accuracy: 10
      },
      identifiers: {
        buildingNumber: 'No. 45/2',
        plotNumber: 'Lot 128'
      }
    },
    reporter: {
      name: 'R****** J******',
      phone: '+94 76 *** **78',
      email: 'r******@*****.com',
      isAnonymous: false
    },
    status: 'in-progress',
    priority: 'high',
    submittedDate: new Date('2024-01-18T11:00:00'),
    updatedDate: new Date('2024-01-21T09:30:00'),
    assignedTo: 'Building Inspector',
    isPublic: true,
    updates: [
      {
        id: '8-1',
        date: new Date('2024-01-18T11:00:00'),
        status: 'submitted',
        comment: 'Issue reported',
        updatedBy: 'System'
      },
      {
        id: '8-2',
        date: new Date('2024-01-19T10:00:00'),
        status: 'acknowledged',
        comment: 'Building permit verification initiated',
        updatedBy: 'Building Inspector'
      },
      {
        id: '8-3',
        date: new Date('2024-01-21T09:30:00'),
        status: 'in-progress',
        comment: 'Site inspection completed. Legal notice issued to owner',
        updatedBy: 'Building Inspector'
      }
    ]
  }
];
