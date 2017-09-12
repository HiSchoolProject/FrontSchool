import counterpart from 'counterpart';

function setEnglishContent() {
  counterpart.registerTranslations('en', {
    localeSwitcher: {
      title: 'Switch Locale: '
    },
    menu: {
      home: 'Home',
      accounts: 'Accounts'
    },
    home: {
      title: 'FrontSchool',
      subtitle: 'FrontSchool is the front end of the HiSchool! Project.',
      offers: {
        offer1: 'Offer 1',
        offer2: 'Offer 2',
        offer3: 'Offer 3'
      }
    }
  });
}

export default setEnglishContent;
