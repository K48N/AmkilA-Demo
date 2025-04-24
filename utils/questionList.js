// src/utils/questionList.js

const questions = [
    { key: 'dob', question: 'What is your date of birth?', type: 'dob-custom' },
    { key: 'sex', question: 'What is your biological sex?', options: ['Male', 'Female', 'Other', 'Prefer not to say'] },
    { key: 'type', question: 'Do you have Type 1 or Type 2 diabetes?', options: ['Type 1', 'Type 2'] },
    { key: 'diagnosed', question: 'When were you diagnosed with diabetes?', type: 'diagnosis-year' },
    { key: 'insulin', question: 'Do you use insulin?', options: ['Yes', 'No'] },
    { key: 'insulin_method', question: 'What insulin method do you use?', options: ['Pens', 'Pump', 'Manual injection', 'Not applicable'] },
    { key: 'cgm_use', question: 'Do you use a CGM device?', options: ['Yes', 'No'] },
    { key: 'wearable', question: 'Do you use a wearable to track heart rate, blood pressure, or activity?', options: ['Yes', 'No'] },
    { key: 'glucose_freq', question: 'How often do you check your glucose levels?', options: ['Multiple times daily', 'Once daily', 'Occasionally', 'Rarely'] },
    { key: 'log_meals', question: 'Do you log your meals?', options: ['Always', 'Sometimes', 'Never'] },
    { key: 'track_activity', question: 'Do you monitor physical activity?', options: ['Yes', 'No'] },
    { key: 'track_sleep', question: 'Do you track your sleep?', options: ['Yes', 'No'] },
    { key: 'stress_freq', question: 'Do you experience frequent stress?', options: ['Often', 'Sometimes', 'Rarely', 'Never'] },
    { key: 'goal', question: 'What is your primary goal?', options: ['Better control', 'Fewer hypos', 'Weight loss', 'Track food', 'Reduce stress'] },
    { key: 'assistant_help', question: 'How would you like the assistant to help you?', options: ['Reminders', 'AI insights', 'Meal suggestions', 'Glucose trends'] },
    { key: 'feedback_pref', question: 'Do you prefer short or detailed feedback?', options: ['Short', 'Detailed', 'Both'] },
    { key: 'gamification', question: 'Would you like motivational nudges or gamification?', options: ['Yes', 'No'] },
    { key: 'sync_health', question: 'Would you like to sync with Apple Health or Google Fit?', options: ['Yes', 'No'] },
    { key: 'biggest_challenge', question: 'What’s your biggest challenge with diabetes right now?' }
  ];
  
  export default questions;
  