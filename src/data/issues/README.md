# Issues Data Directory

This directory contains all issue reporting-related data for the Biyagama Pradeshiya Sabha website, including issue categories, types, and configurations.

## File Structure

```
/data/issues/
├── index.ts           # Main export file
├── types.ts           # TypeScript type definitions
├── categories.ts      # Issue categories and types
└── README.md          # This file
```

## Overview

The issue reporting system allows residents to:
- Report municipal issues (roads, waste, infrastructure, etc.)
- Upload photos as evidence
- Track issue status with reference number
- Receive SMS/email updates
- View resolution timeline

## Features

### Issue Categories

The system includes 8 main categories:

1. **Roads & Infrastructure** - Potholes, road damage, blocked drains
2. **Waste Management** - Missed collections, illegal dumping
3. **Water & Drainage** - Water leaks, flooding, stagnant water
4. **Environment & Public Health** - Pollution, pest control, stray animals
5. **Street Lights** - Non-functioning or damaged lights
6. **Buildings & Construction** - Illegal construction, safety hazards
7. **Community Facilities** - Parks, playgrounds, community centers
8. **Other Issues** - Any other municipal concerns

### Issue Lifecycle

```
Submitted → Acknowledged → In Progress → Resolved → Closed
```

### Status Tracking

Each issue has:
- Unique reference number (e.g., BPS12345678)
- Status updates with timestamps
- Assigned department/officer
- Priority level (Low, Medium, High, Urgent)
- Timeline of actions taken

## Adding New Categories

To add a new issue category:

1. Open `/data/issues/categories.ts`
2. Add to the `issueCategories` array:

```typescript
{
  id: 'category-id',
  name: {
    en: 'Category Name',
    si: 'කාණ්ඩ නම',
    tm: 'வகை பெயர்'
  },
  description: {
    en: 'Category description',
    si: 'කාණ්ඩ විස්තරය',
    tm: 'வகை விளக்கம்'
  },
  icon: 'icon-name', // Icon identifier
  color: '#HEXCOLOR', // Category color
  departmentId: 'department-id' // Must match a department ID
}
```

## Adding Issue Types

To add new issue types under a category:

1. Open `/data/issues/categories.ts`
2. Add to the `issueTypes` array:

```typescript
{
  id: 'issue-type-id',
  categoryId: 'parent-category-id',
  name: {
    en: 'Issue Type Name',
    si: 'ගැටළු වර්ග නම',
    tm: 'பிரச்சினை வகை பெயர்'
  }
}
```

## Page Structure

### Report Issue Tab

**Step 1: Issue Details**
- Category selection (visual cards)
- Issue type dropdown
- Title and description
- Photo upload (up to 3 images)

**Step 2: Location**
- Street address
- Nearby landmark
- Optional GPS coordinates

**Step 3: Contact Information**
- Full name
- Mobile number (for SMS updates)
- Email address (optional)
- Review summary

### Track Issue Tab

- Reference number search
- Issue details display
- Status timeline
- Contact options

## Form Validation

Required fields:
- ✓ Issue category
- ✓ Issue type
- ✓ Title
- ✓ Description
- ✓ Address
- ✓ Reporter name
- ✓ Phone number

Optional fields:
- Landmark
- Email
- Photos

## Features

### Multi-step Form
- Progressive disclosure
- Progress indicator
- Back/Next navigation
- Form validation at each step

### Photo Upload
- Max 3 photos
- Image preview
- Easy removal
- File size limit: 5MB each
- Formats: PNG, JPG

### Reference Number Generation
Format: `BPS[8-digit-timestamp]`
Example: `BPS12345678`

### Status Updates
Issues progress through stages:
1. **Submitted** - Initial submission recorded
2. **Acknowledged** - Reviewed by relevant department
3. **In Progress** - Work has begun
4. **Resolved** - Issue fixed
5. **Closed** - Issue verified and archived

### Priority Levels
- **Low** - Minor inconvenience
- **Medium** - Moderate impact
- **High** - Significant impact
- **Urgent** - Critical/safety issue

## Integration Points

### Department Assignment
Issues are automatically routed to departments based on category:
- Roads & Infrastructure → Engineering
- Waste Management → Public Health
- Water & Drainage → Engineering
- Environment → Public Health
- Street Lights → Engineering
- Buildings → Engineering
- Community → Community Development
- Other → Administration

### Notifications
When implemented, the system should send:
- SMS confirmation with reference number
- Email confirmation (if provided)
- Status update notifications
- Resolution notification

### Officer Assignment
Issues can be assigned to specific officers from the department based on:
- Issue type
- Location (GN division)
- Workload distribution
- Officer specialization

## User Experience

### Mobile-First Design
- Responsive layout
- Touch-friendly buttons
- Easy photo capture
- Clear progress indicators

### Accessibility
- Proper form labels
- Error messages
- Clear instructions
- Visual feedback
- Keyboard navigation

### Multilingual Support
All text content supports:
- English (en)
- Sinhala (si)
- Tamil (tm)

## Future Enhancements

Planned features:
- [ ] GPS location picking from map
- [ ] Real-time status updates
- [ ] SMS notifications
- [ ] Email notifications
- [ ] Issue clustering (multiple reports of same issue)
- [ ] Public issue map
- [ ] Issue statistics dashboard
- [ ] Anonymous reporting option
- [ ] Issue voting (multiple residents can support)
- [ ] Photo gallery per issue
- [ ] Estimated resolution time
- [ ] Satisfaction rating after resolution
- [ ] Follow-up system

## Testing Checklist

Before deployment, test:
- [ ] All category selections work
- [ ] Issue type dropdown filters correctly
- [ ] Form validation on all steps
- [ ] Photo upload (single and multiple)
- [ ] Photo removal
- [ ] Progress bar updates
- [ ] Back/Next navigation
- [ ] Reference number generation
- [ ] Track issue search
- [ ] Status timeline display
- [ ] Mobile responsiveness
- [ ] All three language translations
- [ ] Form submission
- [ ] Success message display

## Security Considerations

### Data Privacy
- Personal information (name, phone, email) should be protected
- Photos may contain sensitive information
- Reference numbers should be unpredictable

### Spam Prevention
- Implement rate limiting
- CAPTCHA for repeated submissions
- Phone/email verification
- Duplicate detection

### File Upload Security
- Validate file types
- Scan for malware
- Limit file sizes
- Sanitize filenames
- Store securely

## Backend Requirements

To fully implement this system, you'll need:

1. **Database Schema**
   - Issues table
   - Issue updates table
   - Attachments table
   - Categories/types reference

2. **API Endpoints**
   ```
   POST /api/issues              - Submit new issue
   GET  /api/issues/:ref         - Get issue by reference
   POST /api/issues/:ref/update  - Add status update
   POST /api/upload              - Upload photos
   ```

3. **Storage**
   - File storage for photos
   - Database for issue data
   - Logs for audit trail

4. **Notifications**
   - SMS gateway integration
   - Email service
   - Template management

5. **Admin Panel**
   - View all issues
   - Update status
   - Assign to officers
   - Generate reports
   - View statistics

## Monitoring & Analytics

Track these metrics:
- Issues reported per day/week/month
- Issues by category
- Average resolution time
- Status distribution
- Peak reporting times
- Most common issue types
- Geographic distribution
- Resolution rate
- Resident satisfaction

## Support

For questions about:
- Adding categories: See "Adding New Categories" above
- Issue types: See "Adding Issue Types" above
- Technical setup: Check type definitions in `types.ts`
- Translations: Ensure all three languages are provided

## Best Practices

1. **Keep it simple** - Easy form, clear instructions
2. **Provide feedback** - Loading states, success messages
3. **Set expectations** - Realistic timeframes
4. **Follow up** - Keep reporters informed
5. **Close the loop** - Confirm resolution
6. **Learn and improve** - Analyze data, optimize process
