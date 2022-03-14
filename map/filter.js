
let filterOptions = [
  {
    title: 'показать всё',
    match: '*',
  },
  {
    title: 'макулатура (бумага и картон)',
    match: 'макулатур',
  },
  {
    title: 'пластиковые бутылки и канистры',
    match: 'пластик',
  },
  {
    title: 'пластиковые крышечки',
    match: 'крышечки',
  },
  {
    title: 'алюминиевые банки',
    match: 'алюмин',
  },
  {
    title: 'стекло',
    match: 'стекл',
  },
  {
    title: 'ручки, зубные щётки, маркеры и фломастеры',
    match: 'зубн',
  },
  {
    title: 'батарейки',
    match: 'батарейк',
  },
  {
    title: 'электрохлам',
    match: 'электро',
  },
  {
    title: 'ртутные лампы и градусники',
    match: 'ртут',
  },
  {
    title: 'блистеры от таблеток',
    match: 'таблет',
  },
  {
    title: 'одежда и обувь',
    match: 'одежд',
  },
]

function initFilter() {
  // just easy naive search by regular expression occurrence
  // could be substring search but reserved regular expression for complex queries
  let container = document.getElementById('filter-select')

  for (let type of filterOptions) {
    let label = document.createElement('label')
    label.style.display = 'block'

    let radio = document.createElement('input')
    radio.type = 'radio'
    radio.name = 'filter'
    radio.value = type.match
    radio.style.verticalAlign = 'text-top'
    radio.style.marginRight = '0.5em'
    radio.onchange = applyFilter

    label.appendChild(radio)
    label.appendChild(document.createTextNode(type.title))
    container.appendChild(label)
  }

  container.firstChild.firstChild.checked = true
  // using setTimeout because browsers sometimes remember the last choice
  setTimeout(() => container.firstChild.firstChild.checked = true, 0)
}

function applyFilter() {
  let match = this.value
  let regexp = match != '*' ? new RegExp(match, 'i') : null
  let count = 0

  let groupList = []

  map.closePopup()

  for (let p of places) {
    let matched = false

    if (regexp) {
      if (p.items) {
        for (let item of p.items) {
          if (!item.disabled && regexp.test(item.title)) {
            matched = true
            break
          }
        }
      }
    } else {
      matched = true
    }

    let marker = p._marker

    if (matched) {
      marker.addTo(map)
      // restore marker color
      marker._icon.classList.add('marker-' + p.type)
      groupList.push(marker)
      count++
    } else {
      marker.remove()
    }
  }

  // zoom markers into view
  let group = new L.featureGroup(groupList)
  map.fitBounds(group.getBounds())
  scrollToElement(document.getElementById('map-container'))

  // not used yet
  return count
}

initFilter()
