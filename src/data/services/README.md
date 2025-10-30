# Services Data Directory

This directory contains all service-related data for the Biyagama Pradeshiya Sabha website, including departments, services, and their configurations.

## File Structure

```
/data/services/
├── index.ts           # Main export file
├── types.ts           # TypeScript type definitions
├── departments.ts     # Department information
├── services.ts        # Service details and configurations
└── README.md          # This file
```

## Overview

The services system is highly configurable and supports:
- Multiple departments
- Multilingual content (English, Sinhala, Tamil)
- Step-by-step service guides
- Required documents tracking
- Fee structures
- Officer information
- Online/offline service availability
- Form downloads

## How to Add a New Department

1. Open `/data/services/departments.ts`
2. Add a new department object to the `departments` array:

```typescript
{
  id: "unique-department-id",
  name: {
    en: "Department Name",
    si: "දෙපාර්තමේන්තු නම",
    tm: "துறை பெயர்"
  },
  description: {
    en: "Department description",
    si: "දෙපාර්තමේන්තු විස්තරය",
    tm: "துறை விளக்கம்"
  },
  inCharge: {
    name: {
      en: "Officer Name",
      si: "නිලධාරී නම",
      tm: "அதிகாரி பெயர்"
    },
    position: {
      en: "Position Title",
      si: "තනතුර",
      tm: "பதவி"
    },
    phone: "+94 XX XXXXXXX",
    email: "department@biyagama.ps.lk"
  },
  color: "#HEXCOLOR" // Department theme color
}
```

## How to Add a New Service

1. Open `/data/services/services.ts`
2. Add a new service object to the `services` array:

```typescript
{
  id: 'unique-service-id',
  departmentId: 'department-id', // Must match a department ID
  name: {
    en: 'Service Name',
    si: 'සේවා නම',
    tm: 'சேவை பெயர்'
  },
  description: {
    en: 'Brief service description',
    si: 'කෙටි සේවා විස්තරය',
    tm: 'சுருக்க சேவை விளக்கம்'
  },
  category: {
    en: 'Category Name',
    si: 'කාණ්ඩ නම',
    tm: 'வகை பெயர்'
  },
  steps: [
    // Step-by-step guide (see below)
  ],
  requiredDocuments: [
    // Required documents list (see below)
  ],
  fees: [
    // Fee structure (see below)
  ],
  processingTime: {
    en: 'Processing time',
    si: 'සැකසීමේ කාලය',
    tm: 'செயலாக்க நேரம்'
  },
  formUrl: '/forms/form-name.pdf', // Optional
  onlineAvailable: true/false,
  importantNotes: {
    en: ['Note 1', 'Note 2'],
    si: ['සටහන 1', 'සටහන 2'],
    tm: ['குறிப்பு 1', 'குறிப்பு 2']
  }
}
```

### Step-by-Step Guide Structure

```typescript
steps: [
  {
    title: {
      en: "Step Title",
      si: "පියවරේ මාතෘකාව",
      tm: "படி தலைப்பு"
    },
    description: {
      en: "Detailed step description",
      si: "විස්තරාත්මක පියවර විස්තරය",
      tm: "விரிவான படி விளக்கம்"
    },
    note: { // Optional
      en: "Additional note",
      si: "අමතර සටහන",
      tm: "கூடுதல் குறிப்பு"
    }
  }
]
```

### Required Documents Structure

```typescript
requiredDocuments: [
  {
    name: {
      en: "Document Name",
      si: "ලියකියවිල්ලේ නම",
      tm: "ஆவண பெயர்"
    },
    description: { // Optional
      en: "When this is needed",
      si: "මෙය අවශ්‍ය වන විට",
      tm: "இது எப்போது தேவை"
    },
    mandatory: true/false
  }
]
```

### Fee Structure

```typescript
fees: [
  {
    description: {
      en: "Fee Type",
      si: "ගාස්තු වර්ගය",
      tm: "கட்டண வகை"
    },
    amount: "Rs. 1,000" or "Based on size",
    note: { // Optional
      en: "Additional fee information",
      si: "අමතර ගාස්තු තොරතුරු",
      tm: "கூடுதல் கட்டண தகவல்"
    }
  }
]
```

## Service Categories

Service categories help organize services by type. To add or modify categories:

1. Open `/data/services/services.ts`
2. Edit the `serviceCategories` array:

```typescript
{
  id: 'category-id',
  name: {
    en: 'Category Name',
    si: 'කාණ්ඩ නම',
    tm: 'வகை பெயர்'
  },
  services: ['service-id-1', 'service-id-2'] // Array of service IDs
}
```

## Features

### Multilingual Support
All text content supports three languages:
- English (en)
- Sinhala (si)
- Tamil (tm)

### Step-by-Step Guides
Each service includes a detailed step-by-step process with:
- Numbered steps
- Descriptions
- Optional notes and warnings

### Document Tracking
Required documents are clearly marked as:
- **Mandatory**: Must be submitted
- **Optional**: Helpful but not required

### Fee Transparency
Clear fee structures with:
- Multiple fee types
- Exact amounts or calculation methods
- Additional notes

### Contact Information
Each service displays:
- Department details
- Officer in charge
- Contact phone and email

### Online Services
Services can be marked as:
- Online available (applications can be submitted online)
- Offline only (must visit office)

## Page Structure

The services section includes three main views:

### 1. Services Overview (`/services`)
- Lists all departments
- Groups services by category
- Quick access to all services

### 2. Department Page (`/services/department/:departmentId`)
- Department information
- Officer in charge details
- All services under this department

### 3. Service Detail Page (`/services/:serviceId`)
- Complete service information
- Step-by-step guide
- Required documents
- Fees
- Contact information
- Download forms
- Online application link (if available)

## Navigation

The system includes:
- **Sidebar navigation**: Quick access to all departments and services
- **Breadcrumb navigation**: Shows current location
- **Mobile responsive**: Collapsible sidebar on mobile devices

## Best Practices

1. **Keep descriptions concise**: 1-2 sentences for service descriptions
2. **Be specific in steps**: Provide clear, actionable instructions
3. **Update contact information**: Ensure phone numbers and emails are current
4. **Maintain translations**: Keep all three languages synchronized
5. **Use consistent formatting**: Follow the examples for fees and times
6. **Test all links**: Verify form URLs and external links work
7. **Regular reviews**: Update processing times and fees as needed

## Forms

Service application forms should be:
- PDF format
- Placed in `/public/forms/` directory
- Referenced with path like `/forms/form-name.pdf`
- Available in all three languages (or clearly bilingual)

## Technical Notes

### Type Safety
All services and departments use TypeScript interfaces defined in `types.ts`. This ensures:
- Consistent data structure
- Compile-time error checking
- Better IDE autocomplete

### Data Validation
When adding new services, ensure:
- `departmentId` matches an existing department
- All required fields are filled
- Translations are complete for all languages
- Fee amounts are clearly stated

## Support

For questions about:
- Adding new services: Follow the structures in this guide
- Technical issues: Check type definitions in `types.ts`
- Content updates: Contact the department heads
- Translation help: Ensure cultural appropriateness

## Future Enhancements

Planned features:
- Service status tracking
- Online form submission
- Payment integration
- Appointment booking
- Service feedback system
