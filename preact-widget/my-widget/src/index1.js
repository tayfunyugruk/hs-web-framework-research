import habitat from "preact-habitat";

import Widget from "./spaDemo";

let _spaDemoWidget = habitat(Widget);

const options = {
  rootMargin: '0px',
  threshold: 1.0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    console.log(entry.intersectionRatio > 0 ? 'visible' : 'invisible');
    if (entry.intersectionRatio > 0) {
      _spaDemoWidget.render({
        selector: '[data-widget-host="habitat"]',
        clean: true
      });
    }
  });
}, options);

const element = document.querySelector('.preview')
observer.observe(element);
