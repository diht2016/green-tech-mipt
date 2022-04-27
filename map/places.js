
let global = {
  coords: [55.92975, 37.52196],
  minZoom: 14,
  zoom: 16,
  maxZoom: 19,
}

// json database of all places
let places = [
  // общежития

  // 27.04 закомментированы пункты, закрывшиеся из-за прекращения обслуживания белого домика за 4кой

  // {
  //   id: '1',
  //   coords: [55.93088, 37.52158],
  //   items: [
  //     {
  //       title: 'Макулатура',
  //       info: '1 этаж, боталка (справа после турникета), коробка справа под книжной полкой'
  //     },
  //     {
  //       title: 'Пластиковые бутылки и канистры, алюминиевые банки',
  //       info: 'южная кухня 2-го этажа, а также северная кухня 4-го этажа, зелёные контейнеры'
  //     },
  //     {
  //       title: 'Стекло (мытое, без крышек)',
  //       info: '1 этаж, кухня, зелёный контейнер'
  //     },
  //   ],
  //   type: 'blue',
  // },
  {
    id: '2',
    coords: [55.93016, 37.52193],
    items: [
      // {
      //   title: 'Макулатура',
      //   info: '1 этаж, боталка (справа до турникета), коробки сбоку'
      // },
      // {
      //   title: 'Пластиковые бутылки, канистры и крышечки, алюминиевые банки',
      //   info: '3 этаж, южная кухня, контейнер у окна и пятилитровка для крышек на окне'
      // },
      {
        title: 'Пластиковые крышечки',
        info: '3 этаж, южная кухня, пятилитровка на окне'
      },
      {
        title: 'Ручки, маркеры, фломастеры, зубные щётки',
        info: '3 этаж, южная кухня, пятилитровка на окне'
      },
      {
        title: 'Электрохлам и батарейки',
        info: '1 этаж, боталка (справа до турникета), контейнер сбоку рядом с коробками для макулатуры'
      },
    ],
    type: 'blue',
  },
  // {
  //   id: '3',
  //   coords: [55.92929, 37.52247],
  //   items: [
  //     {
  //       title: 'Макулатура',
  //       info: '3 этаж, боталка'
  //     },
  //   ],
  //   type: 'blue-gray',
  // },
  // {
  //   id: '4',
  //   coords: [55.93108, 37.52293],
  //   comment: 'Пунктов сбора внутри общежития пока что нет, но рядом с общежитием есть главный пункт приёма, куда можно сдать пластиковые бутылки и макулатуру.',
  //   type: 'gray',
  // },
  {
    id: '6',
    coords: [55.92948, 37.52373],
    items: [
      // {
      //   title: 'Макулатура',
      //   info: '3 этаж, боталка, коробка на книжном шкафу слева'
      // },
      // {
      //   title: 'Пластиковые бутылки, канистры и крышечки, алюминиевые банки',
      //   info: 'все этажи кроме первого, умывалка'
      // },
      {
        title: 'Ручки, маркеры, фломастеры, зубные щётки',
        info: 'пятилитровки рядом с пунктами сбора пластиковых бутылок'
      },
    ],
    type: 'blue',
  },
  {
    id: '7',
    coords: [55.92892, 37.52329],
    items: [
      // {
      //   title: 'Макулатура',
      //   info: '1 этаж, громкая боталка, коробка на подоконнике (для полезных конспектов есть коробка у входа)'
      // },
      // {
      //   title: 'Пластиковые бутылки, канистры и крышечки, алюминиевые банки',
      //   info: 'южная кухня 3-го этажа, а также северная кухня 2-го этажа, контейнеры у входа и пятилитровка для крышечек на окне'
      // },
      {
        title: 'Ручки, маркеры, фломастеры, зубные щётки',
        info: '1 этаж, громкая боталка, пятилитровка в дальнем углу, также на 2 этаже в умывалке у окна есть контейнер для зубных щёток'
      },
      {
        title: 'Блистеры от таблеток, провода',
        info: '1 этаж, громкая боталка, белые контейнеры'
      },
    ],
    type: 'blue',
  },
  {
    id: '8',
    coords: [55.92812, 37.52351],
    items: [
      //{
      //  title: 'Макулатура',
      //  info: '3 этаж, белый контейнер в комнатке с мусоропроводом'
      //},
      // {
      //   title: 'Пластиковые бутылки, канистры и крышечки, алюминиевые банки',
      //   info: 'северное крыло, комнатки с мусоропроводом на 3 и 5 этажах, зелёный контейнер'
      //   //info: 'северное крыло, комнатки с мусоропроводом на 3 и 5 этажах, северная кухня на 7 этаже'
      // },
      {
        title: 'Ручки, маркеры, фломастеры, зубные щётки',
        info: 'северное крыло, комнатка с мусоропроводом на 5 этаже, пятилитровки'
      },
      {
        title: 'Блистеры от таблеток',
        info: 'северное крыло, комнатка с мусоропроводом на 5 этаже, пятилитровка'
      },
    ],
    type: 'blue',
  },
  {
    id: '9',
    coords: [55.92728, 37.52359],
    comment: 'Пунктов сбора в общежитии нет (так как оно квартирного типа), но рядом есть синие контейнеры',
    type: 'gray',
  },
  // {
  //   id: '10',
  //   coords: [55.93010, 37.52265],
  //   comment: 'Пунктов сбора в этом общежитии нет (так как оно квартирного типа), но неподалёку находится основной пункт приёма вторсырья (за 4-ым общежитием)',
  //   type: 'gray',
  // },
  {
    id: '11',
    coords: [55.93067, 37.52246],
    items: [
      {
        title: 'Пластиковые крышечки, а также ручки, маркеры, фломастеры, зубные щётки',
        info: 'пятилитровки до турникетов на стене (во всех трёх подъездах)'
      },
    ],
    // comment: 'Другие виды вторсырья можно сдавать в пункт за 4-ым общежитием',
    type: 'blue-gray',
  },
  {
    id: '12',
    coords: [55.93161, 37.51890],
    items: [
      {
        title: 'Электрохлам',
        info: '1 этаж, пластиковая коробка рядом с принтбоксом'
      },
      {
        title: 'Ручки, маркеры, фломастеры, зубные щётки, CD и DVD диски, трубочки от напитков, бритвенные станки, контейнеры от линз',
        info: '1 этаж, пятилитровка на столике принтбокса'
      },
    ],
    comment: 'Также рядом с воротами есть синие контейнеры. Возможно, в будущем на 1 этаже появится пункт сбора макулатуры.',
    type: 'blue-gray',
  },

  // корпуса
  {
    id: 'kpm',
    name: 'КПМ',
    coords: [55.92899, 37.52141],
    items: [
      {
        title: 'Батарейки',
        info: '2 этаж, у входа в столовую'
      },
    ],
    type: 'orange',
  },
  {
    id: 'nk',
    name: 'НК',
    coords: [55.92949, 37.52059],
    items: [
      {
        title: 'Батарейки',
        info: '1 этаж, главный вход, в промежутке между дверями (справа, если смотреть с улицы)'
      },
    ],
    type: 'orange',
  },
  {
    id: 'hall',
    name: 'Концертный зал',
    coords: [55.92972, 37.51742],
    items: [
      {
        title: 'Батарейки',
        info: '1 этаж, главный вход, в промежутке между дверями (справа, если смотреть с улицы)'
      },
    ],
    type: 'orange',
  },
  {
    id: 'lk',
    name: 'ЛК',
    coords: [55.93016, 37.51800],
    items: [
      {
        title: 'Батарейки',
        info: '1 этаж, главный вход, в промежутке между дверями (слева, если смотреть с улицы)'
      },
    ],
    type: 'orange',
  },
  {
    id: 'ak',
    name: 'АК',
    coords: [55.93086, 37.51958],
    items: [
      {
        title: 'Батарейки',
        info: '1 этаж, главный вход, в промежутке между дверями (справа, если смотреть с улицы)'
      },
    ],
    type: 'orange',
  },
  {
    id: 'bfk',
    name: 'БФК',
    coords: [55.92980, 37.51583],
    items: [
      {
        title: 'Батарейки',
        info: '1 этаж, главный вход, в промежутке между дверями (справа, если смотреть с улицы)'
      },
    ],
    type: 'orange',
  },
  {
    id: 'ulk1',
    name: 'Физтех.Цифра',
    coords: [55.92903, 37.51864],
    items: [
      {
        title: 'Батарейки',
        info: '1 этаж, рядом с турникетами у главного входа'
      },
    ],
    type: 'orange',
  },
  {
    id: 'ulk2',
    name: 'Физтех.Арктика',
    coords: [55.92833, 37.51828],
    items: [
      {
        title: 'Батарейки',
        info: '1 этаж, главный вход, в промежутке между дверями (у колонны по центру)'
      },
    ],
    type: 'orange',
  },

  // внешние пункты
  {
    id: 'mainpoint',
    name: 'Основной пункт приёма вторсырья',
    coords: [55.93140, 37.52331],
    items: [
      // {
      //   title: 'Пластиковые бутылки, канистры и крышечки, алюминиевые банки',
      //   info: 'контейнер-клетка перед домиком (на табличке не написано про алюминиевые банки, но они принимаются и перерабатываются)'
      // },
      {
        title: 'Стекло (бутылки, банки, оконное стекло)',
        info: 'зелёный контейнер перед домиком'
      },
      // {
      //   title: 'Макулатура',
      //   info: 'с задней стороны домика есть окошко, в которое можно сдать макулатуру (если не влезает - можно положить за домик)'
      // },
    ],
    comment: 'Здесь по выходным проводятся акции по сбору <a target="_blank" href="https://sobirator.ru/list">большого числа видов вторсырья</a>, подробнее про акции в этом месте можно узнать <a target="_blank" href="https://vk.com/waste_sorting">здесь</a>.',
    // Контейнер для стекла установлен 2020-03-09
    type: 'green',
  },
  {
    id: 'bluebox8',
    name: 'Синий контейнер между общежитиями №8 и №9',
    coords: [55.92768, 37.52382],
    items: [
      {title: 'Пластиковые бутылки и канистры'},
      {title: 'Алюминий и железо'},
      {title: 'Картонные коробки'},
      {title: 'Стеклянные бутылки и банки'},
    ],
    type: 'light-green',
  },
  {
    id: 'bluebox9',
    name: 'Синий контейнер у дорожки на Новодачную',
    coords: [55.92699, 37.52419],
    items: [
      {title: 'Пластиковые бутылки и канистры'},
      {title: 'Алюминий и железо'},
      {title: 'Картонные коробки'},
      {title: 'Стеклянные бутылки и банки'},
    ],
    type: 'light-green',
  },
  {
    id: 'bluebox12outer',
    name: 'Синий контейнер у ворот общежития №12',
    coords: [55.93215, 37.51930],
    items: [
      {title: 'Пластиковые бутылки и канистры'},
      {title: 'Алюминий и железо'},
      {title: 'Картонные коробки'},
      {title: 'Стеклянные бутылки и банки'},
    ],
    type: 'light-green',
  },
  {
    id: 'bluebox12',
    name: 'Синий контейнер на территории общежития №12',
    coords: [55.93195, 37.51915],
    items: [
      {title: 'Пластиковые бутылки и канистры'},
      {title: 'Алюминий и железо'},
      {title: 'Картонные коробки'},
      {title: 'Стеклянные бутылки и банки'},
    ],
    type: 'light-green',
  },
  /*
  {
    id: 'orangebox12',
    name: 'Контейнер-клетка у ворот общежития №12',
    coords: [55.93219, 37.51935],
    items: [
      {title: 'Пластиковые бутылки и канистры'},
    ],
    type: 'light-green',
  },
  */
  {
    id: 'vkusvill',
    name: 'ВкусВилл',
    coords: [55.93960, 37.51709],
    items: [
      {
        title: 'Батарейки',
        info: 'внутри у входа на столе стоит контейнер'
      },
    ],
    comment: 'Подробнее про то, как ВкусВилл принимает батарейки: <a target="_blank" href="https://vkusvill.ru/news/prinimaem-batareyki.html">1</a>, <a target="_blank" href="https://vkusvill.ru/news/pervyy-po-batareykam.html">2</a>, <a target="_blank" href="https://vkusvill.ru/news/batareyki-na-utilizatsiyu.html">3</a>',
    type: 'orange',
  },
  {
    id: 'mercurybox',
    name: 'Оранжевый контейнер за домом культуры',
    coords: [55.93433, 37.51406],
    items: [
      {title: 'Энергосберегающие (ртутные) лампы, батарейки, градусники'},
    ],
    comment: '<a target="_blank" href="https://ecobox.ru/product-category/energolamp/">Подробнее про контейнер</a>',
    type: 'orange',
  },
  {
    id: 'ecobox-petromax',
    name: 'Эко бокс Petromax',
    coords: [55.94659, 37.50610],
    items: [
      {
        title: 'Электроника, аккумуляторы, бытовая техника',
        info: 'Аккумуляторы только свинцово-кислотные и гелевые, без повреждений'
      },
      {
        title: 'Пластиковые бутылки, канистры, флаконы, алюминиевые банки',
        info: 'Всё в смятом виде, без распылитилей, без масляных или сильных загрязнений'
      },
      {
        title: 'Пластиковая плёнка',
        info: 'Без сильных загрязнений'
      },
      {
        title: 'Большие пластиковые изделия (ящики, вёдра и т.п.)',
        info: 'Из PP или HDPE, не сильно загрязнённые'
      },
      {
        title: 'Макулатура: бумага и картон',
        info: 'Увязанные или уложенные в коробки, в чистом виде, без обложек'
      },
    ],
    comment: 'В рабочие дни 9:00-18:00, сб до 13:00, вс выходной. <a target="_blank" href="https://vk.com/wall-173466338_252">Все подробности описаны тут</a>',
    type: 'green',
  },

  {
    id: 'clothesbox_lavkafond',
    name: 'Сиреневый контейнер в здании у входа в Wildberries',
    coords: [55.93337, 37.51655],
    items: [
      {title: 'Одежда, обувь, сумки и аксессуары (кроме нижнего белья, носков и колготок)'},
    ],
    comment: 'Вещи собирает фонд "Лавка Радостей", их можно класть только в контейнер (не оставлять рядом). Про правила приёма <a target="_blank" href="https://lavkafond.ru/how-to-help/sdat-veshhi/">читайте тут</a>.',
    type: 'purple',
  },
  // Контейнеры увезли в 2020 т.к. у Второго дыхания не хватило средств на их содержание
  //
  //{
  //  id: 'clothesbox_konfitur',
  //  name: 'Бирюзовый контейнер у входа в торговый центр "Конфитюр"',
  //  coords: [55.93133, 37.49366],
  //  items: [
  //    {title: 'Одежда, обувь, сумки и аксессуары (кроме нижнего белья, носков и колготок)'},
  //  ],
  //  comment: 'Вещи собирает <a target="_blank" href="https://vtoroe.ru/">Второе дыхание</a>. Про правила приёма <a target="_blank" href="https://vtoroe.ru/modno-sdat/chto-mozhno-sdavat/">читайте тут</a>.',
  //  type: 'cyan',
  //},
  //
  //{
  //  id: 'clothesbox_polet',
  //  name: 'Бирюзовый контейнер у входа в торговый центр "Полёт"',
  //  coords: [55.94628, 37.50619],
  //  items: [
  //    {title: 'Одежда, обувь, сумки и аксессуары (кроме нижнего белья, носков и колготок)'},
  //  ],
  //  comment: 'Вещи собирает <a target="_blank" href="https://vtoroe.ru/">Второе дыхание</a>. Про правила приёма <a target="_blank" href="https://vtoroe.ru/modno-sdat/chto-mozhno-sdavat/">читайте тут</a>.',
  //  type: 'cyan',
  //},

]
