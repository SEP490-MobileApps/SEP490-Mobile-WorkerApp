const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
 
export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  }  ,
  ewmh: {
    background: '#3F72AF',    
    foreground:'#FFFFFF',
    repairRequestStatus: {
      inProgress: '#F7B267',
      completed: '#4CAF50',
      inProgressText: '#000034',
      completedText: '#FFFFFF',
    }
  }
};


