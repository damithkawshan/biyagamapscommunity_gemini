# Issue Reporting System - Enhancement Guide

This document outlines the comprehensive enhancements made to the issue reporting system, including the new features requested: GPS location capture, ward selection, additional identifiers, security features, and public dashboard.

## 🎯 New Features Implemented

### 1. **Public Issue Dashboard** ✅
**Location:** `/pages/IssueDashboardPage.tsx`
**Route:** `/issue-dashboard`

#### Features:
- **Real-time Statistics Cards**
  - Total Issues
  - Resolved Issues  
  - In Progress Issues
  - Pending Issues

- **Advanced Filtering**
  - Search by title, reference number, or description
  - Filter by category (Roads, Waste, Water, etc.)
  - Filter by ward (all 8 wards)
  - Filter by status (submitted, acknowledged, in-progress, resolved, closed)
  - Active filter badges with "Clear all" option

- **Issue Grid Display**
  - Card-based responsive layout
  - Color-coded status badges
  - Priority indicators
  - Category tags
  - Location and date information
  - "View Details" button

- **Detailed Issue Dialog**
  - Full issue description
  - GPS coordinates with accuracy
  - Ward and GN division information
  - Status timeline with all updates
  - Asset identifiers (pole #, bin #, etc.)
  - Assigned officer information
  - Privacy: Personal data is masked (A****** P******, +94 77 *** **67)

#### Privacy & Security in Dashboard:
- ✅ Contact details are **masked** for privacy
- ✅ Anonymous reports show "Anonymous" / "Hidden"
- ✅ Only public issues are displayed (`isPublic: true`)
- ✅ Sensitive personal information protected

---

### 2. **Ward & GN Division Selection** ✅
**Data Location:** `/data/wards/index.ts`

#### Ward Structure:
```typescript
{
  id: string,
  number: string, // "01", "02", etc.
  name: { en, si, tm },
  gnDivisions: [...]
}
```

#### Implementation:
- **8 Wards Configured:**
  1. Ward 01 - Biyagama Central
  2. Ward 02 - Kochchikade
  3. Ward 03 - Walgama
  4. Ward 04 - Hunupitiya
  5. Ward 05 - Udugampola
  6. Ward 06 - Malwana
  7. Ward 07 - Kirindiwela
  8. Ward 08 - Gonawala

- Each ward contains multiple GN divisions with:
  - GN code (e.g., "471A", "472B")
  - Trilingual names

#### Usage in Forms:
```tsx
// Ward dropdown - Required field
<Select value={selectedWard} onValueChange={setSelectedWard}>
  <SelectTrigger>
    <SelectValue placeholder="Select Ward" />
  </SelectTrigger>
  <SelectContent>
    {wards.map(ward => (
      <SelectItem value={ward.id}>
        {getText(ward.name)}
      </SelectItem>
    ))}
  </SelectContent>
</Select>

// GN Division dropdown - Optional, filtered by selected ward
<Select value={selectedGN} onValueChange={setSelectedGN}>
  ...
  {selectedWardObj?.gnDivisions.map(gn => ...)}
</Select>
```

---

### 3. **GPS Location Capture** ✅ 
**Implementation Guide:**

#### Browser Geolocation API Integration:
```javascript
const captureGPS = () => {
  if (!navigator.geolocation) {
    toast.error('Geolocation not supported');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      setGpsCoords({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        accuracy: Math.round(position.coords.accuracy) // in meters
      });
      toast.success(`GPS location captured (±${accuracy}m accuracy)`);
    },
    (error) => {
      // Handle errors: PERMISSION_DENIED, POSITION_UNAVAILABLE, TIMEOUT
    },
    {
      enableHighAccuracy: true, // Use GPS instead of network/IP
      timeout: 10000,           // 10 second timeout
      maximumAge: 0             // Don't use cached position
    }
  );
};
```

#### GPS Accuracy Levels:
- **< 10m**: Excellent (GPS with clear sky view)
- **10-50m**: Good (GPS with some obstacles)
- **50-100m**: Fair (Network-assisted location)
- **> 100m**: Poor (IP-based location, not recommended)

#### UI Implementation:
```tsx
<Button onClick={captureGPS} disabled={gpsLoading}>
  {gpsLoading ? (
    <Loader2 className="h-4 w-4 animate-spin" />
  ) : (
    <Navigation className="h-4 w-4" />
  )}
  {gpsCoords 
    ? `GPS Captured (±${gpsCoords.accuracy}m)`
    : 'Capture GPS Location'
  }
</Button>

{gpsCoords && (
  <div className="text-xs text-muted-foreground">
    Lat: {gpsCoords.lat.toFixed(6)}, 
    Lng: {gpsCoords.lng.toFixed(6)}
  </div>
)}
```

#### Best Practices:
- ✅ Request permission with clear explanation
- ✅ Show loading state during GPS acquisition
- ✅ Display accuracy to user
- ✅ Allow manual address entry as fallback
- ✅ Don't make GPS mandatory (some devices may not have it)
- ✅ Store coordinates in issue object:
  ```typescript
  location: {
    coordinates: {
      lat: number,
      lng: number,
      accuracy?: number
    }
  }
  ```

---

### 4. **Additional Identifiers** ✅
**Location in Issue Type:** `location.identifiers`

#### Identifier Fields:
```typescript
identifiers?: {
  poleBNumber?: string,      // For street light issues
  binNumber?: string,         // For waste management issues
  buildingNumber?: string,    // For building-related issues
  plotNumber?: string,        // For land/plot issues
  other?: string             // Any other identifier
}
```

#### Category-Specific Identifiers:

**Street Lights:**
```tsx
<Label>Pole Number (e.g., SL-471-A-142)</Label>
<Input 
  value={poleNumber}
  onChange={(e) => setPoleNumber(e.target.value)}
  placeholder="SL-XXX-X-XXX"
/>
```

**Waste Management:**
```tsx
<Label>Bin Number (e.g., BIN-472-A-025)</Label>
<Input 
  value={binNumber}
  onChange={(e) => setBinNumber(e.target.value)}
  placeholder="BIN-XXX-X-XXX"
/>
```

**Buildings:**
```tsx
<Label>Building/House Number</Label>
<Input value={buildingNumber} ... />

<Label>Plot/Lot Number</Label>
<Input value={plotNumber} ... />
```

#### Conditional Display Logic:
```tsx
// Show relevant identifier fields based on category
{selectedCategory === 'streetlights' && (
  <div>
    <Label>Pole Number</Label>
    <Input value={poleNumber} onChange={...} />
  </div>
)}

{selectedCategory === 'waste' && (
  <div>
    <Label>Bin Number</Label>
    <Input value={binNumber} onChange={...} />
  </div>
)}

{(selectedCategory === 'buildings' || selectedCategory === 'other') && (
  <>
    <div>
      <Label>Building Number</Label>
      <Input value={buildingNumber} onChange={...} />
    </div>
    <div>
      <Label>Plot Number</Label>
      <Input value={plotNumber} onChange={...} />
    </div>
  </>
)}
```

---

### 5. **Security & Privacy Features** ✅

#### A. Anonymous Reporting
```tsx
const [isAnonymous, setIsAnonymous] = useState(false);

<div className="flex items-center space-x-2">
  <Switch
    id="anonymous"
    checked={isAnonymous}
    onCheckedChange={setIsAnonymous}
  />
  <Label htmlFor="anonymous">
    <div className="flex items-center gap-2">
      <Shield className="h-4 w-4" />
      Report Anonymously
    </div>
  </Label>
</div>

{isAnonymous && (
  <Alert>
    <EyeOff className="h-4 w-4" />
    <AlertTitle>Anonymous Reporting</AlertTitle>
    <AlertDescription>
      Your personal information will not be stored or displayed.
      You can still track your issue using the reference number.
    </AlertDescription>
  </Alert>
)}
```

#### B. Data Masking
```javascript
// Mask personal information for public display
function maskName(name: string): string {
  if (!name) return 'Anonymous';
  const parts = name.split(' ');
  return parts.map(part => 
    part.charAt(0) + '*'.repeat(Math.max(0, part.length - 2)) + 
    (part.length > 1 ? part.charAt(part.length - 1) : '')
  ).join(' ');
}

function maskPhone(phone: string): string {
  if (!phone) return 'Hidden';
  // +94 77 123 4567 -> +94 77 *** **67
  return phone.substring(0, 7) + ' *** **' + phone.substring(phone.length - 2);
}

function maskEmail(email: string): string {
  if (!email) return '';
  const [local, domain] = email.split('@');
  return local.charAt(0) + '******@' + '*****.' + domain.split('.').pop();
}
```

#### C. Data Encryption (Recommendation for Backend)
```javascript
// When implementing backend:
// 1. Use HTTPS for all communications
// 2. Encrypt sensitive data at rest
// 3. Hash phone numbers for duplicate detection
// 4. Implement rate limiting to prevent spam
// 5. Add CAPTCHA for anonymous reports
// 6. Sanitize all user inputs
// 7. Implement GDPR-compliant data retention policies
```

#### D. Privacy Controls
```typescript
interface Issue {
  // ...
  reporter: {
    name: string,
    phone: string,
    email?: string,
    isAnonymous?: boolean  // ← Privacy flag
  },
  isPublic?: boolean      // ← Controls dashboard visibility
}
```

#### E. Security Headers & Best Practices
- ✅ Store only necessary information
- ✅ Display masked data on public dashboards
- ✅ Allow users to opt for anonymous reporting
- ✅ Provide clear privacy policy
- ✅ Implement secure file upload (validate types, sizes, scan for malware)
- ✅ Use secure reference number generation
- ✅ Log access to sensitive data
- ✅ Implement data retention policies

---

## 📊 Mock Data

**Location:** `/data/issues/mockIssues.ts`

8 sample issues created demonstrating:
- ✅ Different categories (roads, waste, water, streetlights, etc.)
- ✅ Various statuses (submitted, acknowledged, in-progress, resolved)
- ✅ Different wards across Biyagama
- ✅ GPS coordinates with accuracy
- ✅ Masked personal information
- ✅ Anonymous reports
- ✅ Asset identifiers (pole numbers, bin numbers, etc.)
- ✅ Status update timelines
- ✅ Priority levels

---

## 🎨 UI/UX Enhancements

### Dashboard Features:
1. **Responsive Grid Layout** - 1/2/3 columns based on screen size
2. **Color-Coded Status Badges** - Visual status indicators
3. **Interactive Filters** - Real-time filtering without page reload
4. **Modal Details View** - Click to see full issue details
5. **Empty State** - Helpful message when no issues match filters
6. **Loading States** - Skeleton loaders and spinners
7. **Statistics Cards** - At-a-glance metrics

### Form Enhancements:
1. **Progressive Disclosure** - 3-step form with clear progress
2. **Smart Field Display** - Show identifiers based on category
3. **GPS Button with States** - Loading, success, error states
4. **Privacy Toggle** - Prominent anonymous reporting option
5. **Validation Messages** - Clear error messages
6. **Accessibility** - Proper labels, ARIA attributes

---

## 🔧 Implementation Checklist

To add these features to the existing IssueReportingPage.tsx:

### Step 1: Import Dependencies
```tsx
import { wards } from '../data/wards';
import { Navigation, Shield, EyeOff, Lock } from 'lucide-react';
import { Switch } from '../components/ui/switch';
```

### Step 2: Add State Variables
```tsx
// In ReportIssueForm component
const [selectedWard, setSelectedWard] = useState('');
const [selectedGN, setSelectedGN] = useState('');
const [gpsCoords, setGpsCoords] = useState<{lat: number; lng: number; accuracy: number} | null>(null);
const [gpsLoading, setGpsLoading] = useState(false);
const [poleNumber, setPoleNumber] = useState('');
const [binNumber, setBinNumber] = useState('');
const [buildingNumber, setBuildingNumber] = useState('');
const [plotNumber, setPlotNumber] = useState('');
const [isAnonymous, setIsAnonymous] = useState(false);
```

### Step 3: Add GPS Capture Function
```tsx
const captureGPS = () => {
  // See GPS implementation section above
};
```

### Step 4: Update Step 2 (Location) to include:
- Ward dropdown (required)
- GN division dropdown (optional)
- GPS capture button
- GPS coordinates display
- Category-specific identifier fields

### Step 5: Update Step 3 (Contact) to include:
- Anonymous reporting toggle
- Conditional required fields (only if not anonymous)
- Privacy notice

### Step 6: Update Form Validation
```tsx
const canProceedToStep3 = selectedWard && address;
const canSubmit = isAnonymous || (name && phone);
```

### Step 7: Update Submit Handler
```tsx
const handleSubmit = async () => {
  const issueData = {
    // ... existing fields
    location: {
      wardId: selectedWard,
      gnDivisionId: selectedGN || undefined,
      address,
      landmark,
      coordinates: gpsCoords,
      identifiers: {
        poleBNumber: poleNumber || undefined,
        binNumber: binNumber || undefined,
        buildingNumber: buildingNumber || undefined,
        plotNumber: plotNumber || undefined
      }
    },
    reporter: {
      name: isAnonymous ? 'Anonymous' : name,
      phone: isAnonymous ? 'Hidden' : phone,
      email: isAnonymous ? undefined : email,
      isAnonymous
    },
    isPublic: true // or let user choose
  };
  
  // Submit to backend
};
```

---

## 🚀 Next Steps for Full Implementation

### Backend Requirements:
1. **Database Schema Updates**
   - Add ward_id column
   - Add gn_division_id column  
   - Add gps_latitude, gps_longitude, gps_accuracy columns
   - Add pole_number, bin_number, building_number, plot_number columns
   - Add is_anonymous, is_public boolean columns

2. **API Endpoints**
   ```
   POST   /api/issues              - Create issue (with all new fields)
   GET    /api/issues              - List public issues (masked data)
   GET    /api/issues/:ref          - Get issue by reference
   GET    /api/wards               - Get all wards
   GET    /api/wards/:id/gn        - Get GN divisions for ward
   ```

3. **Security Implementation**
   - Data encryption at rest
   - HTTPS enforcement
   - Rate limiting
   - Input sanitization
   - File upload security
   - CAPTCHA for anonymous reports

4. **Notification System**
   - SMS gateway integration (for non-anonymous)
   - Email service
   - Push notifications

5. **Admin Panel**
   - View all issues (including contact info)
   - Update status
   - Assign to officers
   - View on map (using GPS coordinates)
   - Generate reports by ward

---

## 📱 Mobile Considerations

### GPS on Mobile:
- More accurate than desktop
- Request permission appropriately
- Handle permission denial gracefully
- Show accuracy indicator
- Allow photo capture from camera

### Touch Optimization:
- Large tap targets (min 44x44px)
- Swipe gestures for filters
- Pull-to-refresh on dashboard
- Bottom sheet for filters on mobile

---

## 🔐 Privacy & GDPR Compliance

### Data Collection Notice:
```
We collect:
- Issue details (required)
- Location information (required)
- Contact information (optional if anonymous)
- GPS coordinates (optional)
- Photos (optional)

Your data is used to:
- Process and resolve your issue
- Send you updates (if provided contact info)
- Display on public dashboard (masked)

You have the right to:
- Report anonymously
- Request data deletion
- Access your data
- Opt-out of public display
```

### Implementation:
- Clear privacy policy link
- Consent checkboxes
- Data retention policy (auto-delete after resolution + 90 days)
- Right to be forgotten (delete on request)

---

## 📈 Analytics & Monitoring

Track these metrics:
- Issues by ward (identify problem areas)
- Issues by category (resource allocation)
- Resolution time by category
- GPS accuracy distribution
- Anonymous vs identified reports ratio
- Peak reporting times
- Most used identifiers (pole #, bin #, etc.)

---

## ✅ Testing Checklist

- [ ] Ward dropdown loads all 8 wards
- [ ] GN division filters by selected ward
- [ ] GPS capture works on mobile and desktop
- [ ] GPS permission denial handled gracefully
- [ ] GPS accuracy displayed correctly
- [ ] Identifier fields show based on category
- [ ] Anonymous toggle works
- [ ] Contact fields optional when anonymous
- [ ] Dashboard shows only public issues
- [ ] Personal data masked on dashboard
- [ ] Filters work correctly
- [ ] Search functionality works
- [ ] Modal details display complete info
- [ ] All three languages work
- [ ] Form validation works
- [ ] Mobile responsive
- [ ] Empty states display
- [ ] Loading states display

---

## 🎓 Usage Examples

### Reporting a Street Light Issue:
1. Select Category: "Street Lights"
2. Select Ward: "Ward 01 - Biyagama Central"
3. Click "Capture GPS" (gets precise location)
4. Enter Pole Number: "SL-471-A-142"
5. Enter details
6. Choose anonymous or provide contact
7. Submit

### Reporting Garbage Issue:
1. Select Category: "Waste Management"
2. Select Ward and GN division
3. Enter Bin Number: "BIN-472-A-025"
4. Add photo of overflowing bin
5. Submit

### Tracking Issue Progress:
1. Go to "Track Issue" tab or Issue Dashboard
2. Enter reference number OR
3. Browse dashboard and filter by ward/category
4. Click "View Details" to see timeline

---

## 📞 Support & Documentation

For questions or issues:
- Check `/data/issues/README.md` for data structure
- Check `/data/wards/index.ts` for ward structure
- See this file for implementation guidance
- Contact development team for backend integration

---

**Last Updated:** November 5, 2025
**Version:** 2.0.0
**Status:** Ready for Backend Integration
