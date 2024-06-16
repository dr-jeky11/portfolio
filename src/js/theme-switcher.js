const initializeThemeSwitcher = () => {
  const themeChangeCheckboxArr = document.querySelectorAll('.switch-theme-checkbox');
  const body = document.querySelector('body');
  const key = 'theme';

  const getCurrentTheme = localStorage.getItem(key);
  const isSystemDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  addEventListener('load', () => {
    if (getCurrentTheme === 'dark' || (getCurrentTheme === null && isSystemDarkTheme)) {
      body.classList.add('dark');
      themeChangeCheckboxArr.forEach(el => {
        el.checked = true;
      });
    }

    if (getCurrentTheme === 'light') {
      body.classList.add('light');
      themeChangeCheckboxArr.forEach(el => {
        el.checked = false;
      });
    }
  });

  themeChangeCheckboxArr.forEach(el => {
    el.addEventListener('click', () => {
      if (el.checked === true) {
        localStorage.setItem(key, 'dark');
        body.classList.add('dark');
        body.classList.remove('light');
        themeChangeCheckboxArr.forEach(checkbox => {
          checkbox.checked = true;
        });
      } else {
        localStorage.setItem(key, 'light');
        body.classList.remove('dark');
        body.classList.add('light');
        themeChangeCheckboxArr.forEach(checkbox => {
          checkbox.checked = false;
        });
      }
    });
  });
};

export default initializeThemeSwitcher;