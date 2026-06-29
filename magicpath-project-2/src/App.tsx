import { Theme } from './settings/types';
import { FathomAgencyLanding } from './components/generated/FathomAgencyLanding';

let theme: Theme = 'light';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return <FathomAgencyLanding />;
}

export default App;
