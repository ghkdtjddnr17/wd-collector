export const visible = {
  inserted(el, { value }) {
    if (value === true) {
      el.style.visibility = 'visible';
    } else {
      el.style.visibility = 'hidden';
    }
  },
  update(el, { oldValue, value }) {
    if (value === oldValue) {
      return;
    }

    if (value === true) {
      el.style.visibility = 'visible';
    } else {
      el.style.visibility = 'hidden';
    }
  }
};

export const focus = {
  inserted(el) {
    el.focus();
  }
};
