import { IssueType } from './types';

export const issueTypes: IssueType[] = [
  { id: '1', categoryId: 'streetlights', name: { en: 'Faulty Street Light', si: 'දෝෂ සහිත වීදි ආලෝකය', tm: 'குறைபாடுள்ள தெரு விளக்கு' } },
  { id: '2', categoryId: 'roads', name: { en: 'Pothole', si: 'වළ', tm: 'பள்ளம்' } },
  { id: '3', categoryId: 'waste', name: { en: 'Garbage/Litter', si: 'කුණු/කසළ', tm: 'குப்பை/கழிவுகள்' } },
  { id: '4', categoryId: 'buildings', name: { en: 'Damaged Infrastructure', si: 'හානියට පත් යටිතල පහසුකම්', tm: 'சேதமடைந்த உள்கட்டமைப்பு' } },
  { id: '5', categoryId: 'environment', name: { en: 'Stray Animals', si: 'අයාලේ යන සතුන්', tm: 'தெரு விலங்குகள்' } },
  { id: '6', categoryId: 'water', name: { en: 'Water Leakage', si: 'ජල කාන්දුව', tm: 'நீர் கசிவு' } },
  { id: '7', categoryId: 'water', name: { en: 'Drainage Issue', si: 'ජලාපවහන ගැටලුව', tm: 'வடிகால் பிரச்சினை' } },
  { id: '8', categoryId: 'other', name: { en: 'Other', si: 'වෙනත්', tm: 'மற்றவை' } }
];