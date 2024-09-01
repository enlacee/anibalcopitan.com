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
  // Util fix: trix redirect to HTTPS (obligatory)
  redirectToHttps() {
    if (process.env.NODE_ENV === 'production') {
      if (location.protocol !== 'https:') {
        location.replace(`https:${location.href.substring(location.protocol.length)}`);
      }
    }
  },
}

export default ({ app, route }, inject) => {
  inject('utils', utils)
}
