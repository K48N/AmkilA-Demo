// src/utils/validateAnswer.js

export default function validateAnswer(key, value) {
    if (!value || value === '') {
      return 'This field is required.';
    }
  
    switch (key) {
      case 'dob':
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return 'Invalid date format.';
        break;
  
      case 'diagnosed':
        if (!/^\d{4}$/.test(value)) return 'Please select a valid year.';
        break;
  
      case 'sex':
      case 'type':
      case 'insulin':
      case 'insulin_method':
      case 'cgm_use':
      case 'wearable':
        if (typeof value !== 'string') return 'Invalid selection.';
        break;
  
      default:
        // Text input fallback
        if (typeof value === 'string' && value.trim().length < 1) return 'This field cannot be empty.';
        break;
    }
  
    return null; // ✅ valid
  }
  