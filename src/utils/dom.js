

export const hasClass = (el, className) => {
  if (el.classList) {
    return el.classList.contains(className);
  }
  const nameArray = el.className.split(' ');
  return nameArray.indexOf(className) > -1;
}

export const addClass = (el, className) => {
  if (el.classList) {
    el.classList.add(className);
  } else {
    const newClass = el.className.split(' ').concat([className]).join(' ');
    el.className = newClass;
  }
}

export const removeClass = (el, className) => {
  if (el.classList) {
    el.classList.remove(className)
  } else {
    if (hasClass(el, className)) {
      const newClass = el.className.split(' ').filter(name => name !== className).join(' ');
      el.className = newClass;
    }
  }
}
