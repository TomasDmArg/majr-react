function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var styles = {"flat-light":"_styles-module__flat-light__37uGn","inputLight":"_styles-module__inputLight__5gfdI","button":"_styles-module__button__2hTXI","buttonShadow":"_styles-module__buttonShadow__2Ei4E","buttonDark":"_styles-module__buttonDark__2kUFE","buttonGreen":"_styles-module__buttonGreen__oBX5E","buttonSecondary":"_styles-module__buttonSecondary__1Gipg","buttonMain":"_styles-module__buttonMain__1iiPs","linkAnimated":"_styles-module__linkAnimated__vrVpH","link":"_styles-module__link__71S8l","linkDark":"_styles-module__linkDark__toeZN","iconButton":"_styles-module__iconButton__2570K","navbarBtnActive":"_styles-module__navbarBtnActive__1W0H_","navbarBtnActiveDark":"_styles-module__navbarBtnActiveDark__9TPHE","navbarBtn":"_styles-module__navbarBtn__2gBhj","iconButtonMain":"_styles-module__iconButtonMain__KRwUs","iconButtonDark":"_styles-module__iconButtonDark__1vMvm","navbarBtnDark":"_styles-module__navbarBtnDark__1_LN9","rounded":"_styles-module__rounded__3gdqJ","inputWrapper":"_styles-module__inputWrapper__1V-hJ","input":"_styles-module__input__2IYfc","textarea":"_styles-module__textarea__24IuX","inputDark":"_styles-module__inputDark__2johG","textareaDark":"_styles-module__textareaDark__2tmLN","textareaproperties":"_styles-module__textareaproperties__b3Ocf","radio":"_styles-module__radio__kkn6a","spotlight":"_styles-module__spotlight__1SOsU","spotlightDark":"_styles-module__spotlightDark__2YjhR","checkbox":"_styles-module__checkbox__3kknd","checkboxDark":"_styles-module__checkboxDark__2eX8z","radioDark":"_styles-module__radioDark__3QjCQ","radio__inner":"_styles-module__radio__inner__2t5pY","spotlight__inner":"_styles-module__spotlight__inner__hynTg","spotlight__innerActive":"_styles-module__spotlight__innerActive__1WUYa","checkbox__inner":"_styles-module__checkbox__inner__3O63b","radio__innerActive":"_styles-module__radio__innerActive__1y9gd","checkbox__innerActive":"_styles-module__checkbox__innerActive__2nnyc","select__inner":"_styles-module__select__inner__K4kjf","select__innerDark":"_styles-module__select__innerDark__3oq5m","select__options":"_styles-module__select__options__2OWeN","select__optionsDark":"_styles-module__select__optionsDark__2fH9V","switch":"_styles-module__switch__1zvwZ","switchDark":"_styles-module__switchDark__204Pu","switch__inner":"_styles-module__switch__inner__yLiXT","switch__innerActive":"_styles-module__switch__innerActive__1AOzu","footerButton":"_styles-module__footerButton__17aKo","footerButtonTwitter":"_styles-module__footerButtonTwitter__qpthA","footerButtonDark":"_styles-module__footerButtonDark__3-NH5","profile":"_styles-module__profile__2FLLu","image":"_styles-module__image__2hdkJ","imageDark":"_styles-module__imageDark___VMFw","profileDark":"_styles-module__profileDark__22AHo","switch2":"_styles-module__switch2__3isoC","switch2Dark":"_styles-module__switch2Dark__VPqNN","switch2__inner":"_styles-module__switch2__inner__1PWur","switch2__innerActive":"_styles-module__switch2__innerActive__2Qt4S","progressWrapper":"_styles-module__progressWrapper__fuT1A","progressWrapperDark":"_styles-module__progressWrapperDark__3Awf9","progress":"_styles-module__progress__2EqlW","progressDark":"_styles-module__progressDark__1YQhb","progressWrapper__lines":"_styles-module__progressWrapper__lines__f2cuS","tag":"_styles-module__tag__kR9pS","tagDark":"_styles-module__tagDark__3ocXl","addButton":"_styles-module__addButton__HUrcY","steps":"_styles-module__steps__tX7xC","stepsDark":"_styles-module__stepsDark__3hKP7","stepsBar":"_styles-module__stepsBar__3G1JP","stepsBarDark":"_styles-module__stepsBarDark__27qPP","stepsBarActive":"_styles-module__stepsBarActive__3zoqI","stepsNumber":"_styles-module__stepsNumber__i6jAu","stepsNumberDark":"_styles-module__stepsNumberDark__3Y_ou","stepsNumberInner":"_styles-module__stepsNumberInner__2MjMj","stepsNumberInnerActive":"_styles-module__stepsNumberInnerActive__2j8cR","flatBox":"_styles-module__flatBox__1J_Qp","flatBoxDark":"_styles-module__flatBoxDark__3aasJ","navbarLight":"_styles-module__navbarLight__2o0Ql","navbarDark":"_styles-module__navbarDark__eP6C_","footer":"_styles-module__footer__24OKz","footerDark":"_styles-module__footerDark__1PLfW","circle":"_styles-module__circle__3PfrK","buttonShadowBlack":"_styles-module__buttonShadowBlack__3DJzH","buttonShadowGreen":"_styles-module__buttonShadowGreen__29kiG","buttonShadowYellow":"_styles-module__buttonShadowYellow__6iYFk","buttonShadowBlue":"_styles-module__buttonShadowBlue__KYpse","buttonShadowRed":"_styles-module__buttonShadowRed__3uH9M","circleYellow":"_styles-module__circleYellow__2WdWD","circleBlue":"_styles-module__circleBlue__2C_yZ","circleRed":"_styles-module__circleRed__e7aeM","circleActive":"_styles-module__circleActive__1oQ1A","buttonSm":"_styles-module__buttonSm__2b7Ys","altFont":"_styles-module__altFont__2QxlF","buttonFill":"_styles-module__buttonFill__3X8zV"};

var Button = function Button(_ref) {
  var text = _ref.text,
    onClick = _ref.onClick,
    variant = _ref.variant,
    rounded = _ref.rounded,
    icon = _ref.icon,
    iconPosition = _ref.iconPosition,
    className = _ref.className,
    size = _ref.size,
    altFont = _ref.altFont;
  var classname = {
    light: styles.button,
    dark: styles.buttonDark,
    main: styles.buttonMain,
    highlight: styles.buttonHighlight,
    highlightdark: styles.buttonHighlightDark,
    green: styles.buttonGreen
  };
  var sizesClassNames = {
    small: styles.buttonSm,
    normal: styles.buttonMd,
    fillWidth: styles.buttonFill
  };
  return React.createElement("button", {
    className: (variant ? classname[variant] : classname.light) + " " + (rounded ? styles.rounded : '') + " " + (className || '') + " " + (size ? sizesClassNames[size] : '') + " " + (altFont ? styles.altFont : '') + "  \n      ",
    onClick: onClick
  }, iconPosition === 'left' && icon, text, iconPosition === 'right' && icon);
};

var Link = function Link(_ref) {
  var text = _ref.text,
    link = _ref.link,
    variant = _ref.variant;
  var classname = {
    light: styles.link,
    dark: styles.linkDark,
    animated: styles.linkAnimated
  };
  return React.createElement("a", {
    className: "" + (variant ? classname[variant] : classname.light),
    onClick: function onClick() {
      return window.open(link, '_blank');
    }
  }, text);
};

var IconButton = function IconButton(_ref) {
  var icon = _ref.icon,
    onClick = _ref.onClick,
    variant = _ref.variant,
    rounded = _ref.rounded;
  var classname = {
    light: styles.iconButton,
    dark: styles.iconButtonDark,
    main: styles.iconButtonMain
  };
  return React.createElement("button", {
    className: (variant ? classname[variant] : classname.light) + " " + (rounded ? styles.rounded : ''),
    onClick: onClick
  }, icon);
};

var NavbarBtn = function NavbarBtn(_ref) {
  var icon = _ref.icon,
    text = _ref.text,
    onClick = _ref.onClick,
    variant = _ref.variant,
    rounded = _ref.rounded;
  var classname = {
    light: styles.navbarBtn,
    dark: styles.navbarBtnDark,
    active: styles.navbarBtnActive,
    activeDark: styles.navbarBtnActiveDark
  };
  return React.createElement("button", {
    className: (variant ? classname[variant] : classname.light) + " " + (rounded ? styles.rounded : ''),
    onClick: onClick
  }, icon, variant && variant.includes('active') ? text : null);
};

var Input = function Input(_ref) {
  var value = _ref.value,
    _onChange = _ref.onChange,
    variant = _ref.variant,
    placeholder = _ref.placeholder;
  var classname = {
    light: styles.input,
    dark: styles.inputDark,
    password: styles.input,
    passwordDark: styles.inputDark,
    search: styles.input,
    searchDark: styles.inputDark
  };
  var _React$useState = React.useState(false),
    seePass = _React$useState[0],
    setSeePass = _React$useState[1];
  return React.createElement("section", {
    className: "" + styles.inputWrapper
  }, React.createElement("input", {
    type: variant !== null && variant !== void 0 && variant.includes('password') && !seePass ? 'password' : 'text',
    className: "" + (variant ? classname[variant] : classname.light),
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    placeholder: placeholder || 'Enter text'
  }), variant === 'password' ? React.createElement("svg", {
    onClick: function onClick() {
      return setSeePass(!seePass);
    },
    width: '14',
    height: '11',
    viewBox: '0 0 14 11',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M7.25 9.25C5.05731 9.25 3.16279 8.02526 1.57907 5.375C3.16279 2.72474 5.05731 1.5 7.25 1.5C9.44269 1.5 11.3372 2.72474 12.9209 5.375C11.3372 8.02526 9.44269 9.25 7.25 9.25ZM7.25 0.5C4.50999 0.5 2.28697 2.11517 0.56588 5.12692C0.478035 5.28064 0.478035 5.46936 0.56588 5.62308C2.28697 8.63483 4.50999 10.25 7.25 10.25C9.99 10.25 12.213 8.63483 13.9341 5.62308C14.022 5.46936 14.022 5.28064 13.9341 5.12692C12.213 2.11517 9.99 0.5 7.25 0.5ZM6.5 5.375C6.5 4.96079 6.83578 4.625 7.25 4.625C7.66421 4.625 8 4.96079 8 5.375C8 5.78921 7.66421 6.125 7.25 6.125C6.83578 6.125 6.5 5.78921 6.5 5.375ZM7.25 3.625C6.2835 3.625 5.5 4.4085 5.5 5.375C5.5 6.3415 6.2835 7.125 7.25 7.125C8.21649 7.125 9 6.3415 9 5.375C9 4.4085 8.21649 3.625 7.25 3.625Z',
    fill: '#38383B',
    fillOpacity: '0.5'
  })) : null, variant === 'passwordDark' ? React.createElement("svg", {
    onClick: function onClick() {
      return setSeePass(!seePass);
    },
    width: '14',
    height: '11',
    viewBox: '0 0 14 11',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M7.25 9.25C5.05731 9.25 3.16279 8.02526 1.57907 5.375C3.16279 2.72474 5.05731 1.5 7.25 1.5C9.44269 1.5 11.3372 2.72474 12.9209 5.375C11.3372 8.02526 9.44269 9.25 7.25 9.25ZM7.25 0.5C4.50999 0.5 2.28697 2.11517 0.56588 5.12692C0.478035 5.28064 0.478035 5.46936 0.56588 5.62308C2.28697 8.63483 4.50999 10.25 7.25 10.25C9.99 10.25 12.213 8.63483 13.9341 5.62308C14.022 5.46936 14.022 5.28064 13.9341 5.12692C12.213 2.11517 9.99 0.5 7.25 0.5ZM6.5 5.375C6.5 4.96079 6.83578 4.625 7.25 4.625C7.66421 4.625 8 4.96079 8 5.375C8 5.78921 7.66421 6.125 7.25 6.125C6.83578 6.125 6.5 5.78921 6.5 5.375ZM7.25 3.625C6.2835 3.625 5.5 4.4085 5.5 5.375C5.5 6.3415 6.2835 7.125 7.25 7.125C8.21649 7.125 9 6.3415 9 5.375C9 4.4085 8.21649 3.625 7.25 3.625Z',
    fill: '#f9f9f9',
    fillOpacity: '0.5'
  })) : null, variant === 'search' ? React.createElement("svg", {
    width: '12',
    height: '12',
    viewBox: '0 0 12 12',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M1 4.74828C1 2.67816 2.67816 1 4.74828 1C6.81839 1 8.49655 2.67816 8.49655 4.74828C8.49655 6.81839 6.81839 8.49655 4.74828 8.49655C2.67816 8.49655 1 6.81839 1 4.74828ZM4.74828 0C2.12588 0 0 2.12588 0 4.74828C0 7.37068 2.12588 9.49655 4.74828 9.49655C5.87936 9.49655 6.91807 9.10107 7.73367 8.44084L11.0706 11.7778C11.2659 11.973 11.5824 11.973 11.7777 11.7778C11.973 11.5825 11.973 11.2659 11.7777 11.0706L8.44079 7.73374C9.10105 6.91812 9.49655 5.87939 9.49655 4.74828C9.49655 2.12588 7.37068 0 4.74828 0Z',
    fill: '#38383B',
    fillOpacity: '0.5'
  })) : null, variant === 'searchDark' ? React.createElement("svg", {
    width: '12',
    height: '12',
    viewBox: '0 0 12 12',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M1 4.74828C1 2.67816 2.67816 1 4.74828 1C6.81839 1 8.49655 2.67816 8.49655 4.74828C8.49655 6.81839 6.81839 8.49655 4.74828 8.49655C2.67816 8.49655 1 6.81839 1 4.74828ZM4.74828 0C2.12588 0 0 2.12588 0 4.74828C0 7.37068 2.12588 9.49655 4.74828 9.49655C5.87936 9.49655 6.91807 9.10107 7.73367 8.44084L11.0706 11.7778C11.2659 11.973 11.5824 11.973 11.7777 11.7778C11.973 11.5825 11.973 11.2659 11.7777 11.0706L8.44079 7.73374C9.10105 6.91812 9.49655 5.87939 9.49655 4.74828C9.49655 2.12588 7.37068 0 4.74828 0Z',
    fill: '#f9f9f9',
    fillOpacity: '0.5'
  })) : null);
};

var Textarea = function Textarea(_ref) {
  var text = _ref.text,
    setText = _ref.setText,
    variant = _ref.variant,
    placeholder = _ref.placeholder;
  var classname = {
    light: styles.textarea,
    dark: styles.textareaDark
  };
  return React.createElement("textarea", {
    className: "" + (variant ? classname[variant] : classname.light),
    value: text,
    onChange: function onChange(e) {
      return setText(e.target.value);
    },
    placeholder: placeholder || 'Enter text'
  });
};

var Radio = function Radio(_ref) {
  var radio = _ref.radio,
    setRadio = _ref.setRadio,
    index = _ref.index,
    variant = _ref.variant;
  var classname = {
    light: styles.radio,
    dark: styles.radioDark
  };
  var handleClick = function handleClick() {
    var newRadio = radio.map(function () {
      return false;
    });
    newRadio[index] = true;
    setRadio(newRadio);
  };
  return React.createElement("div", {
    className: "" + (variant ? classname[variant] : classname.light),
    onClick: function onClick() {
      return handleClick();
    }
  }, React.createElement("div", {
    className: radio[index] ? styles.radio__innerActive : styles.radio__inner
  }));
};

var Checkbox = function Checkbox(_ref) {
  var checkbox = _ref.checkbox,
    setCheckbox = _ref.setCheckbox,
    index = _ref.index,
    variant = _ref.variant;
  var classname = {
    light: styles.checkbox,
    dark: styles.checkboxDark
  };
  var handleClick = function handleClick() {
    setCheckbox(checkbox.map(function (r, i) {
      return i === index ? !r : r;
    }));
  };
  return React.createElement("div", {
    className: "" + (variant ? classname[variant] : classname.light),
    onClick: function onClick() {
      return handleClick();
    }
  }, React.createElement("div", {
    className: checkbox[index] ? styles.checkbox__innerActive : styles.checkbox__inner
  }));
};

var Spotlight = function Spotlight(_ref) {
  var clicked = _ref.clicked,
    setClicked = _ref.setClicked,
    variant = _ref.variant;
  var classname = {
    light: styles.spotlight,
    dark: styles.spotlightDark
  };
  var handleClick = function handleClick() {
    setClicked(!clicked);
  };
  return React.createElement("div", {
    className: "" + (variant ? classname[variant] : classname.light),
    onClick: function onClick() {
      return handleClick();
    }
  }, React.createElement("div", {
    className: clicked ? styles.spotlight__innerActive : styles.spotlight__inner
  }, React.createElement("svg", {
    width: '23',
    height: '23',
    viewBox: '0 0 23 23',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M12 1C12 0.447715 11.5523 0 11 0C10.4477 0 10 0.447715 10 1V1.0125C10 1.56479 10.4477 2.0125 11 2.0125C11.5523 2.0125 12 1.56479 12 1.0125V1ZM11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15C13.2091 15 15 13.2091 15 11C15 8.79086 13.2091 7 11 7ZM5 11C5 7.68629 7.68629 5 11 5C14.3137 5 17 7.68629 17 11C17 14.3137 14.3137 17 11 17C7.68629 17 5 14.3137 5 11ZM0 11C0 10.4477 0.447715 10 1 10H1.0125C1.56479 10 2.0125 10.4477 2.0125 11C2.0125 11.5523 1.56479 12 1.0125 12H1C0.447715 12 0 11.5523 0 11ZM20 11C20 10.4477 20.4477 10 21 10H21.0125C21.5648 10 22.0125 10.4477 22.0125 11C22.0125 11.5523 21.5648 12 21.0125 12H21C20.4477 12 20 11.5523 20 11ZM12 21C12 20.4477 11.5523 20 11 20C10.4477 20 10 20.4477 10 21V21.0125C10 21.5648 10.4477 22.0125 11 22.0125C11.5523 22.0125 12 21.5648 12 21.0125V21ZM3.16789 3.16789C3.55842 2.77737 4.19158 2.77737 4.58211 3.16789L4.59461 3.18039C4.98513 3.57092 4.98513 4.20408 4.59461 4.59461C4.20408 4.98513 3.57092 4.98513 3.18039 4.59461L3.16789 4.58211C2.77737 4.19158 2.77737 3.55842 3.16789 3.16789ZM18.8322 3.16794C18.4417 2.77739 17.8085 2.77735 17.4179 3.16784C17.0274 3.55834 17.0273 4.1915 17.4178 4.58206L17.4303 4.59456C17.8208 4.98511 18.454 4.98515 18.8446 4.59466C19.2351 4.20416 19.2352 3.571 18.8447 3.18044L18.8322 3.16794ZM17.4179 17.4179C17.8084 17.0274 18.4416 17.0274 18.8321 17.4179L18.8446 17.4304C19.2351 17.8209 19.2351 18.4541 18.8446 18.8446C18.4541 19.2351 17.8209 19.2351 17.4304 18.8446L17.4179 18.8321C17.0274 18.4416 17.0274 17.8084 17.4179 17.4179ZM4.58206 17.4178C4.1915 17.0273 3.55834 17.0274 3.16784 17.4179C2.77735 17.8085 2.77739 18.4417 3.16794 18.8322L3.18044 18.8447C3.571 19.2352 4.20416 19.2351 4.59466 18.8446C4.98515 18.454 4.98511 17.8208 4.59456 17.4303L4.58206 17.4178Z',
    fill: variant === 'light' && !clicked ? '#de1149' : '#f9f9f9',
    style: {
      transition: 'all 0.3s ease-in-out'
    }
  }))));
};

var Select = function Select(_ref) {
  var select = _ref.select,
    setSelect = _ref.setSelect,
    def = _ref.def,
    variant = _ref.variant;
  var _React$useState = React.useState(false),
    open = _React$useState[0],
    setOpen = _React$useState[1];
  var _React$useState2 = React.useState(-1),
    selected = _React$useState2[0],
    setSelected = _React$useState2[1];
  var handleClick = function handleClick(index) {
    setSelected(index);
    setSelect(index);
    setOpen(false);
  };
  return React.createElement("div", {
    className: styles.select
  }, React.createElement("div", {
    className: variant === 'dark' ? styles.select__innerDark : styles.select__inner,
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, selected !== -1 ? select[selected] : def || 'Select', React.createElement("svg", {
    width: '12',
    height: '7',
    viewBox: '0 0 12 7',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    opacity: '0.5',
    d: 'M1 1L6 6L11 1H1Z',
    fill: variant === 'dark' ? '#f9f9f9' : '#38383B',
    stroke: variant === 'dark' ? '#f9f9f9' : '#38383B',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }))), open && React.createElement("div", {
    className: variant === 'dark' ? styles.select__optionsDark : styles.select__options
  }, select.map(function (r, i) {
    return React.createElement("div", {
      key: i,
      className: styles.select__option,
      onClick: function onClick() {
        return handleClick(i);
      }
    }, r);
  })));
};

var ThemeSwitch = function ThemeSwitch(_ref) {
  var value = _ref.value,
    setSwitch = _ref.setSwitch;
  return React.createElement("div", {
    className: "" + (!value ? styles["switch"] : styles.switchDark),
    onClick: function onClick() {
      return setSwitch(!value);
    }
  }, React.createElement("div", {
    className: !value ? styles.switch__innerActive : styles.switch__inner
  }, React.createElement("svg", {
    width: '19',
    height: '19',
    viewBox: '0 0 19 19',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    d: 'M9.4612 12.6924C11.1605 12.6924 12.5381 11.3148 12.5381 9.6155C12.5381 7.91616 11.1605 6.53857 9.4612 6.53857C7.76186 6.53857 6.38428 7.91616 6.38428 9.6155C6.38428 11.3148 7.76186 12.6924 9.4612 12.6924Z',
    stroke: '#f9f9f9',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }), React.createElement("path", {
    d: 'M2.53821 9.61558H3.30744M9.46128 2.6925V3.46174M15.6151 9.61558H16.3844M9.46128 15.7694V16.5387M4.53821 4.6925L5.07667 5.23097M14.3844 4.6925L13.8459 5.23097M13.8459 14.0002L14.3844 14.5387M5.07667 14.0002L4.53821 14.5387',
    stroke: '#f9f9f9',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }))), React.createElement("div", {
    className: value ? styles.switch__innerActive : styles.switch__inner
  }, React.createElement("svg", {
    width: '20',
    height: '19',
    viewBox: '0 0 20 19',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    d: 'M9.92312 2.69243C10.0247 2.69243 10.1254 2.69243 10.2254 2.69243C9.23722 3.61067 8.60203 4.84616 8.43026 6.18414C8.25849 7.52212 8.56101 8.878 9.28522 10.0161C10.0094 11.1541 11.1096 12.0025 12.3943 12.4136C13.6791 12.8247 15.0674 12.7725 16.3177 12.2663C15.8368 13.4236 15.0506 14.4286 14.0433 15.1742C13.0359 15.9197 11.845 16.3778 10.5977 16.4997C9.35032 16.6215 8.09332 16.4024 6.96072 15.8658C5.82813 15.3292 4.86243 14.4953 4.16665 13.4529C3.47086 12.4105 3.07108 11.1988 3.00995 9.94703C2.94882 8.69525 3.22864 7.45035 3.81955 6.34514C4.41047 5.23992 5.29032 4.31584 6.36524 3.67146C7.44017 3.02708 8.66985 2.68658 9.92312 2.68628V2.69243Z',
    stroke: !value ? '#171717' : '#f9f9f9',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }))));
};
var SwitchComponent = function SwitchComponent(_ref2) {
  var value = _ref2.value,
    setSwitch = _ref2.setSwitch,
    variant = _ref2.variant;
  return React.createElement("div", {
    className: "" + (variant === 'light' ? styles.switch2 : styles.switch2Dark),
    onClick: function onClick() {
      return setSwitch(!value);
    }
  }, React.createElement("div", {
    className: value ? styles.switch2__innerActive : styles.switch2__inner
  }));
};

var FooterButton = function FooterButton(_ref) {
  var variant = _ref.variant,
    text = _ref.text,
    onClick = _ref.onClick;
  var classname = {
    light: styles.footerButton,
    dark: styles.footerButtonDark,
    twitter: styles.footerButtonTwitter
  };
  return React.createElement("button", {
    className: "" + (variant ? classname[variant] : classname.light),
    onClick: onClick
  }, variant !== 'twitter' ? text : React.createElement("svg", {
    width: '18',
    height: '15',
    viewBox: '0 0 18 15',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    d: 'M16.4715 1.58279C15.7229 1.94959 14.9893 2.09856 14.2258 2.32388C13.3866 1.37693 12.1425 1.32453 10.947 1.77218C9.75153 2.21983 8.96852 3.31424 8.98574 4.5696V5.31818C6.55662 5.38031 4.39324 4.27392 2.99715 2.32388C2.99715 2.32388 -0.133389 7.88803 5.99144 10.5582C4.59011 11.4917 3.19253 12.1212 1.5 12.0553C3.97628 13.405 6.67489 13.8691 9.01119 13.1909C11.6911 12.4124 13.8934 10.404 14.7385 7.39547C14.9906 6.48046 15.1158 5.53516 15.1106 4.58607C15.1091 4.39968 16.2409 2.51102 16.4715 1.58204V1.58279Z',
    fill: 'white',
    stroke: 'white',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  })));
};

var Profile = function Profile(_ref) {
  var variant = _ref.variant,
    url = _ref.url,
    alt = _ref.alt,
    size = _ref.size;
  var classname = {
    light: styles.profile,
    dark: styles.profileDark
  };
  var getSize = function getSize() {
    var res = '30px';
    if (size === 'md') res = '50px';
    if (size === 'lg') res = '70px';
    return res;
  };
  return React.createElement("div", {
    className: "" + (variant ? classname[variant] : classname.light)
  }, React.createElement("img", {
    src: url,
    alt: alt || 'Profile',
    style: {
      width: getSize(),
      height: getSize()
    }
  }));
};

var Image = function Image(_ref) {
  var variant = _ref.variant,
    url = _ref.url,
    alt = _ref.alt,
    width = _ref.width,
    height = _ref.height;
  var classname = {
    light: styles.image,
    dark: styles.imageDark
  };
  return React.createElement("div", {
    className: "" + (variant ? classname[variant] : classname.light)
  }, React.createElement("img", {
    src: url,
    alt: alt || 'Image',
    style: {
      width: width + 'px',
      height: height + 'px'
    }
  }));
};

var Progress = function Progress(_ref) {
  var variant = _ref.variant,
    value = _ref.value,
    max = _ref.max,
    width = _ref.width;
  var classname = {
    light: styles.progress,
    dark: styles.progressDark
  };
  var wrapperClass = {
    light: styles.progressWrapper,
    dark: styles.progressWrapperDark
  };
  return React.createElement("div", {
    className: "" + (variant ? wrapperClass[variant] : wrapperClass.light),
    style: {
      width: width
    }
  }, React.createElement("div", {
    className: "" + (variant ? classname[variant] : classname.light),
    style: {
      width: value / max * 100 + '%'
    }
  }));
};
var ProgressWDashes = function ProgressWDashes(_ref2) {
  var variant = _ref2.variant,
    value = _ref2.value,
    max = _ref2.max,
    width = _ref2.width;
  var classname = {
    light: styles.progress,
    dark: styles.progressDark
  };
  var wrapperClass = {
    light: styles.progressWrapper,
    dark: styles.progressWrapperDark
  };
  return React.createElement("div", {
    className: "" + (variant ? wrapperClass[variant] : wrapperClass.light),
    style: {
      width: width
    }
  }, React.createElement("div", {
    className: "" + (variant ? classname[variant] : classname.light),
    style: {
      width: value / max * 100 + '%'
    }
  }), React.createElement("section", {
    className: styles.progressWrapper__lines
  }, [].concat(Array(max)).map(function (_, i) {
    return React.createElement("div", {
      key: i
    });
  })));
};

var Tag = function Tag(_ref) {
  var theme = _ref.theme,
    icon = _ref.icon,
    text = _ref.text,
    onClick = _ref.onClick,
    color = _ref.color;
  var classname = {
    light: styles.tag,
    dark: styles.tagDark
  };
  if (!color) color = theme === 'dark' ? '#f9f9f9' : '#171717';
  return React.createElement("button", {
    className: "" + (theme ? classname[theme] : classname.light),
    onClick: onClick,
    style: {
      color: color
    }
  }, text, icon || null);
};

var AddButton = function AddButton(_ref) {
  var onClick = _ref.onClick;
  return React.createElement("button", {
    className: styles.addButton,
    onClick: onClick
  }, React.createElement("svg", {
    width: '17',
    height: '17',
    viewBox: '0 0 17 17',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("g", {
    clipPath: 'url(#clip0_229_730)'
  }, React.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M9.5 3.54175C9.5 2.98946 9.05228 2.54175 8.5 2.54175C7.94772 2.54175 7.5 2.98946 7.5 3.54175V7.5H3.54199C2.98971 7.5 2.54199 7.94772 2.54199 8.5C2.54199 9.05228 2.98971 9.5 3.54199 9.5H7.5V13.4584C7.5 14.0107 7.94772 14.4584 8.5 14.4584C9.05228 14.4584 9.5 14.0107 9.5 13.4584V9.5H13.4587C14.0109 9.5 14.4587 9.05228 14.4587 8.5C14.4587 7.94772 14.0109 7.5 13.4587 7.5H9.5V3.54175Z',
    fill: '#F9F9F9'
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: 'clip0_229_730'
  }, React.createElement("rect", {
    width: '17',
    height: '17',
    fill: 'white'
  })))));
};

var IconVerified = function IconVerified() {
  return React.createElement("svg", {
    width: '12',
    height: '12',
    viewBox: '0 0 12 12',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("g", {
    clipPath: 'url(#clip0_2_944)'
  }, React.createElement("path", {
    d: 'M3.13635 6L5.45453 8.5L10.0909 3.5',
    stroke: '#DE1149',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: 'clip0_2_944'
  }, React.createElement("rect", {
    width: '11.1273',
    height: '12',
    fill: 'white',
    transform: 'translate(0.818176)'
  }))));
};

var IconCompatible = function IconCompatible() {
  return React.createElement("svg", {
    width: '12',
    height: '11',
    viewBox: '0 0 12 11',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    d: 'M5.9965 8.874L2.9105 10.4965L3.5 7.06L1 4.6265L4.45 4.1265L5.993 1L7.536 4.1265L10.986 4.6265L8.486 7.06L9.0755 10.4965L5.9965 8.874Z',
    stroke: '#009410',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }));
};

var IconReport = function IconReport() {
  return React.createElement("svg", {
    width: '11',
    height: '10',
    viewBox: '0 0 11 10',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    d: 'M5.50351 4.01587V5.01587M5.50351 7.01587V7.02087',
    stroke: '#FCCA46',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }), React.createElement("path", {
    d: 'M2.00351 9.01588H9.00351C9.16667 9.01473 9.32706 8.97369 9.47071 8.89631C9.61435 8.81894 9.73689 8.7076 9.82762 8.572C9.91835 8.43639 9.97452 8.28065 9.99124 8.11835C10.008 7.95605 9.9847 7.79213 9.92351 7.64088L6.37351 1.51588C6.28703 1.35958 6.16027 1.22929 6.00639 1.13857C5.85251 1.04785 5.67714 1 5.49851 1C5.31988 1 5.14451 1.04785 4.99064 1.13857C4.83676 1.22929 4.70999 1.35958 4.62351 1.51588L1.07351 7.64088C1.01348 7.78866 0.98968 7.94867 1.00409 8.10753C1.0185 8.26639 1.0707 8.4195 1.15634 8.55408C1.24198 8.68866 1.35857 8.80079 1.49638 8.88113C1.63418 8.96146 1.78921 9.00766 1.94851 9.01588',
    stroke: '#FCCA46',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }));
};

var StepsBar = function StepsBar(_ref) {
  var active = _ref.active,
    theme = _ref.theme;
  return React.createElement("div", {
    className: (theme === 'dark' ? styles.stepsBarDark : styles.stepsBar) + " " + (active ? styles.stepsBarActive : '')
  });
};
var StepsNumber = function StepsNumber(_ref2) {
  var number = _ref2.number,
    active = _ref2.active,
    theme = _ref2.theme;
  return React.createElement("div", {
    className: (theme === 'dark' ? styles.stepsNumberDark : styles.stepsNumber) + " "
  }, React.createElement("div", {
    className: styles.stepsNumberInner + " " + (active ? styles.stepsNumberInnerActive : '')
  }, number));
};
var Steps = function Steps(_ref3) {
  var current = _ref3.current,
    total = _ref3.total,
    variant = _ref3.variant;
  return React.createElement("div", {
    className: variant === 'dark' ? styles.stepsDark : styles.steps
  }, React.createElement(StepsBar, {
    active: current > 0,
    theme: variant
  }), Array.from(Array(total).keys()).map(function (step) {
    return React.createElement(React.Fragment, {
      key: step
    }, React.createElement(StepsNumber, {
      number: step + 1,
      active: current >= step + 1,
      theme: variant
    }), step < total - 1 && React.createElement(StepsBar, {
      active: current > step + 1,
      theme: variant
    }));
  }), React.createElement(StepsBar, {
    active: false,
    theme: variant
  }));
};

var FlatBox = function FlatBox(_ref) {
  var variant = _ref.variant,
    width = _ref.width,
    height = _ref.height,
    children = _ref.children;
  var classname = {
    light: styles.flatBox,
    dark: styles.flatBoxDark
  };
  return React.createElement("div", {
    className: "" + (variant ? classname[variant] : classname.light),
    style: {
      width: width,
      height: height
    }
  }, children);
};

var Navbar = function Navbar(_ref) {
  var theme = _ref.theme,
    variant = _ref.variant,
    buttons = _ref.buttons,
    setTheme = _ref.setTheme;
  var _React$useState = React.useState(false),
    open = _React$useState[0],
    setOpen = _React$useState[1];
  var NavbarContent = function NavbarContent() {
    return React.createElement("section", null, variant === 'theme' ? React.createElement(ThemeSwitch, {
      value: theme,
      setSwitch: setTheme
    }) : variant === 'buttons' ? buttons === null || buttons === void 0 ? void 0 : buttons.map(function (button, index) {
      return React.createElement(Button, {
        key: index,
        text: button[0],
        onClick: function onClick() {
          var _window;
          return (_window = window) === null || _window === void 0 ? void 0 : _window.open(button[1], '_blank', 'noopener,noreferrer');
        },
        variant: theme ? 'dark' : 'light'
      });
    }) : null);
  };
  return React.createElement("nav", {
    className: "" + (theme ? styles.navbarDark : styles.navbarLight)
  }, React.createElement("section", null, React.createElement("h2", null, "MAJR ", React.createElement("b", null, "DAO")), !open ? React.createElement("svg", {
    onClick: function onClick() {
      return setOpen(!open);
    },
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    strokeWidth: '2',
    stroke: theme ? '#f9f9f9' : '#171717',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, React.createElement("path", {
    stroke: 'none',
    d: 'M0 0h24v24H0z',
    fill: 'none'
  }), React.createElement("line", {
    x1: '4',
    y1: '6',
    x2: '20',
    y2: '6'
  }), React.createElement("line", {
    x1: '4',
    y1: '12',
    x2: '20',
    y2: '12'
  }), React.createElement("line", {
    x1: '4',
    y1: '18',
    x2: '20',
    y2: '18'
  })) : React.createElement("svg", {
    onClick: function onClick() {
      return setOpen(!open);
    },
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    strokeWidth: '2',
    stroke: theme ? '#f9f9f9' : '#171717',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, React.createElement("path", {
    stroke: 'none',
    d: 'M0 0h24v24H0z',
    fill: 'none'
  }), React.createElement("line", {
    x1: '18',
    y1: '6',
    x2: '6',
    y2: '18'
  }), React.createElement("line", {
    x1: '6',
    y1: '6',
    x2: '18',
    y2: '18'
  }))), React.createElement(NavbarContent, null), open && React.createElement("section", null), open ? React.createElement(NavbarContent, null) : null);
};

var Footer = function Footer(_ref) {
  var variant = _ref.variant,
    links = _ref.links,
    twitter = _ref.twitter;
  var classname = {
    light: styles.footer,
    dark: styles.footerDark
  };
  return React.createElement("footer", {
    className: "" + (variant ? classname[variant] : classname.light)
  }, React.createElement("section", null, links.map(function (link, index) {
    return React.createElement(FooterButton, {
      key: index,
      onClick: function onClick() {
        return window.open(link[1], '_blank');
      },
      text: link[0],
      variant: variant
    });
  })), React.createElement("section", null, twitter ? React.createElement(FooterButton, {
    onClick: function onClick() {
      return window.open(twitter, '_blank');
    },
    text: 'Twitter',
    variant: 'twitter'
  }) : null));
};

var Circle = function Circle(_ref) {
  var variant = _ref.variant,
    icon = _ref.icon,
    active = _ref.active,
    onClick = _ref.onClick,
    className = _ref.className;
  var classes = {
    yellow: styles.circleYellow,
    blue: styles.circleBlue,
    red: styles.circleRed
  };
  return React__default.createElement("button", {
    className: classes[variant] + " " + (active ? styles.circleActive : '') + " " + (className || ''),
    onClick: onClick
  }, icon);
};

var ButtonShadow = function ButtonShadow(_ref) {
  var text = _ref.text,
    onClick = _ref.onClick,
    variant = _ref.variant,
    rounded = _ref.rounded,
    icon = _ref.icon,
    iconPosition = _ref.iconPosition,
    className = _ref.className,
    size = _ref.size,
    altFont = _ref.altFont,
    color = _ref.color;
  var classname = {
    light: styles.buttonShadow,
    dark: styles.buttonShadowDark
  };
  var colors = {
    yellow: styles.buttonShadowYellow,
    blue: styles.buttonShadowBlue,
    red: styles.buttonShadowRed,
    green: styles.buttonShadowGreen,
    black: styles.buttonShadowBlack
  };
  var sizesClassNames = {
    small: styles.buttonSm,
    normal: styles.buttonMd,
    fillWidth: styles.buttonFill
  };
  return React.createElement("button", {
    className: (variant ? classname[variant] : classname.light) + " " + (rounded ? styles.rounded : '') + " " + (className || '') + " " + (size ? sizesClassNames[size] : '') + " " + (altFont ? styles.altFont : '') + " " + (color ? colors[color] : '') + "  \n      ",
    onClick: onClick
  }, iconPosition === 'left' && icon, text, iconPosition === 'right' && icon);
};

exports.AddButton = AddButton;
exports.Button = Button;
exports.ButtonShadow = ButtonShadow;
exports.Checkbox = Checkbox;
exports.Circle = Circle;
exports.FlatBox = FlatBox;
exports.Footer = Footer;
exports.FooterButton = FooterButton;
exports.IconButton = IconButton;
exports.IconCompatible = IconCompatible;
exports.IconReport = IconReport;
exports.IconVerified = IconVerified;
exports.Image = Image;
exports.Input = Input;
exports.Link = Link;
exports.Navbar = Navbar;
exports.NavbarBtn = NavbarBtn;
exports.Profile = Profile;
exports.Progress = Progress;
exports.ProgressWDashes = ProgressWDashes;
exports.Radio = Radio;
exports.Select = Select;
exports.Spotlight = Spotlight;
exports.Steps = Steps;
exports.StepsBar = StepsBar;
exports.StepsNumber = StepsNumber;
exports.SwitchComponent = SwitchComponent;
exports.Tag = Tag;
exports.Textarea = Textarea;
exports.ThemeSwitch = ThemeSwitch;
//# sourceMappingURL=index.js.map
