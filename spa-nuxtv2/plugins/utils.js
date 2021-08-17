const utils = {
  name: 'Utils',
  goTop(top) {
    window.scroll({
      top,
      left: 0,
      behavior: 'smooth',
    });
  },
  goToSection(idEl) {
    const el = document.querySelector(`#${idEl}`)
    if (el) {
      const top = (el.getBoundingClientRect().top + window.scrollY) - 60
      this.goTop(top);
    }
  },
  goToScroll(sectionID, TheElement) {
    console.log('seccionNameID', sectionID);
    console.log('TheElement', TheElement);

    if (sectionID) {

      // SET SEO
      const WEB_NAME_PREFIX = process.env.appName + ' - '
      const str = sectionID;
      const strTitle = str.charAt(0).toUpperCase() + str.slice(1);
      document.title = WEB_NAME_PREFIX + strTitle;

      // SET SECTION
      if (TheElement) {
        const element = TheElement; console.log('element', element);
        const top = element.offsetTop; console.log('settt', top-60);
        window.scrollTo(0, top-60);
      } else {
        console.log('no paso!!! scroll', TheElement);
      }
    }
  },
}

export default ({ app, route }, inject) => {
  inject('utils', utils)
}
